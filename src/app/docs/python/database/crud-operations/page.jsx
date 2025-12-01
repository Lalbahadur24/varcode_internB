import React from "react";

export default function CRUDOperations() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        CRUD Operations
      </h1>

      <p className="text-slate-700 leading-relaxed">
        CRUD = <strong>Create</strong>, <strong>Read</strong>,{" "}
        <strong>Update</strong>, <strong>Delete</strong>. In SQL, these map to:
        <code className="px-2">INSERT</code>,
        <code className="px-2">SELECT</code>,
        <code className="px-2">UPDATE</code>,
        <code className="px-2">DELETE</code>.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* SQLite CRUD Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            CRUD Patterns (SQLite)
          </h2>

          <div className="mt-4">
            <pre className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
              {`import sqlite3

DB = 'example.db'

def create_schema():
    with sqlite3.connect(DB) as conn:
        cur = conn.cursor()
        cur.execute('''
            CREATE TABLE IF NOT EXISTS users(
                id INTEGER PRIMARY KEY,
                name TEXT,
                age INTEGER,
                active INTEGER DEFAULT 1
            )
        ''')
        conn.commit()

def create_user(name, age):
    with sqlite3.connect(DB) as conn:
        cur = conn.cursor()
        cur.execute(
            'INSERT INTO users(name, age) VALUES(?, ?)',
            (name, age)
        )
        conn.commit()

def read_users(min_age=0, limit=10, offset=0):
    with sqlite3.connect(DB) as conn:
        cur = conn.cursor()
        cur.execute(
            'SELECT id, name, age FROM users WHERE age >= ? AND active=1 ORDER BY id LIMIT ? OFFSET ?',
            (min_age, limit, offset)
        )
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
        conn.commit()`}
            </pre>
          </div>
        </section>

        {/* Soft Delete */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Soft Delete & Restore (Recommended)
          </h2>

          <p className="mt-2">
            Instead of permanently deleting records, mark them inactive.
          </p>

          <div className="mt-4">
            <pre className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
              {`def soft_delete(user_id):
    with sqlite3.connect(DB) as conn:
        cur = conn.cursor()
        cur.execute('UPDATE users SET active=0 WHERE id=?', (user_id,))
        conn.commit()

def restore_user(user_id):
    with sqlite3.connect(DB) as conn:
        cur = conn.cursor()
        cur.execute('UPDATE users SET active=1 WHERE id=?', (user_id,))
        conn.commit()`}
            </pre>
          </div>
        </section>

        {/* Bulk Insert */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Bulk Insert</h2>

          <p className="mt-2">
            Use <code>executemany()</code> to insert multiple rows efficiently.
          </p>

          <div className="mt-4">
            <pre className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
              {`def bulk_insert(users_list):
    # users_list = [('Alice', 25), ('Bob', 30), ('Charlie', 22)]
    with sqlite3.connect(DB) as conn:
        cur = conn.cursor()
        cur.executemany(
            'INSERT INTO users(name, age) VALUES(?, ?)',
            users_list
        )
        conn.commit()`}
            </pre>
          </div>
        </section>

        {/* Search, Filter, Ordering */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Searching, Filtering, Ordering
          </h2>

          <p className="mt-2">Basic search queries:</p>

          <div className="mt-4">
            <pre className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
              {`def search_users(keyword):
    with sqlite3.connect(DB) as conn:
        cur = conn.cursor()
        cur.execute(
            'SELECT id, name, age FROM users WHERE name LIKE ? AND active=1',
            (f"%{keyword}%",)
        )
        return cur.fetchall()`}
            </pre>
          </div>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Use <code>LIKE ?</code> for wildcard searches.
            </li>
            <li>
              Use <code>ORDER BY</code> for sorting.
            </li>
            <li>
              Use <code>LIMIT/OFFSET</code> for pagination.
            </li>
          </ul>
        </section>

        {/* Transactions */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Transactions & Rollback
          </h2>

          <p className="mt-2">Transactions ensure atomic operations.</p>

          <div className="mt-4">
            <pre className="border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
              {`import sqlite3

try:
    with sqlite3.connect(DB) as conn:
        cur = conn.cursor()

        cur.execute('UPDATE users SET age = age + 1')

        # force duplicate primary key error
        cur.execute('INSERT INTO users(id, name) VALUES(1, "dup-key")')

        conn.commit()

except Exception as e:
    print("Rolled back due to:", e)`}
            </pre>
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Best Practices
          </h2>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Always use parameterized queries → Prevent SQL Injection.</li>
            <li>Never build SQL using string concatenation.</li>
            <li>Use soft delete instead of DELETE in production DBs.</li>
            <li>Use transactions for multi-step operations.</li>
            <li>
              Use <code>LIMIT/OFFSET</code> for scalable SELECT queries.
            </li>
            <li>Index frequently queried columns.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
