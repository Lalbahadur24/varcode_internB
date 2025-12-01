import React from "react";

export default function OpenpyxlAutomation() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Automating Excel with openpyxl</h1>
      <p>
        Read and write Excel files programmatically with <code>openpyxl</code>.
      </p>

      <h2>Install</h2>
      <pre><code>{`pip install openpyxl`}</code></pre>

      <h2>Creating & Writing</h2>
      <pre><code>{`from openpyxl import Workbook

wb = Workbook()
ws = wb.active
ws.title = 'Sales'

# Write cells
ws['A1'] = 'Product'
ws['B1'] = 'Price'
ws['A2'] = 'Laptop'
ws['B2'] = 999.99

# Append rows
ws.append(['Mouse', 25.50])
ws.append(['Keyboard', 75.00])

wb.save('sales.xlsx')`}</code></pre>

      <h2>Reading</h2>
      <pre><code>{`from openpyxl import load_workbook

wb = load_workbook('sales.xlsx')
ws = wb['Sales']

# Read cell
product = ws['A2'].value
print(product)  # Laptop

# Iterate rows
for row in ws.iter_rows(min_row=2, values_only=True):
    product, price = row
    print(f'{product}: ${price}')`}</code></pre>

      <h2>Formatting</h2>
      <pre><code>{`from openpyxl.styles import Font, Alignment, PatternFill

# Bold header
ws['A1'].font = Font(bold=True, size=14)
ws['B1'].font = Font(bold=True, size=14)

# Center alignment
ws['A1'].alignment = Alignment(horizontal='center')

# Background color
ws['A1'].fill = PatternFill(start_color='FFFF00', fill_type='solid')

wb.save('formatted.xlsx')`}</code></pre>

      <h2>Formulas</h2>
      <pre><code>{`# Add formula
ws['B5'] = '=SUM(B2:B4)'

wb.save('with_formula.xlsx')`}</code></pre>

      <h2>Tips</h2>
      <ul>
        <li>Use <code>values_only=True</code> for faster reading</li>
        <li>For large files, consider <code>pandas</code> instead</li>
        <li>Always save after modifications</li>
      </ul>
    </div>
  );
}
