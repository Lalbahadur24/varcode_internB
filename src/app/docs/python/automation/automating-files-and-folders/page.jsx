import React from "react";

export default function AutomatingFilesFolders() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Automating Files & Folders
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Python provides powerful tools like <code>shutil</code> and{" "}
        <code>pathlib</code> to automate file creation, movement, copying,
        deletion, and directory management. These are essential for automation,
        data pipelines, backup scripts, and DevOps tasks.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Copy & Move */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Copy & Move Files (shutil)
          </h2>

          <p className="mt-2">
            The <code>shutil</code> module provides high-level file operations
            including copying, moving, and directory duplication.
          </p>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`import shutil

# Copy file
shutil.copy('source.txt', 'destination.txt')

# Copy with metadata (timestamps, permissions)
shutil.copy2('source.txt', 'dest.txt')

# Copy entire directory
shutil.copytree('src_dir', 'dst_dir')

# Move (rename)
shutil.move('old.txt', 'new.txt')`}
              </pre>
            </div>
          </div>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <code>copy2()</code> preserves original file metadata.
            </li>
            <li>
              <code>copytree()</code> duplicates a full directory structure.
            </li>
            <li>
              <code>move()</code> works for renaming **and** moving across
              directories.
            </li>
          </ul>
        </section>

        {/* Pathlib */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Pathlib (Modern File Handling)
          </h2>

          <p className="mt-2">
            <code>pathlib</code> is Python's modern, object-oriented system for
            working with paths and files. It's cleaner and easier than using
            <code>os</code>.
          </p>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`from pathlib import Path

# Create file
file = Path('data/file.txt')
file.parent.mkdir(parents=True, exist_ok=True)
file.write_text('Hello World')

# Read
content = file.read_text()

# Iterate directory
for item in Path('data').iterdir():
    if item.is_file():
        print(item.name)

# Pattern matching
csv_files = list(Path('data').glob('*.csv'))

# Delete
file.unlink()  # delete file`}
              </pre>
            </div>
          </div>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <code>write_text()</code> and <code>read_text()</code> are fast
              and simple.
            </li>
            <li>
              <code>glob()</code> supports wildcard patterns.
            </li>
            <li>
              <code>mkdir(parents=True)</code> creates nested folders safely.
            </li>
          </ul>
        </section>

        {/* Bulk operations */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Bulk Operations
          </h2>

          <p className="mt-2">
            Automate sorting, organizing, and backing up files using loops and
            directory traversal.
          </p>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`from pathlib import Path
import shutil

# Organize files by extension
for file in Path('.').glob('*.*'):
    if file.is_file():
        ext = file.suffix[1:]  # remove dot
        dest_dir = Path(ext)
        dest_dir.mkdir(exist_ok=True)
        shutil.move(str(file), dest_dir / file.name)

# Backup with timestamp
import datetime
backup_dir = Path(f"backup_{datetime.date.today()}")
shutil.copytree('important_data', backup_dir)`}
              </pre>
            </div>
          </div>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Automatically organize hundreds of files by extension (jpg, pdf,
              txt, etc).
            </li>
            <li>
              <code>copytree()</code> creates a complete backup of directories.
            </li>
            <li>
              Timestamps ensure backups are unique:{" "}
              <code>backup_2024-01-01</code>.
            </li>
          </ul>
        </section>

        {/* Tips */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Tips</h2>

          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>
              Prefer <code>Path</code> over <code>os</code> for cleaner,
              object-oriented handling.
            </li>
            <li>
              Always check <code>exists()</code> before deleting files or
              directories.
            </li>
            <li>
              Use <code>parents=True</code> when creating nested directories.
            </li>
            <li>
              Combine <code>pathlib</code> + <code>shutil</code> for powerful
              automation scripts.
            </li>
            <li>
              Wrap file operations in <code>try/except</code> when automating
              large directories.
            </li>
          </ul>
        </section>

        {/* Bonus: Real-world tasks */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Real-World Automation Ideas
          </h2>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Automatically organize downloads folder by file type.</li>
            <li>Backup your project folder every day.</li>
            <li>Rename thousands of files based on patterns.</li>
            <li>Detect duplicate files and delete safely.</li>
            <li>Generate folder structures for new projects.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
