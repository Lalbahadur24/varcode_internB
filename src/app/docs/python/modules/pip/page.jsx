import React from "react";

export default function PythonPip() {
  const dq = String.fromCharCode(34);  
  const cl = String.fromCharCode(58);  
  const cm = String.fromCharCode(44);  
  const obr = String.fromCharCode(123);  
  const cbr = String.fromCharCode(125);  
  const op = String.fromCharCode(40);  
  const cp = String.fromCharCode(41);  

  const exCheckPip = 
`pip --version`;

  const exInstall = 
`pip install camelcase`;

  const exUseCamel =
`import camelcase

c = camelcase${op}CamelCase${cp}

txt = ${dq}hello world${dq}

print${op} c${cl}hump${op}txt${cp} ${cp}`;

  const exUninstall =
`pip uninstall camelcase`;

  const exList =
`pip list`;

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-10">
      <h1 className="text-4xl font-bold">Python PIP – Full Cheat Sheet</h1>

      {/* INTRO */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">What is PIP?</h2>
        <p className="mt-2">
          <strong>PIP</strong> is Python${dq}s official <strong>package manager</strong>.  
          It allows you to install and manage <strong>Python packages</strong> (also called modules).
        </p>

        <p className="mt-2">
          If you are using <strong>Python 3.4 or later</strong>, PIP comes <strong>pre-installed</strong>.
        </p>

        <h3 className="text-xl font-semibold mt-4">What is a Package?</h3>
        <p className="mt-2">
          A <strong>package</strong> contains all the files needed for a module (functions, classes, data, etc.).
        </p>

        <p className="mt-2">
          PIP makes it easy to <strong>download</strong>, <strong>install</strong>, <strong>update</strong>, and <strong>remove</strong> packages.
        </p>
      </section>

      {/* CHECK PIP */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">Check if PIP is Installed</h2>
        <p className="mt-2">
          Open your command prompt and run:
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exCheckPip}</code></pre>
      </section>

      {/* INSTALL PACKAGE */}
      <section>
        <h2 className="text-2xl font-semibold">Install a Package</h2>
        <p className="mt-2">Use the <code>install</code> command:</p>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exInstall}</code></pre>

        <p className="mt-2">Now the package is installed and ready to use.</p>
      </section>

      {/* USING PACKAGE */}
      <section>
        <h2 className="text-2xl font-semibold">Using an Installed Package</h2>
        <p className="mt-2">
          After installing a package, import it into your Python code.
        </p>
        
        <h3 className="text-xl font-semibold mt-4">Example: Using camelcase</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-3 whitespace-pre-wrap"><code>{exUseCamel}</code></pre>
      </section>

      {/* FIND PACKAGES */}
      <section>
        <h2 className="text-2xl font-semibold">Find New Packages</h2>
        <p className="mt-2">
          Browse packages at: <strong>https://pypi.org/</strong>
        </p>
      </section>

      {/* UNINSTALL */}
      <section>
        <h2 className="text-2xl font-semibold">Uninstall a Package</h2>
        <p className="mt-2">
          Remove a package using:
        </p>
        <pre className="p-3 mt-3 rounded border bg-gray-50"><code>{exUninstall}</code></pre>

        <p className="mt-2">
          PIP will ask for confirmation (y${cl}n).
        </p>
      </section>

      {/* LIST PACKAGES */}
      <section>
        <h2 className="text-2xl font-semibold">List Installed Packages</h2>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exList}</code></pre>

        <p className="mt-2">This shows all packages installed on your system.</p>
      </section>

      {/* SUMMARY */}
      <section>
        <h2 className="text-2xl font-semibold mt-6">Summary</h2>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li><strong>PIP</strong> manages Python packages.</li>
          <li>Use <code>pip install</code> to add packages.</li>
          <li>Use <code>pip uninstall</code> to remove packages.</li>
          <li>Use <code>pip list</code> to see installed packages.</li>
          <li>Use <code>pip --version</code> to confirm installation.</li>
          <li>Packages are downloaded from <strong>PyPI</strong>.</li>
        </ul>
      </section>

    </article>
  );
}
