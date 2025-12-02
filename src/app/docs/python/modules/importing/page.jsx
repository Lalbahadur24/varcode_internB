import React from "react";

export default function ImportingModules() {
  const dq = String.fromCharCode(34);
  const op = String.fromCharCode(40);
  const cp = String.fromCharCode(41);
  const dot = String.fromCharCode(46);
  const cln = String.fromCharCode(58);
  const lb = String.fromCharCode(91);
  const rb = String.fromCharCode(93);

  const exBasicImport = `import mymodule

mymodule.greeting("Jonathan")`;

  const exAlias = `import mymodule as mx

a = mx.person1["age"]
print(a)`;

  const exFromImport = `from mymodule import person1

print(person1["age"])`;

  const exPlatform = `import platform

x = platform.system()
print(x)`;

  const exDir = `import platform

x = dir(platform)
print(x)`;

  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

  return (
    <div className="space-y-6">
      {/* TITLE */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python Importing Modules — Full Cheat Sheet
      </h1>

      <div className="text-slate-700 leading-relaxed space-y-10">
        {/* BASIC IMPORT */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Importing a Module
          </h2>
          <p className="mt-2">
            After creating a Python module, you can include it in another
            program using the <strong>import</strong> statement.
          </p>

          <pre className={codeClass}>
            <code>{exBasicImport}</code>
          </pre>

          <p className="mt-2">
            Always call functions using:
            <br />
            <strong>module_name.function_name</strong>
          </p>
        </section>

        {/* ALIAS */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Creating an Alias (as keyword)
          </h2>
          <p className="mt-2">
            The <strong>as</strong> keyword lets you rename a module at import
            time. Helpful when module names are long.
          </p>

          <pre className={codeClass}>
            <code>{exAlias}</code>
          </pre>
        </section>

        {/* FROM IMPORT */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Import Specific Items
          </h2>
          <p className="mt-2">
            Using the <strong>from</strong> keyword, you can import only what
            you need.
          </p>

          <pre className={codeClass}>
            <code>{exFromImport}</code>
          </pre>

          <p className="mt-3">
            After importing specific items, you can use them
            <strong> directly</strong> without writing the module name.
          </p>
        </section>

        {/* BUILT-IN MODULES */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Importing Built-in Modules
          </h2>
          <p className="mt-2">
            Python includes many useful built-in modules such as
            <strong> platform</strong>, <strong>math</strong>,{" "}
            <strong>random</strong>,<strong> os</strong>, etc.
          </p>

          <pre className={codeClass}>
            <code>{exPlatform}</code>
          </pre>
        </section>

        {/* DIR FUNCTION */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Using the dir() Function
          </h2>
          <p className="mt-2">
            The <strong>dir()</strong> function lists all functions, classes,
            and variables inside a module.
          </p>

          <pre className={codeClass}>
            <code>{exDir}</code>
          </pre>

          <p className="mt-3">
            You can use <strong>dir()</strong> on any module — built-in or
            user-defined.
          </p>
        </section>

        {/* WHY IMPORT */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Why Import Modules?
          </h2>

          <ul className="list-disc ml-6 mt-3 space-y-1">
            <li>Reuse code across files</li>
            <li>Organize programs better</li>
            <li>Access Python’s built-in functionality</li>
            <li>Avoid repeating functions unnecessarily</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
