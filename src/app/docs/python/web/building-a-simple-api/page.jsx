import React from "react";

export default function BuildingSimpleAPI() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Building a Simple API</h1>
      <p>
        Build RESTful APIs quickly with Flask or FastAPI.
      </p>

      <h2>Flask API</h2>
      <pre><code>{`pip install flask`}</code></pre>
      <pre><code>{`from flask import Flask, jsonify, request
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
    app.run(debug=True)`}</code></pre>

      <h2>FastAPI</h2>
      <pre><code>{`pip install fastapi uvicorn`}</code></pre>
      <pre><code>{`from fastapi import FastAPI
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

# Run: uvicorn main:app --reload`}</code></pre>

      <h2>Tips</h2>
      <ul>
        <li>Use proper HTTP status codes (200, 201, 404, 500)</li>
        <li>Validate input data</li>
        <li>Add error handling</li>
      </ul>
    </div>
  );
}
