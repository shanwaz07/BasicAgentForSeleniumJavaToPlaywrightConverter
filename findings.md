# Findings

## Research & Discoveries
- **Conversion Tools:** 
    - Ray.run offers a web-based Selenium to Playwright converter.
    - AI-powered migration (GPT/Copilot) is the most effective for complex TestNG/Java structures.
    - Playwright has its own test runner, replacing the need for TestNG.
- **Architectural Differences:**
    - Selenium uses WebDriver (JSON Wire Protocol/W3C). Playwright uses WebSockets for direct browser communication.
    - Playwright has built-in auto-waiting, while Selenium often requires explicit waits.
- **Language Shift:** TypeScript is highly recommended for Playwright due to its strong typing and integration with VS Code.

## Constraints
- **Complexity:** Mapping Java Annotations (@Test, @BeforeMethod) to Playwright hooks (`test.beforeEach`) requires structural refactoring, not just syntax replacement.
- **Dependencies:** Maven dependencies need to be mapped to `package.json` dependencies where applicable.
