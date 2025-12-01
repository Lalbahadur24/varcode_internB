import React from "react";

export default function ImportingModules() {
  const dq = String.fromCharCode(34);        // "
  const obr = String.fromCharCode(123);      // {
  const cbr = String.fromCharCode(125);      // }
  const op = String.fromCharCode(40);        // (
  const cp = String.fromCharCode(41);        // )
  const cln = String.fromCharCode(58);       // :
  const cm = String.fromCharCode(44);        // ,
  const dot = String.fromCharCode(46);       // .
  const pl = String.fromCharCode(43);        // +
  const lb = String.fromCharCode(91);        // [
  const rb = String.fromCharCode(93);        // ]

  /* EXAMPLES */

  const exBasicImport =
`import mymodule

mymodule${dot}greeting${op}${dq}Jonathan${dq}${cp}`;

  const exAlias =
`import mymodule as mx

a ${cln} mx${dot}person1${lb}${dq}age${dq}${rb}
print${op}a${cp}`;

  const exFromImport =
`from mymodule import person1

print${op}person1${lb}${dq}age${dq}${rb}${cp}`;

  const exPlatform =
`import platform

x ${cln} platform${dot}system${op}${cp}
print${op}x${cp}`;

  const exDir =
`import platform

x ${cln} dir${op}platform${cp}
print${op}x${cp}`;

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-10">
      
      <h1 className="text-4xl font-bold">Python Importing Modules — Full Cheat Sheet</h1>

      {/* INTRO */}
      <section>
        <h2 className="text-2xl font-semibold">Importing a Module</h2>
        <p className="mt-2">
          After creating a module, you can bring it into your program using the 
          <strong> import </strong> statement.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-3">
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
        <h2 className="text-2xl font-semibold">Creating an Alias (as keyword)</h2>
        <p className="mt-2">
          You can rename a module while importing it using the  
          <strong> as </strong> keyword. This is useful when the module name is long.
        </p>

        <pre className="p-3 rounded border bg-gray-50 mt-3">
          <code>{exAlias}</code>
        </pre>
      </section>

      {/* FROM IMPORT */}
      <section>
        <h2 className="text-2xl font-semibold">Import Specific Items</h2>
        <p className="mt-2">
          Using the <strong>from</strong> keyword, you can import only the items you need:
        </p>

        <pre className="p-3 rounded border bg-gray-50 mt-3">
          <code>{exFromImport}</code>
        </pre>

        <p className="mt-3">
          When importing specific items, you can use them <strong>directly</strong> 
          without writing the module name.
        </p>
      </section>

      {/* BUILT-IN MODULES */}
      <section>
        <h2 className="text-2xl font-semibold">Importing Built-in Modules</h2>
        <p className="mt-2">
          Python includes many modules by default, such as <strong>platform</strong>, 
          <strong>math</strong>, <strong>os</strong>, <strong>random</strong>, and more.
        </p>

        <pre className="p-3 rounded border bg-gray-50 mt-3">
          <code>{exPlatform}</code>
        </pre>
      </section>

      {/* dir() FUNCTION */}
      <section>
        <h2 className="text-2xl font-semibold">Using the dir() Function</h2>
        <p className="mt-2">
          The <strong>dir()</strong> function returns a list of all variables, classes, and 
          functions defined inside a module.
        </p>

        <pre className="p-3 rounded border bg-gray-50 mt-3">
          <code>{exDir}</code>
        </pre>

        <p className="mt-3">
          You can use <strong>dir()</strong> on any module — built-in or user-defined.
        </p>
      </section>

      {/* WHY IMPORT */}
      <section>
        <h2 className="text-2xl font-semibold">Why Import Modules?</h2>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li>Helps reuse code written in other files</li>
          <li>Makes programs more organized</li>
          <li>Allows access to Python's built-in utilities</li>
          <li>Avoids rewriting the same functions repeatedly</li>
        </ul>
      </section>

    </article>
  );
}
