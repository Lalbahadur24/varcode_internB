import React from "react";

export default function PandasBasics() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Pandas Basics</h1>
      <p>
        Pandas provides powerful data structures for working with tabular data.
      </p>

      <h2>Install</h2>
      <pre><code>{`pip install pandas`}</code></pre>

      <h2>DataFrame & Series</h2>
      <pre><code>{`import pandas as pd

# Create DataFrame
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'city': ['NY', 'SF', 'LA']
})

print(df)
print(df.info())
print(df.describe())  # statistics`}</code></pre>

      <h2>Reading Data</h2>
      <pre><code>{`# CSV
df = pd.read_csv('data.csv')

# Excel
df = pd.read_excel('data.xlsx', sheet_name='Sheet1')

# JSON
df = pd.read_json('data.json')`}</code></pre>

      <h2>Selection</h2>
      <pre><code>{`# Column
ages = df['age']

# Multiple columns
subset = df[['name', 'age']]

# Rows by condition
young = df[df['age'] < 30]

# loc (label-based)
row = df.loc[0]

# iloc (position-based)
first_two = df.iloc[:2]`}</code></pre>

      <h2>Operations</h2>
      <pre><code>{`# Add column
df['senior'] = df['age'] > 30

# Sort
df_sorted = df.sort_values('age', ascending=False)

# Group by
avg_age = df.groupby('city')['age'].mean()

# Missing values
df.dropna()           # drop rows with NaN
df.fillna(0)          # fill NaN with 0`}</code></pre>

      <h2>Saving Data</h2>
      <pre><code>{`df.to_csv('output.csv', index=False)
df.to_excel('output.xlsx', index=False)`}</code></pre>
    </div>
  );
}
