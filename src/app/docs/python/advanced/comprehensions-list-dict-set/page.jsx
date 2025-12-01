export default function ComprehensionsPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Comprehensions (List, Dict, Set, Generator)</h1>
      <p>
        Comprehensions provide concise syntax for transforming and filtering iterables.
        They are often faster and clearer than equivalent <code>for</code> loops.
      </p>

      <section>
        <h2>List Comprehensions</h2>
        <pre><code>{`squares = [x*x for x in range(6)]          # [0,1,4,9,16,25]
evens = [x for x in range(10) if x % 2 == 0]
pairs = [(i, j) for i in range(2) for j in range(3)]`}</code></pre>
      </section>

      <section>
        <h2>Dict Comprehensions</h2>
        <pre><code>{`names = ['alice','bob','charlie']
lengths = {name: len(name) for name in names}
swapped = {v: k for k, v in {'a':1, 'b':2}.items()}`}</code></pre>
      </section>

      <section>
        <h2>Set Comprehensions</h2>
        <pre><code>{`mods = {x % 3 for x in range(10)}   # {0,1,2}
unique_letters = {ch for ch in 'banana'}  # {'b','a','n'}`}</code></pre>
      </section>

      <section>
        <h2>Generator Comprehensions</h2>
        <pre><code>{`gen = (x*x for x in range(1_000_000))
first = next(gen)  # 1
# Lazy: doesn't build a full list in memory`}</code></pre>
      </section>

      <section>
        <h2>Conditional Logic</h2>
        <pre><code>{`labels = ['even' if x % 2 == 0 else 'odd' for x in range(5)]
filtered = [x*x for x in range(10) if x % 3 == 0]`}</code></pre>
      </section>

      <section>
        <h2>Nested Comprehensions</h2>
        <pre><code>{`matrix = [[i*j for j in range(3)] for i in range(3)]
flattened = [x for row in matrix for x in row]`}</code></pre>
      </section>

      <section>
        <h2>Best Practices</h2>
        <ul>
          <li>Keep comprehensions short; use loops if logic becomes complex</li>
          <li>Prefer generator comprehensions for large sequences</li>
          <li>Readability first: add parentheses and whitespace appropriately</li>
        </ul>
      </section>
    </div>
  );
}
