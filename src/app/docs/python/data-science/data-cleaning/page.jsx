import React from "react";

export default function DataCleaningPage() {
  return (
    <div className="space-y-6">
      {/* Main title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Data Cleaning with Pandas
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Data cleaning prepares raw data for reliable analysis: handling missing
        values, fixing types, normalizing categories, parsing dates, removing
        duplicates, and dealing with outliers.
      </p>

      <div className="space-y-8 text-slate-700 leading-relaxed">
        {/* Setup */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Setup</h2>
          <p className="mt-2">
            Create a small example DataFrame with messy values for IDs, names,
            ages, join dates, and scores.
          </p>
        </section>

        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-start justify-between p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Code</h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
                  {`import pandas as pd
import numpy as np

df = pd.DataFrame({
    'id': [1, 2, 2, 4],
    'name': [' Alice ', 'bob', 'Bob ', None],
    'age': ['25', ' thirty ', '30', ''],
    'joined': ['2024-01-01', '01/02/2024', 'Feb 3, 2024', None],
    'score': [85, None, 92, 120]
})`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Missing Values */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Missing Values
          </h2>
          <p className="mt-2">
            Detect missing data, standardize blanks as <code>NaN</code>, and
            either fill or drop rows depending on how critical the column is.
          </p>
        </section>

        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-start justify-between p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Code</h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
                  {`# Detect
print(df.isna().sum())

# Replace blanks with NaN before cleanup
df['age'] = df['age'].replace({'': np.nan})

# Fill numeric columns
df['score'] = df['score'].fillna(df['score'].median())

# Drop rows where critical fields are missing
df = df.dropna(subset=['name'])`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Type Conversion */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Type Conversion
          </h2>
          <p className="mt-2">
            Normalize text formatting, coerce numeric fields, and parse dates
            that appear in different formats.
          </p>
        </section>

        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-start justify-between p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Code</h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
                  {`# Clean whitespace and uniform case
df['name'] = df['name'].str.strip().str.title()

# Coerce problematic age strings to number
# non-convertible become NaN, then fill if needed
age_clean = (df['age'].str.extract(r'(\\d+)')
                    .astype(float)
                    .squeeze())

df['age'] = age_clean

# Parse dates in different formats
df['joined'] = pd.to_datetime(df['joined'], errors='coerce')`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Deduplication */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Deduplication
          </h2>
          <p className="mt-2">
            Remove duplicate records using business keys such as <code>id</code>{" "}
            and <code>name</code>.
          </p>
        </section>

        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-start justify-between p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Code</h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
                  {`# Keep first occurrence, drop duplicates on selected keys
df = df.drop_duplicates(subset=['id', 'name'])`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Outliers */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Outliers</h2>
          <p className="mt-2">
            Clip numeric values to a plausible range to reduce the impact of
            extreme outliers.
          </p>
        </section>

        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-start justify-between p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Code</h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
                  {`# Clip scores to plausible range [0, 100]
df['score'] = df['score'].clip(lower=0, upper=100)`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Category Normalization */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Category Normalization
          </h2>
          <p className="mt-2">
            Standardize label variations and convert to a categorical type for
            memory savings and validation.
          </p>
        </section>

        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-start justify-between p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Code</h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
                  {`# Example: standardize labels
mapping = {'Bob': 'Bob', 'B0b': 'Bob'}
df['name'] = df['name'].replace(mapping)

# Categorical dtype saves memory and validates values
categories = pd.CategoricalDtype(categories=['Alice','Bob'], ordered=False)
df['name'] = df['name'].astype(categories)`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Column Hygiene */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Column Hygiene
          </h2>
          <p className="mt-2">
            Normalize column names and trim whitespace on all string columns to
            keep schemas consistent.
          </p>
        </section>

        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-start justify-between p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Code</h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
                  {`# Rename columns consistently
df = df.rename(columns=lambda c: c.strip().lower().replace(' ', '_'))

# Remove leading/trailing whitespace across object columns
obj_cols = df.select_dtypes(include=['object']).columns
for c in obj_cols:
    if df[c].notna().any():
        df[c] = df[c].str.strip()`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Validation */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Validation</h2>
          <p className="mt-2">
            Add simple assertions to ensure your cleaned data meets core
            expectations.
          </p>
        </section>

        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-start justify-between p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Code</h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
                  {`# Basic validation rules
assert df['id'].is_unique, 'id must be unique after dedupe'
assert df['score'].between(0,100).all(), 'score out of range'
assert df['joined'].notna().any(), 'joined should have valid dates'`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* End-to-End Pipeline */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            End-to-End Pipeline
          </h2>
          <p className="mt-2">
            Wrap the cleaning logic into a reusable function so that the same
            rules can be applied consistently to new data.
          </p>
        </section>

        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-start justify-between p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Code</h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
                  {`def clean(df: pd.DataFrame) -> pd.DataFrame:
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

    return out`}
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
              Always inspect with <code>df.info()</code> and{" "}
              <code>df.describe()</code> first.
            </li>
            <li>
              Prefer <code>errors='coerce'</code> when parsing to surface bad
              values.
            </li>
            <li>
              Keep a reproducible cleaning function and unit tests for it.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
