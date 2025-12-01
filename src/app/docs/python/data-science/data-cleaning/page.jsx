export default function DataCleaningPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Data Cleaning with Pandas</h1>
      <p>
        Data cleaning prepares raw data for reliable analysis: handling missing values, fixing
        types, normalizing categories, parsing dates, removing duplicates, and dealing with
        outliers.
      </p>

      <section>
        <h2>Setup</h2>
        <pre><code>{`import pandas as pd
import numpy as np

df = pd.DataFrame({
    'id': [1, 2, 2, 4],
    'name': [' Alice ', 'bob', 'Bob ', None],
    'age': ['25', ' thirty ', '30', ''],
    'joined': ['2024-01-01', '01/02/2024', 'Feb 3, 2024', None],
    'score': [85, None, 92, 120]
})`}</code></pre>
      </section>

      <section>
        <h2>Missing Values</h2>
        <pre><code>{`# Detect
print(df.isna().sum())

# Replace blanks with NaN before cleanup
df['age'] = df['age'].replace({'': np.nan})

# Fill numeric columns
df['score'] = df['score'].fillna(df['score'].median())

# Drop rows where critical fields are missing
df = df.dropna(subset=['name'])`}</code></pre>
      </section>

      <section>
        <h2>Type Conversion</h2>
        <pre><code>{`# Clean whitespace and uniform case
df['name'] = df['name'].str.strip().str.title()

# Coerce problematic age strings to number
# non-convertible become NaN, then fill if needed
age_clean = (df['age'].str.extract(r'(\\d+)')
                    .astype(float)
                    .squeeze())

df['age'] = age_clean

# Parse dates in different formats
df['joined'] = pd.to_datetime(df['joined'], errors='coerce')`}</code></pre>
      </section>

      <section>
        <h2>Deduplication</h2>
        <pre><code>{`# Keep first occurrence, drop duplicates on selected keys
df = df.drop_duplicates(subset=['id', 'name'])`}</code></pre>
      </section>

      <section>
        <h2>Outliers</h2>
        <pre><code>{`# Clip scores to plausible range [0, 100]
df['score'] = df['score'].clip(lower=0, upper=100)`}</code></pre>
      </section>

      <section>
        <h2>Category Normalization</h2>
        <pre><code>{`# Example: standardize labels
mapping = {'Bob': 'Bob', 'B0b': 'Bob'}
df['name'] = df['name'].replace(mapping)

# Categorical dtype saves memory and validates values
categories = pd.CategoricalDtype(categories=['Alice','Bob'], ordered=False)
df['name'] = df['name'].astype(categories)`}</code></pre>
      </section>

      <section>
        <h2>Column Hygiene</h2>
        <pre><code>{`# Rename columns consistently
df = df.rename(columns=lambda c: c.strip().lower().replace(' ', '_'))

# Remove leading/trailing whitespace across object columns
obj_cols = df.select_dtypes(include=['object']).columns
for c in obj_cols:
    if df[c].notna().any():
        df[c] = df[c].str.strip()`}</code></pre>
      </section>

      <section>
        <h2>Validation</h2>
        <pre><code>{`# Basic validation rules
assert df['id'].is_unique, 'id must be unique after dedupe'
assert df['score'].between(0,100).all(), 'score out of range'
assert df['joined'].notna().any(), 'joined should have valid dates'`}</code></pre>
      </section>

      <section>
        <h2>End-to-End Pipeline</h2>
        <pre><code>{`def clean(df: pd.DataFrame) -> pd.DataFrame:
    out = df.copy()

    # Missing values
    out['age'] = out['age'].replace({'': np.nan})
    out['score'] = out['score'].fillna(out['score'].median())
    out = out.dropna(subset=['name'])

    # Types and parsing
    out['name'] = out['name'].str.strip().str.title()
    out['age'] = (out['age'].astype(str)
                          .str.extract(r'(\\d+)')
                          .astype(float)
                          .squeeze())
    out['joined'] = pd.to_datetime(out['joined'], errors='coerce')

    # Deduplicate and outliers
    out = out.drop_duplicates(subset=['id', 'name'])
    out['score'] = out['score'].clip(0, 100)

    # Column hygiene
    out = out.rename(columns=lambda c: c.strip().lower().replace(' ', '_'))
    for c in out.select_dtypes(include=['object']).columns:
        out[c] = out[c].str.strip()

    return out`}</code></pre>
      </section>

      <section>
        <h2>Tips</h2>
        <ul>
          <li>Always inspect with <code>df.info()</code> and <code>df.describe()</code> first</li>
          <li>Prefer <code>errors='coerce'</code> when parsing to surface bad values</li>
          <li>Keep a reproducible cleaning function and unit tests for it</li>
        </ul>
      </section>
    </div>
  );
}
