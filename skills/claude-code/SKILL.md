---
name: design-md
description: Apply a DESIGN.md style from the awesome-design-md collection to the current project. Use when the user wants to apply a website's design system, change UI style, or set up a DESIGN.md file.
argument-hint: [style-name]
---

# Design.md Style Applier

Apply a design system from the [awesome-design-md](https://github.com/VoltAgent/awesome-design-md) collection to the current project.

## Usage

- `/design-md <style-name>` — fetch and apply a specific style
- `/design-md` — show available styles and let the user pick

## Available Styles

When no argument is provided, present the user with categories and styles to choose from using AskUserQuestion.

### Style Catalog

**AI & LLM Platforms:**
claude, cohere, elevenlabs, minimax, mistral.ai, ollama, opencode.ai, replicate, runwayml, together.ai, voltagent, x.ai

**Developer Tools & IDEs:**
cursor, expo, lovable, raycast, superhuman, vercel, warp

**Backend, Database & DevOps:**
clickhouse, composio, hashicorp, mongodb, posthog, sanity, sentry, supabase

**Productivity & SaaS:**
cal, intercom, linear.app, mintlify, notion, resend, zapier

**Design & Creative Tools:**
airtable, clay, figma, framer, miro, webflow

**Fintech & Crypto:**
binance, coinbase, kraken, revolut, stripe, wise

**E-commerce & Retail:**
airbnb, meta, nike, shopify

**Media & Consumer Tech:**
apple, ibm, nvidia, pinterest, spacex, spotify, uber

**Automotive:**
bmw, ferrari, lamborghini, renault, tesla

## Workflow

1. If `$ARGUMENTS` is empty, use AskUserQuestion to let the user pick a category first, then a style within that category.
2. If `$ARGUMENTS` is provided, use it as the style name directly.
3. Fetch the DESIGN.md content from: `https://getdesign.md/$ARGUMENTS/design-md`
   - Use the fetch MCP tool or WebFetch to get the raw markdown content from that page.
   - The page contains the DESIGN.md content — extract the full markdown design system document from it.
4. Save the content as `DESIGN.md` in the project root (current working directory).
5. Tell the user the style has been applied and they can now reference it when building UI.

## Important Notes

- If the fetch fails, suggest the user visit the URL manually and copy the content.
- Do NOT modify the fetched DESIGN.md content — apply it as-is.
- If a DESIGN.md already exists in the project, ask the user before overwriting.
