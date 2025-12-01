import React from "react";

export default function PandasPage() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Pandas Tutorial
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Pandas is a powerful Python library for data manipulation and analysis.
        It provides data structures like DataFrame and Series that make working
        with structured data fast, easy, and expressive.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Introduction to Pandas
          </h2>

          <p className="mt-2">
            Pandas is a powerful Python library for data manipulation and
            analysis. It provides data structures like DataFrame and Series that
            make working with structured data fast, easy, and expressive.
          </p>

          <h3 className="mt-4 text-xl font-semibold text-[#4a0080]">
            Key Features
          </h3>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Fast and efficient DataFrame object with indexing</li>
            <li>
              Tools for reading and writing data between in-memory data
              structures and different file formats
            </li>
            <li>Data alignment and integrated handling of missing data</li>
            <li>Reshaping and pivoting of datasets</li>
            <li>Label-based slicing, indexing, and subsetting</li>
            <li>Group by functionality for aggregation and transformation</li>
            <li>Time series functionality</li>
          </ul>
        </section>

        {/* Installation */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Installation
          </h2>

          <div className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`pip install pandas`}</pre>
          </div>

          <p className="mt-2">Import Pandas:</p>

          <div className="mt-2 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`import pandas as pd
import numpy as np  # Often used together`}</pre>
          </div>
        </section>

        {/* Data Structures */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Pandas Data Structures
          </h2>

          <h3 className="mt-3 text-xl font-semibold text-[#4a0080]">Series</h3>
          <p className="mt-1">A Series is a one-dimensional labeled array:</p>

          <div className="mt-2 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`import pandas as pd

# Create Series from list
s = pd.Series([1, 3, 5, 7, 9])
print(s)

# Create Series with custom index
s = pd.Series([1, 3, 5, 7, 9], index=['a', 'b', 'c', 'd', 'e'])
print(s)

# Create Series from dictionary
data = {'a': 10, 'b': 20, 'c': 30}
s = pd.Series(data)
print(s)

# Access elements
print(s['a'])      # 10
print(s.iloc[0])   # 10`}</pre>
          </div>

          <h3 className="mt-4 text-xl font-semibold text-[#4a0080]">
            DataFrame
          </h3>
          <p className="mt-1">
            A DataFrame is a two-dimensional labeled data structure:
          </p>

          <div className="mt-2 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`# Create DataFrame from dictionary
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'David'],
    'Age': [25, 30, 35, 28],
    'City': ['New York', 'Paris', 'London', 'Tokyo']
}
df = pd.DataFrame(data)
print(df)

# Create DataFrame from list of dictionaries
data = [
    {'Name': 'Alice', 'Age': 25},
    {'Name': 'Bob', 'Age': 30},
    {'Name': 'Charlie', 'Age': 35}
]
df = pd.DataFrame(data)
print(df)

# Create DataFrame from NumPy array
arr = np.array([[1, 2, 3], [4, 5, 6]])
df = pd.DataFrame(arr, columns=['A', 'B', 'C'])
print(df)`}</pre>
          </div>
        </section>

        {/* Array attributes / info */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Viewing and Inspecting Data
          </h2>

          <div className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`# First/last rows
print(df.head())      # First 5 rows
print(df.tail(10))    # Last 10 rows

# Basic information
print(df.info())      # Column types, non-null counts
print(df.describe())  # Statistical summary
print(df.shape)       # (rows, columns)
print(df.columns)     # Column names
print(df.index)       # Index
print(df.dtypes)      # Data types

# Unique values
print(df['column'].unique())
print(df['column'].nunique())
print(df['column'].value_counts())`}</pre>
          </div>
        </section>

        {/* Reading / Writing */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Reading and Writing Data
          </h2>

          <h3 className="mt-3 text-xl font-semibold text-[#4a0080]">
            CSV Files
          </h3>
          <div className="mt-2 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`# Read CSV
df = pd.read_csv('data.csv')

# Read with specific options
df = pd.read_csv('data.csv', 
                 sep=',',           # Delimiter
                 header=0,          # Row to use as column names
                 index_col=0,       # Column to use as index
                 na_values=['NA'])  # Values to recognize as NaN

