import React from "react";

export default function PythonFileRead() {
  const dq = String.fromCharCode(34);

  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

  const exOpen = `f = open(${dq}demofile.txt${dq}, ${dq}r${dq})
print(f.read())`;

  const exOpenPath = `f = open(${dq}D:\\\\myfiles\\\\welcome.txt${dq})
print(f.read())`;

  const exWith = `with open(${dq}demofile.txt${dq}) as f:
  print(f.read())`;

  const exClose = `f = open(${dq}demofile.txt${dq})
print(f.readline())
f.close()`;

  const exReadChars = `with open(${dq}demofile.txt${dq}) as f:
  print(f.read(5))   # Reads 5 characters`;

  const exReadLine = `with open(${dq}demofile.txt${dq}) as f:
  print(f.readline())`;

  const exReadTwoLines = `with open(${dq}demofile.txt${dq}) as f:
  print(f.readline())
  print(f.readline())`;

  const exLoopLines = `with open(${dq}demofile.txt${dq}) as f:
  for line in f:
    print(line)`;

  return (
    <div className="space-y-6">
      {/* TITLE */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python File Reading — Full Cheat Sheet
      </h1>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* INTRO */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            What is File Handling?
          </h2>
          <p className="mt-2">
            Python uses the <strong>open()</strong> function to handle files. It
            returns a <strong>file object</strong> that allows reading, writing,
            or modifying files.
          </p>

          <h3 className="text-xl font-semibold mt-4 text-[#4a0080]">
            open() Syntax
          </h3>
          <pre className={codeClass}>
            <code>{`open(filename, mode)`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4 text-[#4a0080]">
            Common File Modes
          </h3>
          <ul className="list-disc ml-6 mt-2 leading-7">
            <li>
              <strong>r</strong> – Read (default)
            </li>
            <li>
              <strong>a</strong> – Append
            </li>
            <li>
              <strong>w</strong> – Write
            </li>
            <li>
              <strong>x</strong> – Create
            </li>
            <li>
              <strong>t</strong> – Text mode (default)
            </li>
            <li>
              <strong>b</strong> – Binary mode
            </li>
          </ul>
        </section>

        {/* BASIC READ */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Basic File Reading
          </h2>
          <p className="mt-2">Reads the entire file content.</p>
          <pre className={codeClass}>
            <code>{exOpen}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4 text-[#4a0080]">
            Reading From a File Path
          </h3>
          <pre className={codeClass}>
            <code>{exOpenPath}</code>
          </pre>
        </section>

        {/* WITH STATEMENT */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Using the with Statement
          </h2>
          <p className="mt-2">
            <strong>with</strong> automatically closes the file after use. It is
            the recommended way to work with files.
          </p>
          <pre className={codeClass}>
            <code>{exWith}</code>
          </pre>
        </section>

        {/* CLOSE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Closing Files
          </h2>
          <p className="mt-2">
            If you don{"'"}t use <strong>with</strong>, always call{" "}
            <strong>close()</strong>.
          </p>
          <pre className={codeClass}>
            <code>{exClose}</code>
          </pre>
        </section>

        {/* READ LIMIT */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Reading Only Part of the File
          </h2>
          <p className="mt-2">
            Specify the number of characters inside <strong>read(n)</strong>.
          </p>
          <pre className={codeClass}>
            <code>{exReadChars}</code>
          </pre>
        </section>

        {/* READLINES */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Reading Lines
          </h2>

          <h3 className="text-lg font-semibold mt-3 text-[#4a0080]">
            Read One Line
          </h3>
          <pre className={codeClass}>
            <code>{exReadLine}</code>
          </pre>

          <h3 className="text-lg font-semibold mt-3 text-[#4a0080]">
            Read Two Lines
          </h3>
          <pre className={codeClass}>
            <code>{exReadTwoLines}</code>
          </pre>

          <h3 className="text-lg font-semibold mt-3 text-[#4a0080]">
            Loop Through File Line-by-Line
          </h3>
          <pre className={codeClass}>
            <code>{exLoopLines}</code>
          </pre>
        </section>

        {/* SUMMARY */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>
          <ul className="list-disc ml-6 mt-2 leading-7">
            <li>
              <strong>open()</strong> creates a file object
            </li>
            <li>
              <strong>read()</strong> reads entire file or first n characters
            </li>
            <li>
              <strong>readline()</strong> reads one line
            </li>
            <li>
              <strong>loop</strong> to read file line-by-line
            </li>
            <li>
              <strong>with</strong> auto-closes file
            </li>
            <li>
              <strong>close()</strong> closes manually when not using with
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
