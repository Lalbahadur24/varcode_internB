import React from "react";

export default function WhatIsADatabase() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        What is a Database?
      </h1>

      <p className="text-slate-700 leading-relaxed">
        A <strong>database</strong> is an organized collection of structured
        information stored electronically so it can be efficiently
        <strong> stored, retrieved, updated, and managed</strong>. Databases
        power almost all modern applications—from websites and e-commerce
        platforms to banking systems and mobile apps.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Types */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Types of Databases
          </h2>

          {/* Relational DBs */}
          <h3 className="text-xl font-semibold mt-4 text-[#4a0080]">
            Relational Databases (SQL)
          </h3>
          <p className="mt-2">Data is stored in tables (rows + columns).</p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              Examples:{" "}
              <strong>MySQL, PostgreSQL, SQLite, Oracle, SQL Server</strong>
            </li>
            <li>Use SQL (Structured Query Language) for querying</li>
            <li>
              Ensure ACID properties (Atomicity, Consistency, Isolation,
              Durability)
            </li>
            <li>Great for structured data with relationships</li>
            <li>Support joins, indexing, transactions, constraints</li>
          </ul>

          {/* NoSQL */}
          <h3 className="text-xl font-semibold mt-6 text-[#4a0080]">
            NoSQL Databases
          </h3>
          <p className="mt-2">
            Designed for flexible, high-scalability use cases.
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              Types:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>
                  <strong>Document:</strong> MongoDB, CouchDB
                </li>
                <li>
                  <strong>Key-Value:</strong> Redis, DynamoDB
                </li>
                <li>
                  <strong>Wide-Column:</strong> Cassandra, HBase
                </li>
                <li>
                  <strong>Graph:</strong> Neo4j, Amazon Neptune
                </li>
              </ul>
            </li>
            <li>Flexible schemas</li>
            <li>Horizontally scalable across clusters</li>
            <li>Ideal for unstructured or rapidly changing data</li>
          </ul>
        </section>

        {/* Why use databases */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Why Use Databases?
          </h2>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <strong>Persistent storage</strong> — Data remains even after
              program ends
            </li>
            <li>
              <strong>Concurrent access</strong> — Multiple users or apps
              read/write safely
            </li>
            <li>
              <strong>Integrity & Validation</strong> — Constraints ensure
              correct data
            </li>
            <li>
              <strong>Powerful queries</strong> — Find, filter, aggregate large
              datasets
            </li>
            <li>
              <strong>Backup & Recovery</strong> — Prevent data loss
            </li>
            <li>
              <strong>Security</strong> — Permissions, roles, authentication
            </li>
          </ul>
        </section>

        {/* When to use what */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            When to Use SQL vs NoSQL?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* SQL */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm">
              <h3 className="text-xl font-semibold text-[#4a0080] mb-2">
                Choose SQL When…
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Data has a clear structure and relations</li>
                <li>You need transactions (banking, orders)</li>
                <li>Complex queries and joins are required</li>
                <li>Strong consistency is important</li>
              </ul>
            </div>

            {/* NoSQL */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm">
              <h3 className="text-xl font-semibold text-[#4a0080] mb-2">
                Choose NoSQL When…
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You handle unstructured or changing data</li>
                <li>Need massive horizontal scaling</li>
                <li>Write-heavy applications</li>
                <li>JSON-like documents fit better</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
