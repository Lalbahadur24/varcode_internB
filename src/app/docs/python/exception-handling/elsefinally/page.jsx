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

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-12">
      <h1 className="text-4xl font-bold">Python Try–Except — Else & Finally Cheat Sheet</h1>

      {/* ELSE BLOCK */}
      <section>
        <h2 className="text-2xl font-semibold">Using the {dq}else{dq} Block</h2>

        <p className="mt-2 leading-7">
          The <strong>else</strong> block executes <strong>only if the try block does not raise any error</strong>.
          It is useful for running code that should happen only when everything goes correctly.
        </p>

        <h3 className="text-xl font-semibold mt-4">Example</h3>
        <p className="mt-1">Since no error occurs, the else block executes:</p>

        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exElse}</code></pre>
      </section>

      {/* FINALLY BLOCK */}
      <section>
        <h2 className="text-2xl font-semibold">Using the {dq}finally{dq} Block</h2>

        <p className="mt-2 leading-7">
          The <strong>finally</strong> block will run <strong>no matter what happens</strong>:
          whether an error occurs or not.  
          This makes it ideal for <strong>closing resources</strong> such as files, databases, or network connections.
        </p>

        <h3 className="text-xl font-semibold mt-4">Example</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exFinally}</code></pre>
      </section>

      {/* FILE HANDLING EXAMPLE */}
      <section>
        <h2 className="text-2xl font-semibold">Using finally for File Handling</h2>

        <p className="mt-2 leading-7">
          This example shows how <strong>try–except–finally</strong> ensures that a file is always closed,
          even if something goes wrong while writing to it.
        </p>

        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exFile}</code></pre>
        
        <p className="mt-3 leading-7">
          This allows the program to continue without leaving the file open in memory.
        </p>
      </section>

      {/* SUMMARY */}
      <section>
        <h2 className="text-2xl font-semibold">Summary</h2>
        <ul className="list-disc ml-6 mt-3 leading-7">
          <li><strong>else</strong> — Runs only when no errors occur in the try block.</li>
          <li><strong>finally</strong> — Runs always, even if an error occurs.</li>
          <li>Use <strong>finally</strong> to close files, free memory, or clean up resources.</li>
          <li>Combining <strong>try + except + else + finally</strong> gives full control over error handling.</li>
        </ul>
      </section>
    </article>
  );
}
