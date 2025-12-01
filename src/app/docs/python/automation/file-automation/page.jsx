import React from "react";

export default function FileAutomationPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>File Automation</h1>
      <p>
        Automate routine file tasks using <code>pathlib</code>, <code>shutil</code>, and
        <code>glob</code>.
      </p>

      <h2>Copy, Move, Rename, Delete</h2>
      <pre><code>{`from pathlib import Path
import shutil
from glob import glob

base = Path('inbox')
base.mkdir(exist_ok=True)
(base / 'report.csv').write_text('id,value\n1,100')

# Copy
shutil.copy(base / 'report.csv', 'backup/report.csv')

# Move (creates folders as needed)
Path('processed').mkdir(exist_ok=True)
shutil.move('backup/report.csv', 'processed/report.csv')

# Bulk rename by pattern
for p in base.glob('*.csv'):
    p.rename(p.with_name(f'arch_{p.name}'))

# Delete
for p in glob('processed/*.csv'):
    Path(p).unlink()`}</code></pre>

      <h2>Tips</h2>
      <ul>
        <li>Use <code>Path</code> methods for cross‑platform paths.</li>
        <li>Guard destructive actions with checks and backups.</li>
      </ul>
    </div>
  );
}
