# Wiki Schema (DL-Wiki)

This document defines the structure and conventions for the Deep Learning Course Wiki, adapted from the `gbrain` architecture for a local-first environment.

## 1. Directory Structure

- `wiki/`
  - `index.md`: The central map of the knowledge base.
  - `concepts/`: Theoretical entities (e.g., Activation Functions).
  - `architectures/`: Model families (e.g., CNNs, Transformers).
  - `algorithms/`: Procedural logic (e.g., Backpropagation).
  - `exam_prep/`: Solved problems and revision summaries.
  - `logs/`: Progress tracking and system records.

## 2. The Knowledge Model (Truth + Timeline)

Every page MUST follow this structure:

```markdown
---
title: [Page Title]
tags: [tag1, tag2]
last_updated: YYYY-MM-DD
---

# [Page Title]

## Compiled Truth
[The current best, synthesized explanation. This is the "Wikipedia" section.]
[Embed extracted formulas/figures here with source links.]

---

## Timeline (Evidence Trail)
[Append-only log of contributions.]
- YYYY-MM-DD: Integrated insights from [[Source_Name]].
- YYYY-MM-DD: Added solved example from [[Assignment_Solution]].
```

## 3. Formatting Standards

- **Mathematics**: Use LaTeX for complex equations. Use extracted formula images for fidelity.
- **Images**: Reference images from the `extracted/` directory using relative paths.
- **Linking**: Use Obsidian-style wikilinks `[[Page_Name]]`.
- **Citations**: Every fact in the "Truth" section must be traceable via the "Timeline".

## 4. Maintenance (The Dream Cycle)

- **Read-before-Write**: Always check if a concept exists before creating a new page. Enrich existing pages.
- **Backlink Integrity**: Ensure all concepts are interlinked.
- **Stale Truth Detection**: If the Timeline is newer than the Truth, mark for re-synthesis.
