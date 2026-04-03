#!/bin/bash

set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
INDEX_FILE="$PROJECT_DIR/index.html"
DEFAULT_PORT=8765
MAX_PORT=8795
PYTHON_BIN="${PYTHON_BIN:-python3}"

if [[ ! -f "$INDEX_FILE" ]]; then
  echo "Preview entrypoint not found: $INDEX_FILE"
  exit 1
fi

if ! command -v "$PYTHON_BIN" >/dev/null 2>&1; then
  echo "python3 is required to run the local preview server."
  exit 1
fi

if ! command -v curl >/dev/null 2>&1; then
  echo "curl is required to verify the preview server."
  exit 1
fi

find_free_port() {
  local port="$1"
  while [[ "$port" -le "$MAX_PORT" ]]; do
    if ! lsof -nP -iTCP:"$port" -sTCP:LISTEN >/dev/null 2>&1; then
      echo "$port"
      return 0
    fi
    port=$((port + 1))
  done

  return 1
}

wait_for_preview() {
  local url="$1"
  local attempts=40
  local delay=0.25
  local count=0

  while [[ "$count" -lt "$attempts" ]]; do
    if curl -sfI "$url" >/dev/null 2>&1; then
      return 0
    fi
    sleep "$delay"
    count=$((count + 1))
  done

  return 1
}

cleanup() {
  if [[ -n "${SERVER_PID:-}" ]]; then
    kill "$SERVER_PID" >/dev/null 2>&1 || true
    wait "$SERVER_PID" 2>/dev/null || true
  fi
}

PORT="$(find_free_port "$DEFAULT_PORT")" || {
  echo "No free preview port found between $DEFAULT_PORT and $MAX_PORT."
  exit 1
}

URL="http://127.0.0.1:$PORT/index.html"
LOG_FILE="$(mktemp -t awesome-design-md-preview.XXXXXX.log)"

trap cleanup EXIT INT TERM

cd "$PROJECT_DIR"
"$PYTHON_BIN" -m http.server "$PORT" --bind 127.0.0.1 >"$LOG_FILE" 2>&1 &
SERVER_PID=$!

if ! wait_for_preview "$URL"; then
  echo "Preview server failed to start."
  echo
  echo "Server log:"
  cat "$LOG_FILE"
  exit 1
fi

echo
echo "Awesome Design MD preview is running."
echo "Project: $PROJECT_DIR"
echo "Port:    $PORT"
echo "URL:     $URL"
echo
echo "Press Control+C in this window to stop the preview server."
echo

open "$URL" >/dev/null 2>&1 || true

wait "$SERVER_PID"
