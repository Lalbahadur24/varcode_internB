import React from "react";

export default function PythonComprehensions() {
  const dq = String.fromCharCode(34);

  // LIST COMPREHENSIONS
  const exListBasic = `numbers = [1, 2, 3, 4, 5]
squares = [x * x for x in numbers]
print(squares)`;

  const exListCondition = `numbers = [1, 2, 3, 4, 5]
evens = [x for x in numbers if x % 2 == 0]
print(evens)`;

  const exListIfElse = `nums = [1, 2, 3, 4, 5]
labels = ["even" if x % 2 == 0 else "odd" for x in nums]
print(labels)`;

  const exListNestedLoop = `pairs = [(x, y) for x in [1,2] for y in [3,4]]
print(pairs)`;

  const exListString = `text = ${dq}hello${dq}
chars = [c for c in text]
print(chars)`;

  // SET COMPREHENSIONS
  const exSetBasic = `numbers = [1, 2, 2, 3, 4, 4]
unique_squares = {x * x for x in numbers}
print(unique_squares)`;

  const exSetCondition = `numbers = [1, 2, 3, 4, 5]
evens = {x for x in numbers if x % 2 == 0}
print(evens)`;

  // DICTIONARY COMPREHENSIONS
  const exDictBasic = `numbers = [1, 2, 3, 4]
square_dict = {x: x * x for x in numbers}
print(square_dict)`;

  const exDictCondition = `numbers = [1, 2, 3, 4, 5]
even_dict = {x: x for x in numbers if x % 2 == 0}
print(even_dict)`;

  const exDictTransform = `words = ["apple", "banana", "cherry"]
length_map = {word: len(word) for word in words}
print(length_map)`;

  // NESTED COMPREHENSIONS
  const exNestedList = `matrix = [[1,2,3], [4,5,6]]
flatten = [num for row in matrix for num in row]
print(flatten)`;

  const exNestedDict = `matrix = [[1,2], [3,4]]
mapped = {i: [j*2 for j in row] for i, row in enumerate(matrix)}
print(mapped)`;

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-10">
      
      <h1 className="text-4xl font-bold">Python Comprehensions — Full Cheat Sheet</h1>

      <p className="text-lg mt-3">
        Python<strong> comprehensions</strong> provide a concise way to create lists, sets, 
        and dictionaries from existing iterables using a single readable expression.
      </p>
      <p className="mt-2">
        They make your code <strong>shorter, faster, and more expressive</strong>.
      </p>

      {/* LIST COMPREHENSIONS */}
      <section>
        <h2 className="text-2xl font-semibold">1. List Comprehensions</h2>
        <p className="mt-2">
          A list comprehension creates a new list by looping through an iterable, optionally 
          applying conditions or transformations.
        </p>

        <h3 className="text-xl font-semibold mt-4">Basic Syntax</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2">
          <code>[expression for item in iterable]</code>
        </pre>

        <h3 className="text-xl font-semibold mt-4">Basic Example</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exListBasic}</code></pre>

        <h3 className="text-xl font-semibold mt-4">List Comprehension with Condition</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exListCondition}</code></pre>

        <h3 className="text-xl font-semibold mt-4">If–Else Inside Comprehension</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exListIfElse}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Nested Loops</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exListNestedLoop}</code></pre>

        <h3 className="text-xl font-semibold mt-4">String Comprehension</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exListString}</code></pre>
      </section>

      {/* SET COMPREHENSIONS */}
      <section>
        <h2 className="text-2xl font-semibold">2. Set Comprehensions</h2>
        <p className="mt-2">
          Set comprehensions work like list comprehensions but generate a <strong>set</strong>.  
          Sets automatically remove duplicates.
        </p>

        <h3 className="text-xl font-semibold mt-4">Basic Set Comprehension</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exSetBasic}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Set Comprehension with Condition</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exSetCondition}</code></pre>
      </section>

      {/* DICTIONARY COMPREHENSIONS */}
      <section>
        <h2 className="text-2xl font-semibold">3. Dictionary Comprehensions</h2>
        <p className="mt-2">
          Dictionary comprehensions create new dictionaries by transforming or filtering 
          key:value pairs.
        </p>

        <h3 className="text-xl font-semibold mt-4">Basic Dictionary Comprehension</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exDictBasic}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Dictionary with Condition</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exDictCondition}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Transform Values in Dictionary</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exDictTransform}</code></pre>
      </section>

      {/* NESTED COMPREHENSIONS */}
      <section>
        <h2 className="text-2xl font-semibold">4. Nested Comprehensions</h2>
        <p className="mt-2">
          Comprehensions can contain multiple loops, used for flattening sequences 
          or transforming nested structures.
        </p>

        <h3 className="text-xl font-semibold mt-4">Flatten a 2D List</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exNestedList}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Nested Dictionary Comprehension</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exNestedDict}</code></pre>
      </section>

      {/* SUMMARY TABLE */}
      <section>
        <h2 className="text-2xl font-semibold">Comprehension Summary Table</h2>

        <table className="w-full border mt-4 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Type</th>
              <th className="border p-2">Syntax</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 font-semibold">List</td>
              <td className="border p-2 font-mono">[expression for x in iterable]</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Set</td>
              <td className="border p-2 font-mono">&#123;expression for x in iterable&#125;</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Dictionary</td>
              <td className="border p-2 font-mono">&#123;key:value for x in iterable&#125;</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">With Condition</td>
              <td className="border p-2 font-mono">[x for x in iterable if condition]</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Nested</td>
              <td className="border p-2 font-mono">[x for row in matrix for x in row]</td>
            </tr>
          </tbody>
        </table>
      </section>

    </article>
  );
}
