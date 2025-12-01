import React from "react";

export default function CRUDOperations() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>CRUD Operations</h1>
      <p>
        CRUD = Create, Read, Update, Delete. In SQL these map to
        <code>INSERT</code>, <code>SELECT</code>, <code>UPDATE</code>, and
        <code>DELETE</code>.
      </p>

      <h2>Patterns (SQLite)</h2>
      <pre>
        <code>{`import sqlite3

DB = 'example.db'

def create_schema():
    with sqlite3.connect(DB) as conn:
        cur = conn.cursor()
        cur.execute('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, name TEXT, age INTEGER)')
        conn.commit()

def create_user(name, age):
    with sqlite3.connect(DB) as conn:
        cur = conn.cursor()
        cur.execute('INSERT INTO users(name, age) VALUES(?, ?)', (name, age))
        conn.commit()

def read_users(min_age=0, limit=10, offset=0):
    with sqlite3.connect(DB) as conn:
        cur = conn.cursor()
        cur.execute('SELECT id, name, age FROM users WHERE age >= ? ORDER BY id LIMIT ? OFFSET ?', (min_age, limit, offset))
        return cur.fetchall()

def update_user(user_id, name=None, age=None):
    with sqlite3.connect(DB) as conn:
        cur = conn.cursor()
        if name is not None:
            cur.execute('UPDATE users SET name=? WHERE id=?', (name, user_id))
        if age is not None:
            cur.execute('UPDATE users SET age=? WHERE id=?', (age, user_id))
        conn.commit()

def delete_user(user_id):
    with sqlite3.connect(DB) as conn:
        cur = conn.cursor()
        cur.execute('DELETE FROM users WHERE id=?', (user_id,))
        conn.commit()`}</code>
      </pre>

      <h2>Transactions & Errors</h2>
      <pre>
        <code>{`import sqlite3

try:
    with sqlite3.connect(DB) as conn:
        cur = conn.cursor()
        cur.execute('UPDATE users SET age = age + 1')
        # force error to see rollback
        cur.execute('INSERT INTO users(id, name) VALUES(1, "dup-key")')
        conn.commit()
except Exception as e:
    print('Rolled back due to:', e)`}</code>
      </pre>

      <h2>Notes</h2>
      <ul>
        <li>Always parameterize inputs to avoid SQL injection.</li>
        <li>Use pagination with <code>LIMIT/OFFSET</code> for large result sets.</li>
        <li>Wrap multi-step changes in transactions; rollback on errors.</li>
      </ul>
    </div>
  );
}
