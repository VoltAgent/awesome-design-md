#!/usr/bin/env node
import { createReadStream } from "node:fs";
import { access, stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { buildPreview, buildPreviews } from "./build-previews.mjs";

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
};

function safePath(root, requestPath) {
  const pathname = decodeURIComponent(requestPath.split("?", 1)[0]);
  const candidate = resolve(root, `.${pathname === "/" ? "/preview/" : pathname}`);
  return candidate.startsWith(`${root}${sep}`) || candidate === root ? candidate : undefined;
}

async function fileForRequest(root, requestPath) {
  const path = safePath(root, requestPath);
  if (!path) return undefined;
  try {
    const metadata = await stat(path);
    if (metadata.isDirectory()) {
      const index = resolve(path, "index.html");
      await access(index);
      return index;
    }
    return metadata.isFile() ? path : undefined;
  } catch {
    return undefined;
  }
}

export async function startPreviewServer(root = process.cwd(), port = Number(process.env.PREVIEW_PORT ?? 4173), name) {
  const result = name ? await buildPreview(root, name) : await buildPreviews(root);
  const server = createServer(async (request, response) => {
    const file = await fileForRequest(root, request.url ?? "/");
    if (!file) {
      response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }
    response.writeHead(200, { "content-type": MIME_TYPES[extname(file)] ?? "application/octet-stream" });
    createReadStream(file).pipe(response);
  });

  return new Promise((resolveServer) => {
    server.listen(port, "127.0.0.1", () => resolveServer({ server, previewPath: result.previewPath }));
  });
}

const isCli = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isCli) {
  const name = process.argv[2];
  startPreviewServer(process.cwd(), Number(process.env.PREVIEW_PORT ?? 4173), name).then(({ server, previewPath }) => {
    const address = server.address();
    const port = typeof address === "object" && address ? address.port : 4173;
    const path = previewPath ? `/${relative(process.cwd(), previewPath).split(sep).join("/")}` : "/preview/";
    console.log(`Preview server listening at http://127.0.0.1:${port}${path}`);
  }).catch((error) => {
    console.error(error.stack || error.message);
    process.exitCode = 1;
  });
}
