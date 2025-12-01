export default function SeabornPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Seaborn Tutorial</h1>
      
      <section>
        <h2>Introduction to Seaborn</h2>
        <p>
          Seaborn is a Python data visualization library based on Matplotlib. It provides a 
          high-level interface for drawing attractive and informative statistical graphics. 
          Seaborn makes it easy to create complex visualizations with minimal code.
        </p>
        
        <h3>Key Features</h3>
        <ul>
          <li>Built-in themes for styling Matplotlib graphics</li>
          <li>Tools for choosing color palettes</li>
          <li>Functions for visualizing univariate and bivariate distributions</li>
          <li>Functions for visualizing linear regression models</li>
          <li>Tools for visualizing matrices and statistical time series</li>
          <li>High-level abstractions for structuring multi-plot grids</li>
        </ul>
      </section>

      <section>
        <h2>Installation</h2>
        <pre><code>{`pip install seaborn`}</code></pre>
        
        <p>Import Seaborn:</p>
        <pre><code>{`import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np`}</code></pre>
      </section>

      <section>
        <h2>Getting Started</h2>
        
        <h3>Setting Themes</h3>
        <pre><code>{`# Set default theme
sns.set_theme()

# Set specific style
sns.set_style("darkgrid")  # Options: darkgrid, whitegrid, dark, white, ticks

# Set context (scaling)
sns.set_context("notebook")  # Options: paper, notebook, talk, poster

# Set color palette
sns.set_palette("husl")`}</code></pre>

        <h3>Loading Sample Datasets</h3>
        <pre><code>{`# Seaborn comes with built-in datasets
tips = sns.load_dataset('tips')
iris = sns.load_dataset('iris')
titanic = sns.load_dataset('titanic')
planets = sns.load_dataset('planets')

# View dataset
print(tips.head())`}</code></pre>
      </section>

      <section>
        <h2>Distribution Plots</h2>
        
        <h3>Histogram and KDE</h3>
        <pre><code>{`tips = sns.load_dataset('tips')

# Histogram
sns.histplot(data=tips, x='total_bill', bins=20)
plt.title('Distribution of Total Bill')
plt.show()

# KDE plot
sns.kdeplot(data=tips, x='total_bill')
plt.title('KDE of Total Bill')
plt.show()

# Combined histogram and KDE
sns.histplot(data=tips, x='total_bill', kde=True)
plt.show()`}</code></pre>

        <h3>Distribution Plot (displot)</h3>
        <pre><code>{`# Create a figure with distribution
sns.displot(data=tips, x='total_bill', kde=True, bins=20)
plt.show()

# Multiple distributions
sns.displot(data=tips, x='total_bill', hue='sex', kde=True)
plt.show()

# Faceted distribution
sns.displot(data=tips, x='total_bill', col='time', kde=True)
plt.show()`}</code></pre>

        <h3>Rug Plot</h3>
        <pre><code>{`# Add rug plot to show individual observations
sns.kdeplot(data=tips, x='total_bill')
sns.rugplot(data=tips, x='total_bill')
plt.show()`}</code></pre>
      </section>

      <section>
        <h2>Categorical Plots</h2>
        
        <h3>Bar Plot</h3>
        <pre><code>{`# Bar plot with error bars
sns.barplot(data=tips, x='day', y='total_bill')
plt.title('Average Bill by Day')
plt.show()

# With hue
sns.barplot(data=tips, x='day', y='total_bill', hue='sex')
plt.show()`}</code></pre>

        <h3>Count Plot</h3>
        <pre><code>{`# Count occurrences
sns.countplot(data=tips, x='day')
plt.title('Count of Visits by Day')
plt.show()

# With hue
sns.countplot(data=tips, x='day', hue='sex')
plt.show()`}</code></pre>

        <h3>Box Plot</h3>
        <pre><code>{`# Box plot
sns.boxplot(data=tips, x='day', y='total_bill')
plt.title('Bill Distribution by Day')
plt.show()

# With hue
sns.boxplot(data=tips, x='day', y='total_bill', hue='smoker')
plt.show()`}</code></pre>

        <h3>Violin Plot</h3>
        <pre><code>{`# Violin plot (combination of box and KDE)
sns.violinplot(data=tips, x='day', y='total_bill')
plt.show()

# Split violins
sns.violinplot(data=tips, x='day', y='total_bill', hue='sex', split=True)
plt.show()`}</code></pre>

        <h3>Swarm Plot</h3>
        <pre><code>{`# Swarm plot (shows all points)
sns.swarmplot(data=tips, x='day', y='total_bill')
plt.show()

# Combine with violin plot
sns.violinplot(data=tips, x='day', y='total_bill', inner=None, color='lightgray')
sns.swarmplot(data=tips, x='day', y='total_bill', size=2, color='black')
plt.show()`}</code></pre>
      </section>

      <section>
        <h2>Relational Plots</h2>
        
        <h3>Scatter Plot</h3>
        <pre><code>{`# Basic scatter plot
sns.scatterplot(data=tips, x='total_bill', y='tip')
plt.show()

# With hue and size
sns.scatterplot(data=tips, x='total_bill', y='tip', hue='time', size='size')
plt.show()

# With style
sns.scatterplot(data=tips, x='total_bill', y='tip', hue='day', style='time')
plt.show()`}</code></pre>

        <h3>Line Plot</h3>
        <pre><code>{`# Line plot with confidence interval
fmri = sns.load_dataset('fmri')
sns.lineplot(data=fmri, x='timepoint', y='signal', hue='event')
plt.show()

# Multiple lines
sns.lineplot(data=fmri, x='timepoint', y='signal', hue='region', style='event')
plt.show()`}</code></pre>

        <h3>Relplot (Figure-level)</h3>
        <pre><code>{`# Scatter plot with facets
sns.relplot(data=tips, x='total_bill', y='tip', col='time', hue='smoker')
plt.show()

# Line plot with facets
sns.relplot(data=fmri, x='timepoint', y='signal', hue='event', 
            col='region', kind='line')
plt.show()`}</code></pre>
      </section>

      <section>
        <h2>Regression Plots</h2>
        
        <h3>Linear Regression Plot</h3>
        <pre><code>{`# Regression plot with confidence interval
sns.regplot(data=tips, x='total_bill', y='tip')
plt.show()

# Polynomial regression
sns.regplot(data=tips, x='total_bill', y='tip', order=2)
plt.show()

# Without confidence interval
sns.regplot(data=tips, x='total_bill', y='tip', ci=None)
plt.show()`}</code></pre>

        <h3>Residual Plot</h3>
        <pre><code>{`# Check model assumptions
sns.residplot(data=tips, x='total_bill', y='tip')
plt.axhline(0, color='red', linestyle='--')
plt.show()`}</code></pre>

        <h3>LM Plot (Figure-level)</h3>
        <pre><code>{`# Regression with facets
sns.lmplot(data=tips, x='total_bill', y='tip', hue='smoker')
plt.show()

# With columns
sns.lmplot(data=tips, x='total_bill', y='tip', col='time', row='sex')
plt.show()`}</code></pre>
      </section>

      <section>
        <h2>Matrix Plots</h2>
        
        <h3>Heatmap</h3>
        <pre><code>{`# Correlation matrix
iris = sns.load_dataset('iris')
corr = iris.corr(numeric_only=True)

# Create heatmap
sns.heatmap(corr, annot=True, cmap='coolwarm', center=0)
plt.title('Correlation Heatmap')
plt.show()

# Custom color map and formatting
sns.heatmap(corr, annot=True, fmt='.2f', cmap='RdYlGn', 
            linewidths=0.5, cbar_kws={'label': 'Correlation'})
plt.show()`}</code></pre>

        <h3>Clustermap</h3>
        <pre><code>{`# Hierarchical clustering
sns.clustermap(corr, cmap='viridis', annot=True)
plt.show()`}</code></pre>
      </section>

      <section>
        <h2>Pair Plots and Joint Plots</h2>
        
        <h3>Pair Plot</h3>
        <pre><code>{`# Pairwise relationships
iris = sns.load_dataset('iris')
sns.pairplot(iris)
plt.show()

# With hue
sns.pairplot(iris, hue='species')
plt.show()

# Custom diagonal and off-diagonal plots
sns.pairplot(iris, hue='species', diag_kind='kde', 
             plot_kws={'alpha': 0.6})
plt.show()`}</code></pre>

        <h3>Joint Plot</h3>
        <pre><code>{`# Joint distribution
sns.jointplot(data=tips, x='total_bill', y='tip')
plt.show()

# With regression
sns.jointplot(data=tips, x='total_bill', y='tip', kind='reg')
plt.show()

# Hexbin for large datasets
sns.jointplot(data=tips, x='total_bill', y='tip', kind='hex')
plt.show()

# KDE
sns.jointplot(data=tips, x='total_bill', y='tip', kind='kde')
plt.show()`}</code></pre>
      </section>

      <section>
        <h2>Figure-Level vs Axes-Level Functions</h2>
        
        <h3>Axes-Level (for subplots)</h3>
        <pre><code>{`# Create multiple plots in one figure
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

sns.scatterplot(data=tips, x='total_bill', y='tip', ax=axes[0, 0])
axes[0, 0].set_title('Scatter Plot')

sns.boxplot(data=tips, x='day', y='total_bill', ax=axes[0, 1])
axes[0, 1].set_title('Box Plot')

sns.violinplot(data=tips, x='day', y='total_bill', ax=axes[1, 0])
axes[1, 0].set_title('Violin Plot')

sns.barplot(data=tips, x='day', y='total_bill', ax=axes[1, 1])
axes[1, 1].set_title('Bar Plot')

plt.tight_layout()
plt.show()`}</code></pre>

        <h3>Figure-Level (creates own figure)</h3>
        <pre><code>{`# Figure-level functions create their own figure
# relplot, displot, catplot, lmplot, pairplot, jointplot

# Example: catplot
sns.catplot(data=tips, x='day', y='total_bill', hue='sex', 
            kind='bar', col='time', height=5)
plt.show()`}</code></pre>
      </section>

      <section>
        <h2>Color Palettes</h2>
        <pre><code>{`# View available palettes
sns.color_palette()

# Categorical palettes
sns.set_palette("husl")
sns.set_palette("Set2")
sns.set_palette("Paired")

# Sequential palettes
sns.set_palette("Blues")
sns.set_palette("rocket")

# Diverging palettes
sns.set_palette("coolwarm")
sns.set_palette("vlag")

# Custom palette
custom_palette = ["#FF6B6B", "#4ECDC4", "#45B7D1"]
sns.set_palette(custom_palette)

# Show palette
sns.palplot(sns.color_palette("husl", 8))
plt.show()`}</code></pre>
      </section>

      <section>
        <h2>Customization</h2>
        
        <h3>Styling</h3>
        <pre><code>{`# Set style
sns.set_style("whitegrid")

# Temporarily set style
with sns.axes_style("darkgrid"):
    sns.scatterplot(data=tips, x='total_bill', y='tip')
    plt.show()

# Remove spines
sns.despine()

# Custom parameters
sns.set_theme(rc={
    'axes.facecolor': '#f5f5f5',
    'figure.facecolor': 'white',
    'axes.edgecolor': 'black',
    'grid.color': 'white'
})`}</code></pre>

        <h3>Context Scaling</h3>
        <pre><code>{`# For different media
sns.set_context("paper")    # Smallest
sns.set_context("notebook")  # Default
sns.set_context("talk")      # For presentations
sns.set_context("poster")    # Largest

# Custom scaling
sns.set_context("notebook", font_scale=1.5, rc={"lines.linewidth": 2.5})`}</code></pre>
      </section>

      <section>
        <h2>Practical Example: Comprehensive Data Analysis</h2>
        <pre><code>{`import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd

# Load dataset
tips = sns.load_dataset('tips')

# Set style
sns.set_theme(style="whitegrid", context="notebook")

# Create comprehensive analysis figure
fig = plt.figure(figsize=(16, 12))

# 1. Distribution of total bill
ax1 = plt.subplot(3, 3, 1)
sns.histplot(data=tips, x='total_bill', kde=True, ax=ax1)
ax1.set_title('Total Bill Distribution', fontweight='bold')

# 2. Tip distribution by day
ax2 = plt.subplot(3, 3, 2)
sns.boxplot(data=tips, x='day', y='tip', ax=ax2)
ax2.set_title('Tips by Day', fontweight='bold')

# 3. Bill by time of day
ax3 = plt.subplot(3, 3, 3)
sns.violinplot(data=tips, x='time', y='total_bill', hue='sex', split=True, ax=ax3)
ax3.set_title('Bill by Time & Gender', fontweight='bold')

# 4. Tip percentage by party size
ax4 = plt.subplot(3, 3, 4)
tips['tip_pct'] = tips['tip'] / tips['total_bill'] * 100
sns.barplot(data=tips, x='size', y='tip_pct', ax=ax4)
ax4.set_title('Tip % by Party Size', fontweight='bold')

# 5. Regression: Bill vs Tip
ax5 = plt.subplot(3, 3, 5)
sns.regplot(data=tips, x='total_bill', y='tip', ax=ax5, scatter_kws={'alpha':0.5})
ax5.set_title('Bill vs Tip Regression', fontweight='bold')

# 6. Count of visits
ax6 = plt.subplot(3, 3, 6)
sns.countplot(data=tips, x='day', hue='time', ax=ax6)
ax6.set_title('Visit Counts', fontweight='bold')

# 7. Smoker vs Non-smoker bills
ax7 = plt.subplot(3, 3, 7)
sns.swarmplot(data=tips, x='smoker', y='total_bill', hue='sex', ax=ax7)
ax7.set_title('Bills: Smoker vs Non-smoker', fontweight='bold')

# 8. Correlation heatmap
ax8 = plt.subplot(3, 3, 8)
corr_data = tips[['total_bill', 'tip', 'size', 'tip_pct']].corr()
sns.heatmap(corr_data, annot=True, fmt='.2f', cmap='coolwarm', ax=ax8)
ax8.set_title('Correlation Matrix', fontweight='bold')

# 9. Tip by day and time
ax9 = plt.subplot(3, 3, 9)
pivot_data = tips.pivot_table(values='tip', index='day', columns='time', aggfunc='mean')
sns.heatmap(pivot_data, annot=True, fmt='.2f', cmap='YlOrRd', ax=ax9)
ax9.set_title('Avg Tip by Day & Time', fontweight='bold')

plt.suptitle('Restaurant Tips Analysis Dashboard', 
             fontsize=16, fontweight='bold', y=0.995)
plt.tight_layout()
plt.savefig('tips_analysis.png', dpi=300, bbox_inches='tight')
plt.show()`}</code></pre>
      </section>

      <section>
        <h2>Best Practices</h2>
        <ul>
          <li><strong>Use appropriate plot types:</strong> Choose plots that best represent your data</li>
          <li><strong>Leverage hue and style:</strong> Add dimensions to your visualizations</li>
          <li><strong>Set themes early:</strong> Apply styling at the beginning of your script</li>
          <li><strong>Use figure-level functions for faceting:</strong> They handle subplot creation automatically</li>
          <li><strong>Choose colorblind-friendly palettes:</strong> Ensure accessibility</li>
          <li><strong>Add context with titles and labels:</strong> Make plots self-explanatory</li>
        </ul>
      </section>

      <section>
        <h2>Summary</h2>
        <p>
          Seaborn simplifies the creation of beautiful statistical visualizations in Python. 
          Built on top of Matplotlib, it provides intuitive high-level functions that make 
          complex plots easy to create. Master Seaborn to quickly explore and communicate 
          insights from your data.
        </p>
      </section>
    </div>
  );
}
