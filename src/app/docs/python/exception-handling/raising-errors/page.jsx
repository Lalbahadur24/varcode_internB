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

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-12">

      <h1 className="text-4xl font-bold">Python {dq}raise{dq} — Raise Exception Cheat Sheet</h1>

      {/* INTRO */}
      <section>
        <h2 className="text-2xl font-semibold">What is {dq}raise{dq} in Python?</h2>
        <p className="mt-2 leading-7">
          The <strong>raise</strong> keyword allows developers to 
          <strong>manually trigger an exception</strong>.  
          It is used when you want your program to stop or warn the user when something is not correct.
        </p>

        <h3 className="text-xl font-semibold mt-4">Why Use raise?</h3>
        <ul className="list-disc ml-6 leading-7 mt-2">
          <li>Validate input values</li>
          <li>Stop program execution when something is wrong</li>
          <li>Create custom controlled error messages</li>
          <li>Ensure code correctness by enforcing conditions</li>
        </ul>
      </section>

      {/* BASIC RAISE */}
      <section>
        <h2 className="text-2xl font-semibold">Basic Example: Raise a General Exception</h2>
        <p className="mt-2">Stops the program if the condition is invalid:</p>

        <pre className="p-3 bg-gray-50 rounded border mt-2"><code>{exRaiseBasic}</code></pre>

        <p className="mt-3 leading-7">
          Here, if <code>x</code> is less than 0, Python immediately raises an 
          <strong>Exception</strong> with a custom message.
        </p>
      </section>

      {/* TYPE ERROR */}
      <section>
        <h2 className="text-2xl font-semibold">Raise Specific Exception Types</h2>
        <p className="mt-2 leading-7">
          You don't have to raise a generic <code>Exception</code>.  
          You can raise specific built-in exceptions like <code>TypeError</code>, 
          <code>ValueError</code>, <code>ZeroDivisionError</code>, etc.
        </p>

        <pre className="p-3 bg-gray-50 rounded border mt-2"><code>{exRaiseType}</code></pre>

        <p className="mt-3 leading-7">
          In this example, we raise a <strong>TypeError</strong> if the value is not an integer.
        </p>
      </section>

      {/* COMMON TYPES */}
      <section>
        <h2 className="text-2xl font-semibold">Common Exceptions You Can Raise</h2>

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
              <td className="border p-2">Generic error for general conditions</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">ValueError</td>
              <td className="border p-2">Raised when the value is wrong</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">TypeError</td>
              <td className="border p-2">Wrong data type is passed</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">KeyError</td>
              <td className="border p-2">Dictionary key missing</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">IndexError</td>
              <td className="border p-2">Index out of range</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">ZeroDivisionError</td>
              <td className="border p-2">User attempts division by zero</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* SUMMARY */}
      <section>
        <h2 className="text-2xl font-semibold">Summary</h2>

        <ul className="list-disc ml-6 mt-3 leading-7">
          <li><strong>raise</strong> triggers an exception manually</li>
          <li>Useful for input validation and enforcing rules</li>
          <li>You can raise built-in errors (TypeError, ValueError, etc.)</li>
          <li>You can attach a <strong>custom error message</strong></li>
          <li>Stops program execution immediately</li>
        </ul>
      </section>

    </article>
  );
}
