import React from "react";

export default function SeleniumAutomation() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Automating Browser with Selenium
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Selenium lets you control real browsers (Chrome, Firefox, Edge, etc.)
        using Python. It’s widely used for end-to-end testing, UI automation,
        and some kinds of web scraping where JavaScript-heavy pages must be
        rendered.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Install */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Install</h2>
          <p className="mt-2">
            Install Selenium and <code>webdriver-manager</code> to automatically
            download and manage browser drivers.
          </p>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`pip install selenium webdriver-manager`}
              </pre>
            </div>
          </div>
        </section>

        {/* Setup */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Basic Setup</h2>
          <p className="mt-2">
            This example opens Chrome, navigates to a URL, prints the page
            title, then closes the browser.
          </p>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By

# Auto-download driver
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

driver.get('https://example.com')
print(driver.title)
driver.quit()`}
              </pre>
            </div>
          </div>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <code>ChromeDriverManager().install()</code> downloads the correct
              ChromeDriver version automatically.
            </li>
            <li>
              <code>driver.get(url)</code> navigates to a page.
            </li>
            <li>
              <code>driver.quit()</code> closes the browser and ends the session
              (always call this).
            </li>
          </ul>
        </section>

        {/* Finding elements */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Finding Elements
          </h2>
          <p className="mt-2">
            Selenium locates elements using <code>find_element</code> (single)
            and <code>find_elements</code> (multiple) with different locator
            strategies.
          </p>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`from selenium.webdriver.common.by import By

# Single element
elem = driver.find_element(By.ID, 'username')
elem = driver.find_element(By.CLASS_NAME, 'button')
elem = driver.find_element(By.TAG_NAME, 'h1')
elem = driver.find_element(By.CSS_SELECTOR, 'div.container > p')
elem = driver.find_element(By.XPATH, '//div[@id="main"]//p')

# Multiple elements
elems = driver.find_elements(By.CLASS_NAME, 'item')
for e in elems:
    print(e.text)`}
              </pre>
            </div>
          </div>

          <p className="font-semibold text-[#4a0080] mt-3">
            Common strategies:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <code>By.ID</code> — usually the most stable if IDs are unique.
            </li>
            <li>
              <code>By.CSS_SELECTOR</code> — very powerful and readable.
            </li>
            <li>
              <code>By.XPATH</code> — flexible for complex structures.
            </li>
          </ul>
        </section>

        {/* Interactions */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Interactions
          </h2>
          <p className="mt-2">
            After locating an element, you can type, click, clear, or read its
            text.
          </p>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`# Type into input
username = driver.find_element(By.ID, 'username')
username.send_keys('alice@example.com')

# Click button
button = driver.find_element(By.CSS_SELECTOR, 'button[type="submit"]')
button.click()

# Clear input
username.clear()

# Get text
heading = driver.find_element(By.TAG_NAME, 'h1')
print(heading.text)`}
              </pre>
            </div>
          </div>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <code>send_keys()</code> simulates typing.
            </li>
            <li>
              <code>click()</code> simulates clicks.
            </li>
            <li>
              <code>clear()</code> removes existing text from inputs.
            </li>
            <li>
              <code>.text</code> returns visible text of an element.
            </li>
          </ul>
        </section>

        {/* Waits */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Waits (Important!)
          </h2>
          <p className="mt-2">
            Web pages often load content asynchronously. If you try to interact
            with elements before they exist, tests will fail. Use waits instead
            of fixed <code>time.sleep()</code>.
          </p>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

# Explicit wait (recommended)
wait = WebDriverWait(driver, 10)
elem = wait.until(EC.presence_of_element_located((By.ID, 'result')))

# Implicit wait (global)
driver.implicitly_wait(10)  # seconds`}
              </pre>
            </div>
          </div>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Explicit waits</strong> (recommended): wait for specific
              conditions per element.
            </li>
            <li>
              <strong>Implicit waits:</strong> set a global retry timeout for
              all <code>find_element</code> calls.
            </li>
          </ul>
        </section>

        {/* Best practices / Tips */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Tips</h2>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Always prefer waits (<code>WebDriverWait</code>) instead of{" "}
              <code>time.sleep()</code> for reliability and speed.
            </li>
            <li>
              Prefer <code>CSS selectors</code> or <code>XPath</code> for
              complex structures instead of fragile chained locators.
            </li>
            <li>
              Use <strong>headless mode</strong> for CI and faster automation
              (Chrome/Firefox headless).
            </li>
            <li>
              Always close the browser with <code>driver.quit()</code> at the
              end of tests.
            </li>
            <li>
              Group repeated actions (login, navigation) into helper functions
              or classes for cleaner test code.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
