import React from "react";

export default function RestApiUsingPython() {
  return (
    <div className="space-y-6">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        REST API using Python
      </h1>

      <p className="text-slate-700 leading-relaxed">
        REST (Representational State Transfer) is a widely used architectural
        style for building HTTP APIs. In Python, you can build production-ready
        RESTful APIs using modern frameworks like FastAPI or Django REST
        Framework (DRF), while following standard conventions and best
        practices.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* REST Principles */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            REST Principles
          </h2>
          <p className="mt-2">
            A good REST API follows consistent patterns for URLs, methods, and
            status codes.
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Resources:</strong> Use nouns for endpoints, e.g.{" "}
              <code>/users</code>, <code>/orders</code> — not{" "}
              <code>/getUsers</code>.
            </li>
            <li>
              <strong>HTTP Methods:</strong>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>
                  <code>GET</code> — read data
                </li>
                <li>
                  <code>POST</code> — create data
                </li>
                <li>
                  <code>PUT/PATCH</code> — update data
                </li>
                <li>
                  <code>DELETE</code> — delete data
                </li>
              </ul>
            </li>
            <li>
              <strong>Status Codes:</strong>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>
                  <code>200 OK</code> — success
                </li>
                <li>
                  <code>201 Created</code> — resource created
                </li>
                <li>
                  <code>400 Bad Request</code> — invalid input
                </li>
                <li>
                  <code>404 Not Found</code> — resource missing
                </li>
                <li>
                  <code>500 Internal Server Error</code> — server failure
                </li>
              </ul>
            </li>
            <li>
              <strong>Stateless:</strong> Each request contains all needed
              information. Server does not keep client session between requests.
            </li>
          </ul>
        </section>

        {/* FastAPI Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            FastAPI (Modern & Fast)
          </h2>
          <p className="mt-2">
            FastAPI is a modern framework for building REST APIs with Python
            type hints. It automatically generates OpenAPI documentation and
            performs validation using Pydantic models.
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
              Example: Basic REST API with FastAPI
            </h3>
          </div>
          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 text-sm font-mono leading-7 text-slate-800 w-full">
                  {`from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    id: int
    name: str
    price: float

items = [Item(id=1, name='Book', price=9.99)]

@app.get('/api/items')
def list_items():
    return items

@app.get('/api/items/{item_id}')
def get_item(item_id: int):
    item = next((i for i in items if i.id == item_id), None)
    if not item:
        raise HTTPException(status_code=404, detail='Not found')
    return item

@app.post('/api/items', status_code=201)
def create_item(item: Item):
    items.append(item)
    return item

# Run: uvicorn main:app --reload
# Docs: http://localhost:8000/docs`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* FastAPI Explanation */}
        <section>
          <p className="font-semibold text-[#4a0080]">
            Highlights in this example:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <code>Item</code> is a Pydantic model — it validates incoming JSON
              and generates schema.
            </li>
            <li>
              <code>GET /api/items</code> returns a list of items.
            </li>
            <li>
              <code>GET /api/items/{"{item_id}"}</code> fetches a single item or
              returns 404.
            </li>
            <li>
              <code>POST /api/items</code> creates a new item and returns it
              with status <code>201 Created</code>.
            </li>
            <li>
              FastAPI automatically exposes interactive docs at{" "}
              <code>/docs</code> (Swagger UI).
            </li>
          </ul>
        </section>

        {/* Django REST Framework Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Django REST Framework (DRF)
          </h2>
          <p className="mt-2">
            Django REST Framework is a powerful toolkit for building Web APIs on
            top of Django. It provides serializers, viewsets, routers,
            authentication, and browsable API pages.
          </p>
        </section>

        {/* DRF Install */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Install DRF
            </h3>
          </div>
          <div className="px-6 pb-6">
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 text-sm font-mono leading-7 text-slate-800 w-full">
                  {`pip install djangorestframework`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* DRF Example */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Example: Simple API with DRF
            </h3>
          </div>
          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden mb-4">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 text-sm font-mono leading-7 text-slate-800 w-full">
                  {`# serializers.py
from rest_framework import serializers

class ItemSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    price = serializers.FloatField()`}
                </pre>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 text-sm font-mono leading-7 text-slate-800 w-full">
                  {`# views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def list_items(request):
    items = [{'id': 1, 'name': 'Book', 'price': 9.99}]
    return Response(items)`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* DRF Explanation */}
        <section>
          <p className="font-semibold text-[#4a0080]">What DRF gives you:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              Serializer classes to validate and serialize/deserialize data.
            </li>
            <li>
              <code>@api_view</code> decorator to turn Django views into API
              endpoints.
            </li>
            <li>
              <code>Response</code> object that handles content negotiation
              (JSON, etc.).
            </li>
            <li>Easy integration with Django’s auth, permissions, and ORM.</li>
          </ul>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Best Practices for REST APIs
          </h2>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Version your API:</strong> <code>/api/v1/users</code>,{" "}
              <code>/api/v2/users</code> etc.
            </li>
            <li>
              <strong>Use pagination:</strong> Do not return thousands of
              records at once.
            </li>
            <li>
              <strong>Add authentication:</strong> JWT, OAuth2, API keys, or
              session-based auth.
            </li>
            <li>
              <strong>Rate limit requests:</strong> Avoid abuse and DDoS.
            </li>
            <li>
              <strong>Document your API:</strong> OpenAPI/Swagger or ReDoc.
            </li>
            <li>
              <strong>Validate inputs:</strong> Never trust client-side data,
              always validate on server.
            </li>
            <li>
              <strong>Log errors & performance:</strong> Use logging and
              monitoring tools.
            </li>
          </ul>
        </section>

        {/* Summary */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>
          <p className="mt-2">
            Python offers powerful tools for building RESTful APIs. FastAPI
            excels at modern, type-hinted APIs with automatic docs, while Django
            REST Framework shines when you already use Django and need rich
            integration with its ORM and authentication. Whichever you choose,
            following REST principles and best practices will help you build
            clean, maintainable backends.
          </p>
        </section>
      </div>
    </div>
  );
}
