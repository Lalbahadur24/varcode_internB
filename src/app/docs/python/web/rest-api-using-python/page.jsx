import React from "react";

export default function RestApiUsingPython() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>REST API using Python</h1>
      <p>
        Build production-ready RESTful APIs following standard conventions.
      </p>

      <h2>REST Principles</h2>
      <ul>
        <li><strong>Resources:</strong> Use nouns (<code>/users</code>, not <code>/getUsers</code>)</li>
        <li><strong>HTTP Methods:</strong> GET (read), POST (create), PUT (update), DELETE (delete)</li>
        <li><strong>Status Codes:</strong> 200 OK, 201 Created, 404 Not Found, 500 Error</li>
        <li><strong>Stateless:</strong> Each request contains all needed information</li>
      </ul>

      <h2>FastAPI (Modern & Fast)</h2>
      <pre><code>{`pip install fastapi uvicorn`}</code></pre>
      <pre><code>{`from fastapi import FastAPI, HTTPException
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
# Docs: http://localhost:8000/docs`}</code></pre>

      <h2>Django REST Framework</h2>
      <pre><code>{`pip install djangorestframework`}</code></pre>
      <pre><code>{`# serializers.py
from rest_framework import serializers

class ItemSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    price = serializers.FloatField()

# views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def list_items(request):
    items = [{'id': 1, 'name': 'Book', 'price': 9.99}]
    return Response(items)`}</code></pre>

      <h2>Best Practices</h2>
      <ul>
        <li>Version your API (<code>/api/v1/users</code>)</li>
        <li>Use pagination for large lists</li>
        <li>Add authentication (JWT, OAuth)</li>
        <li>Rate limit requests</li>
        <li>Document with OpenAPI/Swagger</li>
      </ul>
    </div>
  );
}
