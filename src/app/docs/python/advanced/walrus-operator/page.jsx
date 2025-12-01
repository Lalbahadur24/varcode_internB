import React from "react";

export default function WalrusOperatorPage() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Walrus Operator (:=)
      </h1>

      <p className="text-slate-700 leading-relaxed">
        The assignment expression operator <code>:=</code> lets you{" "}
        <strong>assign and use a value in the same expression</strong>. It was
        introduced in Python 3.8 and helps remove repetition, especially in
        loops, conditions, and comprehensions.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Basic usage */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Basic Usage</h2>

          <p className="mt-2">
            Common pattern: read or compute a value, stop when it&apos;s empty
            or invalid.
          </p>

          <pre className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`# Read until blank line
while (line := input("Enter: ")):
    print("You typed:", line)`}
          </pre>
        </section>

        {/* Conditions & comprehensions */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Conditions & Comprehensions
          </h2>

          <p className="mt-2">
            Use walrus when the same value is needed in the{" "}
            <strong>condition</strong> and inside the body / comprehension.
          </p>

          <pre className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`def cost(x):
    print("compute", x)
    return x * x

vals = [1, 2, 3]

# Compute once, use for both test and result
squares = [y for x in vals if (y := cost(x)) > 2]
print(squares)  # [4, 9]`}
          </pre>
        </section>

        {/* Regex example */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Regex Example
          </h2>

          <p className="mt-2">
            Typical pattern: test a match and reuse the same <code>Match</code>{" "}
            object if it exists.
          </p>

          <pre className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`import re

text = "ID: 12345"

if (m := re.search(r"ID: (\\d+)", text)):
    print(int(m.group(1)))  # 12345`}
          </pre>
        </section>

        {/* Loops */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Loops</h2>

          <p className="mt-2">
            You can pull items from a list / iterator until a stopping value
            appears.
          </p>

          <pre className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`items = [10, 20, 0, 30]

while items and (n := items.pop(0)) != 0:
    print("Processing:", n)`}
          </pre>
        </section>

        {/* Best practices */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Best Practices
          </h2>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Use when you&apos;d otherwise repeat the same expression in a
              condition and inside the block.
            </li>
            <li>Great for input loops, regex parsing, and filtering.</li>
            <li>
              Avoid deeply nested walrus expressions – they hurt readability.
            </li>
            <li>
              If the line feels confusing, split it into a normal assignment +
              condition instead.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
