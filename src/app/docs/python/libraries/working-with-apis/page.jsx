import React from "react";

export default function WorkingWithApis() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Working with APIs
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Python makes it simple to communicate with web APIs using the{" "}
        <code>requests</code> library. You can easily make GET/POST requests,
        send data, handle JSON responses, and implement basic error handling.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Quick Example */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Quick Example
          </h2>

          <p className="mt-2">
            A basic GET request using the GitHub public API:
          </p>

          <div
            className="mt-4 border border-gray-200 bg-white rounded-lg p-4 
                          font-mono text-sm leading-7 overflow-x-auto 
                          border-l-4 border-[#4a0080]"
          >
            <pre>{`import requests

resp = requests.get('https://api.github.com')

print(resp.status_code)   # Response code
print(resp.json())        # Parsed JSON`}</pre>
          </div>
        </section>

        {/* POST Request */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            POST Request
          </h2>

          <p className="mt-2">Sending data with a POST request:</p>

          <div
            className="mt-4 border border-gray-200 bg-white rounded-lg p-4 
                          font-mono text-sm leading-7 overflow-x-auto 
                          border-l-4 border-[#4a0080]"
          >
            <pre>{`import requests

payload = {
    "name": "Lal Bahadur",
    "role": "Developer"
}

resp = requests.post("https://httpbin.org/post", json=payload)
print(resp.json())`}</pre>
          </div>
        </section>

        {/* Error Handling */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Basic Error Handling
          </h2>

          <p className="mt-2">
            Always check for network errors or non-200 responses.
          </p>

          <div
            className="mt-4 border border-gray-200 bg-white rounded-lg p-4 
                          font-mono text-sm leading-7 overflow-x-auto 
                          border-l-4 border-[#4a0080]"
          >
            <pre>{`import requests

try:
    resp = requests.get("https://api.github.com/invalid-url")
    resp.raise_for_status()   # Raise exception for bad status
except requests.exceptions.RequestException as e:
    print("Error:", e)`}</pre>
          </div>
        </section>

        {/* Headers */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Headers</h2>

          <p className="mt-2">Sending custom headers (e.g., API keys):</p>

          <div
            className="mt-4 border border-gray-200 bg-white rounded-lg p-4 
                          font-mono text-sm leading-7 overflow-x-auto 
                          border-l-4 border-[#4a0080]"
          >
            <pre>{`headers = {
    "Authorization": "Bearer YOUR_TOKEN_HERE"
}

resp = requests.get("https://api.github.com/user", headers=headers)
print(resp.json())`}</pre>
          </div>
        </section>
      </div>
    </div>
  );
}
