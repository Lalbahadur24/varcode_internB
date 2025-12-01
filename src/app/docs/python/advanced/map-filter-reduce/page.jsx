import React from "react";

export default function MapFilterReducePage() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Map, Filter &amp; Reduce
      </h1>

      <p className="text-slate-700 leading-relaxed">
        These functional programming helpers let you <strong>transform</strong>{" "}
        (<code>map</code>), <strong>select</strong> (<code>filter</code>) and{" "}
        <strong>aggregate</strong> (<code>reduce</code>) sequences. They are
        powerful for data pipelines, although list comprehensions are often more
        readable for simple cases.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* map() */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">map()</h2>

          <p className="mt-2">
            <code>map(func, iterable)</code> applies a function to every
            element, returning a lazy iterator.
          </p>

          <pre className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`nums = [1, 2, 3, 4]
doubled = list(map(lambda x: x * 2, nums))
print(doubled)   # [2, 4, 6, 8]

# Equivalent comprehension:
# [x * 2 for x in nums]`}
          </pre>
        </section>

        {/* filter() */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">filter()</h2>

          <p className="mt-2">
            <code>filter(func, iterable)</code> keeps only items where the
            function returns truthy.
          </p>

          <pre className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`nums = [1, 2, 3, 4, 5]
evens = list(filter(lambda x: x % 2 == 0, nums))
print(evens)   # [2, 4]

# Equivalent:
# [x for x in nums if x % 2 == 0]`}
          </pre>
        </section>

        {/* reduce() */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">reduce()</h2>

          <p className="mt-2">
            <code>reduce(func, iterable, init)</code> folds a sequence into a
            single value using a binary function.
          </p>

          <pre className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`from functools import reduce

nums = [1, 2, 3, 4]
total = reduce(lambda a, b: a + b, nums)
print(total)   # 10

# Factorial using reduce:
fact5 = reduce(lambda a, b: a * b, range(1, 6), 1)
print(fact5)   # 120`}
          </pre>
        </section>

        {/* Combining */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Combining</h2>

          <p className="mt-2">
            Chain <code>filter</code> → <code>map</code> → <code>reduce</code>{" "}
            for clean data pipelines.
          </p>

          <pre className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`from functools import reduce

nums = [1, 2, 3, 4, 5, 6]

# Sum of squares of even numbers
result = reduce(
    lambda a, b: a + b,
    map(lambda x: x * x, filter(lambda x: x % 2 == 0, nums))
)

print(result)   # 56`}
          </pre>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Best Practices
          </h2>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Prefer comprehensions for short, simple transformations.</li>
            <li>
              Use <code>reduce</code> when you naturally “fold” values (sum,
              product, min/max, joins).
            </li>
            <li>
              Keep lambdas very small; move complex logic into named functions
              and pass those to <code>map</code>/<code>filter</code>.
            </li>
            <li>
              Combine <code>filter</code> → <code>map</code> →{" "}
              <code>reduce</code> for functional-style ETL / data-processing
              pipelines.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
