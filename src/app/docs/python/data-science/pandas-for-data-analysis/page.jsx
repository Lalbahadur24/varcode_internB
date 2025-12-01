import React from "react";

export default function PandasDataAnalysis() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Pandas for Data Analysis
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Pandas provides high-level tools for cleaning, transforming, analyzing,
        and exploring data using its two core structures:{" "}
        <strong>Series</strong>
        (1D) and <strong>DataFrame</strong> (2D). It is the most widely used
        library for data wrangling in Python.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Why Pandas */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Why Pandas?</h2>
          <p className="mt-2">Pandas makes data tasks simple and fast:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Easy loading of CSV, Excel, JSON, SQL</li>
            <li>Powerful filtering and selection</li>
            <li>Fast aggregations (groupby)</li>
            <li>Missing value handling</li>
            <li>Merges & joins</li>
            <li>Reshaping: pivot, melt, stack</li>
            <li>Time series functionality</li>
          </ul>
        </section>

        {/* Creating DataFrame */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Creating a DataFrame
          </h2>
          <p className="mt-2">
            A DataFrame is a table-like structure with labeled rows & columns.
          </p>
        </section>

        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Example</h3>
          </div>
          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm font-mono leading-7 text-slate-800">
                  {`import pandas as pd

df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [24, 30, 29],
    'city': ['NY', 'LA', 'SF']
})

print(df)`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Inspecting Data */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Inspecting Data
          </h2>
          <p className="mt-2">Quick overview functions:</p>
        </section>

        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Example</h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />

                <pre className="p-6 w-full text-sm font-mono leading-7 text-slate-800">
                  {`df.head()        # first 5 rows
df.tail()        # last 5 rows
df.info()        # column types
df.describe()    # numeric stats
df.shape         # (rows, columns)`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Filtering & Selecting */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Filtering & Selecting Rows
          </h2>
          <p className="mt-2">
            Pandas makes filtering easy using boolean masks or query.
          </p>
        </section>

        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Examples</h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]"></div>

                <pre className="p-6 w-full text-sm font-mono leading-7 text-slate-800">
                  {`df[df['age'] > 25]               # filter rows
df[['name', 'city']]              # select columns
df.loc[0:1, 'name':'age']         # label-based
df.iloc[0:2, 0:2]                 # integer-based`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Missing Values */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Handling Missing Values
          </h2>
          <p className="mt-2">Detect, fill or drop missing entries.</p>
        </section>

        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Example</h3>
          </div>
          <div className="px-6 pb-8">
            <div className="border border-gray-100 rounded-md bg-white shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 text-sm font-mono leading-7 text-slate-800">
                  {`df.isna().sum()
df['age'] = df['age'].fillna(df['age'].median())
df = df.dropna(subset=['name'])`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Groupby & Aggregation */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Groupby & Aggregation
          </h2>
          <p className="mt-2">Useful for summarizing data by categories.</p>
        </section>

        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Example</h3>
          </div>

          <div className="px-6 pb-8">
            <div className="border border-gray-100 rounded-md bg-white shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />

                <pre className="p-6 text-sm font-mono leading-7 text-slate-800">
                  {`df.groupby('city')['age'].mean()
df.groupby('city').agg({
    'age': 'mean',
    'name': 'count'
})`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Merging / Joining */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Merging & Joining DataFrames
          </h2>
          <p className="mt-2">Combine datasets like SQL joins.</p>
        </section>

        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Example</h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />

                <pre className="p-6 text-sm font-mono leading-7 text-slate-800">
                  {`df1 = pd.DataFrame({'id':[1,2], 'age':[25,30]})
df2 = pd.DataFrame({'id':[1,2], 'city':['NY','LA']})

merged = df1.merge(df2, on='id')   # inner join
print(merged)`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Reshaping */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Reshaping Data
          </h2>
          <p className="mt-2">
            Reshape datasets using pivot, melt, stack, and unstack.
          </p>
        </section>

        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Examples</h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 text-sm font-mono leading-7 text-slate-800">
                  {`df.pivot(index='city', columns='name', values='age')
pd.melt(df, id_vars=['name'])`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>
          <p className="mt-2">
            Pandas is essential for data cleaning, wrangling, and exploration.
            It integrates seamlessly with NumPy, Matplotlib, and scikit-learn to
            form the core of the Python data science stack.
          </p>
        </section>
      </div>
    </div>
  );
}
