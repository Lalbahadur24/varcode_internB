import React from "react";

export default function Generators() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Generators</h1>
      <p>
        Generators are lazy iterables defined with the <code>yield</code> keyword. They produce
        values on demand instead of building entire collections in memory, making them ideal for
        large or infinite sequences and streaming pipelines.
      </p>

      <section>
        <h2>Why Generators?</h2>
        <ul>
          <li>Memory-efficient: yield items one by one</li>
          <li>Lazy evaluation: compute values only when needed</li>
          <li>Composable: chain with other iterables (map/filter/itertools)</li>
          <li>Simpler than writing custom iterator classes</li>
        </ul>
      </section>

      <section>
        <h2>Yield Basics</h2>
        <pre><code>{`def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1

for x in count_up_to(5):
    print(x)`}</code></pre>
        <p>
          Each time the generator function hits <code>yield</code>, it pauses and returns a value.
          Execution resumes on the next iteration right after the last <code>yield</code>.
        </p>
      </section>

      <section>
        <h2>Generator Expressions</h2>
        <pre><code>{`# List comprehension builds a full list in memory
squares_list = [x*x for x in range(10)]

# Generator expression yields one value at a time
squares_gen = (x*x for x in range(10))

print(next(squares_gen))  # 0
print(next(squares_gen))  # 1`}</code></pre>
      </section>

      <section>
        <h2>Advanced Generator Methods</h2>
        <pre><code>{`def echo():
    received = None
    try:
        while True:
            received = yield received
    except GeneratorExit:
        print("Generator closed")

g = echo()
print(next(g))            # Start; prints None
print(g.send("hi"))       # Send value into generator -> yields it back
g.close()                  # Triggers GeneratorExit`}</code></pre>
      </section>

      <section>
        <h2>Chaining with itertools</h2>
        <pre><code>{`import itertools as it

def read_lines(paths):
    # Lazily read from multiple files
    files = (open(p, 'r', encoding='utf-8') for p in paths)
    with it.chain.from_iterable(files) as all_lines:
        for line in all_lines:
            yield line.rstrip('\n')`}</code></pre>
      </section>

      <section>
        <h2>Use Cases</h2>
        <ul>
          <li>Stream processing (logs, large CSVs)</li>
          <li>Producer-consumer pipelines</li>
          <li>Infinite sequences (e.g., Fibonacci)</li>
          <li>Tree/graph traversals</li>
        </ul>
        <pre><code>{`def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

f = fibonacci()
for _ in range(6):
    print(next(f))  # 0 1 1 2 3 5`}</code></pre>
      </section>

      <section>
        <h2>Best Practices</h2>
        <ul>
          <li>Prefer generator expressions for simple transformations</li>
          <li>Use <code>yield from</code> to delegate to sub-generators</li>
          <li>Close files properly; consider <code>contextlib.ExitStack</code></li>
          <li>Document whether a generator is single-use</li>
        </ul>
      </section>
    </div>
  );
}

