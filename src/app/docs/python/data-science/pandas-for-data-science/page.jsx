import React from "react";

export default function PandasForDSPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Pandas for Data Science</h1>
      <p>Tabular data with powerful selection, grouping, and joins.</p>

      <h2>Load & Inspect</h2>
      <pre><code>{`import pandas as pd
df = pd.read_csv('sales.csv')
print(df.head())
print(df.info())`}</code></pre>

      <h2>Select, Group, Join</h2>
      <pre><code>{`# filtering
high = df[df['amount'] > 1000]

# groupby
agg = df.groupby('region')['amount'].sum().reset_index()

# join
meta = pd.read_csv('regions.csv')
merged = df.merge(meta, on='region', how='left')
print(merged.head())`}</code></pre>

      <h2>Missing Values</h2>
      <pre><code>{`df['amount'] = df['amount'].fillna(df['amount'].median())`}</code></pre>
    </div>
  );
}
