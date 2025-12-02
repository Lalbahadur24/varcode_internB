import React from "react";

export default function PythonLambda() {
  const dq = String.fromCharCode(34);

  // Basic examples
  const exAdd10 = `x = lambda a : a + 10
print(x(5))`;

  const exMultiply = `x = lambda a, b : a * b
print(x(5, 6))`;

  const exSum = `x = lambda a, b, c : a + b + c
print(x(5, 6, 2))`;

  // Lambda inside functions
  const exDoubler = `def myfunc(n):
  return lambda a : a * n

mydoubler = myfunc(2)
print(mydoubler(11))`;

  const exTripler = `def myfunc(n):
  return lambda a : a * n

mytripler = myfunc(3)
print(mytripler(11))`;

  const exDoubleTriple = `def myfunc(n):
  return lambda a : a * n

mydoubler = myfunc(2)
mytripler = myfunc(3)

print(mytripler(11))`;

  // Map, Filter, Sorted
  const exMap = `numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))
print(doubled)`;

  const exFilter = `numbers = [1, 2, 3, 4, 5, 6, 7, 8]
odd_numbers = list(filter(lambda x: x % 2 != 0, numbers))
print(odd_numbers)`;

  const exSortedTuples = `students = [("Emil", 25), ("Tobias", 22), ("Linus", 28)]
sorted_students = sorted(students, key=lambda x: x[1])
print(sorted_students)`;

  const exSortedLength = `words = ["apple", "pie", "banana", "cherry"]
sorted_words = sorted(words, key=lambda x: len(x))
print(sorted_words)`;

  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python Lambda — Full Notes
      </h1>

      <p className="text-slate-700 leading-relaxed">
        A <strong>lambda function</strong> is a small, anonymous function in
        Python. It can take any number of arguments but contains only{" "}
        <strong>one expression</strong>.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* INTRO */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            What is a Lambda Function?
          </h2>
          <p className="mt-2">
            Lambda functions are used when you need a short, throwaway function.
          </p>
        </section>

        {/* SYNTAX */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Lambda Syntax
          </h2>
          <pre className={codeClass}>
            <code>lambda arguments : expression</code>
          </pre>
          <p className="mt-2">
            The expression is evaluated and returned automatically.
          </p>
        </section>

        {/* BASIC EXAMPLES */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Basic Lambda Examples
          </h2>

          <h3 className="text-xl font-semibold mt-3">Add 10 to a number</h3>
          <pre className={codeClass}>
            <code>{exAdd10}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-3">Multiply two numbers</h3>
          <pre className={codeClass}>
            <code>{exMultiply}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-3">Sum three numbers</h3>
          <pre className={codeClass}>
            <code>{exSum}</code>
          </pre>
        </section>

        {/* WHY USE LAMBDA */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Why Use Lambda Functions?
          </h2>
          <p className="mt-2">
            Lambda functions are extremely useful with <strong>closures</strong>{" "}
            and function factories.
          </p>

          <h3 className="text-xl font-semibold mt-3">
            Function returning a lambda
          </h3>
          <pre className={codeClass}>
            <code>{exDoubler}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-3">Triple any number</h3>
          <pre className={codeClass}>
            <code>{exTripler}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-3">
            Doubler + Tripler together
          </h3>
          <pre className={codeClass}>
            <code>{exDoubleTriple}</code>
          </pre>
        </section>

        {/* MAP FILTER SORTED */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Lambda with Built-in Functions
          </h2>
          <p className="mt-2">
            Lambda works perfectly with <strong>map()</strong>,{" "}
            <strong>filter()</strong>, and <strong>sorted()</strong>.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Using lambda with map()
          </h3>
          <pre className={codeClass}>
            <code>{exMap}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">
            Using lambda with filter()
          </h3>
          <pre className={codeClass}>
            <code>{exFilter}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">
            Using lambda with sorted()
          </h3>
          <pre className={codeClass}>
            <code>{exSortedTuples}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">Sort strings by length</h3>
          <pre className={codeClass}>
            <code>{exSortedLength}</code>
          </pre>
        </section>

        {/* END */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            When to Use Lambda?
          </h2>
          <p className="mt-2">
            Use lambda when you need a small, quick function inside{" "}
            <strong>map()</strong>, <strong>filter()</strong>,{" "}
            <strong>sorted()</strong>, or as a return value from functions.
          </p>
        </section>
      </div>
    </div>
  );
}
