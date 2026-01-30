import { useState } from 'react'
import './index.css'

function App() {
  const [sourceCode, setSourceCode] = useState('')
  const [convertedCode, setConvertedCode] = useState('')
  const [loading, setLoading] = useState(false)

  const handleConvert = async () => {
    setLoading(true)
    try {
      const response = await fetch('http://localhost:3001/api/convert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ source_code: sourceCode }),
      })
      const data = await response.json()
      if (data.error) {
        setConvertedCode(`// Error: ${data.error}`)
      } else {
        setConvertedCode(data.converted_code)
      }
    } catch (err) {
      setConvertedCode(`// Error connecting to server. Make sure the Node.js server is running.`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <header>
        <div className="header-container">
          <div className="logo-section">
            <img src="/leoforce_logo.png" alt="Leoforce Logo" className="logo-icon" />
            <span className="logo-text">Leoforce</span>
            <span className="header-subtitle">Selenium ➔ Playwright Converter</span>
          </div>
        </div>
      </header>

      <div className="app-container">
        <div className="page-header">
          <h1 className="page-title">Test Converter</h1>
          <p className="page-description">
            Migrate your Selenium Java TestNG tests to modern Playwright TypeScript using Local AI (CodeLlama).
          </p>
        </div>

        <main>
          <div className="editor-pane">
            <div className="pane-title">
              <span>Selenium Source</span>
              <span className="language-badge">Java / TestNG</span>
            </div>
            <textarea
              placeholder="Paste your Selenium Java code here (e.g. public class LoginTest ...)"
              value={sourceCode}
              onChange={(e) => setSourceCode(e.target.value)}
              spellCheck={false}
            />
          </div>

          <div className="editor-pane">
            <div className="pane-title">
              <span>Playwright Output</span>
              <span className="language-badge">TypeScript / @playwright/test</span>
            </div>
            <div className="code-output">
              {loading ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div className="loader" style={{ borderTopColor: '#6a9955' }}></div>
                  <span className="placeholder-text">Converting with Local AI... (CodeLlama is thinking)</span>
                </div>
              ) : (
                convertedCode || <span className="placeholder-text">// Your converted Playwright code will appear here...</span>
              )}
            </div>
          </div>
        </main>

        <div className="controls">
          <button onClick={handleConvert} disabled={loading || !sourceCode.trim()}>
            {loading ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="loader"></div>
                <span>Processing...</span>
              </div>
            ) : "Start Conversion"}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
