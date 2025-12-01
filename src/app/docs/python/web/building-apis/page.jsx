import React from "react";

export default function BuildingAPIsPage() {
  return (
    <div className="space-y-6">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">Building APIs</h1>

      <p className="text-slate-700 leading-relaxed">
        Python is widely used for building web APIs. Two popular choices are:
        <strong> Flask</strong>, a minimal micro-framework, and{" "}
        <strong>FastAPI</strong>, a modern, type-hint–driven framework known for
        speed and automatic documentation.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Concepts Intro */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            What is an API?
          </h2>
          <p className="mt-2">
            An API (Application Programming Interface) lets clients (web apps,
            mobile apps, other services) talk to your backend. Typically, you:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Expose endpoints like <code>GET /users</code>,{" "}
              <code>POST /login</code>.
            </li>
            <li>Receive JSON payloads, validate them, and perform logic.</li>
            <li>Return structured JSON responses with status codes.</li>
          </ul>
        </section>

        {/* Flask API Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Flask API</h2>
          <p className="mt-2">
            Flask is great for small to medium APIs where you want full control
            over structure and components. You manually handle routing, parsing,
            and validation (or use extensions).
          </p>
        </section>

        {/* Flask Install */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Install Flask
            </h3>
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

        {/* Flask API Example */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Example: Simple Flask API
            </h3>
          </div>
          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 text-sm font-mono leading-7 text-slate-800 w-full">
                  {`from flask import Flask, jsonify, request
app = Flask(__name__)

@app.get('/api/ping')
def ping():
    return jsonify({'pong': True})

@app.post('/api/echo')
def echo():
    data = request.get_json() or {}
    return jsonify({'you_sent': data})

if __name__ == '__main__':
    app.run()`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Flask Explanation */}
        <section>
          <p className="font-semibold text-[#4a0080]">What this API does:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <code>GET /api/ping</code> returns <code>{"{'pong': True}"}</code>{" "}
              to check if the API is alive (health/ping endpoint).
            </li>
            <li>
              <code>POST /api/echo</code> reads JSON from the request body and
              returns it under <code>you_sent</code>.
            </li>
            <li>
              <code>request.get_json()</code> parses JSON;{" "}
              <code>or &#123;&#125;</code> avoids <code>None</code>.
            </li>
          </ul>
        </section>

        {/* FastAPI Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">FastAPI</h2>
          <p className="mt-2">
            FastAPI is a modern, high-performance framework for building APIs
            with Python type hints. It automatically generates interactive API
            docs and performs data validation using Pydantic models.
          </p>
        </section>

        {/* FastAPI Install */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Install FastAPI & Uvicorn
            </h3>
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

        {/* FastAPI Example */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Example: FastAPI with Pydantic
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

class Item(BaseModel):
    name: str
    price: float

@app.get('/ping')
def ping():
    return {'pong': True}

@app.post('/items')
def create_item(item: Item):
    return item

# run: uvicorn app:app --reload`}
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
              <code>Item</code> is a Pydantic model with typed fields (
              <code>str</code>, <code>float</code>).
            </li>
            <li>
              <code>create_item</code> automatically:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>
                  Parses JSON into an <code>Item</code> instance.
                </li>
                <li>Validates types and required fields.</li>
                <li>Returns JSON back to the client.</li>
              </ul>
            </li>
            <li>
              FastAPI auto-generates docs:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>
                  <code>/docs</code> (Swagger UI)
                </li>
                <li>
                  <code>/redoc</code> (ReDoc UI)
                </li>
              </ul>
            </li>
            <li>
              <code>uvicorn app:app --reload</code> runs the app with hot
              reload.
            </li>
          </ul>
        </section>

        {/* Comparison / Notes */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Flask vs FastAPI for APIs
          </h2>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Flask:</strong> Simple, flexible, great for small APIs or
              when you want full control.
            </li>
            <li>
              <strong>FastAPI:</strong> Modern, type-hint–based, great for large
              APIs and teams who value validation & speed.
            </li>
          </ul>
        </section>

        {/* Notes / Best Practices */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Notes & Best Practices
          </h2>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Always return proper HTTP status codes (e.g., 200, 201, 400, 404,
              500).
            </li>
            <li>
              Use structured error handlers (e.g., custom error responses for
              validation errors).
            </li>
            <li>
              Add authentication (JWT, OAuth2, sessions) for protected
              endpoints.
            </li>
            <li>
              Implement pagination for large lists (e.g.,{" "}
              <code>?page=1&amp;limit=20</code>).
            </li>
            <li>Add rate limiting to protect against abuse.</li>
            <li>
              Write unit tests for endpoints using tools like{" "}
              <code>pytest</code>.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
