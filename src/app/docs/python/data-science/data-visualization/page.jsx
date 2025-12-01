import React from "react";

export default function DataVisualizationPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Data Visualization</h1>
      <p>Quick plots with Matplotlib and Seaborn.</p>

      <h2>Matplotlib</h2>
      <pre><code>{`import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 2*np.pi, 200)
y = np.sin(x)

plt.plot(x, y, label='sin')
plt.legend(); plt.title('Sine'); plt.xlabel('x'); plt.ylabel('y')
plt.show()`}</code></pre>

      <h2>Seaborn</h2>
      <pre><code>{`import seaborn as sns
import pandas as pd

df = sns.load_dataset('tips')
sns.boxplot(df, x='day', y='total_bill', hue='sex')
sns.despine();
plt.show()`}</code></pre>
    </div>
  );
}
