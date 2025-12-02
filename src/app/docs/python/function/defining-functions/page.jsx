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

  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python Functions — Full Cheat Sheet
      </h1>

      <p className="text-slate-700 leading-relaxed">
        A <strong>function</strong> is a reusable block of code that runs only
        when it is called. It helps prevent repetition and improves code
        structure.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* WHAT IS A FUNCTION */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            What is a Function?
          </h2>
          <p className="mt-2">
            A <strong>function</strong>:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Helps avoid repeating code.</li>
            <li>
              Can return data using <strong>return</strong>.
            </li>
            <li>Makes programs cleaner and more modular.</li>
          </ul>
        </section>

        {/* CREATE FUNCTION */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Creating a Function
          </h2>
          <p className="mt-2">
            Use the <strong>def</strong> keyword followed by a function name and
            parentheses.
          </p>
          <pre className={codeClass}>
            <code>{exBasicFunction}</code>
          </pre>
          <p className="mt-3">
            Python uses <strong>indentation</strong> to define the code block
            inside a function.
          </p>
        </section>

        {/* CALLING FUNCTION */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Calling a Function
          </h2>
          <p className="mt-2">
            Use the function name followed by parentheses to execute it.
          </p>
          <pre className={codeClass}>
            <code>{exCallFunction}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">Calling Multiple Times</h3>
          <pre className={codeClass}>
            <code>{exMultipleCalls}</code>
          </pre>
        </section>

        {/* FUNCTION NAMES */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Function Names
          </h2>
          <p className="mt-2">
            Function names follow the same rules as Python variable names:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Must start with a letter or an underscore (_)</li>
            <li>Can contain letters, numbers, and underscores</li>
            <li>Are case-sensitive</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">Valid Function Names</h3>
          <pre className={codeClass}>
            <code>{exValidNames}</code>
          </pre>
        </section>

        {/* WHY USE FUNCTIONS */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Why Use Functions?
          </h2>
          <p className="mt-2">
            Functions prevent code repetition and help you write clean,
            maintainable programs.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Without Functions (Repetitive Code)
          </h3>
          <pre className={codeClass}>
            <code>{exNoFunctions}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">
            With Functions (Reusable Code)
          </h3>
          <pre className={codeClass}>
            <code>{exWithFunctions}</code>
          </pre>
        </section>

        {/* RETURN VALUES */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Return Values
          </h2>
          <p className="mt-2">
            Use <code>return</code> to send a value back to the caller.
          </p>

          <h3 className="text-xl font-semibold mt-3">
            Function Returning a Value
          </h3>
          <pre className={codeClass}>
            <code>{exReturn}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">
            Using Return Value Directly
          </h3>
          <pre className={codeClass}>
            <code>{exDirectReturn}</code>
          </pre>
        </section>

        {/* PASS STATEMENT */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            The pass Statement
          </h2>
          <p className="mt-2">
            Use <code>pass</code> when defining a function with no body yet. It
            acts as a placeholder.
          </p>
          <pre className={codeClass}>
            <code>{exPass}</code>
          </pre>
          <p className="mt-2">
            This is useful when planning your function structure before adding
            logic.
          </p>
        </section>
      </div>
    </div>
  );
}
