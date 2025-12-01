import React from "react";

export default function PythonFileAppend() {
  const dq = String.fromCharCode(34);

  const exAppend = `f = open(${dq}demofile.txt${dq}, ${dq}a${dq})
f.write(${dq}This text is appended!${dq})
f.close()`;

  const exAppendNewLine = `with open(${dq}notes.txt${dq}, ${dq}a${dq}) as f:
  f.write(${dq}\\nNew line added.${dq})`;

  const exAppendList = `lines = [
  ${dq}Line A${dq} + ${dq}\\n${dq},
  ${dq}Line B${dq} + ${dq}\\n${dq}
]

with open(${dq}demo.txt${dq}, ${dq}a${dq}) as f:
  f.writelines(lines)`;

  const exAppendCreate = `# If the file does not exist, "a" mode will create it
f = open(${dq}newfile.txt${dq}, ${dq}a${dq})
f.write(${dq}Created automatically using append!${dq})
f.close()`;

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-10">
      <h1 className="text-4xl font-bold">Python File Append — Full Cheat Sheet</h1>

      {/* INTRO */}
      <section>
        <h2 className="text-2xl font-semibold">What is File Appending?</h2>
        <p className="mt-2">
          Appending means <strong>adding new text to the end</strong> of a file without deleting the existing data.
          The <strong>a</strong> mode opens the file for appending.
        </p>

        <h3 className="text-xl font-semibold mt-4">Append Mode Properties</h3>
        <ul className="list-disc ml-6 mt-2 leading-7">
          <li><strong>a</strong> — Opens file for appending</li>
          <li><strong>Does NOT erase existing content</strong></li>
          <li>Writes at the **end of the file** only</li>
          <li>If file does not exist → <strong>creates a new file automatically</strong></li>
        </ul>
      </section>

      {/* BASIC APPEND */}
      <section>
        <h2 className="text-2xl font-semibold">Basic Append Example</h2>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exAppend}</code></pre>
      </section>

      {/* APPEND NEW LINE */}
      <section>
        <h2 className="text-2xl font-semibold">Append a New Line</h2>
        <p className="mt-2">
          Use <strong>{dq}\\n{dq}</strong> to add a new line before writing.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exAppendNewLine}</code></pre>
      </section>

      {/* APPEND MULTIPLE LINES */}
      <section>
        <h2 className="text-2xl font-semibold">Append Multiple Lines</h2>
        <p className="mt-2">Use <strong>writelines()</strong> to append a list of strings.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-2 whitespace-pre-line"><code>{exAppendList}</code></pre>
      </section>

      {/* CREATE VIA APPEND */}
      <section>
        <h2 className="text-2xl font-semibold">Append Can Create a File</h2>
        <p className="mt-2">
          Unlike <strong>w</strong> mode, append only adds to the file and will not erase anything.
          If the file is missing, Python creates it.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exAppendCreate}</code></pre>
      </section>

      {/* SUMMARY */}
      <section>
        <h2 className="text-2xl font-semibold">Summary</h2>
        <ul className="list-disc ml-6 mt-2 leading-7">
          <li><strong>a</strong>: Append mode — adds to file</li>
          <li><strong>a+</strong>: Append + read mode</li>
          <li><strong>write()</strong>: writes text at end</li>
          <li><strong>writelines()</strong>: writes list of strings</li>
          <li><strong>with open()</strong>: best practice (auto-closes file)</li>
          <li>Append mode <strong>never deletes old data</strong></li>
        </ul>
      </section>
    </article>
  );
}
