import React from "react";

export default function PythonFileRead() {
  const dq = String.fromCharCode(34);

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
    <article className="max-w-4xl mx-auto p-6 space-y-10">
      <h1 className="text-4xl font-bold">Python File Reading — Full Cheat Sheet</h1>

      {/* INTRO */}
      <section>
        <h2 className="text-2xl font-semibold">What is File Handling?</h2>
        <p className="mt-2">
          Python uses the <strong>open()</strong> function to handle files.  
          It returns a <strong>file object</strong> that allows reading, writing, or modifying files.
        </p>

        <h3 className="text-xl font-semibold mt-4">open() Syntax</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2">
{`open(filename, mode)`}
        </pre>

        <h3 className="text-xl font-semibold mt-4">Common File Modes</h3>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>r</strong> – Read (default)</li>
          <li><strong>a</strong> – Append</li>
          <li><strong>w</strong> – Write</li>
          <li><strong>x</strong> – Create</li>
          <li><strong>t</strong> – Text mode (default)</li>
          <li><strong>b</strong> – Binary mode</li>
        </ul>
      </section>

      {/* BASIC READ */}
      <section>
        <h2 className="text-2xl font-semibold">Basic File Reading</h2>
        <p className="mt-2">Reads the entire file content.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exOpen}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Reading From a File Path</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exOpenPath}</code></pre>
      </section>

      {/* WITH STATEMENT */}
      <section>
        <h2 className="text-2xl font-semibold">Using the with Statement</h2>
        <p className="mt-2">
          <strong>with</strong> automatically closes the file after use.  
          It is the recommended way to work with files.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exWith}</code></pre>
      </section>

      {/* CLOSE */}
      <section>
        <h2 className="text-2xl font-semibold">Closing Files</h2>
        <p className="mt-2">
          If you don{"'"}t use <strong>with</strong>, always call <strong>close()</strong>.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exClose}</code></pre>
      </section>

      {/* READ LIMIT */}
      <section>
        <h2 className="text-2xl font-semibold">Reading Only Part of the File</h2>
        <p className="mt-2">Specify the number of characters inside <strong>read(n)</strong>.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exReadChars}</code></pre>
      </section>

      {/* READLINES */}
      <section>
        <h2 className="text-2xl font-semibold">Reading Lines</h2>

        <h3 className="text-lg font-semibold mt-3">Read One Line</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exReadLine}</code></pre>

        <h3 className="text-lg font-semibold mt-3">Read Two Lines</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exReadTwoLines}</code></pre>

        <h3 className="text-lg font-semibold mt-3">Loop Through File Line-by-Line</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exLoopLines}</code></pre>
      </section>

      {/* SUMMARY */}
      <section>
        <h2 className="text-2xl font-semibold">Summary</h2>
        <ul className="list-disc ml-6 mt-2 leading-7">
          <li><strong>open()</strong> creates a file object</li>
          <li><strong>read()</strong> reads entire file or first n characters</li>
          <li><strong>readline()</strong> reads one line</li>
          <li><strong>loop</strong> to read file line-by-line</li>
          <li><strong>with</strong> automatically closes the file</li>
          <li><strong>close()</strong> closes manually when not using with</li>
        </ul>
      </section>
    </article>
  );
}
