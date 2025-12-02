import React from "react";

export default function Recursion() {
  const dq = String.fromCharCode(34);

  // Examples
  const exCountdown = `def countdown(n):
  if n <= 0:
    print("Done!")
  else:
    print(n)
    countdown(n - 1)

countdown(5)`;

  const exFactorial = `def factorial(n):
  # Base case
  if n == 0 or n == 1:
    return 1
  # Recursive case
  else:
    return n * factorial(n - 1)

print(factorial(5))`;

  const exFibonacci = `def fibonacci(n):
  if n <= 1:
    return n
  else:
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(7))`;

  const exSumList = `def sum_list(numbers):
  if len(numbers) == 0:
    return 0
  else:
    return numbers[0] + sum_list(numbers[1:])

my_list = [1, 2, 3, 4, 5]
print(sum_list(my_list))`;

  const exFindMax = `def find_max(numbers):
  if len(numbers) == 1:
    return numbers[0]
  else:
    max_of_rest = find_max(numbers[1:])
    return numbers[0] if numbers[0] > max_of_rest else max_of_rest

my_list = [3, 7, 2, 9, 1]
print(find_max(my_list))`;

  const exGetLimit = `import sys
print(sys.getrecursionlimit())`;

  const exSetLimit = `import sys
sys.setrecursionlimit(2000)
print(sys.getrecursionlimit())`;

  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python Recursion — Full Detailed Notes
      </h1>

      <p className="text-slate-700 leading-relaxed">
        <strong>Recursion</strong> is a programming technique where a function{" "}
        <strong>calls itself</strong>. It is powerful for problems that can be
        broken into smaller subproblems.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* INTRO */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            What is Recursion?
          </h2>
          <p className="mt-2">
            In recursion, a function solves a small part of the problem and
            calls itself to solve the rest.
          </p>
          <p className="mt-2">
            It is commonly used in tree traversal, searching, sorting, and
            mathematical problems like factorial and Fibonacci.
          </p>
          <p className="mt-2">
            You must be careful with recursion, otherwise it can cause{" "}
            <strong>infinite calls</strong> or{" "}
            <strong>stack overflow errors</strong>.
          </p>
        </section>

        {/* SIMPLE RECURSION */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            A Simple Recursive Example
          </h2>
          <p className="mt-2">A recursive countdown function:</p>
          <pre className={codeClass}>
            <code>{exCountdown}</code>
          </pre>
        </section>

        {/* BASE CASE + RECURSIVE CASE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Base Case & Recursive Case
          </h2>
          <p className="mt-2">
            Every recursive function <strong>must have two parts</strong>:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>
              <strong>Base Case</strong> — Stops the recursion.
            </li>
            <li>
              <strong>Recursive Case</strong> — Function calls itself with a
              smaller/simpler input.
            </li>
          </ul>
          <p className="mt-2">
            Without a base case, recursion never stops and causes a{" "}
            <strong>stack overflow</strong>.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Example: Factorial Function
          </h3>
          <pre className={codeClass}>
            <code>{exFactorial}</code>
          </pre>
        </section>

        {/* FIBONACCI */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Fibonacci Sequence (Recursive)
          </h2>
          <p className="mt-2">
            The <strong>Fibonacci sequence</strong> is defined such that each
            number is the sum of the previous two.
          </p>
          <p className="mt-2">Sequence: 0, 1, 1, 2, 3, 5, 8, ...</p>

          <pre className={codeClass}>
            <code>{exFibonacci}</code>
          </pre>
        </section>

        {/* LIST RECURSION */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Recursion with Lists
          </h2>
          <p className="mt-2">
            Recursion can handle lists by working with one element at a time and
            recursing on the rest.
          </p>

          <h3 className="text-xl font-semibold mt-4">Example: Sum of a List</h3>
          <pre className={codeClass}>
            <code>{exSumList}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">
            Example: Find Maximum in List
          </h3>
          <pre className={codeClass}>
            <code>{exFindMax}</code>
          </pre>
        </section>

        {/* RECURSION LIMIT */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Recursion Depth Limit
          </h2>
          <p className="mt-2">
            Python limits recursion depth to prevent crashes. The default limit
            is usually around <strong>1000</strong>.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Check current recursion limit
          </h3>
          <pre className={codeClass}>
            <code>{exGetLimit}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">
            Increase recursion limit
          </h3>
          <p className="mt-1">
            Be careful — setting it too high can crash your program.
          </p>
          <pre className={codeClass}>
            <code>{exSetLimit}</code>
          </pre>
        </section>

        {/* WHEN TO USE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            When to Use Recursion?
          </h2>
          <p className="mt-2">Recursion is ideal when:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Problems can be divided into smaller similar subproblems</li>
            <li>Working with trees, graphs, or nested structures</li>
            <li>
              Problems are naturally recursive (factorial, Fibonacci,
              permutations)
            </li>
          </ul>
          <p className="mt-3">
            Use recursion wisely for clean, elegant solutions — but always make
            sure you have a clear <strong>base case</strong> and that each step
            moves closer to it.
          </p>
        </section>
      </div>
    </div>
  );
}
