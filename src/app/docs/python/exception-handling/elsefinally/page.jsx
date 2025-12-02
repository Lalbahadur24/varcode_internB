import React from "react";

export default function PythonElseFinally() {
  const dq = String.fromCharCode(34);

  // Code Examples
  const exElse = `try:
  print(${dq}Hello${dq})
except:
  print(${dq}Something went wrong${dq})
else:
  print(${dq}Nothing went wrong${dq})`;

  const exFinally = `try:
  print(x)
except:
  print(${dq}Something went wrong${dq})
finally:
  print(${dq}The try-except is finished${dq})`;

  const exFile = `try:
  f = open(${dq}demofile.txt${dq})
  try:
    f.write(${dq}Lorum Ipsum${dq})
  except:
    print(${dq}Something went wrong when writing to the file${dq})
  finally:
    f.close()
except:
  print(${dq}Something went wrong when opening the file${dq})`;

  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

  return (
    <div className="space-y-12 text-slate-700">
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python Try–Except — Else & Finally Cheat Sheet
      </h1>

      {/* ELSE BLOCK */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Using the {dq}else{dq} Block
        </h2>

        <p className="mt-2 leading-7">
          The <strong>else</strong> block executes{" "}
          <strong>only if the try block does not raise any error</strong>. It is
          useful for running code that should execute only when everything goes
          correctly.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-[#4a0080]">Example</h3>
        <p className="mt-1">Since no error occurs, the else block executes:</p>

        <pre className={codeClass}>
          <code>{exElse}</code>
        </pre>
      </section>

      {/* FINALLY BLOCK */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Using the {dq}finally{dq} Block
        </h2>

        <p className="mt-2 leading-7">
          The <strong>finally</strong> block will run{" "}
          <strong>no matter what happens</strong> — whether an error occurs or
          not. This makes it ideal for <strong>closing resources</strong> such
          as files, databases, or network connections.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-[#4a0080]">Example</h3>

        <pre className={codeClass}>
          <code>{exFinally}</code>
        </pre>
      </section>

      {/* FILE HANDLING EXAMPLE */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Using finally for File Handling
        </h2>

        <p className="mt-2 leading-7">
          This example shows how <strong>try–except–finally</strong> ensures a
          file is always closed, even if something goes wrong while writing.
        </p>

        <pre className={codeClass}>
          <code>{exFile}</code>
        </pre>

        <p className="mt-3 leading-7">
          This prevents memory leaks and keeps file operations safe.
        </p>
      </section>

      {/* SUMMARY */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>
        <ul className="list-disc ml-6 mt-3 leading-7">
          <li>
            <strong>else</strong> — Runs only when no errors occur.
          </li>
          <li>
            <strong>finally</strong> — Runs always, even if errors occur.
          </li>
          <li>
            Use <strong>finally</strong> for cleanup (closing files, freeing
            memory).
          </li>
          <li>
            Combining <strong>try + except + else + finally</strong> gives full
            control over error handling.
          </li>
        </ul>
      </section>
    </div>
  );
}
