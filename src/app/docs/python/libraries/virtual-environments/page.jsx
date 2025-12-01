import React from "react";

export default function VirtualEnvironments() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Virtual Environments
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Virtual environments isolate project dependencies so each project can
        have its own package versions without conflicts. Always create one per
        project.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* venv (built-in) */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Using <code>venv</code> (Built-in)
          </h2>

          <p className="mt-2">
            <code>venv</code> comes with Python 3.3+, no extra install needed.
          </p>

          <div className="mt-4 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`# Create virtual environment
python -m venv .venv

# Activate (Windows PowerShell)
.\.venv\Scripts\Activate.ps1

# Activate (cmd.exe)
.\.venv\Scripts\activate.bat

# Activate (Linux / macOS)
source .venv/bin/activate

# Install packages inside env
pip install requests pandas

# Save dependencies
pip freeze > requirements.txt

# Deactivate environment
deactivate`}</pre>
          </div>
        </section>

        {/* virtualenv */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Using <code>virtualenv</code>
          </h2>

          <p className="mt-2">
            <code>virtualenv</code> is an older but still widely used tool that
            works similarly to <code>venv</code>.
          </p>

          <div className="mt-4 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`pip install virtualenv

# Create environment
virtualenv myenv

# Activate (Linux / macOS)
source myenv/bin/activate

# Activate (Windows)
myenv\\Scripts\\activate`}</pre>
          </div>
        </section>

        {/* pipenv */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Using <code>pipenv</code>
          </h2>

          <p className="mt-2">
            <code>pipenv</code> manages virtual environments + dependencies via{" "}
            <code>Pipfile</code> and <code>Pipfile.lock</code>.
          </p>

          <div className="mt-4 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`pip install pipenv

# Create env + install package
pipenv install requests

# Activate env shell
pipenv shell

# Install dev-only dependency
pipenv install --dev pytest`}</pre>
          </div>
        </section>

        {/* Tips */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Tips</h2>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Use one virtual environment per project.</li>
            <li>
              Add <code>.venv/</code> or <code>myenv/</code> to{" "}
              <code>.gitignore</code>.
            </li>
            <li>
              Share dependencies via <code>requirements.txt</code> or{" "}
              <code>Pipfile</code>, not the environment folder.
            </li>
            <li>
              Recreate env on a new machine with:
              <div className="mt-2 border border-gray-200 bg-white rounded-lg p-3 font-mono text-xs leading-6 overflow-x-auto border-l-4 border-[#4a0080]">
                <pre>{`python -m venv .venv
source .venv/bin/activate  # or Windows equivalent
pip install -r requirements.txt`}</pre>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
