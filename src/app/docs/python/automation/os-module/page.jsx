import React from "react";

export default function OSModulePage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>OS Module</h1>
      <p>
        The <code>os</code> and <code>os.path</code> modules let you interact with the
        operating system: paths, environment variables, processes, and directories.
      </p>

      <h2>Common Tasks</h2>
      <pre><code>{`import os
from pathlib import Path

# Current directory and listing
cwd = os.getcwd()
print('CWD:', cwd)
print('Entries:', os.listdir(cwd))

# Join paths (portable)
data_dir = os.path.join(cwd, 'data')
Path(data_dir).mkdir(exist_ok=True)

# Environment variables
api_key = os.getenv('API_KEY', 'not-set')
print('API_KEY:', api_key)

# Rename / remove files
old = os.path.join(data_dir, 'old.txt')
new = os.path.join(data_dir, 'new.txt')
Path(old).write_text('hello')
os.replace(old, new)
os.remove(new)`}</code></pre>

      <h2>Tips</h2>
      <ul>
        <li>Prefer <code>pathlib.Path</code> for cleaner file path code.</li>
        <li>Use <code>os.environ</code> for configuration instead of hardcoding secrets.</li>
      </ul>
    </div>
  );
}
