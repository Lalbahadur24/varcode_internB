import React from "react";

export default function UsingSQLAlchemy() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Using SQLAlchemy
      </h1>

      <p className="text-slate-700 leading-relaxed">
        SQLAlchemy is a powerful and flexible ORM for Python. It supports both{" "}
        <strong>Core</strong> (SQL expression language) and <strong>ORM</strong>{" "}
        (declarative models) and works with SQLite, MySQL, PostgreSQL and many
        other databases.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Install */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Install</h2>

          <div className="mt-4">
            <pre className="border border-gray-200 bg-white rounded-lg p-4 text-sm font-mono leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
              {`pip install sqlalchemy`}
            </pre>
          </div>
        </section>

        {/* ORM Quick Example */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Quick Example (ORM)
          </h2>

          <p className="mt-2">
            A minimal example showing how to define a model, create the table,
            and perform basic CRUD operations.
          </p>

          <div className="mt-4">
            <pre className="border border-gray-200 bg-white rounded-lg p-4 text-sm font-mono leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
              {`from sqlalchemy import create_engine, Column, Integer, String
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
session.commit()`}
            </pre>
          </div>
        </section>

        {/* Relationships */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            One-to-Many Relationship
          </h2>

          <p className="mt-2">
            SQLAlchemy ORM makes it easy to model relations between tables.
          </p>

          <div className="mt-4">
            <pre className="border border-gray-200 bg-white rounded-lg p-4 text-sm font-mono leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
              {`from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class Post(Base):
    __tablename__ = 'posts'
    id = Column(Integer, primary_key=True)
    title = Column(String(100))
    user_id = Column(Integer, ForeignKey('users.id'))

    user = relationship("User", backref="posts")`}
            </pre>
          </div>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <code>relationship()</code> links models at the ORM level.
            </li>
            <li>
              <code>backref="posts"</code> allows <code>user.posts</code>{" "}
              access.
            </li>
          </ul>
        </section>

        {/* Query Patterns */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Useful Query Patterns
          </h2>

          <div className="mt-4">
            <pre className="border border-gray-200 bg-white rounded-lg p-4 text-sm font-mono leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
              {`# Filter with comparison
session.query(User).filter(User.id >= 10).all()

# LIKE search
session.query(User).filter(User.name.like('%ali%')).all()

# Count
session.query(User).count()

# Ordering
session.query(User).order_by(User.name.desc()).all()

# Pagination
session.query(User).limit(10).offset(20).all()`}
            </pre>
          </div>
        </section>

        {/* Switching Databases */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Switching Databases
          </h2>

          <p className="mt-2">
            SQLAlchemy works with almost every major SQL database. Just change
            the connection URL.
          </p>

          <div className="mt-4">
            <pre className="border border-gray-200 bg-white rounded-lg p-4 text-sm font-mono leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
              {`# SQLite (file)
create_engine('sqlite:///example.db')

# MySQL (PyMySQL)
create_engine('mysql+pymysql://user:pwd@localhost:3306/dbname')

# PostgreSQL (psycopg)
create_engine('postgresql+psycopg://user:pwd@localhost:5432/dbname')`}
            </pre>
          </div>
        </section>

        {/* Alembic */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Migrations with Alembic
          </h2>

          <p className="mt-2">
            Alembic is used with SQLAlchemy to manage schema migrations safely
            over time.
          </p>

          <div className="mt-4">
            <pre className="border border-gray-200 bg-white rounded-lg p-4 text-sm font-mono leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
              {`pip install alembic
alembic init migrations

# Edit alembic.ini → add DB URL
alembic revision --autogenerate -m "create users"
alembic upgrade head`}
            </pre>
          </div>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Never manually drop/change tables in production.</li>
            <li>Use Alembic to generate and apply schema changes.</li>
          </ul>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Best Practices
          </h2>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Use short-lived sessions (e.g., per request in web apps).</li>
            <li>
              Use ORM for domain logic, Core for complex performance queries.
            </li>
            <li>Use environment variables for database URLs.</li>
            <li>Pair SQLAlchemy with Alembic for migrations.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
