import React from "react";

export default function RoutingPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Routing</h1>
      <p>
        Routing maps URL paths to handler functions (views).
      </p>

      <h2>Flask Routing</h2>
      <pre><code>{`from flask import Flask
app = Flask(__name__)

# Static route
@app.get('/')
def home():
    return 'Home Page'

# Dynamic route
@app.get('/user/<int:user_id>')
def user_profile(user_id):
    return f'User {user_id}'

# Multiple methods
@app.route('/submit', methods=['GET', 'POST'])
def submit():
    if request.method == 'POST':
        return 'Submitted'
    return 'Form'`}</code></pre>

      <h2>Django Routing</h2>
      <pre><code>{`# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('user/<int:user_id>/', views.user_profile, name='profile'),
    path('about/', views.about, name='about'),
]`}</code></pre>
      <pre><code>{`# views.py
from django.http import HttpResponse

def home(request):
    return HttpResponse('Home Page')

def user_profile(request, user_id):
    return HttpResponse(f'User {user_id}')`}</code></pre>

      <h2>Tips</h2>
      <ul>
        <li>Use descriptive route names</li>
        <li>Keep URLs RESTful (<code>/users/123</code> not <code>/getUser?id=123</code>)</li>
        <li>Use URL parameters for dynamic content</li>
      </ul>
    </div>
  );
}
