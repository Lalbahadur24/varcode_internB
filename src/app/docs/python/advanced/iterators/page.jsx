import React from "react";

export default function IteratorsPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Iterators</h1>
      <p>
        The Python iterator protocol consists of two methods: <code>__iter__()</code> returning
        the iterator itself, and <code>__next__()</code> returning the next item or raising
        <code>StopIteration</code> when exhausted.
      </p>

      <section>
        <h2>Built-in Iterators</h2>
        <pre><code>{`it = iter([1, 2, 3])
print(next(it))  # 1
print(next(it))  # 2
print(next(it))  # 3
# next(it) -> StopIteration`}</code></pre>
      </section>

      <section>
        <h2>Custom Iterator Class</h2>
        <pre><code>{`class CountDown:
    def __init__(self, start):
        self.current = start

    def __iter__(self):
        return self

    def __next__(self):
        if self.current < 0:
            raise StopIteration
        value = self.current
        self.current -= 1
        return value

for x in CountDown(3):
    print(x)  # 3, 2, 1, 0`}</code></pre>
      </section>

      <section>
        <h2>Iterables vs Iterators</h2>
        <ul>
          <li><strong>Iterable:</strong> Has <code>__iter__()</code> that returns a new iterator</li>
          <li><strong>Iterator:</strong> Implements both <code>__iter__()</code> and <code>__next__()</code></li>
          <li><strong>One-shot:</strong> Iterators are typically consumed once</li>
        </ul>
      </section>

      <section>
        <h2>Tools: itertools</h2>
        <pre><code>{`import itertools as it

data = [1, 2, 3, 4, 5]
print(list(it.accumulate(data)))       # Running totals
print(list(it.compress('ABCDE', [1,0,1,0,1]))) # A C E
print(list(it.islice(range(10), 2, 8, 2)))     # 2 4 6`}</code></pre>
      </section>

      <section>
        <h2>Best Practices</h2>
        <ul>
          <li>Prefer generators for custom iteration</li>
          <li>Don’t reuse consumed iterators; create fresh ones</li>
          <li>Handle <code>StopIteration</code> implicitly via <code>for</code> loops</li>
        </ul>
      </section>
    </div>
  );
}
