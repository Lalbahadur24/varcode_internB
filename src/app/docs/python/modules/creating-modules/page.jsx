import React from "react";

export default function CreatingModules() {
  const dq = String.fromCharCode(34);

  const exModuleFile = `def greeting(name):
  print("Hello, " + name)`;

  const exUseModule = `import mymodule

mymodule.greeting("Jonathan")`;

  const exVarModule = `person1 = {
  "name": "John",
  "age": 36,
  "country": "Norway"
}`;

  const exAccessVar = `import mymodule

a = mymodule.person1["age"]
print(a)`;

  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python Creating Modules — Full Cheat Sheet
      </h1>

      <p className="text-slate-700 leading-relaxed">
        A Python <strong>module</strong> is simply a file that contains Python
        code — functions, variables, classes, or executable statements. It
        allows you to split your code into reusable pieces.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* WHAT IS A MODULE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            What is a Module?
          </h2>
          <p className="mt-2">
            Think of a module as a <strong>reusable code library</strong> that
            you can import into any Python program.
          </p>
        </section>

        {/* CREATING MODULE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Creating a Module
          </h2>
          <p className="mt-2">
            To create a module, simply save your Python code into a file that
            ends with
            <strong> .py</strong>.
          </p>
          <p className="mt-2">
            Example (save in <strong>mymodule.py</strong>):
          </p>

          <pre className={codeClass}>
            <code>{exModuleFile}</code>
          </pre>
        </section>

        {/* USING MODULE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Using a Module
          </h2>
          <p className="mt-2">
            You can import your module into any Python file using the{" "}
            <strong>import</strong> keyword.
          </p>

          <pre className={codeClass}>
            <code>{exUseModule}</code>
          </pre>

          <p className="mt-3">
            When calling functions inside a module, use:
            <br />
            <strong>module_name.function_name</strong>
          </p>
        </section>

        {/* VARIABLES IN MODULE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Modules Can Contain Variables
          </h2>
          <p className="mt-2">
            A module may contain variables such as numbers, lists, dictionaries,
            etc.
          </p>

          <p className="mt-3">
            Example content of <strong>mymodule.py</strong>:
          </p>

          <pre className={codeClass}>
            <code>{exVarModule}</code>
          </pre>

          <p className="mt-3">Accessing a variable inside the module:</p>

          <pre className={codeClass}>
            <code>{exAccessVar}</code>
          </pre>
        </section>

        {/* WHY USE MODULES */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Why Use Modules?
          </h2>
          <ul className="list-disc ml-6 mt-3 space-y-1">
            <li>Organizes large programs cleanly</li>
            <li>Breaks code into manageable pieces</li>
            <li>Allows reuse across multiple files or projects</li>
            <li>Avoids rewriting the same functions again</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
