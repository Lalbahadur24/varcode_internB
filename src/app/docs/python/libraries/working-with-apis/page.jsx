import React from "react";

export default function WorkingWithApis() {
  return (
    <div className="prose max-w-none">
      <h1>Working with APIs</h1>
      <p>
        Python makes it easy to interact with web APIs using the <code>requests</code>
        library or built-in modules. This page covers making GET/POST requests,
        handling JSON, and basic error handling.
      </p>

      <h2>Quick example</h2>
      <pre>
        <code>{`import requests

resp = requests.get('https://api.github.com')
print(resp.status_code)
print(resp.json())`}</code>
      </pre>
    </div>
  );
}
