# Page Not Found

The URL `zh` does not exist. This page may have been moved, renamed, or deleted.

## Suggested Pages

You may be looking for one of the following:
- [What is JuChain?](https://juchain.gitbook.io/juchain-docs/what-is-juchain.md)
- [Design Philosophy](https://juchain.gitbook.io/juchain-docs/design-philosophy.md)
- [Decentralized Exchange](https://juchain.gitbook.io/juchain-docs/ecosystem/decentralized-exchange.md)
- [Start Using JuChain](https://juchain.gitbook.io/juchain-docs/basics/start-using-juchain.md)
- [On-Chain Ecosystem](https://juchain.gitbook.io/juchain-docs/ecosystem/on-chain-ecosystem.md)

## How to find the correct page

If the exact page cannot be found, you can still retrieve the information using the documentation query interface.

### Option 1 — Ask a question (recommended)

Perform an HTTP GET request on the documentation index with the `ask` parameter:

```
GET https://juchain.gitbook.io/juchain-docs/what-is-juchain.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

### Option 2 — Browse the documentation index

Full index: https://juchain.gitbook.io/juchain-docs/sitemap.md

Use this to discover valid page paths or navigate the documentation structure.

### Option 3 — Retrieve the full documentation corpus

Full export: https://juchain.gitbook.io/juchain-docs/llms-full.txt

Use this to access all content at once and perform your own parsing or retrieval. It will be more expensive.

## Tips for requesting documentation

Prefer `.md` URLs for structured content, append `.md` to URLs (e.g., `/juchain-docs/what-is-juchain.md`).

You may also use `Accept: text/markdown` header for content negotiation.