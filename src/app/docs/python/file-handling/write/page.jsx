import React from "react";

export default function PythonFileWrite() {
  const dq = String.fromCharCode(34);

  const exWrite = `f = open(${dq}demofile.txt${dq}, ${dq}w${dq})
f.write(${dq}Hello!${dq})
f.close()`;

  const exOverwrite = `f = open(${dq}demofile.txt${dq}, ${dq}w${dq})
f.write(${dq}This text replaces the old content.${dq})
f.close()`;

  const exCreateFile = `f = open(${dq}newfile.txt${dq}, ${dq}x${dq})
f.write(${dq}New file created!${dq})
f.close()`;

  const exWithWrite = `with open(${dq}notes.txt${dq}, ${dq}w${dq}) as f:
  f.write(${dq}This is written using with-statement.${dq})`;

  const exWriteMany = `lines = [
  ${dq}Line 1${dq} + ${dq}\\n${dq},
  ${dq}Line 2${dq} + ${dq}\\n${dq},
  ${dq}Line 3${dq} + ${dq}\\n${dq}
]

with open(${dq}demo.txt${dq}, ${dq}w${dq}) as f:
  f.writelines(lines)`;

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-10">
      <h1 className="text-4xl font-bold">Python File Writing — Full Cheat Sheet</h1>

      {/* INTRO */}
      <section>
        <h2 className="text-2xl font-semibold">What is File Writing?</h2>
        <p className="mt-2">
          Writing files allows Python to <strong>store text, logs, results, and output</strong> permanently.
          You use the <strong>open()</strong> function with specific modes to write new content.
        </p>

        <h3 className="text-xl font-semibold mt-4">File Write Modes</h3>
        <ul className="list-disc ml-6 mt-2 leading-7">
          <li><strong>w</strong> — Write (overwrites existing file)</li>
          <li><strong>a</strong> — Append (adds to end of file)</li>
          <li><strong>x</strong> — Create a new file (error if file exists)</li>
          <li><strong>t</strong> — Text mode (default)</li>
          <li><strong>b</strong> — Binary mode</li>
        </ul>

        <pre className="p-3 rounded border bg-gray-50 mt-2">
{`open(filename, "w")`}
        </pre>
      </section>

      {/* BASIC WRITE */}
      <section>
        <h2 className="text-2xl font-semibold">Basic Writing Example</h2>
        <p>Creates the file if missing, overwrites if it exists.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exWrite}</code></pre>
      </section>

      {/* OVERWRITE */}
      <section>
        <h2 className="text-2xl font-semibold">Overwrite File Content</h2>
        <p className="mt-2">
          Using <strong>w</strong> always clears the existing file before writing.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exOverwrite}</code></pre>
      </section>

      {/* CREATE FILE */}
      <section>
        <h2 className="text-2xl font-semibold">Create a File (x Mode)</h2>
        <p className="mt-2">
          The <strong>x</strong> mode creates a file and throws an error if it already exists.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exCreateFile}</code></pre>
      </section>

      {/* WITH STATEMENT */}
      <section>
        <h2 className="text-2xl font-semibold">Writing with with Statement</h2>
        <p className="mt-2">
          Using <strong>with</strong> is recommended because it automatically closes the file.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exWithWrite}</code></pre>
      </section>

      {/* WRITE MULTIPLE LINES */}
      <section>
        <h2 className="text-2xl font-semibold">Write Multiple Lines</h2>
        <p className="mt-2">
          Use <strong>writelines()</strong> for writing lists of strings.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-2 whitespace-pre-line"><code>{exWriteMany}</code></pre>
      </section>

      {/* SUMMARY */}
      <section>
        <h2 className="text-2xl font-semibold">Summary</h2>
        <ul className="list-disc ml-6 mt-2 leading-7">
          <li><strong>w</strong>: write new data, erase old data</li>
          <li><strong>a</strong>: append data at end</li>
          <li><strong>x</strong>: create new file, error if exists</li>
          <li><strong>write()</strong>: writes single string</li>
          <li><strong>writelines()</strong>: writes list of strings</li>
          <li><strong>with</strong>: best practice for safe writing</li>
        </ul>
      </section>
    </article>
  );
}
