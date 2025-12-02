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

  // MASTER STYLE CLASS
  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

  return (
    <div className="space-y-12 text-slate-700">
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python Try {dq}Except{dq} — Core Cheat Sheet
      </h1>

      {/* INTRO */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          What is Exception Handling?
        </h2>

        <p className="mt-2 leading-7">
          <strong>Exception handling</strong> prevents your program from
          crashing when something goes wrong. Python uses the{" "}
          <strong>try–except</strong> structure to catch and handle errors
          safely.
        </p>

        <h3 className="mt-4 text-xl font-semibold text-[#4a0080]">
          Purpose of Try–Except
        </h3>

        <ul className="list-disc ml-6 leading-7 mt-2">
          <li>
            <strong>try</strong> — Code that may cause an error
          </li>
          <li>
            <strong>except</strong> — Runs when an error occurs
          </li>
        </ul>
      </section>

      {/* BASIC EXAMPLE */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Basic Try–Except
        </h2>

        <p className="mt-2 leading-7">
          If an error happens in <strong>try</strong>, the{" "}
          <strong>except</strong> block handles it.
        </p>

        <pre className={codeClass}>
          <code>{exBasic}</code>
        </pre>
      </section>

      {/* WITHOUT TRY */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Without Try–Except (Program Crashes)
        </h2>

        <p className="mt-2 leading-7">
          Without exception handling, Python stops the program immediately.
        </p>

        <pre className={codeClass}>
          <code>{exCrash}</code>
        </pre>
      </section>

      {/* SPECIFIC EXCEPTIONS */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Catching Specific Exceptions
        </h2>

        <p className="mt-2 leading-7">
          You can catch specific errors like <code>NameError</code>,{" "}
          <code>ValueError</code>, or <code>TypeError</code>. This helps you
          customize responses for different error types.
        </p>

        <pre className={codeClass}>
          <code>{exSpecific}</code>
        </pre>
      </section>

      {/* COMMON ERRORS TABLE */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Common Exceptions You Can Catch
        </h2>

        <table className="w-full border mt-4 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2 w-1/3">Exception Type</th>
              <th className="border p-2">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 font-mono">NameError</td>
              <td className="border p-2">Variable not defined</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">ValueError</td>
              <td className="border p-2">Wrong value used</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">TypeError</td>
              <td className="border p-2">Wrong data type used</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">ZeroDivisionError</td>
              <td className="border p-2">Division by zero</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">FileNotFoundError</td>
              <td className="border p-2">File does not exist</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">KeyError</td>
              <td className="border p-2">Missing dictionary key</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">IndexError</td>
              <td className="border p-2">List index out of range</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* SUMMARY */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>

        <ul className="list-disc ml-6 mt-3 leading-7">
          <li>
            <strong>try</strong> runs risky code
          </li>
          <li>
            <strong>except</strong> catches the errors
          </li>
          <li>
            Use <strong>specific exceptions</strong> for debugging
          </li>
          <li>Prevents program crashes</li>
        </ul>
      </section>
    </div>
  );
}
