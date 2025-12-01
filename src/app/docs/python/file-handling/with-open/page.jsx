import React from "react";

export default function PythonWithOpen() {
  const dq = String.fromCharCode(34);

  // EXAMPLES
  const exBasic = `with open(${dq}demofile.txt${dq}) as f:
  print(f.read())`;

  const exWrite = `with open(${dq}notes.txt${dq}, ${dq}w${dq}) as f:
  f.write(${dq}This is a new file.${dq})`;

  const exAppend = `with open(${dq}log.txt${dq}, ${dq}a${dq}) as f:
  f.write(${dq}New log entry\\n${dq})`;

  const exReadLine = `with open(${dq}demofile.txt${dq}) as f:
  print(f.readline())`;

  const exLoop = `with open(${dq}demofile.txt${dq}) as f:
  for line in f:
    print(line.strip())`;

  const exMultiple = `with open(${dq}file1.txt${dq}) as f1, open(${dq}file2.txt${dq}, ${dq}w${dq}) as f2:
  data = f1.read()
  f2.write(data)`;

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-10">
      <h1 className="text-4xl font-bold">Python {dq}with open(){dq} — Full Cheat Sheet</h1>

      {/* INTRO */}
      <section>
        <h2 className="text-2xl font-semibold">What is {dq}with open(){dq}?</h2>
        <p className="mt-2 leading-7">
          The <strong>with</strong> statement in Python is used to automatically manage resources
          like files. When using <strong>with open()</strong>, Python opens the file,
          lets you work with it, and <strong>automatically closes it</strong> when done—
          even if exceptions occur.
        </p>

        <p className="mt-2">
          This eliminates the need to manually call <code>f.close()</code>, making code cleaner,
          safer, and more professional.
        </p>
      </section>

      {/* BASIC USAGE */}
      <section>
        <h2 className="text-2xl font-semibold">Basic Usage</h2>
        <p className="mt-2">Most common way to open and read a file:</p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exBasic}</code></pre>
      </section>

      {/* WHY USE WITH OPEN */}
      <section>
        <h2 className="text-2xl font-semibold">Why Use {dq}with open(){dq}?</h2>
        <ul className="list-disc ml-6 mt-3 leading-7">
          <li>Automatically closes the file</li>
          <li>Prevents memory leaks</li>
          <li>Avoids forgetting <code>f.close()</code></li>
          <li>Cleaner and more readable code</li>
          <li>Handles exceptions safely</li>
        </ul>
      </section>

      {/* WRITE FILE */}
      <section>
        <h2 className="text-2xl font-semibold">Write to a File</h2>
        <p className="mt-2">Using mode <strong>w</strong> will overwrite the file.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exWrite}</code></pre>
      </section>

      {/* APPEND */}
      <section>
        <h2 className="text-2xl font-semibold">Append to a File</h2>
        <p className="mt-2">Using mode <strong>a</strong> will add content at the end.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exAppend}</code></pre>
      </section>

      {/* READ LINE */}
      <section>
        <h2 className="text-2xl font-semibold">Read Only One Line</h2>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exReadLine}</code></pre>
      </section>

      {/* LOOP LINES */}
      <section>
        <h2 className="text-2xl font-semibold">Loop Through All Lines</h2>
        <pre className="p-3 rounded border bg-gray-50 mt-2 whitespace-pre-line"><code>{exLoop}</code></pre>
      </section>

      {/* MULTIPLE FILES */}
      <section>
        <h2 className="text-2xl font-semibold">Open Multiple Files</h2>
        <pre className="p-3 rounded border bg-gray-50 mt-2 whitespace-pre-line"><code>{exMultiple}</code></pre>
      </section>

      {/* SUMMARY TABLE */}
      <section>
        <h2 className="text-2xl font-semibold">Summary</h2>

        <table className="w-full border mt-3 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Mode</th>
              <th className="border p-2">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2 font-mono">r</td><td className="border p-2">Read (default)</td></tr>
            <tr><td className="border p-2 font-mono">w</td><td className="border p-2">Write (overwrite)</td></tr>
            <tr><td className="border p-2 font-mono">a</td><td className="border p-2">Append to end</td></tr>
            <tr><td className="border p-2 font-mono">x</td><td className="border p-2">Create file (error if exists)</td></tr>
            <tr><td className="border p-2 font-mono">t</td><td className="border p-2">Text mode (default)</td></tr>
            <tr><td className="border p-2 font-mono">b</td><td className="border p-2">Binary mode</td></tr>
          </tbody>
        </table>
      </section>

      {/* FINAL NOTE */}
      <section>
        <h2 className="text-2xl font-semibold">Final Note</h2>
        <p className="mt-2">
          Always use <strong>with open()</strong> unless there is a very specific reason not to.
          It is the safest, cleanest, most Pythonic way to work with files.
        </p>
      </section>
    </article>
  );
}
