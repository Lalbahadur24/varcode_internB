import React from "react";

export default function MatplotlibBasics() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Matplotlib Basics</h1>
      <p>
        Matplotlib is the foundational plotting library for creating static visualizations.
      </p>

      <h2>Install</h2>
      <pre><code>{`pip install matplotlib`}</code></pre>

      <h2>Line Plot</h2>
      <pre><code>{`import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.plot(x, y, label='sin(x)', color='blue', linewidth=2)
plt.xlabel('X axis')
plt.ylabel('Y axis')
plt.title('Sine Wave')
plt.legend()
plt.grid(True)
plt.show()`}</code></pre>

      <h2>Multiple Plot Types</h2>
      <pre><code>{`# Scatter
plt.scatter([1, 2, 3], [4, 5, 6])
plt.show()

# Bar
categories = ['A', 'B', 'C']
values = [10, 20, 15]
plt.bar(categories, values)
plt.show()

# Histogram
data = np.random.randn(1000)
plt.hist(data, bins=30, edgecolor='black')
plt.show()`}</code></pre>

      <h2>Subplots</h2>
      <pre><code>{`fig, axes = plt.subplots(2, 2, figsize=(10, 8))

axes[0, 0].plot([1, 2, 3], [1, 4, 9])
axes[0, 0].set_title('Plot 1')

axes[0, 1].scatter([1, 2, 3], [3, 2, 1])
axes[0, 1].set_title('Plot 2')

axes[1, 0].bar(['X', 'Y'], [5, 10])
axes[1, 1].hist(np.random.randn(100), bins=20)

plt.tight_layout()
plt.show()`}</code></pre>

      <h2>Saving Figures</h2>
      <pre><code>{`plt.plot([1, 2, 3], [1, 4, 9])
plt.savefig('plot.png', dpi=300, bbox_inches='tight')`}</code></pre>
    </div>
  );
}