# Write to CSV
df.to_csv('output.csv', index=False)`}</pre>
          </div>

          <h3 className="mt-4 text-xl font-semibold text-[#4a0080]">
            Excel Files
          </h3>
          <div className="mt-2 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`# Read Excel
df = pd.read_excel('data.xlsx', sheet_name='Sheet1')

# Write to Excel
df.to_excel('output.xlsx', sheet_name='Data', index=False)

# Write multiple sheets
with pd.ExcelWriter('output.xlsx') as writer:
    df1.to_excel(writer, sheet_name='Sheet1')
    df2.to_excel(writer, sheet_name='Sheet2')`}</pre>
          </div>

          <h3 className="mt-4 text-xl font-semibold text-[#4a0080]">
            JSON Files
          </h3>
          <div className="mt-2 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`# Read JSON
df = pd.read_json('data.json')

# Write to JSON
df.to_json('output.json', orient='records', indent=2)`}</pre>
          </div>

          <h3 className="mt-4 text-xl font-semibold text-[#4a0080]">
            SQL Databases
          </h3>
          <div className="mt-2 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`import sqlite3

# Read from SQL
conn = sqlite3.connect('database.db')
df = pd.read_sql('SELECT * FROM table_name', conn)

# Write to SQL
df.to_sql('table_name', conn, if_exists='replace', index=False)`}</pre>
          </div>
        </section>

        {/* Selecting Data */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Selecting Data
          </h2>

          <h3 className="mt-3 text-xl font-semibold text-[#4a0080]">
            Selecting Columns
          </h3>
          <div className="mt-2 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`# Single column (returns Series)
print(df['Name'])

# Multiple columns (returns DataFrame)
print(df[['Name', 'Age']])

# Using dot notation
print(df.Name)  # Works if column name has no spaces`}</pre>
          </div>

          <h3 className="mt-4 text-xl font-semibold text-[#4a0080]">
            Selecting Rows
          </h3>
          <div className="mt-2 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`# By position (iloc)
print(df.iloc[0])        # First row
print(df.iloc[0:3])      # First 3 rows
print(df.iloc[0:3, 0:2]) # First 3 rows, first 2 columns

# By label (loc)
print(df.loc[0])         # Row with index 0
print(df.loc[0:2])       # Rows 0 to 2 (inclusive)
print(df.loc[0:2, 'Name':'Age'])  # Specific rows and columns`}</pre>
          </div>

          <h3 className="mt-4 text-xl font-semibold text-[#4a0080]">
            Boolean Indexing
          </h3>
          <div className="mt-2 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`# Filter rows
print(df[df['Age'] > 30])
print(df[df['City'] == 'New York'])

# Multiple conditions
print(df[(df['Age'] > 25) & (df['City'] == 'Paris')])
print(df[(df['Age'] < 28) | (df['City'] == 'Tokyo')])

# Using isin()
cities = ['New York', 'London']
print(df[df['City'].isin(cities)])`}</pre>
          </div>
        </section>

        {/* Data Manipulation */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Data Manipulation
          </h2>

          <h3 className="mt-3 text-xl font-semibold text-[#4a0080]">
            Adding/Removing Columns
          </h3>
          <div className="mt-2 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`# Add new column
df['Country'] = ['USA', 'France', 'UK', 'Japan']
df['Age_Group'] = df['Age'].apply(lambda x: 'Young' if x < 30 else 'Adult')

# Remove columns
df = df.drop('Country', axis=1)
df = df.drop(['City', 'Age_Group'], axis=1)`}</pre>
          </div>

          <h3 className="mt-4 text-xl font-semibold text-[#4a0080]">
            Adding/Removing Rows
          </h3>
          <div className="mt-2 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`# Add row
new_row = {'Name': 'Eve', 'Age': 27, 'City': 'Berlin'}
df = pd.concat([df, pd.DataFrame([new_row])], ignore_index=True)

# Remove rows
df = df.drop(0, axis=0)  # Drop row with index 0
df = df[df['Age'] > 25]  # Keep only rows where Age > 25`}</pre>
          </div>

          <h3 className="mt-4 text-xl font-semibold text-[#4a0080]">
            Modifying Values
          </h3>
          <div className="mt-2 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`# Modify single value
df.loc[0, 'Age'] = 26

# Modify column
df['Age'] = df['Age'] + 1

