export default function NumPyPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>NumPy Tutorial</h1>
      
      <section>
        <h2>Introduction to NumPy</h2>
        <p>
          NumPy (Numerical Python) is a fundamental package for scientific computing in Python. 
          It provides support for large, multi-dimensional arrays and matrices, along with a 
          collection of mathematical functions to operate on these arrays efficiently.
        </p>
        
        <h3>Why NumPy?</h3>
        <ul>
          <li>Powerful N-dimensional array object</li>
          <li>Broadcasting functions for array operations</li>
          <li>Tools for integrating C/C++ and Fortran code</li>
          <li>Linear algebra, Fourier transform, and random number capabilities</li>
          <li>Much faster than traditional Python lists for numerical operations</li>
        </ul>
      </section>

      <section>
        <h2>Installation</h2>
        <p>Install NumPy using pip:</p>
        <pre><code>{`pip install numpy`}</code></pre>
        
        <p>Import NumPy in your Python code:</p>
        <pre><code>{`import numpy as np`}</code></pre>
      </section>

      <section>
        <h2>NumPy Arrays</h2>
        
        <h3>Creating Arrays</h3>
        <p>NumPy arrays can be created in several ways:</p>
        
        <h4>From Python Lists</h4>
        <pre><code>{`import numpy as np

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
print(arr3d.shape)  # (2, 2, 2)`}</code></pre>

        <h4>Using Built-in Functions</h4>
        <pre><code>{`# Array of zeros
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
print(full_arr)`}</code></pre>
      </section>

      <section>
        <h2>Array Attributes</h2>
        <pre><code>{`arr = np.array([[1, 2, 3], [4, 5, 6]])

print(arr.shape)     # (2, 3) - dimensions
print(arr.ndim)      # 2 - number of dimensions
print(arr.size)      # 6 - total number of elements
print(arr.dtype)     # dtype('int64') - data type
print(arr.itemsize)  # 8 - size of each element in bytes`}</code></pre>
      </section>

      <section>
        <h2>Array Indexing and Slicing</h2>
        
        <h3>Basic Indexing</h3>
        <pre><code>{`arr = np.array([1, 2, 3, 4, 5])

print(arr[0])    # 1 - first element
print(arr[-1])   # 5 - last element
print(arr[1:4])  # [2 3 4] - slice`}</code></pre>

        <h3>2D Array Indexing</h3>
        <pre><code>{`arr2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

print(arr2d[0, 1])      # 2 - element at row 0, col 1
print(arr2d[1])         # [4 5 6] - entire row
print(arr2d[:, 1])      # [2 5 8] - entire column
print(arr2d[0:2, 1:3])  # [[2 3] [5 6]] - subarray`}</code></pre>

        <h3>Boolean Indexing</h3>
        <pre><code>{`arr = np.array([1, 2, 3, 4, 5])

# Get elements greater than 3
mask = arr > 3
print(arr[mask])  # [4 5]

# One-liner
print(arr[arr > 3])  # [4 5]`}</code></pre>
      </section>

      <section>
        <h2>Array Operations</h2>
        
        <h3>Arithmetic Operations</h3>
        <pre><code>{`a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

print(a + b)    # [5 7 9]
print(a - b)    # [-3 -3 -3]
print(a * b)    # [4 10 18]
print(a / b)    # [0.25 0.4  0.5]
print(a ** 2)   # [1 4 9]`}</code></pre>

        <h3>Universal Functions (ufuncs)</h3>
        <pre><code>{`arr = np.array([1, 4, 9, 16])

print(np.sqrt(arr))      # [1. 2. 3. 4.]
print(np.exp(arr))       # Exponential
print(np.log(arr))       # Natural logarithm
print(np.sin(arr))       # Sine
print(np.cos(arr))       # Cosine`}</code></pre>

        <h3>Aggregation Functions</h3>
        <pre><code>{`arr = np.array([[1, 2, 3], [4, 5, 6]])

print(np.sum(arr))           # 21 - sum of all elements
print(np.sum(arr, axis=0))   # [5 7 9] - sum along columns
print(np.sum(arr, axis=1))   # [6 15] - sum along rows

print(np.mean(arr))          # 3.5 - mean
print(np.std(arr))           # Standard deviation
print(np.min(arr))           # 1 - minimum
print(np.max(arr))           # 6 - maximum
print(np.argmax(arr))        # 5 - index of maximum`}</code></pre>
      </section>

      <section>
        <h2>Broadcasting</h2>
        <p>
          Broadcasting allows NumPy to work with arrays of different shapes during arithmetic operations:
        </p>
        <pre><code>{`# Scalar and array
arr = np.array([1, 2, 3])
print(arr + 10)  # [11 12 13]

# 1D array and 2D array
arr2d = np.array([[1, 2, 3], [4, 5, 6]])
arr1d = np.array([10, 20, 30])
print(arr2d + arr1d)
# [[11 22 33]
#  [14 25 36]]`}</code></pre>
      </section>

      <section>
        <h2>Array Reshaping</h2>
        <pre><code>{`arr = np.arange(12)
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
print(transposed.shape)  # (4, 3)`}</code></pre>
      </section>

      <section>
        <h2>Linear Algebra</h2>
        <pre><code>{`# Matrix multiplication
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
print(eigenvectors)`}</code></pre>
      </section>

      <section>
        <h2>Random Number Generation</h2>
        <pre><code>{`# Random integers
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
print(np.random.random(3))`}</code></pre>
      </section>

      <section>
        <h2>Stacking and Splitting Arrays</h2>
        
        <h3>Stacking</h3>
        <pre><code>{`a = np.array([1, 2, 3])
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
#  [3 6]]`}</code></pre>

        <h3>Splitting</h3>
        <pre><code>{`arr = np.arange(12)

# Split into 3 equal parts
split = np.array_split(arr, 3)
print(split)  # [array([0, 1, 2, 3]), array([4, 5, 6, 7]), array([8, 9, 10, 11])]

# Split 2D array
arr2d = np.arange(12).reshape(3, 4)
vsplit_result = np.vsplit(arr2d, 3)
print(vsplit_result)`}</code></pre>
      </section>

      <section>
        <h2>Practical Examples</h2>
        
        <h3>Example 1: Statistical Analysis</h3>
        <pre><code>{`# Simulate exam scores
np.random.seed(42)
scores = np.random.normal(75, 10, 100)

print(f"Mean: {np.mean(scores):.2f}")
print(f"Median: {np.median(scores):.2f}")
print(f"Std Dev: {np.std(scores):.2f}")
print(f"Min: {np.min(scores):.2f}")
print(f"Max: {np.max(scores):.2f}")

# Students who passed (>= 60)
passed = scores[scores >= 60]
print(f"Pass rate: {len(passed)/len(scores)*100:.1f}%")`}</code></pre>

        <h3>Example 2: Image Processing</h3>
        <pre><code>{`# Create a simple 5x5 grayscale image
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
print(binary)`}</code></pre>
      </section>

      <section>
        <h2>Best Practices</h2>
        <ul>
          <li><strong>Use vectorized operations:</strong> Avoid loops when possible; use NumPy's built-in functions</li>
          <li><strong>Preallocate arrays:</strong> Create arrays with known size using np.zeros() or np.empty()</li>
          <li><strong>Use appropriate data types:</strong> Specify dtype to save memory (e.g., np.int32 vs np.int64)</li>
          <li><strong>Avoid copying:</strong> Use views instead of copies when possible</li>
          <li><strong>Use broadcasting:</strong> Leverage broadcasting instead of manual loops</li>
        </ul>
      </section>

      <section>
        <h2>Summary</h2>
        <p>
          NumPy is the foundation of scientific computing in Python. Its powerful array operations, 
          mathematical functions, and linear algebra capabilities make it essential for data analysis, 
          machine learning, and scientific research. Master NumPy to work efficiently with numerical data.
        </p>
      </section>
    </div>
  );
}
