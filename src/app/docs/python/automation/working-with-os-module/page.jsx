import React from "react";

export default function WorkingWithOSModule() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Working with OS Module
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Python’s <code>os</code> module allows you to interact with the
        operating system: working with directories, environment variables,
        paths, and system-level utilities. It is cross-platform and works on
        Windows, macOS, and Linux.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* PATHS & DIRECTORIES */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Paths & Directories
          </h2>
          <p className="mt-2">
            These functions handle navigation, creation, deletion, and listing
            of files.
          </p>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 text-sm leading-7 font-mono bg-white w-full">
                {`import os

# Current working directory
cwd = os.getcwd()
print("Current directory:", cwd)

# Change directory
os.chdir('/path/to/dir')

# List files in a directory
files = os.listdir('.')
print(files)

# Create folders (including nested)
os.makedirs('data/raw', exist_ok=True)

# Remove a file
os.remove('file.txt')

# Remove an empty directory
os.rmdir('empty_folder')`}
              </pre>
            </div>
          </div>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>os.makedirs()</strong> creates nested folders safely.
            </li>
            <li>
              <strong>os.listdir()</strong> lists all files and folders.
            </li>
            <li>
              <strong>os.rmdir()</strong> only removes empty directories.
            </li>
          </ul>
        </section>

        {/* PATH JOINING */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Path Joining (Cross-Platform)
          </h2>

          <p className="mt-2">
            Always use <code>os.path.join()</code> to prevent
            Windows/macOS/Linux path errors.
          </p>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 text-sm leading-7 font-mono bg-white w-full">
                {`import os

# Construct path safely
path = os.path.join('data', 'raw', 'file.csv')
print(path)

# Check existence of path
if os.path.exists(path):
    print("Exists")

# Determine type
print(os.path.isfile(path))   # True if file
print(os.path.isdir('data'))  # True if folder`}
              </pre>
            </div>
          </div>

          <p className="mt-3">
            Using <code>os.path.join()</code> ensures correct slashes:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              Linux/macOS → <code>data/raw/file.csv</code>
            </li>
            <li>
              Windows → <code>data\\raw\\file.csv</code>
            </li>
          </ul>
        </section>

        {/* ENVIRONMENT VARIABLES */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Environment Variables
          </h2>

          <p className="mt-2">
            Use environment variables to store API keys, secrets, tokens,
            database URLs, etc. Never store sensitive data inside code.
          </p>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]"></div>
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`import os

# Read environment variable
api_key = os.environ.get('API_KEY', 'default-value')
print(api_key)

# Set environment variable (for current Python process)
os.environ['MY_VAR'] = 'hello'

# View all environment variables
print(os.environ)`}
              </pre>
            </div>
          </div>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Use <code>.env</code> files with <code>python-dotenv</code> for
              large projects.
            </li>
            <li>
              All cloud services rely on environment variables (AWS, Azure,
              GCP).
            </li>
            <li>Never commit secrets to GitHub.</li>
          </ul>
        </section>

        {/* REAL WORLD USE CASES */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Real-World Use Cases
          </h2>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Automating folder creation for ML pipelines.</li>
            <li>Reading environment variables for API keys.</li>
            <li>Organizing files/directories dynamically.</li>
            <li>Running system-level scripts inside automation pipelines.</li>
            <li>Cleaning temporary files before deployment.</li>
          </ul>
        </section>

        {/* TIPS */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Tips</h2>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Use <code>pathlib.Path</code> for modern object-oriented file
              handling.
            </li>
            <li>
              Use <code>os.path.join()</code> instead of hardcoded slashes.
            </li>
            <li>
              Check <code>.exists()</code> before deleting files.
            </li>
            <li>Store secrets in environment variables, not in code.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
