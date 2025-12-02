import React from "react";

export default function PythonFileWrite() {
  const dq = String.fromCharCode(34);

  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

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
    <div className="space-y-6">
      {/* PAGE TITLE */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python File Writing — Full Cheat Sheet
      </h1>

      <div className="space-y-12 text-slate-700 leading-relaxed">
        {/* INTRO */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            What is File Writing?
          </h2>
          <p className="mt-2">
            Writing files allows Python to{" "}
            <strong>store text, logs, results, and output</strong> permanently.
            You use the <strong>open()</strong> function with specific modes to
            write new content.
          </p>

          <h3 className="text-xl font-semibold mt-4 text-[#4a0080]">
            File Write Modes
          </h3>
          <ul className="list-disc ml-6 mt-2 leading-7">
            <li>
              <strong>w</strong> — Write (overwrites existing file)
            </li>
            <li>
              <strong>a</strong> — Append (adds to end of file)
            </li>
            <li>
              <strong>x</strong> — Create a new file (error if file exists)
            </li>
            <li>
              <strong>t</strong> — Text mode (default)
            </li>
            <li>
              <strong>b</strong> — Binary mode
            </li>
          </ul>

          <pre className={codeClass}>
            <code>{`open(filename, "w")`}</code>
          </pre>
        </section>

        {/* BASIC WRITE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Basic Writing Example
          </h2>
          <p className="mt-2">
            Creates the file if missing, overwrites if it exists.
          </p>

          <pre className={codeClass}>
            <code>{exWrite}</code>
          </pre>
        </section>

        {/* OVERWRITE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Overwrite File Content
          </h2>
          <p className="mt-2">
            Using <strong>w</strong> always clears the existing file before
            writing.
          </p>

          <pre className={codeClass}>
            <code>{exOverwrite}</code>
          </pre>
        </section>

        {/* CREATE FILE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Create a File (x Mode)
          </h2>
          <p className="mt-2">
            The <strong>x</strong> mode creates a file and throws an error if it
            already exists.
          </p>

          <pre className={codeClass}>
            <code>{exCreateFile}</code>
          </pre>
        </section>

        {/* WITH STATEMENT */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Writing with with Statement
          </h2>
          <p className="mt-2">
            Using <strong>with</strong> is recommended because it automatically
            closes the file.
          </p>

          <pre className={codeClass}>
            <code>{exWithWrite}</code>
          </pre>
        </section>

        {/* WRITE MULTIPLE LINES */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Write Multiple Lines
          </h2>
          <p className="mt-2">
            Use <strong>writelines()</strong> to write multiple strings.
          </p>

          <pre className={codeClass}>
            <code>{exWriteMany}</code>
          </pre>
        </section>

        {/* SUMMARY */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>
          <ul className="list-disc ml-6 mt-2 leading-7">
            <li>
              <strong>w</strong>: write new data, erase old data
            </li>
            <li>
              <strong>a</strong>: append data at end
            </li>
            <li>
              <strong>x</strong>: create new file, error if exists
            </li>
            <li>
              <strong>write()</strong>: writes single string
            </li>
            <li>
              <strong>writelines()</strong>: writes list of strings
            </li>
            <li>
              <strong>with</strong>: best practice for safe writing
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
