import React from "react";

export default function AutomatingFilesFolders() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Automating Files & Folders</h1>
      <p>
        Automate file operations with <code>shutil</code> and <code>pathlib</code>.
      </p>

      <h2>Copy & Move</h2>
      <pre><code>{`import shutil

# Copy file
shutil.copy('source.txt', 'destination.txt')

# Copy with metadata
shutil.copy2('source.txt', 'dest.txt')

# Copy entire directory
shutil.copytree('src_dir', 'dst_dir')

# Move (rename)
shutil.move('old.txt', 'new.txt')`}</code></pre>

      <h2>Pathlib (Modern Way)</h2>
      <pre><code>{`from pathlib import Path

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
file.unlink()  # delete file`}</code></pre>

      <h2>Bulk Operations</h2>
      <pre><code>{`from pathlib import Path
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
shutil.copytree('important_data', backup_dir)`}</code></pre>

      <h2>Tips</h2>
      <ul>
        <li>Use <code>Path</code> for cleaner, object-oriented file handling</li>
        <li>Always check <code>exists()</code> before destructive operations</li>
        <li>Use <code>parents=True</code> to create nested directories</li>
      </ul>
    </div>
  );
}
