import React from "react";

export default function PythonRaise() {
  const dq = String.fromCharCode(34);

  // Code Examples
  const exRaiseBasic = `x = -1

if x < 0:
  raise Exception(${dq}Sorry, no numbers below zero${dq})`;

  const exRaiseType = `x = ${dq}hello${dq}

if not type(x) is int:
  raise TypeError(${dq}Only integers are allowed${dq})`;

  // MASTER STYLE CODE BOX CLASS
  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

  return (
    <div className="space-y-12 text-slate-700">
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python {dq}raise{dq} — Raise Exception Cheat Sheet
      </h1>

      {/* INTRO */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          What is {dq}raise{dq} in Python?
        </h2>

        <p className="mt-2 leading-7">
          The <strong>raise</strong> keyword allows developers to{" "}
          <strong>manually trigger an exception</strong>. It is used when your
          program must stop or warn the user when something is invalid.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-[#4a0080]">
          Why Use raise?
        </h3>

        <ul className="list-disc ml-6 leading-7 mt-2">
          <li>Validate input values</li>
          <li>Stop program execution when something is wrong</li>
          <li>Create custom controlled error messages</li>
          <li>Ensure code correctness by enforcing conditions</li>
        </ul>
      </section>

      {/* BASIC RAISE */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Basic Example: Raise a General Exception
        </h2>

        <p className="mt-2">Stops the program if the condition is invalid:</p>

        <pre className={codeClass}>
          <code>{exRaiseBasic}</code>
        </pre>

        <p className="mt-3 leading-7">
          If <code>x</code> is less than 0, Python immediately raises an{" "}
          <strong>Exception</strong> with a custom message.
        </p>
      </section>

      {/* TYPE ERROR */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Raise Specific Exception Types
        </h2>

        <p className="mt-2 leading-7">
          You don't have to raise a generic <code>Exception</code>. You can
          raise specific built-in exceptions like <code>TypeError</code>,{" "}
          <code>ValueError</code>, <code>ZeroDivisionError</code>, etc.
        </p>

        <pre className={codeClass}>
          <code>{exRaiseType}</code>
        </pre>

        <p className="mt-3 leading-7">
          Here, a <strong>TypeError</strong> is raised when the value is not an
          integer.
        </p>
      </section>

      {/* TABLE */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Common Exceptions You Can Raise
        </h2>

        <table className="w-full border mt-4 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2 w-1/3">Exception Type</th>
              <th className="border p-2">When to Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 font-mono">Exception</td>
              <td className="border p-2">
                Generic error for general conditions
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">ValueError</td>
              <td className="border p-2">Value is invalid</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">TypeError</td>
              <td className="border p-2">Wrong data type</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">KeyError</td>
              <td className="border p-2">Missing dictionary key</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">IndexError</td>
              <td className="border p-2">Index out of range</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">ZeroDivisionError</td>
              <td className="border p-2">Division by zero attempted</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* SUMMARY */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>

        <ul className="list-disc ml-6 mt-3 leading-7">
          <li>
            <strong>raise</strong> manually triggers exceptions
          </li>
          <li>Great for input validation and enforcing rules</li>
          <li>Use built-in exceptions (TypeError, ValueError, etc.)</li>
          <li>You can attach a custom message</li>
          <li>Program execution stops immediately when raised</li>
        </ul>
      </section>
    </div>
  );
}
