import React from "react";

export default function OpenpyxlAutomation() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Automating Excel with openpyxl
      </h1>

      <p className="text-slate-700 leading-relaxed">
        <code>openpyxl</code> is the most popular Python library for reading,
        writing, and modifying Excel (.xlsx) files. It supports worksheets,
        styling, formulas, charts, merging cells, and automation tasks.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Install */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Install</h2>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`pip install openpyxl`}
              </pre>
            </div>
          </div>
        </section>

        {/* Creating & Writing */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Creating & Writing Excel Files
          </h2>

          <p className="mt-2">
            Create a workbook, select a sheet, write data to cells, and append
            rows easily.
          </p>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`from openpyxl import Workbook

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

wb.save('sales.xlsx')`}
              </pre>
            </div>
          </div>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <code>Workbook()</code> creates a new Excel file.
            </li>
            <li>
              <code>ws.append()</code> adds a full row automatically.
            </li>
            <li>
              Always call <code>save()</code> after changes.
            </li>
          </ul>
        </section>

        {/* Reading */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Reading Excel Files
          </h2>

          <p className="mt-2">
            Use <code>load_workbook</code> to open an existing file and read its
            data normally or using iterators.
          </p>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`from openpyxl import load_workbook

wb = load_workbook('sales.xlsx')
ws = wb['Sales']

# Read cell
product = ws['A2'].value
print(product)  # Laptop

# Iterate rows
for row in ws.iter_rows(min_row=2, values_only=True):
    product, price = row
    print(f'{product}: {price}')`}
              </pre>
            </div>
          </div>

          <p className="mt-2">
            <strong>Tip:</strong> <code>values_only=True</code> returns raw data
            without cell objects → faster.
          </p>
        </section>

        {/* Formatting */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Formatting Cells
          </h2>

          <p className="mt-2">
            Style cells using fonts, colors, and alignment.
          </p>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`from openpyxl.styles import Font, Alignment, PatternFill

# Bold header
ws['A1'].font = Font(bold=True, size=14)
ws['B1'].font = Font(bold=True, size=14)

# Center alignment
ws['A1'].alignment = Alignment(horizontal='center')

# Background color
ws['A1'].fill = PatternFill(start_color='FFFF00', fill_type='solid')

wb.save('formatted.xlsx')`}
              </pre>
            </div>
          </div>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Use <code>Font</code> for bold, italic, underline.
            </li>
            <li>
              <code>PatternFill</code> supports RGB hex colors.
            </li>
            <li>
              <code>Alignment</code> controls horizontal/vertical layout.
            </li>
          </ul>
        </section>

        {/* Formulas */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Formulas</h2>

          <p className="mt-2">
            Excel formulas are added as plain strings. Excel computes them when
            opened.
          </p>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`# Add formula
ws['B5'] = '=SUM(B2:B4)'

wb.save('with_formula.xlsx')`}
              </pre>
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            More Things openpyxl Can Do
          </h2>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Create charts (bar, line, pie).</li>
            <li>Merge or unmerge cells.</li>
            <li>Insert images into Excel sheets.</li>
            <li>Auto-adjust column width.</li>
            <li>Protect sheets and workbooks.</li>
          </ul>
        </section>

        {/* Tips */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Tips</h2>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <code>values_only=True</code> → faster reading.
            </li>
            <li>
              Use <code>pandas</code> for large Excel imports.
            </li>
            <li>
              Don’t forget to call <code>save()</code> after modifications.
            </li>
            <li>Keep formulas as strings — Excel calculates them.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
