# 🚀 Selenium to Playwright Converter

A smart tool to migrate your legacy **Selenium Java (TestNG/Maven)** tests to modern **Playwright TypeScript** using a Local AI model (Ollama - CodeLlama).

---

## 📐 Architecture Overview

The system follows a simple 3-step bridge to ensure your code stays private and is converted accurately locally.

```mermaid
graph LR
    A[React Web UI] -->|1. Java Code| B[Node.js Server]
    B -->|2. Call Script| C[Python Converter Tool]
    C -->|3. Prompt| D[Ollama (Local LLM)]
    D -->|4. Playwright Code| C
    C -->|5. Result| B
    B -->|6. Show Code| A
```

---

## ✨ Key Features

- **Local AI:** Uses `codellama` via Ollama. No data leaves your machine.
- **Smart Mapping:** Automatically converts:
  - `@Test`, `@BeforeMethod`, `@AfterMethod` ➔ Playwright hooks.
  - `driver.findElement` ➔ `page.locator`.
  - Selenium Actions ➔ Playwright's auto-waiting actions (`fill`, `click`).
- **Modern UI:** Premium design based on the **Leoforce Design Language**.
- **Fast:** Direct conversion with side-by-side comparison.

---

## 🛠️ Setup Instructions

### 1. Prerequisites
- **Node.js** (v18+)
- **Python** (v3.10+)
- **Ollama** installed on your machine.
- Download the model: `ollama pull codellama`

### 2. Install Dependencies
Run this in the root folder:
```bash
npm install
cd ui && npm install
```

### 3. Run the Backend
Start the high-performance bridge server:
```bash
node server.js
```

### 4. Run the Frontend
Launch the web interface:
```bash
cd ui && npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📖 How it Works

1. **Input:** Paste your Java Selenium code (containing TestNG annotations).
2. **Logic:** The Python tool constructs a specialized prompt using our **Conversion SOP**.
3. **Execution:** CodeLlama processes the syntax and refactors it into Playwright's modern `async/await` patterns.
4. **Result:** Get clean, readable TypeScript code ready for your Playwright test suite.

---

## 🗂️ Project Structure
- `/ui` - React + TypeScript Frontend.
- `/tools` - Python scripts for AI Orchestration.
- `/architecture` - SOPs and conversion rules.
- `server.js` - The Backend Gatekeeper.

---

Created with ❤️ for the QA Engineering community.
