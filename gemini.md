# Gemini: Project Constitution

## Overview
This document serves as the Source of Truth for the Selenium to Playwright converter project.

## Data Schemas
### Input (Selenium Java)
```json
{
  "source_code": "string",
  "framework": "testng/maven",
  "target_language": "javascript/typescript"
}
```

### Output (Playwright JS/TS)
```json
{
  "converted_code": "string",
  "file_structure": [
    {
      "path": "string",
      "content": "string"
    }
  ],
  "logs": "string"
}
```

## Integrations
- **Local LLM:** Ollama API (`http://localhost:11434`)
- **Model:** `codellama`

## Behavioral Rules
- Follow B.L.A.S.T. protocol.
- Use A.N.T. 3-layer architecture.
- Prioritize reliability over speed.
- Convert everything. Prioritize readability over strict 1:1 mapping.
- Use Ollama for the conversion logic.

## Architectural Invariants
- Layer 1 (SOPs) must be updated before Layer 3 (Tools).
- All intermediate data must stay in `.tmp/`.

## Maintenance Log
- 2026-01-30: Project Initialized.
- 2026-01-30: Phase 1-5 completed. Integrated Ollama with codellama. UI and Backend bridge implemented. Verified conversion logic.
