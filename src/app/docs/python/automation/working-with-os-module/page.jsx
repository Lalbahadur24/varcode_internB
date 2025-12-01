import React from "react";

export default function WorkingWithOSModule() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Working with OS Module</h1>
      <p>
        The <code>os</code> module provides cross-platform OS interactions.
      </p>

      <h2>Paths & Directories</h2>
      <pre><code>{`import os

# Current directory
cwd = os.getcwd()
print(cwd)

# Change directory
os.chdir('/path/to/dir')

# List files
files = os.listdir('.')
print(files)

# Create directories
os.makedirs('data/raw', exist_ok=True)

# Remove
os.remove('file.txt')        # delete file
os.rmdir('empty_dir')         # delete empty dir`}</code></pre>

      <h2>Path Joining</h2>
      <pre><code>{`# Portable path joining
path = os.path.join('data', 'raw', 'file.csv')
print(path)  # data/raw/file.csv (or data\\raw\\file.csv on Windows)

# Check existence
if os.path.exists(path):
    print('Exists')

# Check type
if os.path.isfile(path):
    print('Is a file')

if os.path.isdir('data'):
    print('Is a directory')`}</code></pre>

      <h2>Environment Variables</h2>
      <pre><code>{`# Get environment variable
api_key = os.environ.get('API_KEY', 'default-value')

# Set (for current process)
os.environ['MY_VAR'] = 'value'

# All environment variables
print(os.environ)`}</code></pre>

      <h2>Tips</h2>
      <ul>
        <li>Use <code>pathlib.Path</code> for modern path handling</li>
        <li>Always use <code>os.path.join()</code> for cross-platform paths</li>
        <li>Store secrets in environment variables, not code</li>
      </ul>
    </div>
  );
}
