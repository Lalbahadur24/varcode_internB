import React from "react";

export default function BuildingSimpleAPI() {
  return (
    <div className="space-y-6">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Building a Simple API
      </h1>

      <p className="text-slate-700 leading-relaxed">
        RESTful APIs allow clients (web, mobile, other services) to communicate
        with your backend over HTTP using JSON. Python makes it easy to build
        APIs quickly with frameworks like Flask and FastAPI.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Concept Intro */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            REST API Basics
          </h2>
          <p className="mt-2">
            A simple user API usually supports operations like:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <strong>GET /api/users</strong> – list users
            </li>
            <li>
              <strong>POST /api/users</strong> – create a user
            </li>
            <li>
              <strong>GET /api/users/&lt;id&gt;</strong> – get a specific user
              (optional)
            </li>
            <li>
              <strong>DELETE /api/users/&lt;id&gt;</strong> – delete a user
              (optional)
            </li>
          </ul>
          <p className="mt-2">
            Let’s build the core list + create operations with Flask and
            FastAPI.
          </p>
        </section>

        {/* Flask API Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Flask API</h2>
          <p className="mt-2">
            Flask provides a simple way to define routes and return JSON
            responses using <code>jsonify</code>. We’ll build an in-memory user
            list API.
          </p>
        </section>

        {/* Flask Install */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Install</h3>
          </div>
          <div className="px-6 pb-6">
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 text-sm font-mono leading-7 text-slate-800 w-full">
                  {`pip install flask`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Flask Code Example */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Example: Simple Flask Users API
            </h3>
          </div>
          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 text-sm font-mono leading-7 text-slate-800 w-full">
                  {`from flask import Flask, jsonify, request
app = Flask(__name__)

users = [{'id': 1, 'name': 'Alice'}]

@app.get('/api/users')
def get_users():
    return jsonify(users)

@app.post('/api/users')
def create_user():
    data = request.get_json()
    users.append(data)
    return jsonify(data), 201

if __name__ == '__main__':
    app.run(debug=True)`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Flask Explanation */}
        <section>
          <p className="font-semibold text-[#4a0080]">What happens here:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <code>users</code> is an in-memory list storing user dictionaries.
            </li>
            <li>
              <code>GET /api/users</code> returns all users as JSON.
            </li>
            <li>
              <code>POST /api/users</code> reads JSON from the body and appends
              it to <code>users</code>.
            </li>
            <li>
              Response code <code>201</code> indicates “Created”.
            </li>
          </ul>
          <p className="mt-2 text-sm text-slate-500">
            Note: In a real app, you’d generate IDs on the server and validate
            input instead of trusting the client.
          </p>
        </section>

        {/* FastAPI Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">FastAPI</h2>
          <p className="mt-2">
            FastAPI uses type hints and Pydantic models for automatic
            validation, documentation, and parsing. It’s great for scalable,
            production APIs.
          </p>
        </section>

        {/* FastAPI Install */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Install</h3>
          </div>
          <div className="px-6 pb-6">
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 text-sm font-mono leading-7 text-slate-800 w-full">
                  {`pip install fastapi uvicorn`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* FastAPI Code Example */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Example: Simple FastAPI Users API
            </h3>
          </div>
          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 text-sm font-mono leading-7 text-slate-800 w-full">
                  {`from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class User(BaseModel):
    id: int
    name: str

users = [User(id=1, name='Alice')]

@app.get('/api/users')
def get_users():
    return users

@app.post('/api/users')
def create_user(user: User):
    users.append(user)
    return user

# Run: uvicorn main:app --reload`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* FastAPI Explanation */}
        <section>
          <p className="font-semibold text-[#4a0080]">
            Key FastAPI features in this example:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <code>User</code> is a Pydantic model – FastAPI validates incoming
              JSON against <code>id: int</code> and <code>name: str</code>.
            </li>
            <li>
              <code>create_user(user: User)</code> automatically receives a
              parsed <code>User</code> instance, not raw JSON.
            </li>
            <li>
              Returning <code>users</code> or <code>user</code> gives JSON
              automatically.
            </li>
            <li>
              You get auto docs at <code>/docs</code> and <code>/redoc</code>.
            </li>
          </ul>
        </section>

        {/* Quick Comparison */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Flask vs FastAPI (for Simple APIs)
          </h2>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Flask</strong>: ultra-simple, good for small services or
              when you want full control.
            </li>
            <li>
              <strong>FastAPI</strong>: better defaults for validation, typing,
              and documentation.
            </li>
            <li>
              For professional APIs, you typically add:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Authentication (JWT, OAuth2)</li>
                <li>Database integration (SQLAlchemy, ORM, etc.)</li>
                <li>Error handling and logging</li>
                <li>Pagination for large lists</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Tips Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Tips</h2>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Use proper HTTP status codes:
              <span className="block text-sm text-slate-600 mt-1">
                <code>200</code> OK, <code>201</code> Created, <code>400</code>{" "}
                Bad Request,
                <code>404</code> Not Found, <code>500</code> Server Error
              </span>
            </li>
            <li>
              Always validate input data (types, required fields, ranges).
            </li>
            <li>Handle errors gracefully and return helpful error JSON.</li>
            <li>
              Do not store data only in memory for real apps — use a database.
            </li>
            <li>Add tests to verify each endpoint’s behavior.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
