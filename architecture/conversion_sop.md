# SOP: Selenium Java to Playwright JS/TS Conversion

## Goal
Convert Selenium Java (TestNG/Maven) source code into Playwright JavaScript/TypeScript code using a local LLM (Ollama/codellama).

## Input
- Raw Java source code (TestNG annotations, Selenium WebDriver commands).

## Output
- Playwright JS/TS code using `@playwright/test`.

## Conversion Logic (Prompt Engineering)
The LLM should follow these mapping rules:
1. **Annotations:**
   - `@Test` -> `test('description', async ({ page }) => { ... })`
   - `@BeforeMethod` -> `test.beforeEach(async ({ page }) => { ... })`
   - `@AfterMethod` -> `test.afterEach(async ({ page }) => { ... })`
   - `@BeforeClass` -> `test.beforeAll(async () => { ... })`
2. **Locators:**
   - `driver.findElement(By.id("id"))` -> `page.locator('#id')`
   - `driver.findElement(By.cssSelector("css"))` -> `page.locator('css')`
   - `driver.findElement(By.xpath("xpath"))` -> `page.locator('xpath')`
3. **Actions:**
   - `.sendKeys("text")` -> `.fill("text")`
   - `.click()` -> `.click()`
   - `driver.get("url")` -> `page.goto("url")`
4. **Assertions:**
   - `Assert.assertEquals(actual, expected)` -> `expect(actual).toBe(expected)`
   - `Assert.assertTrue(condition)` -> `expect(condition).toBeTruthy()`

## Tool Logic (`tools/converter.py`)
1. Receive input Java code.
2. Construct a prompt for Ollama using the mapping rules.
3. Call Ollama API (`/api/generate`) with `model: codellama`.
4. Parse the response and extract the code block.
5. Return the converted code.

## Edge Cases
- Multipart tests in one file should be split into multiple `test()` blocks.
- Complex Page Object Models (POM) should be refactored into Playwright classes.
- Explicit waits (`WebDriverWait`) should be replaced by Playwright's auto-waits where possible.
