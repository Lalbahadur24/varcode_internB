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

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-10">
      <h1 className="text-4xl font-bold">Python Recursion — Full Detailed Notes</h1>

      {/* INTRO */}
      <section>
        <h2 className="text-2xl font-semibold">What is Recursion?</h2>
        <p className="mt-2">
          <strong>Recursion</strong> is a programming technique where a function{" "}
          <strong>calls itself</strong>. It is commonly used in mathematics and
          computer science to solve problems that can be broken down into smaller,
          repeating subproblems.
        </p>
        <p className="mt-2">
          Recursion makes certain problems easier to solve, such as tree traversal,
          searching, sorting, and mathematical sequences.
        </p>
        <p className="mt-2">
          However, recursion must be used carefully, because incorrect recursive
          logic can cause <strong>infinite loops</strong> or{" "}
          <strong>excessive memory usage</strong>.
        </p>
      </section>

      {/* SIMPLE RECURSION */}
      <section>
        <h2 className="text-2xl font-semibold">A Simple Recursive Example</h2>
        <p className="mt-2">A recursive countdown function:</p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exCountdown}</code></pre>
      </section>

      {/* BASE CASE + RECURSIVE CASE */}
      <section>
        <h2 className="text-2xl font-semibold">Base Case & Recursive Case</h2>
        <p className="mt-2">
          Every recursive function <strong>must have two parts</strong>:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>
            <strong>Base Case</strong> — A condition that stops the recursion.
          </li>
          <li>
            <strong>Recursive Case</strong> — The function calling itself with a{" "}
            modified argument.
          </li>
        </ul>
        <p className="mt-2">
          Without a base case, the recursion will continue forever, eventually
          causing a <strong>stack overflow</strong>.
        </p>

        <h3 className="text-xl font-semibold mt-4">Example: Factorial Function</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exFactorial}</code></pre>
      </section>

      {/* FIBONACCI */}
      <section>
        <h2 className="text-2xl font-semibold">Fibonacci Sequence (Recursive)</h2>
        <p className="mt-2">
          The <strong>Fibonacci sequence</strong> is defined such that each number is
          the sum of the two preceding ones.
        </p>
        <p className="mt-2">Sequence: 0, 1, 1, 2, 3, 5, 8, ...</p>

        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exFibonacci}</code></pre>
      </section>

      {/* LIST RECURSION */}
      <section>
        <h2 className="text-2xl font-semibold">Recursion with Lists</h2>
        <p className="mt-2">
          Recursion can process lists by handling one element at a time.
        </p>

        <h3 className="text-xl font-semibold mt-4">Example: Sum of a List</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exSumList}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Example: Find Maximum in List</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exFindMax}</code></pre>
      </section>

      {/* RECURSION LIMIT */}
      <section>
        <h2 className="text-2xl font-semibold">Recursion Depth Limit</h2>
        <p className="mt-2">
          Python limits how deep recursion can go to prevent infinite loops from
          crashing your program. The default recursion depth is usually{" "}
          <strong>around 1000</strong>.
        </p>

        <h3 className="text-xl font-semibold mt-4">Check current recursion limit</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exGetLimit}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Increase recursion limit</h3>
        <p className="mt-1">
          Be careful—raising the limit too high may cause a crash.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exSetLimit}</code></pre>
      </section>

      {/* END */}
      <section>
        <h2 className="text-2xl font-semibold">When to Use Recursion?</h2>
        <p className="mt-2">Recursion is ideal when:</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Problems can be divided into smaller sub-problems</li>
          <li>Working with trees, graphs, or nested structures</li>
          <li>The logic naturally fits recursive definitions (factorial, Fibonacci)</li>
        </ul>
        <p className="mt-3">Use recursion wisely for clean, elegant solutions!</p>
      </section>
    </article>
  );
}
