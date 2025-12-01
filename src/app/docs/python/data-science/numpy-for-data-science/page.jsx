import React from "react";

export default function NumpyForDSPage() {
  return (
    <div className="space-y-6">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        NumPy for Data Science
      </h1>

      <p className="text-slate-700 leading-relaxed">
        NumPy provides efficient n-dimensional arrays, vectorized math, and
        broadcasting. It is the foundation of most data science and scientific
        computing libraries in Python.
      </p>

      <div className="space-y-8 text-slate-700 leading-relaxed">
        {/* Intro / Why NumPy */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Why NumPy?</h2>
          <p className="mt-2">
            Compared to plain Python lists, NumPy arrays offer:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Fast vectorized operations (no manual loops needed).</li>
            <li>Fixed-type homogeneous arrays that are memory efficient.</li>
            <li>Powerful indexing, slicing, and reshaping capabilities.</li>
            <li>
              Broadcasting to apply operations between arrays of different
              shapes.
            </li>
            <li>
              Built-in linear algebra, random sampling, and statistical
              functions.
            </li>
          </ul>
        </section>

        {/* Basics Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Basics</h2>
          <p className="mt-2">
            Create arrays, reshape them, and perform vectorized and broadcasting
            operations.
          </p>
        </section>

        {/* Basics Code Block */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-start justify-between p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Example</h3>
          </div>
          <div className="px-6 pb-8">
            <div className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
                  {`import numpy as np

np.random.seed(42)
a = np.array([1, 2, 3])
b = np.arange(6).reshape(2, 3)

print(a + 10)           # vectorized
print(b.mean(axis=0))   # column means
print(b * a)            # broadcasting (2x3 * 1x3)`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Basics Output Description */}
        <p className="font-semibold text-[#4a0080]">What this shows:</p>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-slate-800 space-y-1">
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <code>a + 10</code> adds 10 to every element (vectorized
              operation).
            </li>
            <li>
              <code>b.mean(axis=0)</code> computes mean along columns.
            </li>
            <li>
              <code>b * a</code> multiplies each row of <code>b</code> by{" "}
              <code>a</code> using broadcasting.
            </li>
          </ul>
        </div>

        {/* Linear Algebra Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Linear Algebra for Data Science
          </h2>
          <p className="mt-2">
            NumPy is heavily used in linear models, PCA, and optimization. The
            following example solves for regression coefficients using the
            normal equation.
          </p>
        </section>

        {/* Linear Algebra Code Block */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-start justify-between p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Example</h3>
          </div>
          <div className="px-6 pb-8">
            <div className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
                  {`x = np.random.randn(100, 3)
w = np.array([0.2, -0.5, 1.0])
y = x @ w + 0.1

XtX = x.T @ x
Xty = x.T @ y
beta = np.linalg.solve(XtX, Xty)
print(beta)`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Linear Algebra Explanation */}
        <p className="font-semibold text-[#4a0080]">Explanation:</p>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-slate-800 space-y-2">
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <code>x</code> is a design matrix with 100 samples and 3 features.
            </li>
            <li>
              <code>w</code> are the true coefficients, and{" "}
              <code>y = Xw + 0.1</code> adds a bias term.
            </li>
            <li>
              <code>beta = (XᵀX)⁻¹ Xᵀy</code> is solved using{" "}
              <code>np.linalg.solve</code>.
            </li>
            <li>
              The printed <code>beta</code> should be close to the true{" "}
              <code>w</code> values.
            </li>
          </ul>
        </div>

        {/* Boolean Indexing / Stats Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Boolean Indexing & Basic Statistics
          </h2>
          <p className="mt-2">
            NumPy makes it easy to filter data and compute descriptive
            statistics such as mean, standard deviation, and percentiles.
          </p>
        </section>

        {/* Boolean Indexing Code Block */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-start justify-between p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Example</h3>
          </div>
          <div className="px-6 pb-8">
            <div className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
                  {`data = np.random.randn(1000)

print('Mean:', data.mean())
print('Std:', data.std())
print('95th percentile:', np.percentile(data, 95))

# Filter values > 1
high = data[data > 1]
print('Count > 1:', high.size)`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>
          <p className="mt-2">
            NumPy is the backbone of numerical computing in Python. Mastering
            arrays, broadcasting, and linear algebra in NumPy will make it much
            easier to understand and use higher-level libraries like Pandas,
            scikit-learn, and TensorFlow.
          </p>
        </section>
      </div>
    </div>
  );
}
