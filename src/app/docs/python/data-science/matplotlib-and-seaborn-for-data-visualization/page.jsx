import React from "react";

export default function MatplotlibSeabornVisualization() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Matplotlib & Seaborn for Data Visualization
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Matplotlib provides low-level control for building any type of plot,
        while Seaborn builds on top of it to create beautiful, statistical
        visualizations quickly. Together, they form the core of Python’s data
        visualization ecosystem.
      </p>

      <div className="space-y-8 text-slate-700 leading-relaxed">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Why Matplotlib?
          </h2>
          <p className="mt-2">
            Matplotlib is extremely flexible and can create almost any type of
            plot:
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Line plots</li>
            <li>Bar charts</li>
            <li>Scatter plots</li>
            <li>Histograms</li>
            <li>Custom drawings with fine-grained control</li>
          </ul>

          <p className="mt-2">
            It's especially powerful when you need full customization.
          </p>
        </section>

        {/* Example: Matplotlib */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Matplotlib Example
            </h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm font-mono leading-7 text-slate-800">
                  {`import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.cos(x)

plt.figure(figsize=(6, 4))
plt.plot(x, y, label='Cosine', color='purple')
plt.title('Cosine Curve')
plt.xlabel('x')
plt.ylabel('cos(x)')
plt.legend()
plt.grid(True)
plt.show()`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Why Seaborn?
          </h2>

          <p className="mt-2">
            Seaborn focuses on statistical visualizations and works seamlessly
            with pandas DataFrames. It offers:
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Beautiful default themes</li>
            <li>
              Built-in statistical plots (boxplot, violin, KDE plot, etc.)
            </li>
            <li>Instant integration with categorical and numeric features</li>
            <li>
              Automatic handling of grouping with <code>hue</code>
            </li>
          </ul>

          <p className="mt-2">Perfect for Exploratory Data Analysis (EDA).</p>
        </section>

        {/* Example: Seaborn */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Seaborn Example
            </h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm font-mono leading-7 text-slate-800">
                  {`import seaborn as sns
import matplotlib.pyplot as plt

df = sns.load_dataset('tips')

plt.figure(figsize=(7,5))
sns.scatterplot(data=df, x='total_bill', y='tip', hue='sex', style='time')
plt.title('Bill Amount vs Tip (colored by gender)')
plt.grid(True)
plt.show()`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Extra Plots */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Common Plot Types (Quick Overview)
          </h2>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <strong>Line Plot</strong> — trends over time
            </li>
            <li>
              <strong>Scatter Plot</strong> — relationships between two
              variables
            </li>
            <li>
              <strong>Bar Chart</strong> — categorical comparison
            </li>
            <li>
              <strong>Histogram</strong> — distribution of numerical data
            </li>
            <li>
              <strong>Box / Violin Plot</strong> — statistical distribution
            </li>
            <li>
              <strong>Heatmap</strong> — correlation matrices & pivot tables
            </li>
          </ul>
        </section>

        {/* Tips */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Tips</h2>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Use Seaborn for EDA, Matplotlib for customization.</li>
            <li>Always add titles, labels, and legends.</li>
            <li>Start with simple plots → then build complexity.</li>
            <li>
              Use <code>figsize</code> to control plot size.
            </li>
            <li>
              Use <code>plt.grid(True)</code> to make plots easier to read.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
