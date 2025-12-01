import React from "react";

export default function PythonFunctions() {
  const dq = String.fromCharCode(34);

  // Code examples
  const exBasicFunction = `def my_function():
  print("Hello from a function")`;

  const exCallFunction = `${exBasicFunction}

my_function()`;

  const exMultipleCalls = `${exBasicFunction}

my_function()
my_function()
my_function()`;

  const exValidNames = `def calculate_sum():
  pass

def _private_function():
  pass

def myFunction2():
  pass`;

  const exNoFunctions = `temp1 = 77
celsius1 = (temp1 - 32) * 5/9
print(celsius1)

temp2 = 95
celsius2 = (temp2 - 32) * 5/9
print(celsius2)

temp3 = 50
celsius3 = (temp3 - 32) * 5/9
print(celsius3)`;

  const exWithFunctions = `def fahrenheit_to_celsius(f):
  return (f - 32) * 5/9

print(fahrenheit_to_celsius(77))
print(fahrenheit_to_celsius(95))
print(fahrenheit_to_celsius(50))`;

  const exReturn = `def get_greeting():
  return "Hello from a function"

message = get_greeting()
print(message)`;

  const exDirectReturn = `def get_greeting():
  return "Hello from a function"

print(get_greeting())`;

  const exPass = `def my_function():
  pass`;

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-10">
      <h1 className="text-4xl font-bold">Python Functions — Full Cheat Sheet</h1>

      {/* WHAT IS A FUNCTION */}
      <section>
        <h2 className="text-2xl font-semibold">What is a Function?</h2>
        <p className="mt-2">
          A <strong>function</strong> is a reusable block of code that runs only
          when it is called. It helps prevent repetition and improves code
          structure.
        </p>
        <ul className="list-disc ml-6 mt-3">
          <li>Functions help avoid repeating code.</li>
          <li>They can return data using <strong>return</strong>.</li>
          <li>Useful for organization and modular programming.</li>
        </ul>
      </section>

      {/* CREATE FUNCTION */}
      <section>
        <h2 className="text-2xl font-semibold">Creating a Function</h2>
        <p className="mt-2">
          Use the <strong>def</strong> keyword followed by a function name and
          parentheses.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-3">
          <code>{exBasicFunction}</code>
        </pre>
        <p className="mt-3">
          Python uses <strong>indentation</strong> to define code blocks inside
          a function.
        </p>
      </section>

      {/* CALLING FUNCTION */}
      <section>
        <h2 className="text-2xl font-semibold">Calling a Function</h2>
        <p className="mt-2">Use the function name followed by parentheses.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-3">
          <code>{exCallFunction}</code>
        </pre>

        <h3 className="text-xl font-semibold mt-4">Calling multiple times</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-3">
          <code>{exMultipleCalls}</code>
        </pre>
      </section>

      {/* FUNCTION NAMES */}
      <section>
        <h2 className="text-2xl font-semibold">Function Names</h2>
        <p className="mt-2">
          Function names follow the same rules as Python variables:
        </p>
        <ul className="list-disc ml-6 mt-3">
          <li>Must start with a letter or underscore</li>
          <li>Can contain letters, numbers, underscores</li>
          <li>Case-sensitive</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Valid Function Names</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2">
          <code>{exValidNames}</code>
        </pre>
      </section>

      {/* WHY USE FUNCTIONS */}
      <section>
        <h2 className="text-2xl font-semibold">Why Use Functions?</h2>
        <p className="mt-2">
          Functions prevent code repetition and help in writing clean,
          maintainable programs.
        </p>

        <h3 className="text-xl font-semibold mt-4">
          Without Functions (Repetitive Code)
        </h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2">
          <code>{exNoFunctions}</code>
        </pre>

        <h3 className="text-xl font-semibold mt-4">With Functions (Reusable)</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2">
          <code>{exWithFunctions}</code>
        </pre>
      </section>

      {/* RETURN VALUES */}
      <section>
        <h2 className="text-2xl font-semibold">Return Values</h2>
        <p className="mt-2">
          Use <strong>return</strong> to send a value back to the caller.
        </p>

        <h3 className="text-xl font-semibold mt-4">Function Returning a Value</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2">
          <code>{exReturn}</code>
        </pre>

        <h3 className="text-xl font-semibold mt-4">
          Using Return Value Directly
        </h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2">
          <code>{exDirectReturn}</code>
        </pre>
      </section>

      {/* PASS STATEMENT */}
      <section>
        <h2 className="text-2xl font-semibold">The pass Statement</h2>
        <p className="mt-2">
          Use <strong>pass</strong> when defining a function with no body yet.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-3">
          <code>{exPass}</code>
        </pre>
        <p className="mt-2">
          This allows you to create a function structure before adding logic.
        </p>
      </section>
    </article>
  );
}
