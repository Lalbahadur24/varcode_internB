import React from "react";

export default function UsingSQLite() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Using SQLite</h1>
      <p>
        SQLite is a lightweight, file-based database included with Python via
        the <code>sqlite3</code> module. Great for small apps, local storage,
        tests, and quick prototypes.
      </p>

      <h2>Connect and Setup</h2>
      <pre>
        <code>{`import sqlite3

# Use context managers to auto-close connections
with sqlite3.connect('app.db') as conn:
    cur = conn.cursor()
    cur.execute('PRAGMA journal_mode=WAL')  # better concurrency
    cur.execute('''
        CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()`}</code>
      </pre>

      <h2>CRUD (Parameterized)</h2>
      <pre>
        <code>{`import sqlite3

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
        conn.commit()`}</code>
      </pre>

      <h2>Transactions & Row Factory</h2>
      <pre>
        <code>{`import sqlite3

with sqlite3.connect('app.db') as conn:
    conn.row_factory = sqlite3.Row  # dict-like rows
    cur = conn.cursor()
    try:
        cur.execute('UPDATE users SET name=? WHERE id=?', ('Alice', 1))
        cur.execute('UPDATE users SET name=? WHERE id=?', ('Bob', 2))
        conn.commit()
    except Exception:
        conn.rollback()
        raise`}</code>
      </pre>

      <h2>Tips</h2>
      <ul>
        <li>Always use placeholders (<code>?</code>) to prevent SQL injection.</li>
        <li>Keep one connection per thread; use WAL for better concurrency.</li>
        <li>For simple apps, SQLite is ideal; for multi-user servers, consider MySQL/Postgres.</li>
      </ul>
    </div>
  );
}
