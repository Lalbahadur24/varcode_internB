import React from "react";

export default function NumpyForDSPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>NumPy for Data Science</h1>
      <p>Efficient n‑dimensional arrays, vectorized math, and broadcasting.</p>

      <h2>Basics</h2>
      <pre><code>{`import numpy as np

np.random.seed(42)
a = np.array([1, 2, 3])
b = np.arange(6).reshape(2, 3)

print(a + 10)           # vectorized
print(b.mean(axis=0))   # column means
print(b * a)            # broadcasting (2x3 * 1x3)`}</code></pre>

      <h2>Linear Algebra</h2>
      <pre><code>{`x = np.random.randn(100, 3)
w = np.array([0.2, -0.5, 1.0])
y = x @ w + 0.1

XtX = x.T @ x
Xty = x.T @ y
beta = np.linalg.solve(XtX, Xty)
print(beta)`}</code></pre>
    </div>
  );
}
