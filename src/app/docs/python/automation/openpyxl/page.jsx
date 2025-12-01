import React from "react";

export default function OpenpyxlPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>OpenPyXL</h1>
      <p>
        Read/write Excel files (<code>.xlsx</code>) using <code>openpyxl</code>.
      </p>

      <h2>Install</h2>
      <pre><code>{`pip install openpyxl`}</code></pre>

      <h2>Create and Read</h2>
      <pre><code>{`from openpyxl import Workbook, load_workbook

# Create
wb = Workbook()
ws = wb.active
ws.title = 'Report'
ws['A1'] = 'Name'
ws['B1'] = 'Score'
ws.append(['Alice', 95])
wb.save('report.xlsx')

# Read
wb2 = load_workbook('report.xlsx')
ws2 = wb2['Report']
for row in ws2.iter_rows(min_row=1, max_col=2, values_only=True):
    print(row)`}</code></pre>

      <h2>Tips</h2>
      <ul>
        <li>For CSVs, use <code>csv</code> or <code>pandas</code> instead.</li>
        <li>Keep formatting minimal for faster writes.</li>
      </ul>
    </div>
  );
}
