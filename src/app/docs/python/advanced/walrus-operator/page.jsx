export default function WalrusOperatorPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Walrus Operator (:=)</h1>
      <p>
        The assignment expression operator <code>:=</code> assigns and returns a value within a
        single expression. Introduced in Python 3.8, it can reduce repetition and improve
        performance by avoiding duplicate computations.
      </p>

      <section>
        <h2>Basic Usage</h2>
        <pre><code>{`# Read until blank line
while (line := input("Enter: ")):
    print("You typed:", line)`}</code></pre>
      </section>

      <section>
        <h2>In Comprehensions and Conditions</h2>
        <pre><code>{`# Avoid recomputing expensive call
def cost(x):
    print("compute", x)
    return x * x

vals = [1, 2, 3]
squares_over_two = [y for x in vals if (y := cost(x)) > 2]
print(squares_over_two)  # compute 1,2,3 -> [4, 9]`}</code></pre>
      </section>

      <section>
        <h2>Regex Example</h2>
        <pre><code>{`import re
text = "ID: 12345"
if (m := re.search(r"ID: (\d+)", text)):
    print(int(m.group(1)))  # 12345`}</code></pre>
      </section>

      <section>
        <h2>Guidelines</h2>
        <ul>
          <li>Use sparingly; prioritize readability</li>
          <li>Great for loops that test and use the same value</li>
          <li>Avoid deeply nested assignment expressions</li>
        </ul>
      </section>
    </div>
  );
}
