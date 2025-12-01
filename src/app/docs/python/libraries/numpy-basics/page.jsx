import React from "react";

export default function NumpyBasics() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>NumPy Basics</h1>
      <p>
        NumPy is the foundation for numerical computing in Python, providing fast n-dimensional arrays.
      </p>

      <h2>Install</h2>
      <pre><code>{`pip install numpy`}</code></pre>

      <h2>Creating Arrays</h2>
      <pre><code>{`import numpy as np

# From list
arr = np.array([1, 2, 3, 4])

# Zeros, ones, ranges
zeros = np.zeros((3, 3))
ones = np.ones((2, 4))
range_arr = np.arange(0, 10, 2)  # [0, 2, 4, 6, 8]
linspace = np.linspace(0, 1, 5)  # 5 evenly spaced

# Random
random_arr = np.random.rand(3, 3)  # 0-1 uniform
normal_arr = np.random.randn(3, 3)  # standard normal`}</code></pre>

      <h2>Operations</h2>
      <pre><code>{`arr = np.array([1, 2, 3, 4])

# Element-wise
print(arr * 2)      # [2, 4, 6, 8]
print(arr + 10)     # [11, 12, 13, 14]
print(arr ** 2)     # [1, 4, 9, 16]

# Aggregations
print(arr.sum())    # 10
print(arr.mean())   # 2.5
print(arr.std())    # standard deviation`}</code></pre>

      <h2>Indexing & Slicing</h2>
      <pre><code>{`arr = np.array([10, 20, 30, 40, 50])
print(arr[0])       # 10
print(arr[-1])      # 50
print(arr[1:4])     # [20, 30, 40]

# 2D
mat = np.array([[1, 2, 3], [4, 5, 6]])
print(mat[0, 1])    # 2
print(mat[:, 1])    # [2, 5] (second column)`}</code></pre>

      <h2>Linear Algebra</h2>
      <pre><code>{`A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# Matrix multiplication
C = A @ B

# Inverse, determinant, eigenvalues
inv = np.linalg.inv(A)
det = np.linalg.det(A)
eigvals = np.linalg.eigvals(A)`}</code></pre>
    </div>
  );
}
