import React from "react";

export default function ConnectingPythonWithMySQL() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Connecting Python with MySQL
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Python can connect to MySQL using libraries like{" "}
        <code>mysql-connector-python</code>, <code>PyMySQL</code>, or via ORM
        tools such as <code>SQLAlchemy</code>. Below are simple and secure
        examples for connecting, querying, and working with MySQL databases.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* ---------------- QUICK EXAMPLE ---------------- */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Quick Example (PyMySQL)
          </h2>

          <p className="mt-2">
            Connect, execute a query, and fetch results using PyMySQL.
          </p>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]"></div>
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`import pymysql

conn = pymysql.connect(
    host='localhost',
    user='root',
    password='pwd',
    db='test'
)

cur = conn.cursor()
cur.execute('SELECT 1')
print(cur.fetchone())

conn.close()`}
              </pre>
            </div>
          </div>
        </section>

        {/* ---------------- INSTALL DRIVERS ---------------- */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Install MySQL Drivers
          </h2>

          <p className="mt-2">
            Use one of the following libraries to connect to MySQL:
          </p>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]"></div>
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`pip install pymysql
pip install mysql-connector-python`}
              </pre>
            </div>
          </div>
        </section>

        {/* ---------------- SAFE QUERIES ---------------- */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Safer Queries Using Parameters
          </h2>

          <p className="mt-2">
            Always use parameterized queries to avoid SQL Injection. Never
            concatenate user input directly into SQL statements.
          </p>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]"></div>
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`import pymysql

conn = pymysql.connect(
    host='localhost',
    user='root',
    password='pwd',
    db='test'
)

with conn:
    with conn.cursor() as cur:
        cur.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id INT PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(50)
            )
        """)

        # Insert safely using placeholders
        cur.execute(
            "INSERT INTO users (name) VALUES (%s)",
            ("Alice",)
        )

    conn.commit()`}
              </pre>
            </div>
          </div>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Never use string concatenation for SQL.</li>
            <li>
              Use <code>%s</code> placeholder for PyMySQL.
            </li>
            <li>
              Commit changes explicitly using <code>conn.commit()</code>.
            </li>
          </ul>
        </section>

        {/* ---------------- MYSQL CONNECTOR ---------------- */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Using mysql-connector-python (Official Driver)
          </h2>

          <p className="mt-2">
            <code>mysql-connector-python</code> is the official MySQL driver
            maintained by Oracle.
          </p>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]"></div>
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`import mysql.connector as mc

conn = mc.connect(
    host='localhost',
    user='root',
    password='pwd',
    database='test'
)

cur = conn.cursor()
cur.execute("SELECT VERSION()")
print(cur.fetchone())

cur.close()
conn.close()`}
              </pre>
            </div>
          </div>
        </section>

        {/* ---------------- TIPS ---------------- */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Tips & Best Practices
          </h2>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Always use parameterized queries for safety.</li>
            <li>Commit changes after INSERT/UPDATE operations.</li>
            <li>Use connection pooling for production workloads.</li>
            <li>
              Prefer <code>mysql-connector-python</code> when you need the
              official driver.
            </li>
            <li>
              For more advanced ORM features, use <code>SQLAlchemy</code>.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
