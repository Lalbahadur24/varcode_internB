import React from "react";

export default function CreatingModules() {
  const dq = String.fromCharCode(34);       // "
  const obr = String.fromCharCode(123);     // {
  const cbr = String.fromCharCode(125);     // }
  const op = String.fromCharCode(40);       // (
  const cp = String.fromCharCode(41);       // )
  const cln = String.fromCharCode(58);      // :
  const cm = String.fromCharCode(44);       // ,
  const pl = String.fromCharCode(43);       // +
  const nl = "\n";

  const exModuleFile =
`def greeting${op}name${cp}${cln}
  print${op}${dq}Hello, ${dq} ${pl} name${cp}`;

  const exUseModule =
`import mymodule

mymodule${String.fromCharCode(46)}greeting${op}${dq}Jonathan${dq}${cp}`;

  const exVarModule =
`person1 ${cln}${obr}
  ${dq}name${dq}${cln} ${dq}John${dq}${cm}
  ${dq}age${dq}${cln} 36${cm}
  ${dq}country${dq}${cln} ${dq}Norway${dq}
${cbr}`;

  const exAccessVar =
`import mymodule

a ${cln} mymodule${String.fromCharCode(46)}person1${obr}${dq}age${dq}${cbr}
print${op}a${cp}`;

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-8">
      
      <h1 className="text-4xl font-bold">Python Creating Modules — Full Cheat Sheet</h1>

      {/* WHAT IS A MODULE */}
      <section>
        <h2 className="text-2xl font-semibold">What is a Module?</h2>
        <p className="mt-2">
          A Python <strong>module</strong> is simply a file containing Python code — functions,
          variables, classes, or runnable code — that can be imported and used in another file.
        </p>
        <p className="mt-2">
          Think of a module as a <strong>reusable code library</strong>.
        </p>
      </section>

      {/* CREATING A MODULE */}
      <section>
        <h2 className="text-2xl font-semibold mt-6">Creating a Module</h2>
        <p className="mt-2">
          To create a module, save your Python code inside a file with the extension
          <strong> .py</strong>.
        </p>
        <p className="mt-2">Example: Save the following code in a file named <strong>mymodule.py</strong>:</p>

        <pre className="p-3 rounded border bg-gray-50 mt-3">
          <code>{exModuleFile}</code>
        </pre>
      </section>

      {/* USING THE MODULE */}
      <section>
        <h2 className="text-2xl font-semibold mt-6">Using a Module</h2>
        <p className="mt-2">
          To use your module in another file, import it using the <strong>import</strong> keyword.
        </p>

        <pre className="p-3 rounded border bg-gray-50 mt-3">
          <code>{exUseModule}</code>
        </pre>

        <p className="mt-3">
          When calling a function from a module, always use:
          <br />
          <strong>module_name.function_name</strong>
        </p>
      </section>

      {/* VARIABLES IN MODULE */}
      <section>
        <h2 className="text-2xl font-semibold mt-6">Modules Can Contain Variables</h2>
        <p className="mt-2">
          A module does not only contain functions — it can store variables of any type:
          lists, dictionaries, numbers, etc.
        </p>

        <p className="mt-3">
          Example content of <strong>mymodule.py</strong>:
        </p>

        <pre className="p-3 rounded border bg-gray-50 mt-3">
          <code>{exVarModule}</code>
        </pre>

        <p className="mt-3">
          Accessing a variable from the module:
        </p>

        <pre className="p-3 rounded border bg-gray-50 mt-3">
          <code>{exAccessVar}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6">Why Use Modules?</h2>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li>Helps organize code into separate files</li>
          <li>Makes large programs easier to manage</li>
          <li>Allows reusability across multiple projects</li>
          <li>Avoids rewriting the same functions</li>
        </ul>
      </section>

    </article>
  );
}
