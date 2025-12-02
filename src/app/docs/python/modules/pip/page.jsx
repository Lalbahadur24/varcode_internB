import React from "react";

export default function PythonPip() {
  const dq = String.fromCharCode(34);

  const exCheckPip = `pip --version`;

  const exInstall = `pip install camelcase`;

  const exUseCamel = `import camelcase

c = camelcase.CamelCase()

txt = "hello world"

print(c.hump(txt))`;

  const exUninstall = `pip uninstall camelcase`;

  const exList = `pip list`;

  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

  return (
    <div className="space-y-6">
      {/* TITLE */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python PIP – Full Cheat Sheet
      </h1>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* INTRO */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            What is PIP?
          </h2>
          <p className="mt-2">
            <strong>PIP</strong> is Python&apos;s official{" "}
            <strong>package manager</strong>. It allows you to install and
            manage <strong>Python packages</strong> (also called modules).
          </p>

          <p className="mt-2">
            If you are using <strong>Python 3.4 or later</strong>, PIP comes{" "}
            <strong>pre-installed</strong>.
          </p>

          <h3 className="text-xl font-semibold mt-4">What is a Package?</h3>
          <p className="mt-2">
            A <strong>package</strong> contains all the files needed for a
            module (functions, classes, data, etc.).
          </p>

          <p className="mt-2">
            PIP makes it easy to <strong>download</strong>,{" "}
            <strong>install</strong>, <strong>update</strong>, and{" "}
            <strong>remove</strong> packages.
          </p>
        </section>

        {/* CHECK PIP */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Check if PIP is Installed
          </h2>
          <p className="mt-2">Open your command prompt and run:</p>
          <pre className={codeClass}>
            <code>{exCheckPip}</code>
          </pre>
        </section>

        {/* INSTALL PACKAGE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Install a Package
          </h2>
          <p className="mt-2">
            Use the <code>install</code> command:
          </p>
          <pre className={codeClass}>
            <code>{exInstall}</code>
          </pre>

          <p className="mt-2">
            Now the package is installed and ready to use in your Python code.
          </p>
        </section>

        {/* USING PACKAGE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Using an Installed Package
          </h2>
          <p className="mt-2">
            After installing a package, import it into your Python file.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Example: Using <code>camelcase</code>
          </h3>
          <pre className={codeClass}>
            <code>{exUseCamel}</code>
          </pre>
        </section>

        {/* FIND PACKAGES */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Find New Packages
          </h2>
          <p className="mt-2">
            Browse and search packages at: <strong>https://pypi.org/</strong>
          </p>
        </section>

        {/* UNINSTALL */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Uninstall a Package
          </h2>
          <p className="mt-2">Remove a package using:</p>
          <pre className={codeClass}>
            <code>{exUninstall}</code>
          </pre>

          <p className="mt-2">
            PIP will ask for confirmation (<code>y/n</code>).
          </p>
        </section>

        {/* LIST PACKAGES */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            List Installed Packages
          </h2>
          <pre className={codeClass}>
            <code>{exList}</code>
          </pre>

          <p className="mt-2">
            This shows all packages installed in your current Python
            environment.
          </p>
        </section>

        {/* SUMMARY */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              <strong>PIP</strong> manages Python packages.
            </li>
            <li>
              Use <code>pip install &lt;package&gt;</code> to add packages.
            </li>
            <li>
              Use <code>pip uninstall &lt;package&gt;</code> to remove packages.
            </li>
            <li>
              Use <code>pip list</code> to see installed packages.
            </li>
            <li>
              Use <code>pip --version</code> to confirm PIP is installed.
            </li>
            <li>
              Packages are downloaded from <strong>PyPI</strong>.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
