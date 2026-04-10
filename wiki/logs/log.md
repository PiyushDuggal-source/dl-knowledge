# Wiki Log

Chronological record of the wiki's evolution.

## [2026-04-10] Initialization (v2.0)
- **Status**: Reset to local-first architecture.
- **Actions**:
  - Moved previous wiki to `wiki_dump/`.
  - Extracted Weeks 1-3 Slides using `pdf-extractor`.
  - Established "Truth + Timeline" schema.
- **Files Created**: `schema.md`, `wiki/index.md`, `wiki/logs/log.md`.

## [2026-04-10] LLM Brain Optimization
- **Action**: Converted all pages to "High-Fidelity Context Provider" format.
- **Enhancements**:
  - Added recursive summaries (Level 1 & 2) to all concept pages.
  - Implemented LLM-instructional Frontmatter (Graph metadata).
  - Added LaTeX fallbacks for formula images.
  - Generated `manifest.txt` for autonomous LLM crawling.

## [2026-04-10] YAML & Frontmatter Fixes
- **Action**: Fixed YAML parsing errors in frontmatter.
- **Fixes**:
  - Wrapped all `[[wikilink]]` values in quotes to prevent indentation errors.
  - Standardized list formats for multiple links.
  - Added frontmatter to `index.md`.
