import React from "react";

export default function PythonPackages() {
  // Encode special symbols
  const dq = String.fromCharCode(34);
  const cl = String.fromCharCode(58);
  const cm = String.fromCharCode(44);
  const obr = String.fromCharCode(123);
  const cbr = String.fromCharCode(125);
  const op = String.fromCharCode(40);
  const cp = String.fromCharCode(41);
  const osb = String.fromCharCode(91);
  const csb = String.fromCharCode(93);

  // Code examples
  const exPackageFolder =
`mypackage/
${obr}
  __init__.py
  module1.py
  module2.py
${cbr}`;

  const exInit =
`# __init__.py
print${op}${dq}Initializing my package${dq}${cp}`;

  const exUseModule =
`import mypackage.module1`;

  const exInstall =
`pip install camelcase`;

  const exUninstall =
`pip uninstall camelcase`;

  const exList =
`pip list`;

  const exCreateSetup =
`from setuptools import setup, find_packages

setup${op}
  name = ${dq}mypackage${dq}${cm}
  version = ${dq}1.0.0${dq}${cm}
  packages = find_packages${op}${cp}${cm}
  install_requires = ${osb}${dq}requests${dq}${csb}
${cp}`;

  const exPublish =
`python -m twine upload dist/*`;

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-10">
      <h1 className="text-4xl font-bold">Python Packages — Full Cheat Sheet</h1>

      {/* INTRO */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">What is a Package?</h2>
        <p className="mt-2">
          A <strong>package</strong> is a collection of Python modules stored in a folder 
          that contains a special file named <code>__init__.py</code>. 
        </p>

        <p className="mt-2">
          Packages help organize code into logical groups and allow code reuse across projects.
        </p>

        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Modules = Single Python files</li>
          <li>Packages = Folders containing modules</li>
          <li>Libraries = Collections of packages</li>
        </ul>
      </section>

      {/* PACKAGE STRUCTURE */}
      <section>
        <h2 className="text-2xl font-semibold">Package Structure</h2>
        <p className="mt-2">
          A package is simply a folder containing Python modules and an <code>__init__.py</code> file.
        </p>

        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exPackageFolder}</code></pre>

        <h3 className="text-xl font-semibold mt-4">__init__.py</h3>
        <p className="mt-2">
          This file makes Python treat the folder as a package. It can be empty or contain initialization code.
        </p>

        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exInit}</code></pre>
      </section>

      {/* USING PACKAGES */}
      <section>
        <h2 className="text-2xl font-semibold">Using a Package</h2>
        <p className="mt-2">
          Import modules inside a package by using dot notation:
        </p>

        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exUseModule}</code></pre>

        <p className="mt-2">To import a specific function:</p>

        <pre className="p-3 rounded border bg-gray-50 mt-3">
          <code>{`from mypackage.module1 import myFunction`}</code>
        </pre>
      </section>

      {/* INSTALL PACKAGES */}
      <section>
        <h2 className="text-2xl font-semibold">Installing Packages (Using PIP)</h2>

        <h3 className="text-xl font-semibold mt-3">Install</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exInstall}</code></pre>

        <h3 className="text-xl font-semibold mt-3">List Installed Packages</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exList}</code></pre>

        <h3 className="text-xl font-semibold mt-3">Uninstall</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exUninstall}</code></pre>
      </section>

      {/* CREATING PACKAGE */}
      <section>
        <h2 className="text-2xl font-semibold">Creating Your Own Package</h2>
        <h3 className="text-xl font-semibold mt-3">1. Create Folder Structure</h3>

        <p className="mt-2">Example folder structure:</p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exPackageFolder}</code></pre>

        <h3 className="text-xl font-semibold mt-4">2. Add setup.py</h3>
        <p className="mt-2">
          This file tells Python how to build and install your package.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-2 whitespace-pre-wrap"><code>{exCreateSetup}</code></pre>

        <h3 className="text-xl font-semibold mt-4">3. Build the Package</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2">
          <code>{`python setup.py sdist bdist_wheel`}</code>
        </pre>

        <h3 className="text-xl font-semibold mt-4">4. Install Locally (For Testing)</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2">
          <code>{`pip install .`}</code>
        </pre>
      </section>

      {/* PUBLISH */}
      <section>
        <h2 className="text-2xl font-semibold">Publishing Your Package to PyPI</h2>

        <h3 className="text-xl font-semibold mt-3">1. Install Twine</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{`pip install twine`}</code></pre>

        <h3 className="text-xl font-semibold mt-3">2. Upload Package</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exPublish}</code></pre>

        <p className="mt-2">Your package will now appear on <strong>pypi.org</strong>.</p>
      </section>

      {/* BEST PRACTICES */}
      <section>
        <h2 className="text-2xl font-semibold">Best Practices for Packages</h2>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li>Use meaningful package and module names.</li>
          <li>Keep functions small and modular.</li>
          <li>Add documentation inside your package.</li>
          <li>Include a README.md file.</li>
          <li>Use versioning properly (1.0.0, 1.0.1, etc.).</li>
          <li>Avoid circular imports.</li>
        </ul>
      </section>
    </article>
  );
}
