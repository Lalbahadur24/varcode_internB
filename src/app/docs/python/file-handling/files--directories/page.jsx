import React from "react";

export default function PythonFilesAndDirectories() {
  const dq = String.fromCharCode(34);

  // --- FILE OPERATIONS ---
  const exCheckExists = `import os

print(os.path.exists(${dq}myfile.txt${dq}))`;

  const exCreateFile = `f = open(${dq}newfile.txt${dq}, ${dq}w${dq})
f.write(${dq}This is a new file.${dq})
f.close()`;

  const exDeleteFile = `import os

if os.path.exists(${dq}oldfile.txt${dq}):
  os.remove(${dq}oldfile.txt${dq})
else:
  print(${dq}File does not exist${dq})`;

  // --- DIRECTORY OPERATIONS ---
  const exCwd = `import os

print(os.getcwd())`;

  const exListDir = `import os

print(os.listdir())`;

  const exMakeDir = `import os

os.mkdir(${dq}myfolder${dq})`;

  const exRenameDir = `import os

os.rename(${dq}myfolder${dq}, ${dq}newfolder${dq})`;

  const exRemoveDir = `import os

os.rmdir(${dq}newfolder${dq})`;

  const exRemoveTree = `import shutil

shutil.rmtree(${dq}myfolder${dq})`;

  const exJoinPath = `import os

path = os.path.join(${dq}folder${dq}, ${dq}file.txt${dq})
print(path)`;

  const exWalk = `import os

for root, dirs, files in os.walk(${dq}. ${dq}):
  print(${dq}Root:${dq}, root)
  print(${dq}Directories:${dq}, dirs)
  print(${dq}Files:${dq}, files)`;

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-12">
      <h1 className="text-4xl font-bold">Python Files & Directories — Full Cheat Sheet</h1>

      {/* INTRO */}
      <section>
        <h2 className="text-2xl font-semibold">Introduction</h2>
        <p className="mt-2 leading-7">
          Python provides the <strong>os</strong> and <strong>shutil</strong> modules to interact with files
          and directories. These allow you to create, delete, rename, move, and explore your file system.
        </p>
      </section>

      {/* FILE CHECK */}
      <section>
        <h2 className="text-2xl font-semibold">Check if a File Exists</h2>
        <p className="mt-2">Use <strong>os.path.exists()</strong> to check file availability.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exCheckExists}</code></pre>
      </section>

      {/* CREATE FILE */}
      <section>
        <h2 className="text-2xl font-semibold">Create a New File</h2>
        <p className="mt-2">Using write mode <strong>w</strong> will create the file if missing.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exCreateFile}</code></pre>
      </section>

      {/* DELETE FILE */}
      <section>
        <h2 className="text-2xl font-semibold">Delete a File</h2>
        <p className="mt-2">
          Use <strong>os.remove()</strong> to delete a file. Always verify the file exists before deleting.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exDeleteFile}</code></pre>
      </section>

      {/* CURRENT DIRECTORY */}
      <section>
        <h2 className="text-2xl font-semibold">Get Current Working Directory</h2>
        <p className="mt-2">
          <strong>os.getcwd()</strong> shows the directory where your Python script is running.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exCwd}</code></pre>
      </section>

      {/* LIST DIR */}
      <section>
        <h2 className="text-2xl font-semibold">List Files in a Directory</h2>
        <p className="mt-2">Use <strong>os.listdir()</strong> to see files and folders.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exListDir}</code></pre>
      </section>

      {/* CREATE DIR */}
      <section>
        <h2 className="text-2xl font-semibold">Create a Directory</h2>
        <p className="mt-2">Use <strong>os.mkdir()</strong> to create a single folder.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exMakeDir}</code></pre>
      </section>

      {/* RENAME DIR */}
      <section>
        <h2 className="text-2xl font-semibold">Rename a Directory</h2>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exRenameDir}</code></pre>
      </section>

      {/* REMOVE DIR */}
      <section>
        <h2 className="text-2xl font-semibold">Remove a Directory</h2>
        <p className="mt-2">Use <strong>os.rmdir()</strong> — works only on empty directories.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exRemoveDir}</code></pre>

        <p className="mt-4">Use <strong>shutil.rmtree()</strong> to delete non-empty folders.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exRemoveTree}</code></pre>
      </section>

      {/* PATH JOIN */}
      <section>
        <h2 className="text-2xl font-semibold">Combine Paths Safely</h2>
        <p className="mt-2">Use <strong>os.path.join()</strong> for cross-platform paths.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exJoinPath}</code></pre>
      </section>

      {/* DIRECTORY WALK */}
      <section>
        <h2 className="text-2xl font-semibold">Walk Through All Files & Subdirectories</h2>
        <p className="mt-2">
          <strong>os.walk()</strong> loops through folders, subfolders, and files.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-2 whitespace-pre-line"><code>{exWalk}</code></pre>
      </section>

      {/* SUMMARY */}
      <section>
        <h2 className="text-2xl font-semibold">Summary Table</h2>

        <table className="w-full border mt-3 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Function</th>
              <th className="border p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2 font-mono">os.getcwd()</td><td className="border p-2">Get current working directory</td></tr>
            <tr><td className="border p-2 font-mono">os.listdir()</td><td className="border p-2">List files and directories</td></tr>
            <tr><td className="border p-2 font-mono">os.mkdir()</td><td className="border p-2">Create directory</td></tr>
            <tr><td className="border p-2 font-mono">os.remove()</td><td className="border p-2">Delete file</td></tr>
            <tr><td className="border p-2 font-mono">os.rmdir()</td><td className="border p-2">Remove empty folder</td></tr>
            <tr><td className="border p-2 font-mono">shutil.rmtree()</td><td className="border p-2">Remove directory with contents</td></tr>
            <tr><td className="border p-2 font-mono">os.path.exists()</td><td className="border p-2">Check if file/folder exists</td></tr>
            <tr><td className="border p-2 font-mono">os.path.join()</td><td className="border p-2">Combine paths safely</td></tr>
            <tr><td className="border p-2 font-mono">os.walk()</td><td className="border p-2">Traverse directories</td></tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
