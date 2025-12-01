import React from "react";

export default function UsingSQLAlchemy() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Using SQLAlchemy</h1>
      <p>
        SQLAlchemy is a powerful ORM for Python. It supports both Core (SQL
        expressions) and ORM (declarative models). It works with multiple
        database backends.
      </p>

      <h2>Install</h2>
      <pre><code>{`pip install sqlalchemy`}</code></pre>

      <h2>Quick Example (ORM)</h2>
      <pre>
        <code>{`from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker

engine = create_engine('sqlite:///example.db', echo=False)
Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String(50))
    email = Column(String(120), unique=True)

Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# Create
session.add(User(name='Alice', email='a@example.com'))
session.commit()

# Read
users = session.query(User).order_by(User.id).all()
print([(u.id, u.name) for u in users])

# Update
u1 = session.query(User).filter_by(name='Alice').first()
u1.email = 'alice@example.com'
session.commit()

# Delete
session.delete(u1)
session.commit()`}</code>
      </pre>

      <h2>Switching Databases</h2>
      <pre>
        <code>{`# SQLite (file)
create_engine('sqlite:///example.db')

# MySQL (PyMySQL)
create_engine('mysql+pymysql://user:pwd@localhost:3306/dbname')

# PostgreSQL (psycopg)
create_engine('postgresql+psycopg://user:pwd@localhost:5432/dbname')`}</code>
      </pre>

      <h2>Notes</h2>
      <ul>
        <li>Use ORM for models/relations; use Core for raw, high‑performance SQL.</li>
        <li>Prefer sessions per request (web apps) and close them promptly.</li>
        <li>For schema migrations, pair with Alembic.</li>
      </ul>
    </div>
  );
}