# Conditional modification
df.loc[df['Age'] > 30, 'Status'] = 'Senior'
df.loc[df['Age'] <= 30, 'Status'] = 'Junior'`}</pre>
          </div>
        </section>

        {/* Missing Data */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Handling Missing Data
          </h2>

          <div className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`# Check for missing values
print(df.isnull())
print(df.isnull().sum())  # Count per column
print(df.isna())          # Same as isnull()

# Drop missing values
df_clean = df.dropna()              # Drop rows with any NaN
df_clean = df.dropna(axis=1)        # Drop columns with any NaN
df_clean = df.dropna(thresh=2)      # Keep rows with at least 2 non-NaN

# Fill missing values
df_filled = df.fillna(0)            # Fill with 0
df_filled = df.fillna(df.mean())    # Fill with mean
df_filled = df.fillna(method='ffill')  # Forward fill
df_filled = df.fillna(method='bfill')  # Backward fill

# Fill specific columns
df['Age'].fillna(df['Age'].mean(), inplace=True)`}</pre>
          </div>
        </section>

        {/* GroupBy */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            GroupBy Operations
          </h2>

          <div className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`# Group by single column
grouped = df.groupby('City')
print(grouped.mean())
print(grouped.sum())
print(grouped.count())

# Group by multiple columns
grouped = df.groupby(['City', 'Status'])
print(grouped.mean())

# Aggregate with different functions
print(df.groupby('City').agg({
    'Age': ['mean', 'min', 'max'],
    'Name': 'count'
}))

# Apply custom function
def age_range(x):
    return x.max() - x.min()

print(df.groupby('City')['Age'].apply(age_range))`}</pre>
          </div>
        </section>

        {/* Sorting */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Sorting Data
          </h2>

          <div className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`# Sort by column
df_sorted = df.sort_values('Age')
df_sorted = df.sort_values('Age', ascending=False)

# Sort by multiple columns
df_sorted = df.sort_values(['City', 'Age'])

# Sort by index
df_sorted = df.sort_index()

# In-place sorting
df.sort_values('Age', inplace=True)`}</pre>
          </div>
        </section>

        {/* Merge / Join */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Merging and Joining
          </h2>

          <h3 className="mt-3 text-xl font-semibold text-[#4a0080]">
            Concatenation
          </h3>
          <div className="mt-2 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`# Vertical concatenation (stack rows)
df1 = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
df2 = pd.DataFrame({'A': [5, 6], 'B': [7, 8]})
result = pd.concat([df1, df2], ignore_index=True)

# Horizontal concatenation (stack columns)
result = pd.concat([df1, df2], axis=1)`}</pre>
          </div>

          <h3 className="mt-4 text-xl font-semibold text-[#4a0080]">
            Merge (SQL-style joins)
          </h3>
          <div className="mt-2 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`df1 = pd.DataFrame({'ID': [1, 2, 3], 'Name': ['Alice', 'Bob', 'Charlie']})
df2 = pd.DataFrame({'ID': [1, 2, 4], 'Score': [85, 90, 95]})

# Inner join
merged = pd.merge(df1, df2, on='ID', how='inner')

# Left join
merged = pd.merge(df1, df2, on='ID', how='left')

# Right join
merged = pd.merge(df1, df2, on='ID', how='right')

# Outer join
merged = pd.merge(df1, df2, on='ID', how='outer')`}</pre>
          </div>
        </section>

        {/* Pivot tables */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Pivot Tables
          </h2>

          <div className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`# Create sample data
data = {
    'Date': ['2024-01-01', '2024-01-01', '2024-01-02', '2024-01-02'],
    'Product': ['A', 'B', 'A', 'B'],
    'Sales': [100, 150, 120, 160],
    'Quantity': [5, 8, 6, 9]
}
df = pd.DataFrame(data)

# Create pivot table
pivot = df.pivot_table(
    values='Sales',
    index='Date',
    columns='Product',
    aggfunc='sum'
)
print(pivot)

# Multiple aggregations
pivot = df.pivot_table(
    values=['Sales', 'Quantity'],
    index='Date',
    columns='Product',
    aggfunc={'Sales': 'sum', 'Quantity': 'mean'}
)`}</pre>
          </div>
        </section>

        {/* String ops */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            String Operations
          </h2>

          <div className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`# String methods
