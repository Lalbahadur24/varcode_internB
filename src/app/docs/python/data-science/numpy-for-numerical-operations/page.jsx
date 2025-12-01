import React from "react";

export default function NumpyNumericalOperations() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        NumPy for Numerical Operations
      </h1>

      <p className="text-slate-700 leading-relaxed">
        NumPy is the backbone of numerical computing in Python. It provides
        high-performance multidimensional arrays, vectorized operations,
        broadcasting, mathematical functions, linear algebra, and random number
        utilities — essential for data science, ML, and scientific simulation.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Why NumPy */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Why NumPy for Numerical Computing?
          </h2>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Fast vectorized operations without Python loops</li>
            <li>Efficient memory usage through contiguous arrays</li>
            <li>High-level mathematical functions</li>
            <li>Broadcasting for shape-flexible arithmetic</li>
            <li>
              Linear algebra routines (matrix multiplication, decomposition)
            </li>
            <li>Random sampling for ML, simulations, and statistics</li>
          </ul>
        </section>

        {/* Section: Array Operations */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Basic Array Operations
          </h2>
          <p className="mt-2">
            NumPy arrays support element-wise arithmetic, aggregation, and
            reshaping, much faster than Python lists.
          </p>
        </section>

        {/* Code Example */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Example: Basic Operations
            </h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 rounded-md overflow-hidden shadow-sm">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />

                <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
                  {`import numpy as np

a = np.array([2, 4, 6])
b = np.array([1, 3, 5])

print(a + b)        # element-wise addition
print(a * b)        # element-wise multiplication
print(a ** 2)       # exponentiation
print(a / 2)        # vectorized division
print(a.mean())     # average
print(a.sum())      # sum of all elements`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Broadcasting */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Broadcasting
          </h2>
          <p className="mt-2">
            Broadcasting allows NumPy to perform arithmetic on arrays with
            different shapes by “stretching” dimensions automatically.
          </p>

          <pre className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm font-mono mt-3">
            {`# Shapes:
# a → (3,) 
# b → (2, 3)

a = np.array([1, 2, 3])
b = np.arange(6).reshape(2, 3)

print(b + a)`}
          </pre>

          <p className="mt-3 font-semibold text-[#4a0080]">
            Broadcasting Diagram:
          </p>

          <pre className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm font-mono leading-6">
            {`a:      [1, 2, 3]
b:     [[0, 1, 2],
        [3, 4, 5]]

b + a: [[1, 3, 5],
        [4, 6, 8]]`}
          </pre>
        </section>

        {/* Mathematical Functions */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Mathematical Functions
          </h2>
          <p className="mt-2">
            NumPy offers a wide range of universal functions (ufuncs) that run
            fast in C — not Python.
          </p>
        </section>

        {/* Code Block */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Example: Math Operations
            </h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 rounded-md overflow-hidden shadow-sm">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />

                <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
                  {`x = np.linspace(0, 2*np.pi, 100)

print(np.sin(x))
print(np.cos(x))
print(np.exp(x))
print(np.log(x + 1))  # avoid log(0)`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Linear Algebra */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Linear Algebra Operations
          </h2>
          <p className="mt-2">
            NumPy includes matrix multiplication, determinants, inversion,
            eigenvalues, QR decomposition, and more.
          </p>
        </section>

        {/* Linear Algebra Code */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Example: Matrix Algebra
            </h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />

                <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
                  {`A = np.array([[2, 1],
               [3, 4]])

b = np.array([5, 6])

print(A @ b)                 # matrix-vector multiply
print(np.linalg.det(A))      # determinant
print(np.linalg.inv(A))      # inverse
print(np.linalg.eig(A))      # eigenvalues & eigenvectors`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Random Numbers */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Random Number Generation
          </h2>
          <p className="mt-2">
            NumPy’s random module is essential for ML initialization, sampling,
            bootstrapping, and Monte Carlo simulations.
          </p>
        </section>

        {/* Random Code */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Example: Random Sampling
            </h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />

                <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
                  {`rng = np.random.default_rng(42)

print(rng.normal(size=5))            # Gaussian distribution
print(rng.integers(0, 10, size=5))   # random ints
print(rng.random(3))                 # uniform
print(rng.choice([1, 2, 3, 4], 10))  # sampling with replacement`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Tips</h2>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              Always use <code>rng = np.random.default_rng()</code> (new API).
            </li>
            <li>Prefer broadcasting over loops for speed.</li>
            <li>
              Use <code>.astype(float)</code> to ensure numeric precision.
            </li>
            <li>
              Use <code>@</code> operator for matrix multiplication rather than
              <code>np.dot</code>.
            </li>
            <li>
              Use <code>np.linalg</code> for all linear algebra tasks.
            </li>
          </ul>
        </section>

        {/* Summary */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>
          <p className="mt-2">
            NumPy provides the core tools required for fast numerical computing
            — from basic arithmetic to advanced linear algebra and random
            simulations. Every data scientist should master these concepts.
          </p>
        </section>
      </div>
    </div>
  );
}
