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

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-10">
      <h1 className="text-4xl font-bold">Python Lambda — Full Notes</h1>

      {/* INTRO */}
      <section>
        <h2 className="text-2xl font-semibold">What is a Lambda Function?</h2>
        <p className="mt-2">
          A <strong>lambda function</strong> is a small, anonymous function in Python.
          It can take any number of arguments, but it can only contain{" "}
          <strong>one expression</strong>. It is often used when a short function is
          needed for a short period of time.
        </p>
      </section>

      {/* SYNTAX */}
      <section>
        <h2 className="text-2xl font-semibold">Lambda Syntax</h2>
        <pre className="p-3 rounded border bg-gray-50 mt-2">
          <code>lambda arguments : expression</code>
        </pre>
        <p className="mt-2">
          The expression is evaluated and the result is returned automatically.
        </p>
      </section>

      {/* BASIC EXAMPLES */}
      <section>
        <h2 className="text-2xl font-semibold">Basic Lambda Examples</h2>

        <h3 className="text-xl font-semibold mt-3">Add 10 to a number</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exAdd10}</code></pre>

        <h3 className="text-xl font-semibold mt-3">Multiply two numbers</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exMultiply}</code></pre>

        <h3 className="text-xl font-semibold mt-3">Sum three numbers</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exSum}</code></pre>
      </section>

      {/* WHY USE LAMBDA */}
      <section>
        <h2 className="text-2xl font-semibold">Why Use Lambda Functions?</h2>
        <p className="mt-2">
          Lambda functions are powerful when used inside other functions, especially
          when creating <strong>function factories</strong> or <strong>closures</strong>.
        </p>

        <h3 className="text-xl font-semibold mt-3">Function that returns a lambda</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exDoubler}</code></pre>

        <h3 className="text-xl font-semibold mt-3">Triple any number</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exTripler}</code></pre>

        <h3 className="text-xl font-semibold mt-3">Doubler + Tripler together</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exDoubleTriple}</code></pre>
      </section>

      {/* MAP FILTER SORTED */}
      <section>
        <h2 className="text-2xl font-semibold">Lambda with Built-in Functions</h2>
        <p className="mt-2">Lambda works perfectly with functions like map(), filter(), and sorted().</p>

        <h3 className="text-xl font-semibold mt-4">Using lambda with map()</h3>
        <p className="mt-1">Apply a function to every item in a list.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exMap}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Using lambda with filter()</h3>
        <p className="mt-1">Filter values based on a condition.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exFilter}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Using lambda with sorted()</h3>
        <p className="mt-1">Custom sorting using lambda as the key.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exSortedTuples}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Sort strings by length</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exSortedLength}</code></pre>
      </section>

      {/* END */}
      <section>
        <h2 className="text-2xl font-semibold">When to Use Lambda?</h2>
        <p className="mt-2">
          Use lambda when you need a quick, throwaway function — especially inside{" "}
          <strong>map()</strong>, <strong>filter()</strong>, <strong>sorted()</strong>,
          or as a function return value.
        </p>
      </section>
    </article>
  );
}
