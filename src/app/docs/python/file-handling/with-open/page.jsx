import React from "react";

export default function PythonWithOpen() {
  const dq = String.fromCharCode(34);

  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

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
    <div className="space-y-6">
      {/* TITLE */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python {dq}with open(){dq} — Full Cheat Sheet
      </h1>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* INTRO */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            What is {dq}with open(){dq}?
          </h2>
          <p className="mt-2">
            The <strong>with</strong> statement in Python automatically manages
            resources like files. When using <strong>with open()</strong>,
            Python opens the file, lets you work with it, and{" "}
            <strong>automatically closes it</strong> — even if exceptions occur.
          </p>

          <p className="mt-2">
            This makes your code cleaner, safer, and avoids having to manually
            call <code>f.close()</code>.
          </p>
        </section>

        {/* BASIC USAGE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Basic Usage</h2>
          <p className="mt-2">Most common way to open and read a file:</p>
          <pre className={codeClass}>
            <code>{exBasic}</code>
          </pre>
        </section>

        {/* WHY USE WITH OPEN */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Why Use {dq}with open(){dq}?
          </h2>
          <ul className="list-disc ml-6 mt-3 leading-7">
            <li>Automatically closes the file</li>
            <li>Prevents memory leaks</li>
            <li>
              Avoids forgetting <code>f.close()</code>
            </li>
            <li>Cleaner and more readable code</li>
            <li>Handles exceptions safely</li>
          </ul>
        </section>

        {/* WRITE FILE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Write to a File
          </h2>
          <p className="mt-2">
            Using mode <strong>w</strong> will overwrite the file.
          </p>
          <pre className={codeClass}>
            <code>{exWrite}</code>
          </pre>
        </section>

        {/* APPEND */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Append to a File
          </h2>
          <p className="mt-2">
            Using mode <strong>a</strong> will add content at the end.
          </p>
          <pre className={codeClass}>
            <code>{exAppend}</code>
          </pre>
        </section>

        {/* READ LINE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Read Only One Line
          </h2>
          <pre className={codeClass}>
            <code>{exReadLine}</code>
          </pre>
        </section>

        {/* LOOP LINES */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Loop Through All Lines
          </h2>
          <pre className={codeClass}>
            <code>{exLoop}</code>
          </pre>
        </section>

        {/* MULTIPLE FILES */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Open Multiple Files
          </h2>
          <pre className={codeClass}>
            <code>{exMultiple}</code>
          </pre>
        </section>

        {/* SUMMARY TABLE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>

          <table className="w-full border mt-3 text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Mode</th>
                <th className="border p-2">Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 font-mono">r</td>
                <td className="border p-2">Read (default)</td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">w</td>
                <td className="border p-2">Write (overwrite)</td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">a</td>
                <td className="border p-2">Append to end</td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">x</td>
                <td className="border p-2">Create file (error if exists)</td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">t</td>
                <td className="border p-2">Text mode (default)</td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">b</td>
                <td className="border p-2">Binary mode</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* FINAL NOTE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Final Note</h2>
          <p className="mt-2">
            Always use <strong>with open()</strong>. It is the safest, cleanest,
            and most Pythonic way to work with files.
          </p>
        </section>
      </div>
    </div>
  );
}
