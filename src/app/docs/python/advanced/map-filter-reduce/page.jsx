export default function MapFilterReducePage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Map, Filter, Reduce</h1>
      <p>
        Functional tools for transforming, selecting, and aggregating data. Use them when they
        improve clarity; otherwise comprehensions may be more readable.
      </p>

      <section>
        <h2>map()</h2>
        <pre><code>{`nums = [1, 2, 3, 4]
doubled = list(map(lambda x: x*2, nums))
# Equivalent with list comprehension: [x*2 for x in nums]`}</code></pre>
      </section>

      <section>
        <h2>filter()</h2>
        <pre><code>{`nums = [1, 2, 3, 4, 5]
evens = list(filter(lambda x: x % 2 == 0, nums))
# Equivalent: [x for x in nums if x % 2 == 0]`}</code></pre>
      </section>

      <section>
        <h2>reduce()</h2>
        <pre><code>{`from functools import reduce

nums = [1, 2, 3, 4]
total = reduce(lambda a, b: a + b, nums)  # 10

# Factorial
fact5 = reduce(lambda a, b: a*b, range(1, 6), 1)`}</code></pre>
      </section>

      <section>
        <h2>Combining</h2>
        <pre><code>{`from functools import reduce

nums = [1,2,3,4,5,6]
result = reduce(lambda a,b: a+b, map(lambda x: x*x, filter(lambda x: x%2==0, nums)))
print(result)  # 56 (2^2 + 4^2 + 6^2)`}</code></pre>
      </section>

      <section>
        <h2>Best Practices</h2>
        <ul>
          <li>Prefer comprehensions for simple map/filter patterns</li>
          <li>Use <code>reduce</code> when a clean associative fold exists</li>
          <li>Make lambdas small; move complex logic to named functions</li>
        </ul>
      </section>
    </div>
  );
}
