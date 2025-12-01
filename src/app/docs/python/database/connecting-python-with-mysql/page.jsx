import React from "react";

export default function ConnectingPythonWithMySQL() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Connecting Python with MySQL</h1>
      <p>
        Use connectors like <code>mysql-connector-python</code> or
        <code>pymysql</code>. For ORM usage, SQLAlchemy provides a unified
        interface.
      </p>

      <h2>Quick example (pymysql)</h2>
      <pre>
        <code>{`import pymysql
conn = pymysql.connect(host='localhost', user='root', password='pwd', db='test')
cur = conn.cursor()
cur.execute('SELECT 1')
print(cur.fetchone())
conn.close()`}</code>
      </pre>
      <section>
        <h2>Install Drivers</h2>
        <pre><code>{`pip install pymysql
pip install mysql-connector-python`}</code></pre>
      </section>

      <section>
        <h2>Safer Queries with Parameters</h2>
        <pre><code>{`import pymysql
conn = pymysql.connect(host='localhost', user='root', password='pwd', db='test')
with conn:
    with conn.cursor() as cur:
        cur.execute("CREATE TABLE IF NOT EXISTS users(id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(50))")
        cur.execute("INSERT INTO users(name) VALUES (%s)", ("Alice",))
    conn.commit()`}</code></pre>
      </section>

      <section>
        <h2>mysql-connector-python</h2>
        <pre><code>{`import mysql.connector as mc
conn = mc.connect(host='localhost', user='root', password='pwd', database='test')
cur = conn.cursor()
cur.execute("SELECT VERSION()")
print(cur.fetchone())
cur.close(); conn.close()`}</code></pre>
      </section>

      <section>
        <h2>Tips</h2>
        <ul>
          <li>Use parameterized queries to prevent SQL injection</li>
          <li>Commit transactions explicitly</li>
          <li>Use connection pooling in production</li>
        </ul>
      </section>
    </div>
  );
}
