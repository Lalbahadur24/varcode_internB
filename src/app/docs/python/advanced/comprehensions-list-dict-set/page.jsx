import React from "react";

export default function ComprehensionsPage() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Comprehensions (List, Dict, Set, Generator)
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Comprehensions provide concise syntax for transforming and filtering
        iterables. They are often faster and cleaner than equivalent{" "}
        <code>for</code> loops.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* List Comprehensions */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            List Comprehensions
          </h2>

          <pre className="mt-4 p-4 bg-white border border-gray-200 rounded-lg font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`squares = [x*x for x in range(6)]          # [0,1,4,9,16,25]
evens = [x for x in range(10) if x % 2 == 0]
pairs = [(i, j) for i in range(2) for j in range(3)]`}
          </pre>
        </section>

        {/* Dict Comprehensions */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Dict Comprehensions
          </h2>

          <pre className="mt-4 p-4 bg-white border border-gray-200 rounded-lg font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`names = ['alice','bob','charlie']
lengths = {name: len(name) for name in names}
swapped = {v: k for k, v in {'a':1, 'b':2}.items()}`}
          </pre>
        </section>

        {/* Set Comprehensions */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Set Comprehensions
          </h2>

          <pre className="mt-4 p-4 bg-white border border-gray-200 rounded-lg font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`mods = {x % 3 for x in range(10)}   # {0,1,2}
unique_letters = {ch for ch in 'banana'}  # {'b','a','n'}`}
          </pre>
        </section>

        {/* Generator Comprehensions */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Generator Comprehensions
          </h2>

          <pre className="mt-4 p-4 bg-white border border-gray-200 rounded-lg font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`gen = (x*x for x in range(1_000_000))
first = next(gen)  # 1
# Lazy: does not create full list in memory`}
          </pre>
        </section>

        {/* Conditional Logic */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Conditional Logic
          </h2>

          <pre className="mt-4 p-4 bg-white border border-gray-200 rounded-lg font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`labels = ['even' if x % 2 == 0 else 'odd' for x in range(5)]
filtered = [x*x for x in range(10) if x % 3 == 0]`}
          </pre>
        </section>

        {/* Nested Comprehensions */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Nested Comprehensions
          </h2>

          <pre className="mt-4 p-4 bg-white border border-gray-200 rounded-lg font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`matrix = [[i*j for j in range(3)] for i in range(3)]
flattened = [x for row in matrix for x in row]`}
          </pre>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Best Practices
          </h2>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Keep comprehensions short; complex logic belongs in loops.</li>
            <li>
              Use generator comprehensions for large sequences
              (memory-efficient).
            </li>
            <li>Use parentheses or line breaks for readability.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
