import React from "react";

export default function UsingSQLite() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">Using SQLite</h1>

      <p className="text-slate-700 leading-relaxed">
        SQLite is a lightweight, file-based SQL database included with Python
        via the <code>sqlite3</code> module. It’s perfect for small apps,
        analytics scripts, desktop tools, and prototypes.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Connect & Setup */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Connect and Setup
          </h2>

          <p className="mt-2">
            Create a database file, enable WAL mode, and create a table.
          </p>

          <pre className="mt-4 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`import sqlite3

# Auto-closes using context manager
with sqlite3.connect('app.db') as conn:
    cur = conn.cursor()
    cur.execute('PRAGMA journal_mode=WAL')  # Faster concurrency
    cur.execute('''
        CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()`}
          </pre>

          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>
              <code>journal_mode=WAL</code> → better performance.
            </li>
            <li>
              SQLite auto-creates the <code>app.db</code> file.
            </li>
            <li>Great for small/medium datasets.</li>
          </ul>
        </section>

        {/* CRUD */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            CRUD Operations (Safe & Parameterized)
          </h2>

          <p className="mt-2">
            Always use <code>?</code> placeholders → prevents SQL injection.
          </p>

          <pre className="mt-4 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`import sqlite3

def add_user(name, email):
    with sqlite3.connect('app.db') as conn:
        cur = conn.cursor()
        cur.execute('INSERT INTO users(name, email) VALUES(?, ?)', (name, email))
        conn.commit()

def list_users():
    with sqlite3.connect('app.db') as conn:
        cur = conn.cursor()
        cur.execute('SELECT id, name, email FROM users ORDER BY id')
        return cur.fetchall()

def update_email(user_id, email):
    with sqlite3.connect('app.db') as conn:
        cur = conn.cursor()
        cur.execute('UPDATE users SET email=? WHERE id=?', (email, user_id))
        conn.commit()

def delete_user(user_id):
    with sqlite3.connect('app.db') as conn:
        cur = conn.cursor()
        cur.execute('DELETE FROM users WHERE id=?', (user_id,))
        conn.commit()`}
          </pre>
        </section>

        {/* Row Factory & Transactions */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Transactions & Row Factory
          </h2>

          <p className="mt-2">
            Use <code>sqlite3.Row</code> to access columns like a dictionary.
          </p>

          <pre className="mt-4 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`import sqlite3

with sqlite3.connect('app.db') as conn:
    conn.row_factory = sqlite3.Row  # dict-like rows
    cur = conn.cursor()
    try:
        cur.execute('UPDATE users SET name=? WHERE id=?', ('Alice', 1))
        cur.execute('UPDATE users SET name=? WHERE id=?', ('Bob', 2))
        conn.commit()
    except Exception:
        conn.rollback()
        raise`}
          </pre>

          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>
              Now you can do <code>row["email"]</code>.
            </li>
            <li>Transactions rollback automatically on error.</li>
          </ul>
        </section>

        {/* Indexes */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Creating Indexes (Important for Speed)
          </h2>

          <p className="mt-2">Indexes speed up searches for large datasets.</p>

          <pre className="mt-4 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`with sqlite3.connect('app.db') as conn:
    cur = conn.cursor()
    cur.execute('CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)')`}
          </pre>
        </section>

        {/* Joins */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Joins</h2>

          <p className="mt-2">SQLite supports all common SQL join types.</p>

          <pre className="mt-4 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`SELECT users.name, orders.amount
FROM users
JOIN orders ON users.id = orders.user_id
ORDER BY orders.amount DESC;`}
          </pre>
        </section>

        {/* Backup */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Backup Database
          </h2>

          <p className="mt-2">Use SQLite’s built-in backup 기능.</p>

          <pre className="mt-4 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`with sqlite3.connect('app.db') as source, \
     sqlite3.connect('backup.db') as backup:
    source.backup(backup)`}
          </pre>
        </section>

        {/* Tips */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Tips</h2>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Enable WAL mode for better write performance.</li>
            <li>
              Always use placeholders (<code>?</code>) to avoid injection.
            </li>
            <li>SQLite DB is just one file → easy to copy or sync.</li>
            <li>Perfect for small apps, CLIs, desktop tools, prototypes.</li>
            <li>For multi-user scale → use MySQL or PostgreSQL.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
