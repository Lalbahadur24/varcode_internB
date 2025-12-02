import React from "react";

export default function PythonCustomExceptions() {
  const dq = String.fromCharCode(34);

  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

  // EXAMPLES
  const exBasic = `class MyError(Exception):
  pass

raise MyError(${dq}Something went wrong!${dq})`;

  const exInit = `class AgeError(Exception):
  def __init__(self, message):
    self.message = message

age = -5
if age < 0:
  raise AgeError(${dq}Age cannot be negative${dq})`;

  const exWithArgs = `class ValidationError(Exception):
  pass

def check_value(x):
  if x < 0:
    raise ValidationError(${dq}Negative values not allowed${dq})

check_value(-2)`;

  const exMultiple = `class CustomError(Exception):
  pass

class ValueTooSmallError(CustomError):
  pass

class ValueTooLargeError(CustomError):
  pass

def check(num):
  if num < 10:
    raise ValueTooSmallError(${dq}Value is too small${dq})
  if num > 100:
    raise ValueTooLargeError(${dq}Value is too large${dq})
  return ${dq}Value is acceptable${dq}

check(150)`;

  const exTryCustom = `try:
  raise ValueError(${dq}Invalid number${dq})
except ValueError as e:
  print(${dq}Caught custom error:${dq}, e)`;

  return (
    <div className="space-y-6">
      {/* PAGE TITLE */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python Custom Exceptions — Full Cheat Sheet
      </h1>

      <div className="space-y-12 text-slate-700 leading-relaxed">
        {/* INTRO */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            What Are Custom Exceptions?
          </h2>
          <p className="mt-2">
            Python allows you to create your own exception classes. These help
            you provide <strong>clear, meaningful errors</strong> that match
            your application’s needs.
          </p>

          <h3 className="text-xl font-semibold mt-4 text-[#4a0080]">
            Why Use Custom Exceptions?
          </h3>
          <ul className="list-disc ml-6 leading-7 mt-2">
            <li>Make error messages easier to understand</li>
            <li>Structure your code with specific exception types</li>
            <li>Better debugging &amp; maintainability</li>
            <li>Useful for validating API inputs, forms, user data, etc.</li>
          </ul>
        </section>

        {/* BASIC EXCEPTION */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Creating a Basic Custom Exception
          </h2>
          <p className="mt-2">
            All custom exceptions must inherit from Python’s built-in{" "}
            <strong>Exception</strong> class.
          </p>

          <pre className={codeClass}>
            <code>{exBasic}</code>
          </pre>
        </section>

        {/* CUSTOM INIT */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Custom Exception with Constructor
          </h2>
          <p className="mt-2">
            You can customize the message using <code>__init__()</code>.
          </p>

          <pre className={codeClass}>
            <code>{exInit}</code>
          </pre>
        </section>

        {/* USING CUSTOM ERRORS */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Using Custom Exceptions in Functions
          </h2>

          <pre className={codeClass}>
            <code>{exWithArgs}</code>
          </pre>
        </section>

        {/* MULTIPLE CUSTOM ERRORS */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Multiple Custom Exceptions
          </h2>
          <p className="mt-2">
            You can structure your exceptions in a hierarchy for more control.
          </p>

          <pre className={codeClass}>
            <code>{exMultiple}</code>
          </pre>
        </section>

        {/* TRY-EXCEPT CUSTOM */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Catching Custom Exceptions
          </h2>
          <p className="mt-2">
            Use <code>try–except</code> just like with built-in exceptions.
          </p>

          <pre className={codeClass}>
            <code>{exTryCustom}</code>
          </pre>
        </section>

        {/* BEST PRACTICES */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Best Practices
          </h2>

          <ul className="list-disc ml-6 mt-3 leading-7">
            <li>
              Always inherit from <code>Exception</code> (not{" "}
              <code>BaseException</code>)
            </li>
            <li>
              Use meaningful names like <code>LoginError</code> or{" "}
              <code>AgeError</code>
            </li>
            <li>Do not overuse exceptions—only when necessary</li>
            <li>Group related exceptions under a common base class</li>
          </ul>
        </section>

        {/* TABLE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Common Use Cases for Custom Exceptions
          </h2>

          <table className="w-full border mt-4 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2 w-1/3">Use Case</th>
                <th className="border p-2">Example Exception Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Invalid user input</td>
                <td className="border p-2 font-mono">InputError</td>
              </tr>
              <tr>
                <td className="border p-2">Authentication failure</td>
                <td className="border p-2 font-mono">LoginError</td>
              </tr>
              <tr>
                <td className="border p-2">API request problems</td>
                <td className="border p-2 font-mono">APIError</td>
              </tr>
              <tr>
                <td className="border p-2">Invalid format or data</td>
                <td className="border p-2 font-mono">FormatError</td>
              </tr>
              <tr>
                <td className="border p-2">File validation</td>
                <td className="border p-2 font-mono">FileError</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* SUMMARY */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>

          <ul className="list-disc ml-6 mt-3 leading-7">
            <li>
              Custom exceptions help in writing clean, understandable error
              handling.
            </li>
            <li>
              They inherit from Python’s built-in <code>Exception</code> class.
            </li>
            <li>
              Useful for input validation, API errors, business logic
              validation, etc.
            </li>
            <li>
              Can be organized in hierarchies for better error management.
            </li>
            <li>
              Use them with <code>try–except</code> statements like normal
              exceptions.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
