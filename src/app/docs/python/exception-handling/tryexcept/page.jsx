import React from "react";

export default function PythonTryExceptOnly() {
  const dq = String.fromCharCode(34);

  // Code Examples
  const exBasic = `try:
  print(x)
except:
  print(${dq}An exception occurred${dq})`;

  const exSpecific = `try:
  print(x)
except NameError:
  print(${dq}Variable x is not defined${dq})
except:
  print(${dq}Something else went wrong${dq})`;

  const exCrash = `print(x)  # Causes error because x is not defined`;

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-12">
      <h1 className="text-4xl font-bold">Python Try {dq}Except{dq} — Core Cheat Sheet</h1>

      {/* INTRO */}
      <section>
        <h2 className="text-2xl font-semibold">What is Exception Handling?</h2>
        <p className="mt-2 leading-7">
          <strong>Exception handling</strong> prevents your program from crashing when something
          goes wrong. Python uses the <strong>try–except</strong> structure to catch errors and
          handle them gracefully.
        </p>

        <h3 className="mt-4 text-xl font-semibold">Purpose of Try–Except</h3>
        <ul className="list-disc ml-6 leading-7 mt-2">
          <li><strong>try</strong> — Code that may produce an error</li>
          <li><strong>except</strong> — Code that runs if an error occurs</li>
        </ul>
      </section>

      {/* BASIC EXAMPLE */}
      <section>
        <h2 className="text-2xl font-semibold">Basic Try–Except</h2>
        <p className="mt-2 leading-7">
          If an error happens inside <strong>try</strong>, the <strong>except</strong> block handles it.
        </p>

        <pre className="p-3 bg-gray-50 rounded border mt-2"><code>{exBasic}</code></pre>
      </section>

      {/* WITHOUT TRY */}
      <section>
        <h2 className="text-2xl font-semibold">Without Try–Except (Program Crashes)</h2>
        <p className="mt-2 leading-7">Without exception handling, Python stops the program.</p>

        <pre className="p-3 bg-gray-50 rounded border mt-2"><code>{exCrash}</code></pre>
      </section>

      {/* SPECIFIC EXCEPTIONS */}
      <section>
        <h2 className="text-2xl font-semibold">Catching Specific Exceptions</h2>
        <p className="mt-2 leading-7">
          You can catch specific errors like <code>NameError</code>, <code>ValueError</code>,
          or <code>TypeError</code>.  
          This helps handle different problems with different responses.
        </p>

        <pre className="p-3 bg-gray-50 rounded border mt-2"><code>{exSpecific}</code></pre>
      </section>

      {/* COMMON ERRORS TABLE */}
      <section>
        <h2 className="text-2xl font-semibold">Common Exceptions You Can Catch</h2>

        <table className="w-full border mt-4 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2 w-1/3">Exception Type</th>
              <th className="border p-2">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2 font-mono">NameError</td><td className="border p-2">Variable not defined</td></tr>
            <tr><td className="border p-2 font-mono">ValueError</td><td className="border p-2">Wrong value given</td></tr>
            <tr><td className="border p-2 font-mono">TypeError</td><td className="border p-2">Wrong data type used</td></tr>
            <tr><td className="border p-2 font-mono">ZeroDivisionError</td><td className="border p-2">Dividing by zero</td></tr>
            <tr><td className="border p-2 font-mono">FileNotFoundError</td><td className="border p-2">Missing file</td></tr>
            <tr><td className="border p-2 font-mono">KeyError</td><td className="border p-2">Dictionary key missing</td></tr>
            <tr><td className="border p-2 font-mono">IndexError</td><td className="border p-2">List index out of range</td></tr>
          </tbody>
        </table>
      </section>

      {/* SUMMARY */}
      <section>
        <h2 className="text-2xl font-semibold">Summary</h2>
        <ul className="list-disc ml-6 mt-3 leading-7">
          <li><strong>try</strong> runs the risky code</li>
          <li><strong>except</strong> handles errors</li>
          <li>Use <strong>specific exceptions</strong> for better debugging</li>
          <li>Prevents program crashes</li>
        </ul>
      </section>
    </article>
  );
}
