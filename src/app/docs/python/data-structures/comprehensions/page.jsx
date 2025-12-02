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

  // MASTER CODE BOX COMPONENT
  const CodeBox = ({ code }) => (
    <div className="border border-gray-200 rounded-lg overflow-hidden mt-4">
      <div className="flex">
        <div className="w-1 bg-[#4a0080]" />
        <pre className="bg-white p-6 text-sm font-mono leading-7 overflow-x-auto">
          {code}
        </pre>
      </div>
    </div>
  );

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-10 text-slate-700">
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python Comprehensions — Full Cheat Sheet
      </h1>

      <p>
        Python <strong>comprehensions</strong> create lists, sets, and
        dictionaries in a clean, readable, fast way.
      </p>

      {/* LIST COMPREHENSIONS */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          1. List Comprehensions
        </h2>
        <p className="mt-2">
          Create new lists using loops, conditions, and transformations.
        </p>

        <h3 className="text-xl font-semibold mt-4">Basic Syntax</h3>
        <CodeBox code={`[expression for item in iterable]`} />

        <h3 className="text-xl font-semibold mt-4">Basic Example</h3>
        <CodeBox code={exListBasic} />

        <h3 className="text-xl font-semibold mt-4">With Condition</h3>
        <CodeBox code={exListCondition} />

        <h3 className="text-xl font-semibold mt-4">If–Else Inside</h3>
        <CodeBox code={exListIfElse} />

        <h3 className="text-xl font-semibold mt-4">Nested Loops</h3>
        <CodeBox code={exListNestedLoop} />

        <h3 className="text-xl font-semibold mt-4">String Comprehension</h3>
        <CodeBox code={exListString} />
      </section>

      {/* SET COMPREHENSIONS */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          2. Set Comprehensions
        </h2>

        <p className="mt-2">Creates sets, removing duplicates automatically.</p>

        <h3 className="text-xl font-semibold mt-4">Basic Set</h3>
        <CodeBox code={exSetBasic} />

        <h3 className="text-xl font-semibold mt-4">With Condition</h3>
        <CodeBox code={exSetCondition} />
      </section>

      {/* DICTIONARY COMPREHENSIONS */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          3. Dictionary Comprehensions
        </h2>

        <p className="mt-2">
          Create dictionaries by transforming keys and values.
        </p>

        <h3 className="text-xl font-semibold mt-4">Basic Example</h3>
        <CodeBox code={exDictBasic} />

        <h3 className="text-xl font-semibold mt-4">With Condition</h3>
        <CodeBox code={exDictCondition} />

        <h3 className="text-xl font-semibold mt-4">Transform Values</h3>
        <CodeBox code={exDictTransform} />
      </section>

      {/* NESTED COMPREHENSIONS */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          4. Nested Comprehensions
        </h2>

        <p className="mt-2">
          Useful for flattening or transforming nested structures.
        </p>

        <h3 className="text-xl font-semibold mt-4">Flatten List</h3>
        <CodeBox code={exNestedList} />

        <h3 className="text-xl font-semibold mt-4">Nested Dictionary</h3>
        <CodeBox code={exNestedDict} />
      </section>

      {/* SUMMARY TABLE */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Comprehension Summary Table
        </h2>

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
              <td className="border p-2 font-mono">
                [expression for x in iterable]
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Set</td>
              <td className="border p-2 font-mono">{`{expression for x in iterable}`}</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Dictionary</td>
              <td className="border p-2 font-mono">{`{key:value for x in iterable}`}</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">With Condition</td>
              <td className="border p-2 font-mono">
                [x for x in iterable if condition]
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Nested</td>
              <td className="border p-2 font-mono">
                [x for row in matrix for x in row]
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
