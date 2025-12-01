import React from "react";

export default function PandasForDSPage() {
  return (
    <div className="space-y-6">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Pandas for Data Science
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Pandas provides high-performance tools for loading, cleaning,
        transforming, aggregating, and joining tabular datasets using
        DataFrames. It is the foundation of most data science workflows in
        Python.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Why Pandas */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Why Pandas?</h2>
          <p className="mt-2">Pandas is essential because it provides:</p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Easy loading of CSV, Excel, SQL, JSON</li>
            <li>Powerful filtering and indexing</li>
            <li>Groupby operations for summaries</li>
            <li>Merging & joining like SQL</li>
            <li>Handling missing values</li>
            <li>Reshaping (pivot, melt)</li>
            <li>Time-series and rolling operations</li>
          </ul>
        </section>

        {/* Load & Inspect Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Load & Inspect Data
          </h2>
          <p className="mt-2">
            Use Pandas to load files and quickly inspect their structure.
          </p>
        </section>

        {/* Code Block */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Example</h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 shadow-sm rounded-md overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />

                <pre className="p-6 w-full font-mono text-sm leading-7 text-slate-800">
                  {`import pandas as pd

df = pd.read_csv('sales.csv')
print(df.head())   # preview first 5 rows
print(df.info())   # column types + non-null counts`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Explanation */}
        <p className="font-semibold text-[#4a0080]">What this shows:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <code>head()</code> quickly previews your dataset.
          </li>
          <li>
            <code>info()</code> reveals dtypes and missing values.
          </li>
          <li>Useful before any cleaning or modeling.</li>
        </ul>

        {/* Select, Group, Join Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Select, Group & Join
          </h2>
          <p className="mt-2">
            These three operations form the core of data analysis: filtering
            rows, summarizing data, and combining datasets.
          </p>
        </section>

        {/* Code Block */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Examples</h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 shadow-sm rounded-md overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />

                <pre className="p-6 w-full font-mono text-sm leading-7 text-slate-800">
                  {`# filtering high-value transactions
high = df[df['amount'] > 1000]

# groupby: total sales by region
agg = df.groupby('region')['amount'].sum().reset_index()

# join with metadata
meta = pd.read_csv('regions.csv')
merged = df.merge(meta, on='region', how='left')
print(merged.head())`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Explanation */}
        <p className="font-semibold text-[#4a0080]">Explanation:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Filtering:</strong> Select rows where{" "}
            <code>amount &gt; 1000</code>.
          </li>
          <li>
            <strong>Groupby:</strong> Summarize sales by region — common in
            dashboards.
          </li>
          <li>
            <strong>Merging:</strong> Join <code>sales.csv</code> with{" "}
            <code>regions.csv</code>
            (SQL-style join: left/inner/right/outer).
          </li>
        </ul>

        {/* Missing Values Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Handling Missing Values
          </h2>
          <p className="mt-2">
            Missing values must be handled before training ML models or running
            analysis.
          </p>
        </section>

        {/* Missing Value Code */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Example</h3>
          </div>
          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 shadow-sm rounded-md overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />

                <pre className="p-6 font-mono text-sm leading-7 text-slate-800">
                  {`df['amount'] = df['amount'].fillna(df['amount'].median())`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* More Notes */}
        <p className="font-semibold text-[#4a0080]">Alternatives:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code>df.dropna()</code> — remove missing rows entirely
          </li>
          <li>
            <code>df.fillna(0)</code> — replace missing values with default
          </li>
          <li>
            <code>df.fillna(method='ffill')</code> — forward fill for
            time-series
          </li>
        </ul>

        {/* Extra Content Added */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Real-World Uses of Pandas in Data Science
          </h2>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Sales forecasting (cleaning, aggregating, merging datasets)</li>
            <li>Customer segmentation (groupby, statistics)</li>
            <li>Analysis of product performance (join with metadata)</li>
            <li>Preprocessing for machine learning models</li>
            <li>ETL pipelines (Load → Clean → Transform → Export)</li>
          </ul>
        </section>

        {/* Summary */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>
          <p className="mt-2">
            Pandas is essential for all data science workflows — from loading
            and cleaning to grouping, joining, and preparing data for ML. Its
            expressive syntax makes complex analytics easy to perform.
          </p>
        </section>
      </div>
    </div>
  );
}
