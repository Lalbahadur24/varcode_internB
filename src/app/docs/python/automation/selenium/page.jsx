import React from "react";

export default function SeleniumPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Selenium</h1>
      <p>
        Automate browsers for testing or scraping dynamic sites. Use
        <code>webdriver-manager</code> to manage drivers.
      </p>

      <h2>Install</h2>
      <pre><code>{`pip install selenium webdriver-manager`}</code></pre>

      <h2>Quick Start (Chrome)</h2>
      <pre><code>{`from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options

opts = Options()
opts.add_argument('--headless=new')
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=opts)

driver.get('https://example.com')
title = driver.title
print('Title:', title)

elem = driver.find_element(By.TAG_NAME, 'h1')
print('H1:', elem.text)

driver.quit()`}</code></pre>

      <h2>Tips</h2>
      <ul>
        <li>Prefer explicit waits (<code>WebDriverWait</code>) over sleeps.</li>
        <li>Use headless mode in CI; disable images for speed when possible.</li>
      </ul>
    </div>
  );
}
