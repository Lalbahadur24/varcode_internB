import React from "react";

export default function NumPyPage() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">NumPy Tutorial</h1>

      <div className="space-y-10 text-slate-700 leading-relaxed max-w-none">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Introduction to NumPy
          </h2>
          <p className="mt-2">
            NumPy (Numerical Python) is a fundamental package for scientific
            computing in Python. It provides support for large,
            multi-dimensional arrays and matrices, along with a collection of
            mathematical functions to operate on these arrays efficiently.
          </p>

          <h3 className="mt-4 text-xl font-semibold text-[#4a0080]">
            Why NumPy?
          </h3>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Powerful N-dimensional array object</li>
            <li>Broadcasting functions for array operations</li>
            <li>Tools for integrating C/C++ and Fortran code</li>
            <li>
              Linear algebra, Fourier transform, and random number capabilities
            </li>
            <li>
              Much faster than traditional Python lists for numerical operations
            </li>
          </ul>
        </section>

        {/* Installation */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Installation
          </h2>
          <p className="mt-2">Install NumPy using pip:</p>
          <pre className="mt-3 bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            {`pip install numpy`}
          </pre>

          <p className="mt-3">Import NumPy in your Python code:</p>
          <pre className="mt-3 bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            {`import numpy as np`}
          </pre>
        </section>

        {/* NumPy Arrays */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            NumPy Arrays
          </h2>

          <h3 className="mt-3 text-xl font-semibold text-[#4a0080]">
            Creating Arrays
          </h3>
          <p className="mt-2">NumPy arrays can be created in several ways:</p>

          <h4 className="mt-3 font-semibold text-[#4a0080]">
            From Python Lists
          </h4>
          <pre className="mt-3 bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            {`import numpy as np

# 1D array
arr1d = np.array([1, 2, 3, 4, 5])
print(arr1d)  # [1 2 3 4 5]

# 2D array
arr2d = np.array([[1, 2, 3], [4, 5, 6]])
print(arr2d)
# [[1 2 3]
#  [4 5 6]]

# 3D array
arr3d = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
print(arr3d.shape)  # (2, 2, 2)`}
          </pre>

          <h4 className="mt-4 font-semibold text-[#4a0080]">
            Using Built-in Functions
          </h4>
          <pre className="mt-3 bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            {`# Array of zeros
zeros = np.zeros((3, 4))
print(zeros)

# Array of ones
ones = np.ones((2, 3))
print(ones)

# Array with a range of values
range_arr = np.arange(0, 10, 2)
print(range_arr)  # [0 2 4 6 8]

# Array with evenly spaced values
linspace_arr = np.linspace(0, 1, 5)
print(linspace_arr)  # [0.   0.25 0.5  0.75 1.  ]

# Identity matrix
identity = np.eye(3)
print(identity)

# Array filled with a constant value
full_arr = np.full((2, 3), 7)
print(full_arr)`}
          </pre>
        </section>

        {/* Array Attributes */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Array Attributes
          </h2>
          <pre className="mt-3 bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            {`arr = np.array([[1, 2, 3], [4, 5, 6]])

print(arr.shape)     # (2, 3) - dimensions
print(arr.ndim)      # 2 - number of dimensions
print(arr.size)      # 6 - total number of elements
print(arr.dtype)     # dtype('int64') - data type
print(arr.itemsize)  # 8 - size of each element in bytes`}
          </pre>
        </section>

        {/* Indexing and Slicing */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Array Indexing and Slicing
          </h2>

          <h3 className="mt-3 text-xl font-semibold text-[#4a0080]">
            Basic Indexing
          </h3>
          <pre className="mt-3 bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            {`arr = np.array([1, 2, 3, 4, 5])

print(arr[0])    # 1 - first element
print(arr[-1])   # 5 - last element
print(arr[1:4])  # [2 3 4] - slice`}
          </pre>

          <h3 className="mt-4 text-xl font-semibold text-[#4a0080]">
            2D Array Indexing
          </h3>
          <pre className="mt-3 bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            {`arr2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

print(arr2d[0, 1])      # 2 - element at row 0, col 1
print(arr2d[1])         # [4 5 6] - entire row
print(arr2d[:, 1])      # [2 5 8] - entire column
print(arr2d[0:2, 1:3])  # [[2 3] [5 6]] - subarray`}
          </pre>

          <h3 className="mt-4 text-xl font-semibold text-[#4a0080]">
            Boolean Indexing
          </h3>
          <pre className="mt-3 bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            {`arr = np.array([1, 2, 3, 4, 5])

# Get elements greater than 3
mask = arr > 3
print(arr[mask])  # [4 5]

# One-liner
print(arr[arr > 3])  # [4 5]`}
          </pre>
        </section>

        {/* Array Operations */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Array Operations
          </h2>

          <h3 className="mt-3 text-xl font-semibold text-[#4a0080]">
            Arithmetic Operations
          </h3>
          <pre className="mt-3 bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            {`a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

print(a + b)    # [5 7 9]
print(a - b)    # [-3 -3 -3]
print(a * b)    # [4 10 18]
print(a / b)    # [0.25 0.4  0.5]
print(a ** 2)   # [1 4 9]`}
          </pre>

          <h3 className="mt-4 text-xl font-semibold text-[#4a0080]">
            Universal Functions (ufuncs)
          </h3>
          <pre className="mt-3 bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            {`arr = np.array([1, 4, 9, 16])

print(np.sqrt(arr))      # [1. 2. 3. 4.]
print(np.exp(arr))       # Exponential
print(np.log(arr))       # Natural logarithm
print(np.sin(arr))       # Sine
print(np.cos(arr))       # Cosine`}
          </pre>

          <h3 className="mt-4 text-xl font-semibold text-[#4a0080]">
            Aggregation Functions
          </h3>
          <pre className="mt-3 bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            {`arr = np.array([[1, 2, 3], [4, 5, 6]])

print(np.sum(arr))           # 21 - sum of all elements
print(np.sum(arr, axis=0))   # [5 7 9] - sum along columns
print(np.sum(arr, axis=1))   # [6 15] - sum along rows

print(np.mean(arr))          # 3.5 - mean
print(np.std(arr))           # Standard deviation
print(np.min(arr))           # 1 - minimum
print(np.max(arr))           # 6 - maximum
print(np.argmax(arr))        # 5 - index of maximum`}
          </pre>
        </section>

        {/* Broadcasting */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Broadcasting
          </h2>
          <p className="mt-2">
            Broadcasting allows NumPy to work with arrays of different shapes
            during arithmetic operations:
          </p>
          <pre className="mt-3 bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            {`# Scalar and array
arr = np.array([1, 2, 3])
print(arr + 10)  # [11 12 13]

# 1D array and 2D array
arr2d = np.array([[1, 2, 3], [4, 5, 6]])
arr1d = np.array([10, 20, 30])
print(arr2d + arr1d)
# [[11 22 33]
#  [14 25 36]]`}
          </pre>
        </section>

        {/* Reshaping */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Array Reshaping
          </h2>
          <pre className="mt-3 bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            {`arr = np.arange(12)
print(arr)  # [0 1 2 3 4 5 6 7 8 9 10 11]

# Reshape to 3x4
reshaped = arr.reshape(3, 4)
print(reshaped)
# [[0  1  2  3]
#  [4  5  6  7]
#  [8  9 10 11]]

# Reshape to 2x6
reshaped2 = arr.reshape(2, 6)
print(reshaped2)

# Flatten back to 1D
flattened = reshaped.flatten()
print(flattened)

# Transpose
transposed = reshaped.T
print(transposed.shape)  # (4, 3)`}
          </pre>
        </section>

        {/* Linear Algebra */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Linear Algebra
          </h2>
          <pre className="mt-3 bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            {`# Matrix multiplication
a = np.array([[1, 2], [3, 4]])
b = np.array([[5, 6], [7, 8]])

# Dot product
result = np.dot(a, b)
print(result)
# [[19 22]
#  [43 50]]

# Or use @ operator
result = a @ b
print(result)

# Determinant
det = np.linalg.det(a)
print(det)  # -2.0

# Inverse
inv = np.linalg.inv(a)
print(inv)

# Eigenvalues and eigenvectors
eigenvalues, eigenvectors = np.linalg.eig(a)
print(eigenvalues)
print(eigenvectors)`}
          </pre>
        </section>

        {/* Random */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Random Number Generation
          </h2>
          <pre className="mt-3 bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            {`# Random integers
random_ints = np.random.randint(0, 10, size=5)
print(random_ints)

# Random floats between 0 and 1
random_floats = np.random.random(5)
print(random_floats)

# Normal distribution
normal = np.random.normal(loc=0, scale=1, size=5)
print(normal)

# Random choice from array
arr = np.array([1, 2, 3, 4, 5])
choice = np.random.choice(arr, size=3)
print(choice)

# Set seed for reproducibility
np.random.seed(42)
print(np.random.random(3))`}
          </pre>
        </section>

        {/* Stacking & Splitting */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Stacking and Splitting Arrays
          </h2>

          <h3 className="mt-3 text-xl font-semibold text-[#4a0080]">
            Stacking
          </h3>
          <pre className="mt-3 bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            {`a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# Vertical stack
vstacked = np.vstack((a, b))
print(vstacked)
# [[1 2 3]
#  [4 5 6]]

# Horizontal stack
hstacked = np.hstack((a, b))
print(hstacked)  # [1 2 3 4 5 6]

# Column stack
colstacked = np.column_stack((a, b))
print(colstacked)
# [[1 4]
#  [2 5]
#  [3 6]]`}
          </pre>

          <h3 className="mt-4 text-xl font-semibold text-[#4a0080]">
            Splitting
          </h3>
          <pre className="mt-3 bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            {`arr = np.arange(12)

# Split into 3 equal parts
split = np.array_split(arr, 3)
print(split)  # [array([0, 1, 2, 3]), array([4, 5, 6, 7]), array([8, 9, 10, 11])]

# Split 2D array
arr2d = np.arange(12).reshape(3, 4)
vsplit_result = np.vsplit(arr2d, 3)
print(vsplit_result)`}
          </pre>
        </section>

        {/* Practical Examples */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Practical Examples
          </h2>

          <h3 className="mt-3 text-xl font-semibold text-[#4a0080]">
            Example 1: Statistical Analysis
          </h3>
          <pre className="mt-3 bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            {`# Simulate exam scores
np.random.seed(42)
scores = np.random.normal(75, 10, 100)

print(f"Mean: {np.mean(scores):.2f}")
print(f"Median: {np.median(scores):.2f}")
print(f"Std Dev: {np.std(scores):.2f}")
print(f"Min: {np.min(scores):.2f}")
print(f"Max: {np.max(scores):.2f}")

# Students who passed (>= 60)
passed = scores[scores >= 60]
print(f"Pass rate: {len(passed)/len(scores)*100:.1f}%")`}
          </pre>

          <h3 className="mt-4 text-xl font-semibold text-[#4a0080]">
            Example 2: Image Processing
          </h3>
          <pre className="mt-3 bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            {`# Create a simple 5x5 grayscale image
image = np.random.randint(0, 256, size=(5, 5))
print("Original image:")
print(image)

# Normalize to 0-1 range
normalized = image / 255.0
print("\\nNormalized:")
print(normalized)

# Apply threshold
threshold = 128
binary = np.where(image > threshold, 255, 0)
print("\\nBinary (threshold=128):")
print(binary)`}
          </pre>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Best Practices
          </h2>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Use vectorized operations:</strong> Avoid loops when
              possible; use NumPy&apos;s built-in functions.
            </li>
            <li>
              <strong>Preallocate arrays:</strong> Create arrays with known size
              using <code>np.zeros()</code> or <code>np.empty()</code>.
            </li>
            <li>
              <strong>Use appropriate data types:</strong> Specify{" "}
              <code>dtype</code> to save memory (e.g., <code>np.int32</code> vs{" "}
              <code>np.int64</code>).
            </li>
            <li>
              <strong>Avoid copying:</strong> Use views instead of copies when
              possible.
            </li>
            <li>
              <strong>Use broadcasting:</strong> Leverage broadcasting instead
              of manual loops.
            </li>
          </ul>
        </section>

        {/* Summary */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>
          <p className="mt-2">
            NumPy is the foundation of scientific computing in Python. Its
            powerful array operations, mathematical functions, and linear
            algebra capabilities make it essential for data analysis, machine
            learning, and scientific research. Master NumPy to work efficiently
            with numerical data.
          </p>
        </section>
      </div>
    </div>
  );
}