df['Name_Lower'] = df['Name'].str.lower()
df['Name_Upper'] = df['Name'].str.upper()
df['Name_Length'] = df['Name'].str.len()

# String contains
df_filtered = df[df['Name'].str.contains('Alice')]

# String replacement
df['Name'] = df['Name'].str.replace('Alice', 'Alicia')

# Split strings
df[['First', 'Last']] = df['FullName'].str.split(' ', expand=True)

# Strip whitespace
df['Name'] = df['Name'].str.strip()`}</pre>
          </div>
        </section>

        {/* Date & time */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Date and Time Operations
          </h2>

          <div className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`# Convert to datetime
df['Date'] = pd.to_datetime(df['Date'])

# Extract components
df['Year'] = df['Date'].dt.year
df['Month'] = df['Date'].dt.month
df['Day'] = df['Date'].dt.day
df['DayOfWeek'] = df['Date'].dt.day_name()

# Date arithmetic
df['NextWeek'] = df['Date'] + pd.Timedelta(days=7)

# Date range
dates = pd.date_range('2024-01-01', periods=10, freq='D')

# Resample time series
df.set_index('Date').resample('M').sum()  # Monthly sum`}</pre>
          </div>
        </section>

        {/* Apply / map */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Apply and Map Functions
          </h2>

          <div className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`# Apply function to column
df['Age_Squared'] = df['Age'].apply(lambda x: x ** 2)

# Apply function to DataFrame
def calculate_category(row):
    if row['Age'] < 30:
        return 'Young'
    else:
        return 'Adult'

df['Category'] = df.apply(calculate_category, axis=1)

# Map values
status_map = {25: 'Junior', 30: 'Mid', 35: 'Senior'}
df['Level'] = df['Age'].map(status_map)

# Replace values
df['City'] = df['City'].replace({'New York': 'NYC', 'Los Angeles': 'LA'})`}</pre>
          </div>
        </section>

        {/* Practical example */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Practical Example: Sales Analysis
          </h2>

          <div className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            <pre>{`# Create sample sales data
data = {
    'Date': pd.date_range('2024-01-01', periods=100, freq='D'),
    'Product': np.random.choice(['A', 'B', 'C'], 100),
    'Region': np.random.choice(['North', 'South', 'East', 'West'], 100),
    'Sales': np.random.randint(100, 1000, 100),
    'Quantity': np.random.randint(1, 20, 100)
}
df = pd.DataFrame(data)

# Analysis
# 1. Total sales by product
product_sales = df.groupby('Product')['Sales'].sum()
print(product_sales)

# 2. Average quantity by region
region_avg = df.groupby('Region')['Quantity'].mean()
print(region_avg)

# 3. Monthly sales trend
df['Month'] = df['Date'].dt.to_period('M')
monthly_sales = df.groupby('Month')['Sales'].sum()
print(monthly_sales)

# 4. Top 10 sales days
top_days = df.nlargest(10, 'Sales')[['Date', 'Product', 'Sales']]
print(top_days)

# 5. Sales summary by product and region
summary = df.pivot_table(
    values='Sales',
    index='Product',
    columns='Region',
    aggfunc='sum',
    fill_value=0
)
print(summary)`}</pre>
          </div>
        </section>

        {/* Best practices */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Best Practices
          </h2>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Use vectorized operations:</strong> Avoid loops; use
              built-in Pandas methods.
            </li>
            <li>
              <strong>Chain operations:</strong> Use method chaining for cleaner
              code.
            </li>
            <li>
              <strong>Set appropriate data types:</strong> Use{" "}
              <code>category</code> dtype for categorical data.
            </li>
            <li>
              <strong>Use inplace sparingly:</strong> Prefer assignment for
              clarity.
            </li>
            <li>
              <strong>Handle missing data explicitly:</strong> Don&apos;t ignore
              NaN values.
            </li>
            <li>
              <strong>Index wisely:</strong> Set meaningful indexes for faster
              lookups.
            </li>
          </ul>
        </section>

        {/* Summary */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>

          <p className="mt-2">
            Pandas is the go-to library for data manipulation in Python. Its
            powerful DataFrame structure and rich functionality make it
            essential for data cleaning, transformation, and analysis. Master
            Pandas to work efficiently with structured data.
          </p>
        </section>
      </div>
    </div>
  );
}
