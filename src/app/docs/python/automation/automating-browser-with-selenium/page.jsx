import React from "react";

export default function SeleniumAutomation() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Automating Browser with Selenium</h1>
      <p>
        Selenium controls real browsers for testing and web scraping.
      </p>

      <h2>Install</h2>
      <pre><code>{`pip install selenium webdriver-manager`}</code></pre>

      <h2>Setup</h2>
      <pre><code>{`from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By

# Auto-download driver
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

driver.get('https://example.com')
print(driver.title)
driver.quit()`}</code></pre>

      <h2>Finding Elements</h2>
      <pre><code>{`from selenium.webdriver.common.by import By

# Single element
elem = driver.find_element(By.ID, 'username')
elem = driver.find_element(By.CLASS_NAME, 'button')
elem = driver.find_element(By.TAG_NAME, 'h1')
elem = driver.find_element(By.CSS_SELECTOR, 'div.container > p')
elem = driver.find_element(By.XPATH, '//div[@id="main"]//p')

# Multiple elements
elems = driver.find_elements(By.CLASS_NAME, 'item')
for e in elems:
    print(e.text)`}</code></pre>

      <h2>Interactions</h2>
      <pre><code>{`# Type into input
username = driver.find_element(By.ID, 'username')
username.send_keys('alice@example.com')

# Click button
button = driver.find_element(By.CSS_SELECTOR, 'button[type="submit"]')
button.click()

# Clear input
username.clear()

# Get text
heading = driver.find_element(By.TAG_NAME, 'h1')
print(heading.text)`}</code></pre>

      <h2>Waits (Important!)</h2>
      <pre><code>{`from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Explicit wait (recommended)
wait = WebDriverWait(driver, 10)
elem = wait.until(EC.presence_of_element_located((By.ID, 'result')))

# Implicit wait (global)
driver.implicitly_wait(10)  # seconds`}</code></pre>

      <h2>Tips</h2>
      <ul>
        <li>Always use waits instead of <code>time.sleep()</code></li>
        <li>Prefer CSS selectors or XPath for complex elements</li>
        <li>Use headless mode for faster automation</li>
        <li>Close driver with <code>driver.quit()</code></li>
      </ul>
    </div>
  );
}
