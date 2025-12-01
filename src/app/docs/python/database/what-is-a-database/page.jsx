import React from "react";

export default function WhatIsADatabase() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>What is a Database?</h1>
      <p>
        A database is an organized collection of structured data stored electronically
        for efficient retrieval, update, and management.
      </p>

      <h2>Types of Databases</h2>
      <h3>Relational (SQL)</h3>
      <ul>
        <li><strong>MySQL, PostgreSQL, SQLite</strong></li>
        <li>Data stored in tables with rows and columns</li>
        <li>Uses SQL for queries</li>
        <li>ACID transactions</li>
        <li>Best for structured data with relationships</li>
      </ul>

      <h3>NoSQL</h3>
      <ul>
        <li><strong>MongoDB (document), Redis (key-value), Cassandra (wide-column)</strong></li>
        <li>Flexible schemas</li>
        <li>Horizontal scaling</li>
        <li>Best for unstructured/semi-structured data</li>
      </ul>

      <h2>Why Use Databases?</h2>
      <ul>
        <li>Persistent storage (survives restarts)</li>
        <li>Concurrent access (multiple users)</li>
        <li>Data integrity (constraints, validation)</li>
        <li>Query optimization</li>
        <li>Backup and recovery</li>
      </ul>
    </div>
  );
}
