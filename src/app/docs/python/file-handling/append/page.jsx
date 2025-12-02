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

  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

  return (
    <div className="space-y-6">
      {/* TITLE */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python File Append — Full Cheat Sheet
      </h1>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* INTRO */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            What is File Appending?
          </h2>
          <p className="mt-2">
            Appending means{" "}
            <strong>adding new text to the end of a file</strong> without
            deleting the existing data. The <strong>"a"</strong> mode opens the
            file for appending.
          </p>

          <h3 className="text-xl font-semibold mt-4">Append Mode Properties</h3>
          <ul className="list-disc ml-6 mt-2 leading-7">
            <li>
              <strong>a</strong> — Opens file for appending
            </li>
            <li>
              <strong>Does NOT erase existing content</strong>
            </li>
            <li>
              Writes at the <strong>end of the file</strong> only
            </li>
            <li>
              If file does not exist →{" "}
              <strong>creates a new file automatically</strong>
            </li>
          </ul>
        </section>

        {/* BASIC APPEND */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Basic Append Example
          </h2>
          <pre className={codeClass}>
            <code>{exAppend}</code>
          </pre>
        </section>

        {/* APPEND NEW LINE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Append a New Line
          </h2>
          <p className="mt-2">
            Use{" "}
            <strong>
              {dq}\\n{dq}
            </strong>{" "}
            to add a new line before writing.
          </p>
          <pre className={codeClass}>
            <code>{exAppendNewLine}</code>
          </pre>
        </section>

        {/* APPEND MULTIPLE LINES */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Append Multiple Lines
          </h2>
          <p className="mt-2">
            Use <strong>writelines()</strong> to append a list of strings.
          </p>
          <pre className={`${codeClass} whitespace-pre-line`}>
            <code>{exAppendList}</code>
          </pre>
        </section>

        {/* CREATE VIA APPEND */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Append Can Create a File
          </h2>
          <p className="mt-2">
            Unlike <strong>"w"</strong> mode, append only adds to the file and
            will not erase anything. If the file is missing, Python creates it.
          </p>
          <pre className={codeClass}>
            <code>{exAppendCreate}</code>
          </pre>
        </section>

        {/* SUMMARY */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>
          <ul className="list-disc ml-6 mt-2 leading-7">
            <li>
              <strong>a</strong>: Append mode — adds to file
            </li>
            <li>
              <strong>a+</strong>: Append + read mode
            </li>
            <li>
              <strong>write()</strong>: writes text at end
            </li>
            <li>
              <strong>writelines()</strong>: writes list of strings
            </li>
            <li>
              <strong>with open()</strong>: best practice (auto-closes file)
            </li>
            <li>
              Append mode <strong>never deletes old data</strong>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
