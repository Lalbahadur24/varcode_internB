import React from "react";

export default function Generators() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">Generators</h1>

      <p className="text-slate-700 leading-relaxed">
        Generators are lazy iterables defined with the <code>yield</code>{" "}
        keyword. They produce values on demand instead of storing everything in
        memory, making them ideal for large datasets and infinite sequences.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Why Generators */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Why Generators?
          </h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Memory-efficient: yields items one-by-one</li>
            <li>Lazy evaluation: compute only when needed</li>
            <li>Composable for pipelines (map, filter, itertools)</li>
            <li>Avoids writing complex iterator classes</li>
          </ul>
        </section>

        {/* Yield Basics */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Yield Basics
          </h2>

          <div className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080] mt-3">
            {`def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1

for x in count_up_to(5):
    print(x)`}
          </div>

          <p className="mt-2">
            Each <code>yield</code> pauses the function and resumes from the
            same point on the next iteration.
          </p>
        </section>

        {/* Generator Expressions */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Generator Expressions
          </h2>

          <div className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080] mt-3">
            {`# List comprehension (eager)
squares_list = [x*x for x in range(10)]

# Generator expression (lazy)
squares_gen = (x*x for x in range(10))

print(next(squares_gen))  # 0
print(next(squares_gen))  # 1`}
          </div>
        </section>

        {/* Advanced Methods */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Advanced Generator Methods
          </h2>

          <div className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080] mt-3">
            {`def echo():
    received = None
    try:
        while True:
            received = yield received
    except GeneratorExit:
        print("Generator closed")

g = echo()
print(next(g))            # Start -> None
print(g.send("hi"))       # Send value in
g.close()                 # Triggers GeneratorExit`}
          </div>
        </section>

        {/* itertools */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Chaining with itertools
          </h2>

          <div className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080] mt-3">
            {`import itertools as it

def read_lines(paths):
    # Lazily read from many files
    files = (open(p, 'r', encoding='utf-8') for p in paths)
    with it.chain.from_iterable(files) as all_lines:
        for line in all_lines:
            yield line.rstrip('\\n')`}
          </div>
        </section>

        {/* Use Cases */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Use Cases</h2>

          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Streaming large logs / CSV data</li>
            <li>Producer–consumer pipelines</li>
            <li>Infinite sequences</li>
            <li>Tree & graph traversals</li>
          </ul>

          <div className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080] mt-3">
            {`def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

f = fibonacci()
for _ in range(6):
    print(next(f))  # 0 1 1 2 3 5`}
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Best Practices
          </h2>

          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Prefer generator expressions for simple transforms</li>
            <li>
              Use <code>yield from</code> to delegate subgenerators
            </li>
            <li>
              Use <code>contextlib.ExitStack</code> for many file handles
            </li>
            <li>Document that generators are single-use</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
