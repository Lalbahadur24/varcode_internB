import React from "react";

export default function MatplotlibPage() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Matplotlib Tutorial
      </h1>

      <section className="text-slate-700 leading-relaxed space-y-4">
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Introduction to Matplotlib
        </h2>

        <p>
          Matplotlib is a comprehensive library for creating static, animated,
          and interactive visualizations in Python.
        </p>

        <h3 className="text-xl font-semibold text-[#4a0080]">Key Features</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Create publication-quality figures</li>
          <li>Line, bar, scatter, histogram, and more</li>
          <li>Full customization control</li>
          <li>Export to PNG, PDF, SVG</li>
          <li>Interactive tools</li>
        </ul>
      </section>

      {/* Installation */}
      <section className="space-y-4 text-slate-700 leading-relaxed">
        <h2 className="text-2xl font-semibold text-[#4a0080]">Installation</h2>

        <pre className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm overflow-x-auto border-l-4 border-[#4a0080]">
          {`pip install matplotlib`}
        </pre>

        <p>Import Matplotlib:</p>

        <pre className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm overflow-x-auto border-l-4 border-[#4a0080]">
          {`import matplotlib.pyplot as plt
import numpy as np`}
        </pre>
      </section>

      {/* Basic Plotting */}
      <section className="space-y-4 text-slate-700 leading-relaxed">
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Basic Plotting
        </h2>

        <h3 className="text-xl font-semibold text-[#4a0080]">Line Plot</h3>

        <pre className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm overflow-x-auto border-l-4 border-[#4a0080]">
          {`import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.plot(x, y)
plt.xlabel('X axis')
plt.ylabel('Y axis')
plt.title('Sine Wave')
plt.grid(True)
plt.show()

y2 = np.cos(x)
plt.plot(x, y, label='sin(x)')
plt.plot(x, y2, label='cos(x)')
plt.legend()
plt.show()`}
        </pre>

        <h3 className="text-xl font-semibold text-[#4a0080]">Scatter Plot</h3>
        <pre className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm overflow-x-auto border-l-4 border-[#4a0080]">
          {`x = np.random.rand(50)
y = np.random.rand(50)
colors = np.random.rand(50)
sizes = 1000 * np.random.rand(50)

plt.scatter(x, y, c=colors, s=sizes, alpha=0.5, cmap='viridis')
plt.colorbar()
plt.xlabel('X values')
plt.ylabel('Y values')
plt.title('Scatter Plot')
plt.show()`}
        </pre>

        <h3 className="text-xl font-semibold text-[#4a0080]">Bar Plot</h3>
        <pre className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm overflow-x-auto border-l-4 border-[#4a0080]">
          {`categories = ['A', 'B', 'C', 'D', 'E']
values = [23, 45, 56, 78, 32]

plt.bar(categories, values)
plt.xlabel('Categories')
plt.ylabel('Values')
plt.title('Bar Chart')
plt.show()

plt.barh(categories, values)
plt.xlabel('Values')
plt.ylabel('Categories')
plt.title('Horizontal Bar Chart')
plt.show()`}
        </pre>

        <h3 className="text-xl font-semibold text-[#4a0080]">Histogram</h3>
        <pre className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm overflow-x-auto border-l-4 border-[#4a0080]">
          {`data = np.random.randn(1000)

plt.hist(data, bins=30, color='green', alpha=0.7, edgecolor='black')
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.title('Histogram')
plt.show()

data2 = np.random.randn(1000) + 2
plt.hist(data, bins=30, alpha=0.5, label='Dataset 1')
plt.hist(data2, bins=30, alpha=0.5, label='Dataset 2')
plt.legend()
plt.show()`}
        </pre>

        <h3 className="text-xl font-semibold text-[#4a0080]">Pie Chart</h3>
        <pre className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm overflow-x-auto border-l-4 border-[#4a0080]">
          {`labels = ['Python', 'JavaScript', 'Java', 'C++', 'Others']
sizes = [35, 25, 20, 15, 5]

plt.pie(sizes, labels=labels, autopct='%1.1f%%', startangle=90)
plt.axis('equal')
plt.title('Programming Languages')
plt.show()`}
        </pre>
      </section>

      {/* Object Oriented */}
      <section className="space-y-4 text-slate-700 leading-relaxed">
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Figure and Axes
        </h2>

        <h3 className="text-xl font-semibold text-[#4a0080]">
          Object-Oriented Approach
        </h3>

        <pre className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm overflow-x-auto border-l-4 border-[#4a0080]">
          {`fig, ax = plt.subplots()

x = np.linspace(0, 10, 100)
ax.plot(x, np.sin(x))
ax.set_xlabel('X axis')
ax.set_ylabel('Y axis')
ax.set_title('Sine Wave')
ax.grid(True)

plt.show()`}
        </pre>

        <h3 className="text-xl font-semibold text-[#4a0080]">
          Multiple Subplots
        </h3>

        <pre className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm overflow-x-auto border-l-4 border-[#4a0080]">
          {`fig, axes = plt.subplots(2, 2, figsize=(10, 8))

x = np.linspace(0, 10, 100)

axes[0, 0].plot(x, np.sin(x))
axes[0, 0].set_title('Sine')

axes[0, 1].plot(x, np.cos(x), 'r')
axes[0, 1].set_title('Cosine')

axes[1, 0].plot(x, np.tan(x))
axes[1, 0].set_title('Tangent')

axes[1, 1].plot(x, np.exp(-x/5))
axes[1, 1].set_title('Exponential Decay')

plt.tight_layout()
plt.show()`}
        </pre>

        <h3 className="text-xl font-semibold text-[#4a0080]">
          GridSpec Layout
        </h3>

        <pre className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm overflow-x-auto border-l-4 border-[#4a0080]">
          {`import matplotlib.gridspec as gridspec

fig = plt.figure(figsize=(10, 6))
gs = gridspec.GridSpec(2, 3)

ax1 = fig.add_subplot(gs[0, :])
ax2 = fig.add_subplot(gs[1, 0])
ax3 = fig.add_subplot(gs[1, 1:])

x = np.linspace(0, 10, 100)
ax1.plot(x, np.sin(x))
ax2.plot(x, np.cos(x))
ax3.plot(x, np.tan(x))

plt.tight_layout()
plt.show()`}
        </pre>
      </section>

      {/* Customization */}
      <section className="space-y-4 text-slate-700 leading-relaxed">
        <h2 className="text-2xl font-semibold text-[#4a0080]">Customization</h2>

        <h3 className="text-xl font-semibold text-[#4a0080]">
          Colors & Styles
        </h3>

        <pre className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm overflow-x-auto border-l-4 border-[#4a0080]">
          {`x = np.linspace(0, 10, 100)

plt.plot(x, x, '-', label='solid')
plt.plot(x, x+1, '--', label='dashed')
plt.plot(x, x+2, '-.', label='dash-dot')
plt.plot(x, x+3, ':', label='dotted')
plt.legend()
plt.show()`}
        </pre>

        <h3 className="text-xl font-semibold text-[#4a0080]">Styles</h3>

        <pre className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm overflow-x-auto border-l-4 border-[#4a0080]">
          {`print(plt.style.available)

plt.style.use('ggplot')

x = np.linspace(0, 10, 100)
plt.plot(x, np.sin(x))
plt.title('Styled Plot')
plt.show()

plt.style.use('default')`}
        </pre>

        <h3 className="text-xl font-semibold text-[#4a0080]">Annotations</h3>

        <pre className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm overflow-x-auto border-l-4 border-[#4a0080]">
          {`x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.text(5, 0, 'Middle Point')

plt.annotate('Maximum', xy=(np.pi/2, 1), xytext=(2, 1.2),
             arrowprops=dict(arrowstyle='->'))

plt.plot(x, y)
plt.show()`}
        </pre>

        <h3 className="text-xl font-semibold text-[#4a0080]">Custom Axes</h3>

        <pre className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm overflow-x-auto border-l-4 border-[#4a0080]">
          {`fig, ax = plt.subplots()

x = np.linspace(0, 10, 100)
ax.plot(x, np.exp(x))

ax.set_xlim(0, 5)
ax.set_ylim(0, 100)

ax.set_yscale('log')

ax.set_xticks([0, 2.5, 5])
ax.set_xticklabels(['Start', 'Middle', 'End'])

ax.grid(True, linestyle='--', alpha=0.5)

ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)

plt.show()`}
        </pre>
      </section>

      {/* Advanced Plot Types */}
      <section className="space-y-4 text-slate-700 leading-relaxed">
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Advanced Plot Types
        </h2>

        <h3 className="text-xl font-semibold text-[#4a0080]">Contour Plot</h3>

        <pre className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm overflow-x-auto border-l-4 border-[#4a0080]">
          {`x = np.linspace(-3, 3, 100)
y = np.linspace(-3, 3, 100)
X, Y = np.meshgrid(x, y)
Z = np.sin(np.sqrt(X**2 + Y**2))

plt.contour(X, Y, Z, levels=10)
plt.colorbar()
plt.show()

plt.contourf(X, Y, Z, levels=20)
plt.colorbar()
plt.show()`}
        </pre>

        <h3 className="text-xl font-semibold text-[#4a0080]">3D Plots</h3>

        <pre className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm overflow-x-auto border-l-4 border-[#4a0080]">
          {`from mpl_toolkits.mplot3d import Axes3D

fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

x = np.linspace(-5, 5, 50)
y = np.linspace(-5, 5, 50)
X, Y = np.meshgrid(x, y)
Z = np.sin(np.sqrt(X**2 + Y**2))

surf = ax.plot_surface(X, Y, Z, cmap='viridis')
fig.colorbar(surf)
plt.show()

fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')
x = np.random.rand(100)
y = np.random.rand(100)
z = np.random.rand(100)
ax.scatter(x, y, z, c=z)
plt.show()`}
        </pre>

        <h3 className="text-xl font-semibold text-[#4a0080]">Box Plot</h3>

        <pre className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm overflow-x-auto border-l-4 border-[#4a0080]">
          {`data = [np.random.normal(0, std, 100) for std in range(1, 3)]

plt.boxplot(data, labels=['Group 1', 'Group 2'])
plt.show()`}
        </pre>

        <h3 className="text-xl font-semibold text-[#4a0080]">Heatmap</h3>

        <pre className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm overflow-x-auto border-l-4 border-[#4a0080]">
          {`data = np.random.rand(10, 10)

plt.imshow(data, cmap='hot')
plt.colorbar()
plt.show()`}
        </pre>
      </section>

      {/* Saving Figures */}
      <section className="space-y-4 text-slate-700 leading-relaxed">
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Saving Figures
        </h2>

        <pre className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm overflow-x-auto border-l-4 border-[#4a0080]">
          {`x = np.linspace(0, 10, 100)
plt.plot(x, np.sin(x))

plt.savefig('sine.png', dpi=300)
plt.savefig('sine.pdf')
plt.savefig('sine.svg')

plt.show()`}
        </pre>
      </section>

      {/* Dashboard */}
      <section className="space-y-4 text-slate-700 leading-relaxed">
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Practical Example: Dashboard
        </h2>

        <pre className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm overflow-x-auto border-l-4 border-[#4a0080]">
          {`import numpy as np
import matplotlib.pyplot as plt

np.random.seed(42)
months = ['Jan','Feb','Mar','Apr','May','Jun']
sales = [23,45,56,78,65,82]
expenses = [18,35,42,55,48,60]
profit = np.array(sales) - np.array(expenses)

fig = plt.figure(figsize=(15,10))

ax1 = plt.subplot(2,3,1)
ax1.plot(months, sales, 'o-', label='Sales')
ax1.plot(months, expenses, 's-', label='Expenses')
ax1.set_title('Sales vs Expenses')
ax1.legend()

ax2 = plt.subplot(2,3,2)
ax2.bar(months, profit)
ax2.set_title('Monthly Profit')

ax3 = plt.subplot(2,3,3)
expense_vals = [30,25,35,10]
labels = ['Marketing','Ops','Salaries','Other']
ax3.pie(expense_vals, labels=labels, autopct='%1.1f%%')
ax3.set_title('Expense Distribution')

plt.tight_layout()
plt.show()`}
        </pre>
      </section>

      {/* Best Practices */}
      <section className="space-y-2 text-slate-700 leading-relaxed">
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Best Practices
        </h2>

        <ul className="list-disc pl-6 space-y-1">
          <li>Prefer object-oriented API</li>
          <li>Always label axes</li>
          <li>Use readable color palettes</li>
          <li>Save high-resolution images</li>
          <li>Use tight_layout() for spacing</li>
        </ul>
      </section>

      <section className="text-slate-700 leading-relaxed">
        <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>
        <p>
          Matplotlib is a core visualization tool in Python, suitable for both
          exploratory analysis and polished, publication-ready graphics.
        </p>
      </section>
    </div>
  );
}
