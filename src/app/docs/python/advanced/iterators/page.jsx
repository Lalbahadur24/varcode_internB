import React from "react";

export default function IteratorsPage() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">Iterators</h1>

      <p className="text-slate-700 leading-relaxed">
        The Python iterator protocol consists of two methods:{" "}
        <code>__iter__()</code>, which returns the iterator object itself, and{" "}
        <code>__next__()</code>, which returns the next item or raises{" "}
        <code>StopIteration</code> when there are no more items.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Built-in Iterators */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Built-in Iterators
          </h2>

          <p className="mt-2">
            Most built-in containers like <code>list</code>, <code>tuple</code>,{" "}
            <code>dict</code> and <code>set</code> return an iterator when you
            call <code>iter()</code> on them.
          </p>

          <pre className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`it = iter([1, 2, 3])
print(next(it))  # 1
print(next(it))  # 2
print(next(it))  # 3
# next(it) -> StopIteration`}
          </pre>
        </section>

        {/* Custom iterator class */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Custom Iterator Class
          </h2>

          <p className="mt-2">
            You can implement your own iterator by defining{" "}
            <code>__iter__</code> and <code>__next__</code>.{" "}
            <code>__iter__</code> should return the iterator object (usually{" "}
            <code>self</code>).
          </p>

          <pre className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`class CountDown:
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
    print(x)  # 3, 2, 1, 0`}
          </pre>
        </section>

        {/* Iterables vs Iterators */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Iterables vs Iterators
          </h2>

          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <strong>Iterable:</strong> Has <code>__iter__()</code> that
              returns a <em>new</em> iterator each time (e.g. lists, ranges).
            </li>
            <li>
              <strong>Iterator:</strong> Implements both <code>__iter__()</code>{" "}
              and <code>__next__()</code> and is usually{" "}
              <strong>one-shot</strong>.
            </li>
            <li>
              <strong>One-shot:</strong> Once consumed, an iterator is typically
              exhausted and cannot be reused.
            </li>
          </ul>

          <pre className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`nums = [1, 2, 3]
it1 = iter(nums)
it2 = iter(nums)  # new, independent iterator

print(next(it1))  # 1
print(next(it2))  # 1  (separate state)`}
          </pre>
        </section>

        {/* itertools */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Tools: <code>itertools</code>
          </h2>

          <p className="mt-2">
            The <code>itertools</code> module provides building blocks for
            creating fast, memory-efficient iterator pipelines.
          </p>

          <pre className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`import itertools as it

data = [1, 2, 3, 4, 5]

print(list(it.accumulate(data)))              # Running totals
print(list(it.compress("ABCDE", [1, 0, 1, 0, 1])))  # A C E
print(list(it.islice(range(10), 2, 8, 2)))          # 2 4 6`}
          </pre>
        </section>

        {/* Best practices */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Best Practices
          </h2>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Prefer <strong>generators</strong> for custom iteration logic —
              they&apos;re simpler than writing full iterator classes.
            </li>
            <li>
              Do not assume an iterator can be reused; create a fresh iterator
              when you need to iterate again.
            </li>
            <li>
              Let <code>for</code> loops handle <code>StopIteration</code>{" "}
              implicitly instead of calling <code>next()</code> manually.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
