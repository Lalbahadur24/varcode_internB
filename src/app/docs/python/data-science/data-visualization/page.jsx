import React from "react";

export default function DataVisualizationPage() {
  return (
    <div className="space-y-6">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Data Visualization
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Data visualization helps you understand patterns, trends, and
        distributions in data. Here we use Matplotlib for low-level control and
        Seaborn for high-level, statistical plots.
      </p>

      <div className="space-y-8 text-slate-700 leading-relaxed">
        {/* Matplotlib Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Matplotlib</h2>
          <p className="mt-2">
            Matplotlib is the core plotting library in Python. You can create
            line plots, bar charts, scatter plots, histograms, and more. Below
            is a simple example plotting a sine wave.
          </p>
        </section>

        {/* Matplotlib Code Block */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-start justify-between p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Example</h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
                  {`import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 2*np.pi, 200)
y = np.sin(x)

plt.plot(x, y, label='sin')
plt.legend()
plt.title('Sine')
plt.xlabel('x')
plt.ylabel('y')
plt.show()`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Matplotlib Output Description */}
        <p className="font-semibold text-[#4a0080]">What you see:</p>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-slate-800">
          A smooth sine curve between 0 and 2π with labeled axes and a legend.
        </div>

        {/* Seaborn Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Seaborn</h2>
          <p className="mt-2">
            Seaborn is built on top of Matplotlib and is great for statistical
            visualizations. It works well with pandas DataFrames and comes with
            built-in datasets. Below we plot a boxplot of restaurant tips data.
          </p>
        </section>

        {/* Seaborn Code Block */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-start justify-between p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Example</h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
                  {`import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

df = sns.load_dataset('tips')
sns.boxplot(df, x='day', y='total_bill', hue='sex')
sns.despine()
plt.show()`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Seaborn Output Description */}
        <p className="font-semibold text-[#4a0080]">What you see:</p>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-slate-800">
          A grouped boxplot showing the distribution of total bill amounts
          across different days of the week, separated by gender (hue ={" "}
          <code>sex</code>). This quickly shows median, spread, and outliers.
        </div>

        {/* Tips Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Tips</h2>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              Use <code>plt.figure(figsize=(w, h))</code> to control plot size.
            </li>
            <li>
              Start with Seaborn for quick EDA (Exploratory Data Analysis), then
              customize details with Matplotlib.
            </li>
            <li>Always label axes and add titles/legends for clarity.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
