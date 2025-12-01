import React from "react";

export default function BuildingAPIsPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Building APIs</h1>
      <p>Two popular choices: Flask (micro) and FastAPI (type‑hints, speed).</p>

      <h2>Flask API</h2>
      <pre><code>{`pip install flask`}</code></pre>
      <pre><code>{`from flask import Flask, jsonify, request
app = Flask(__name__)

@app.get('/api/ping')
def ping():
    return jsonify({'pong': True})

@app.post('/api/echo')
def echo():
    data = request.get_json() or {}
    return jsonify({'you_sent': data})

if __name__ == '__main__':
    app.run()`}</code></pre>

      <h2>FastAPI</h2>
      <pre><code>{`pip install fastapi uvicorn`}</code></pre>
      <pre><code>{`from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float

@app.get('/ping')
def ping():
    return {'pong': True}

@app.post('/items')
def create_item(item: Item):
    return item

# run: uvicorn app:app --reload`}</code></pre>

      <h2>Notes</h2>
      <ul>
        <li>Use proper status codes and error handlers.</li>
        <li>Add auth (e.g., JWT), pagination, and rate limiting as needed.</li>
      </ul>
    </div>
  );
}
