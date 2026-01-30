import requests
import json
import sys

def convert_selenium_to_playwright(java_code):
    url = "http://localhost:11434/api/generate"
    
    prompt = f"""
    You are an expert test automation engineer. 
    Convert the following Selenium Java (TestNG) code into Playwright TypeScript.
    
    Rules:
    1. Use @playwright/test.
    2. Prioritize readability over strict 1:1 mapping.
    3. Map TestNG annotations (@Test, @BeforeMethod, etc.) to Playwright hooks.
    4. Use Playwright's auto-waiting features.
    5. Return ONLY the code, no explanation.

    Selenium Java Code:
    {java_code}
    
    Playwright TypeScript Code:
    """
    
    payload = {
        "model": "codellama",
        "prompt": prompt,
        "stream": False
    }
    
    try:
        response = requests.post(url, json=payload)
        response.raise_for_status()
        data = response.json()
        return data.get("response", "").strip()
    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == "__main__":
    if len(sys.argv) > 1:
        # Read from file if path provided
        try:
            with open(sys.argv[1], 'r') as f:
                java_code = f.read()
        except:
            java_code = sys.argv[1]
    else:
        # Read from stdin for flexibility
        java_code = sys.stdin.read()
    
    result = convert_selenium_to_playwright(java_code)
    print(result)
