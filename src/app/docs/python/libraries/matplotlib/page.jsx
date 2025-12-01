export default function MatplotlibPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Matplotlib Tutorial</h1>
      
      <section>
        <h2>Introduction to Matplotlib</h2>
        <p>
          Matplotlib is a comprehensive library for creating static, animated, and interactive 
          visualizations in Python. It provides an object-oriented API for embedding plots into 
          applications and a MATLAB-like interface for quick plotting.
        </p>
        
        <h3>Key Features</h3>
        <ul>
          <li>Create publication-quality figures</li>
          <li>Wide variety of plot types (line, bar, scatter, histogram, etc.)</li>
          <li>Extensive customization options</li>
          <li>Export to multiple file formats (PNG, PDF, SVG, etc.)</li>
          <li>Interactive features for data exploration</li>
        </ul>
      </section>

      <section>
        <h2>Installation</h2>
        <pre><code>{`pip install matplotlib`}</code></pre>
        
        <p>Import Matplotlib:</p>
        <pre><code>{`import matplotlib.pyplot as plt
import numpy as np  # Often used for data generation`}</code></pre>
      </section>

      <section>
        <h2>Basic Plotting</h2>
        
        <h3>Line Plot</h3>
        <pre><code>{`import matplotlib.pyplot as plt
import numpy as np

# Generate data
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Create plot
plt.plot(x, y)
plt.xlabel('X axis')
plt.ylabel('Y axis')
plt.title('Sine Wave')
plt.grid(True)
plt.show()

# Multiple lines
y2 = np.cos(x)
plt.plot(x, y, label='sin(x)')
plt.plot(x, y2, label='cos(x)')
plt.legend()
plt.show()`}</code></pre>

        <h3>Scatter Plot</h3>
        <pre><code>{`# Generate random data
x = np.random.rand(50)
y = np.random.rand(50)
colors = np.random.rand(50)
sizes = 1000 * np.random.rand(50)

# Create scatter plot
plt.scatter(x, y, c=colors, s=sizes, alpha=0.5, cmap='viridis')
plt.colorbar()  # Add color bar
plt.xlabel('X values')
plt.ylabel('Y values')
plt.title('Scatter Plot')
plt.show()`}</code></pre>

        <h3>Bar Plot</h3>
        <pre><code>{`# Data
categories = ['A', 'B', 'C', 'D', 'E']
values = [23, 45, 56, 78, 32]

# Vertical bar plot
plt.bar(categories, values, color='skyblue')
plt.xlabel('Categories')
plt.ylabel('Values')
plt.title('Bar Chart')
plt.show()

# Horizontal bar plot
plt.barh(categories, values, color='coral')
plt.xlabel('Values')
plt.ylabel('Categories')
plt.title('Horizontal Bar Chart')
plt.show()`}</code></pre>

        <h3>Histogram</h3>
        <pre><code>{`# Generate random data
data = np.random.randn(1000)

# Create histogram
plt.hist(data, bins=30, color='green', alpha=0.7, edgecolor='black')
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.title('Histogram')
plt.show()

# Multiple histograms
data2 = np.random.randn(1000) + 2
plt.hist(data, bins=30, alpha=0.5, label='Dataset 1')
plt.hist(data2, bins=30, alpha=0.5, label='Dataset 2')
plt.legend()
plt.show()`}</code></pre>

        <h3>Pie Chart</h3>
        <pre><code>{`# Data
labels = ['Python', 'JavaScript', 'Java', 'C++', 'Others']
sizes = [35, 25, 20, 15, 5]
colors = ['gold', 'yellowgreen', 'lightcoral', 'lightskyblue', 'lightgray']
explode = (0.1, 0, 0, 0, 0)  # Explode first slice

# Create pie chart
plt.pie(sizes, explode=explode, labels=labels, colors=colors,
        autopct='%1.1f%%', shadow=True, startangle=90)
plt.axis('equal')  # Equal aspect ratio
plt.title('Programming Languages')
plt.show()`}</code></pre>
      </section>

      <section>
        <h2>Figure and Axes</h2>
        
        <h3>Object-Oriented Approach</h3>
        <pre><code>{`# Create figure and axis
fig, ax = plt.subplots()

# Plot on axis
x = np.linspace(0, 10, 100)
ax.plot(x, np.sin(x))
ax.set_xlabel('X axis')
ax.set_ylabel('Y axis')
ax.set_title('Sine Wave')
ax.grid(True)

plt.show()`}</code></pre>

        <h3>Multiple Subplots</h3>
        <pre><code>{`# Create 2x2 grid of subplots
fig, axes = plt.subplots(2, 2, figsize=(10, 8))

# Plot on each subplot
x = np.linspace(0, 10, 100)

axes[0, 0].plot(x, np.sin(x))
axes[0, 0].set_title('Sine')

axes[0, 1].plot(x, np.cos(x), 'r')
axes[0, 1].set_title('Cosine')

axes[1, 0].plot(x, np.tan(x))
axes[1, 0].set_title('Tangent')

axes[1, 1].plot(x, np.exp(-x/5))
axes[1, 1].set_title('Exponential Decay')

plt.tight_layout()  # Adjust spacing
plt.show()`}</code></pre>

        <h3>GridSpec for Complex Layouts</h3>
        <pre><code>{`import matplotlib.gridspec as gridspec

fig = plt.figure(figsize=(10, 6))
gs = gridspec.GridSpec(2, 3)

# Different sized subplots
ax1 = fig.add_subplot(gs[0, :])  # Top row, all columns
ax2 = fig.add_subplot(gs[1, 0])  # Bottom left
ax3 = fig.add_subplot(gs[1, 1:]) # Bottom middle and right

x = np.linspace(0, 10, 100)
ax1.plot(x, np.sin(x))
ax2.plot(x, np.cos(x))
ax3.plot(x, np.tan(x))

plt.tight_layout()
plt.show()`}</code></pre>
      </section>

      <section>
        <h2>Customization</h2>
        
        <h3>Colors and Styles</h3>
        <pre><code>{`x = np.linspace(0, 10, 100)

# Line styles
plt.plot(x, x, '-', label='solid')
plt.plot(x, x+1, '--', label='dashed')
plt.plot(x, x+2, '-.', label='dash-dot')
plt.plot(x, x+3, ':', label='dotted')
plt.legend()
plt.show()

# Colors (many ways to specify)
plt.plot(x, x, 'r')      # Red (single letter)
plt.plot(x, x+1, 'blue')  # Named color
plt.plot(x, x+2, '#FF00FF') # Hex code
plt.plot(x, x+3, color=(0.5, 0.2, 0.8)) # RGB tuple
plt.show()

# Markers
plt.plot(x[::5], x[::5], 'ro', label='circle')
plt.plot(x[::5], (x+1)[::5], 'bs', label='square')
plt.plot(x[::5], (x+2)[::5], 'g^', label='triangle')
plt.legend()
plt.show()`}</code></pre>

        <h3>Styling Plots</h3>
        <pre><code>{`# Available styles
print(plt.style.available)

# Use a style
plt.style.use('ggplot')
# Other popular styles: 'seaborn', 'fivethirtyeight', 'bmh', 'dark_background'

x = np.linspace(0, 10, 100)
plt.plot(x, np.sin(x))
plt.title('Styled Plot')
plt.show()

# Reset to default
plt.style.use('default')`}</code></pre>

        <h3>Annotations and Text</h3>
        <pre><code>{`x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.plot(x, y)

# Add text
plt.text(5, 0, 'Middle Point', fontsize=12, ha='center')

# Add annotation with arrow
plt.annotate('Maximum', xy=(np.pi/2, 1), xytext=(2, 1.2),
            arrowprops=dict(arrowstyle='->', color='red'),
            fontsize=12)

plt.show()`}</code></pre>

        <h3>Customizing Axes</h3>
        <pre><code>{`fig, ax = plt.subplots()

x = np.linspace(0, 10, 100)
ax.plot(x, np.exp(x))

# Set limits
ax.set_xlim(0, 5)
ax.set_ylim(0, 100)

# Set scale
ax.set_yscale('log')

# Customize ticks
ax.set_xticks([0, 2.5, 5])
ax.set_xticklabels(['Start', 'Middle', 'End'])

# Add grid
ax.grid(True, which='both', linestyle='--', alpha=0.5)

# Spine customization
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)

plt.show()`}</code></pre>
      </section>

      <section>
        <h2>Advanced Plot Types</h2>
        
        <h3>Contour Plot</h3>
        <pre><code>{`# Create mesh grid
x = np.linspace(-3, 3, 100)
y = np.linspace(-3, 3, 100)
X, Y = np.meshgrid(x, y)
Z = np.sin(np.sqrt(X**2 + Y**2))

# Contour plot
plt.contour(X, Y, Z, levels=10, cmap='viridis')
plt.colorbar(label='Z value')
plt.title('Contour Plot')
plt.show()

# Filled contour
plt.contourf(X, Y, Z, levels=20, cmap='RdYlBu')
plt.colorbar()
plt.show()`}</code></pre>

        <h3>3D Plots</h3>
        <pre><code>{`from mpl_toolkits.mplot3d import Axes3D

fig = plt.figure(figsize=(10, 7))
ax = fig.add_subplot(111, projection='3d')

# Generate data
x = np.linspace(-5, 5, 50)
y = np.linspace(-5, 5, 50)
X, Y = np.meshgrid(x, y)
Z = np.sin(np.sqrt(X**2 + Y**2))

# Surface plot
surf = ax.plot_surface(X, Y, Z, cmap='viridis')
ax.set_xlabel('X')
ax.set_ylabel('Y')
ax.set_zlabel('Z')
fig.colorbar(surf)
plt.show()

# 3D scatter
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')
x = np.random.rand(100)
y = np.random.rand(100)
z = np.random.rand(100)
ax.scatter(x, y, z, c=z, cmap='viridis')
plt.show()`}</code></pre>

        <h3>Box Plot</h3>
        <pre><code>{`# Generate data
data = [np.random.normal(0, std, 100) for std in range(1, 4)]

# Create box plot
plt.boxplot(data, labels=['Group 1', 'Group 2', 'Group 3'])
plt.ylabel('Values')
plt.title('Box Plot')
plt.show()`}</code></pre>

        <h3>Heatmap</h3>
        <pre><code>{`# Create random data matrix
data = np.random.rand(10, 10)

# Create heatmap
plt.imshow(data, cmap='hot', interpolation='nearest')
plt.colorbar(label='Value')
plt.title('Heatmap')
plt.show()`}</code></pre>
      </section>

      <section>
        <h2>Saving Figures</h2>
        <pre><code>{`x = np.linspace(0, 10, 100)
plt.plot(x, np.sin(x))
plt.title('Sine Wave')

# Save as PNG
plt.savefig('sine_wave.png', dpi=300, bbox_inches='tight')

# Save as PDF
plt.savefig('sine_wave.pdf', bbox_inches='tight')

# Save as SVG
plt.savefig('sine_wave.svg', format='svg')

plt.show()`}</code></pre>
      </section>

      <section>
        <h2>Practical Example: Data Visualization Dashboard</h2>
        <pre><code>{`import numpy as np
import matplotlib.pyplot as plt

# Generate sample data
np.random.seed(42)
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
sales = [23, 45, 56, 78, 65, 82]
expenses = [18, 35, 42, 55, 48, 60]
profit = np.array(sales) - np.array(expenses)

# Create dashboard with multiple plots
fig = plt.figure(figsize=(15, 10))

# 1. Line plot - Sales vs Expenses trend
ax1 = plt.subplot(2, 3, 1)
ax1.plot(months, sales, 'o-', label='Sales', linewidth=2)
ax1.plot(months, expenses, 's-', label='Expenses', linewidth=2)
ax1.set_title('Sales vs Expenses Trend', fontsize=14, fontweight='bold')
ax1.set_ylabel('Amount ($K)')
ax1.legend()
ax1.grid(True, alpha=0.3)

# 2. Bar chart - Monthly profit
ax2 = plt.subplot(2, 3, 2)
colors = ['green' if p > 0 else 'red' for p in profit]
ax2.bar(months, profit, color=colors, alpha=0.7)
ax2.set_title('Monthly Profit', fontsize=14, fontweight='bold')
ax2.set_ylabel('Profit ($K)')
ax2.axhline(y=0, color='black', linestyle='-', linewidth=0.5)
ax2.grid(True, alpha=0.3, axis='y')

# 3. Pie chart - Expense distribution
ax3 = plt.subplot(2, 3, 3)
expense_categories = ['Marketing', 'Operations', 'Salaries', 'Other']
expense_values = [30, 25, 35, 10]
ax3.pie(expense_values, labels=expense_categories, autopct='%1.1f%%',
        startangle=90, colors=['#ff9999', '#66b3ff', '#99ff99', '#ffcc99'])
ax3.set_title('Expense Distribution', fontsize=14, fontweight='bold')

# 4. Scatter plot - Sales vs Profit
ax4 = plt.subplot(2, 3, 4)
ax4.scatter(sales, profit, s=200, c=range(len(sales)), cmap='viridis', alpha=0.6)
for i, month in enumerate(months):
    ax4.annotate(month, (sales[i], profit[i]), fontsize=9)
ax4.set_xlabel('Sales ($K)')
ax4.set_ylabel('Profit ($K)')
ax4.set_title('Sales vs Profit Correlation', fontsize=14, fontweight='bold')
ax4.grid(True, alpha=0.3)

# 5. Histogram - Sales distribution
ax5 = plt.subplot(2, 3, 5)
all_sales = np.random.normal(np.mean(sales), np.std(sales), 1000)
ax5.hist(all_sales, bins=30, color='skyblue', edgecolor='black', alpha=0.7)
ax5.axvline(np.mean(sales), color='red', linestyle='--', linewidth=2, label='Mean')
ax5.set_xlabel('Sales ($K)')
ax5.set_ylabel('Frequency')
ax5.set_title('Sales Distribution', fontsize=14, fontweight='bold')
ax5.legend()

# 6. Stacked area chart - Cumulative metrics
ax6 = plt.subplot(2, 3, 6)
ax6.fill_between(range(len(months)), 0, sales, alpha=0.5, label='Sales')
ax6.fill_between(range(len(months)), 0, expenses, alpha=0.5, label='Expenses')
ax6.set_xticks(range(len(months)))
ax6.set_xticklabels(months)
ax6.set_ylabel('Amount ($K)')
ax6.set_title('Cumulative View', fontsize=14, fontweight='bold')
ax6.legend()
ax6.grid(True, alpha=0.3)

plt.suptitle('Business Analytics Dashboard', fontsize=16, fontweight='bold', y=0.995)
plt.tight_layout()
plt.savefig('dashboard.png', dpi=300, bbox_inches='tight')
plt.show()`}</code></pre>
      </section>

      <section>
        <h2>Best Practices</h2>
        <ul>
          <li><strong>Use object-oriented API:</strong> Prefer fig, ax = plt.subplots() for better control</li>
          <li><strong>Label your axes:</strong> Always include axis labels and titles</li>
          <li><strong>Choose appropriate colors:</strong> Use colorblind-friendly palettes</li>
          <li><strong>Save high-resolution:</strong> Use dpi=300 for publication-quality figures</li>
          <li><strong>Close figures:</strong> Use plt.close() to free memory when creating many plots</li>
          <li><strong>Use tight_layout():</strong> Automatically adjust subplot spacing</li>
        </ul>
      </section>

      <section>
        <h2>Summary</h2>
        <p>
          Matplotlib is the foundation of data visualization in Python. Its flexibility and 
          extensive customization options make it suitable for everything from quick exploratory 
          plots to publication-ready figures. Master Matplotlib to effectively communicate your data insights.
        </p>
      </section>
    </div>
  );
}
