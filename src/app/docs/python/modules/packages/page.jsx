import React from "react";

export default function PythonPackages() {
  // Encode special symbols
  const dq = String.fromCharCode(34);
  const obr = String.fromCharCode(123);
  const cbr = String.fromCharCode(125);
  const op = String.fromCharCode(40);
  const cp = String.fromCharCode(41);
  const cm = String.fromCharCode(44);
  const osb = String.fromCharCode(91);
  const csb = String.fromCharCode(93);

  // Code examples
  const exPackageFolder = `mypackage/
${obr}
  __init__.py
  module1.py
  module2.py
${cbr}`;

  const exInit = `# __init__.py
print("Initializing my package")`;

  const exUseModule = `import mypackage.module1`;

  const exInstall = `pip install camelcase`;

  const exUninstall = `pip uninstall camelcase`;

  const exList = `pip list`;

  const exCreateSetup = `from setuptools import setup, find_packages

setup(
  name="mypackage",
  version="1.0.0",
  packages=find_packages(),
  install_requires=["requests"]
)`;

  const exPublish = `python -m twine upload dist/*`;

  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

  return (
    <div className="space-y-6">
      {/* TITLE */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python Packages — Full Cheat Sheet
      </h1>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* INTRO */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            What is a Package?
          </h2>
          <p className="mt-2">
            A <strong>package</strong> is a collection of Python modules stored
            in a folder that contains a special file named{" "}
            <code>__init__.py</code>.
          </p>

          <p className="mt-2">
            Packages help organize code into logical groups and allow code reuse
            across projects.
          </p>

          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Modules = Single Python files</li>
            <li>Packages = Folders containing modules</li>
            <li>Libraries = Collections of packages</li>
          </ul>
        </section>

        {/* PACKAGE STRUCTURE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Package Structure
          </h2>
          <p className="mt-2">
            A package is simply a folder containing Python modules and an{" "}
            <code>__init__.py</code> file.
          </p>

          <pre className={codeClass}>
            <code>{exPackageFolder}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">__init__.py</h3>
          <p className="mt-2">
            This file makes Python treat the folder as a package. It can be
            empty or contain initialization code.
          </p>

          <pre className={codeClass}>
            <code>{exInit}</code>
          </pre>
        </section>

        {/* USING PACKAGES */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Using a Package
          </h2>
          <p className="mt-2">
            Import modules inside a package using dot notation:
          </p>

          <pre className={codeClass}>
            <code>{exUseModule}</code>
          </pre>

          <p className="mt-2">To import a specific function:</p>

          <pre className={codeClass}>
            <code>{`from mypackage.module1 import myFunction`}</code>
          </pre>
        </section>

        {/* INSTALL PACKAGES */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Installing Packages (Using PIP)
          </h2>

          <h3 className="text-xl font-semibold mt-3">Install</h3>
          <pre className={codeClass}>
            <code>{exInstall}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-3">
            List Installed Packages
          </h3>
          <pre className={codeClass}>
            <code>{exList}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-3">Uninstall</h3>
          <pre className={codeClass}>
            <code>{exUninstall}</code>
          </pre>
        </section>

        {/* CREATING PACKAGE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Creating Your Own Package
          </h2>

          <h3 className="text-xl font-semibold mt-3">
            1. Create Folder Structure
          </h3>
          <p className="mt-2">Example folder structure:</p>
          <pre className={codeClass}>
            <code>{exPackageFolder}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">2. Add setup.py</h3>
          <p className="mt-2">
            This file tells Python how to build and install your package.
          </p>
          <pre className={codeClass}>
            <code>{exCreateSetup}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">3. Build the Package</h3>
          <pre className={codeClass}>
            <code>{`python setup.py sdist bdist_wheel`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">
            4. Install Locally (For Testing)
          </h3>
          <pre className={codeClass}>
            <code>{`pip install .`}</code>
          </pre>
        </section>

        {/* PUBLISH */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Publishing Your Package to PyPI
          </h2>

          <h3 className="text-xl font-semibold mt-3">1. Install Twine</h3>
          <pre className={codeClass}>
            <code>{`pip install twine`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-3">2. Upload Package</h3>
          <pre className={codeClass}>
            <code>{exPublish}</code>
          </pre>

          <p className="mt-2">
            Your package will now appear on <strong>pypi.org</strong>.
          </p>
        </section>

        {/* BEST PRACTICES */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Best Practices for Packages
          </h2>
          <ul className="list-disc ml-6 mt-3 space-y-1">
            <li>Use meaningful package and module names.</li>
            <li>Keep functions small and modular.</li>
            <li>Add documentation inside your package.</li>
            <li>Include a README.md file.</li>
            <li>Use semantic versioning (1.0.0, 1.0.1, etc.).</li>
            <li>Avoid circular imports between modules.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
