import React from "react";

export default function VirtualEnvironments() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Virtual Environments</h1>
      <p>
        Virtual environments isolate project dependencies, preventing version conflicts.
      </p>

      <h2>Using venv (Built-in)</h2>
      <pre><code>{`# Create
python -m venv .venv

# Activate (Windows)
.\.venv\Scripts\Activate.ps1

# Activate (Linux/Mac)
source .venv/bin/activate

# Install packages
pip install requests pandas

# Save dependencies
pip freeze > requirements.txt

# Deactivate
deactivate`}</code></pre>

      <h2>Using virtualenv</h2>
      <pre><code>{`pip install virtualenv
virtualenv myenv
source myenv/bin/activate`}</code></pre>

      <h2>Using pipenv</h2>
      <pre><code>{`pip install pipenv
pipenv install requests
pipenv shell  # activate`}</code></pre>

      <h2>Tips</h2>
      <ul>
        <li>Always use virtual environments per project</li>
        <li>Add <code>.venv/</code> to <code>.gitignore</code></li>
        <li>Use <code>requirements.txt</code> for reproducibility</li>
      </ul>
    </div>
  );
}
