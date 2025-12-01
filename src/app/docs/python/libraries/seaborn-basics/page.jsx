import React from "react";

export default function SeabornBasics() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Seaborn Basics</h1>
      <p>
        Seaborn is a high-level statistical visualization library built on
        Matplotlib with beautiful default styles and statistical plot types.
      </p>

      <h2>Install</h2>
      <pre><code>{`pip install seaborn`}</code></pre>

      <h2>Basic Plots</h2>
      <pre><code>{`import seaborn as sns
import matplotlib.pyplot as plt

# Load sample data
df = sns.load_dataset('tips')

# Scatter plot
sns.scatterplot(data=df, x='total_bill', y='tip', hue='time')
plt.show()

# Distribution plot
sns.histplot(df['total_bill'], kde=True)
plt.show()`}</code></pre>

      <h2>Categorical Plots</h2>
      <pre><code>{`# Box plot
sns.boxplot(data=df, x='day', y='total_bill', hue='sex')
plt.show()

# Bar plot
sns.barplot(data=df, x='day', y='total_bill', estimator='mean')
plt.show()`}</code></pre>

      <h2>Styling</h2>
      <pre><code>{`# Set theme
sns.set_theme(style='darkgrid')

# Color palettes
sns.set_palette('pastel')

# Context (scale)
sns.set_context('talk')  # poster, paper, notebook, talk`}</code></pre>
    </div>
  );
}
