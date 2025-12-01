import React from "react";

export default function RoutingPage() {
  return (
    <div className="space-y-6">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">Routing</h1>

      <p className="text-slate-700 leading-relaxed">
        Routing maps URL paths to handler functions (views). It decides which
        function should run when a user visits a specific URL. Both Flask and
        Django provide clean ways to define static and dynamic routes.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Concept Intro */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            What is Routing?
          </h2>
          <p className="mt-2">
            When a request hits your server (e.g., <code>/</code> or{" "}
            <code>/user/42</code>), the router decides which view function
            should handle it. Routing:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Connects URLs to Python functions.</li>
            <li>Supports dynamic segments like IDs, slugs, etc.</li>
            <li>Can restrict HTTP methods (GET, POST, etc.).</li>
          </ul>
        </section>

        {/* Flask Routing Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Flask Routing
          </h2>
          <p className="mt-2">
            In Flask, you define routes using decorators on top of view
            functions. Routes can be static, dynamic, or handle multiple HTTP
            methods.
          </p>
        </section>

        {/* Flask Code Block */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Example: Flask Routes
            </h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm font-mono leading-7 text-slate-800">
                  {`from flask import Flask, request
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
    return 'Form'`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Flask Explanation */}
        <section>
          <p className="font-semibold text-[#4a0080]">Key points (Flask):</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <code>@app.get('/')</code> is shorthand for{" "}
              <code>@app.route('/', methods=['GET'])</code>.
            </li>
            <li>
              <code>&lt;int:user_id&gt;</code> captures a URL parameter and
              converts it to <code>int</code>.
            </li>
            <li>
              <code>methods=['GET', 'POST']</code> allows the same route to
              handle multiple HTTP methods.
            </li>
          </ul>
        </section>

        {/* Django Routing Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Django Routing
          </h2>
          <p className="mt-2">
            In Django, routing is configured in <code>urls.py</code> files using{" "}
            <code>path()</code> (or <code>re_path()</code> for regex). Each
            pattern maps to a view function or class-based view.
          </p>
        </section>

        {/* Django Code Block: urls.py */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Example: Django URLs
            </h3>
          </div>

          <div className="px-6 pb-4">
            <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden mb-4">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm font-mono leading-7 text-slate-800">
                  {`# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('user/<int:user_id>/', views.user_profile, name='profile'),
    path('about/', views.about, name='about'),
]`}
                </pre>
              </div>
            </div>

            {/* Django views.py */}
            <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm font-mono leading-7 text-slate-800">
                  {`# views.py
from django.http import HttpResponse

def home(request):
    return HttpResponse('Home Page')

def user_profile(request, user_id):
    return HttpResponse(f'User {user_id}')

def about(request):
    return HttpResponse('About Page')`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Django Explanation */}
        <section>
          <p className="font-semibold text-[#4a0080]">Key points (Django):</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <code>path('', views.home)</code> maps the root URL to{" "}
              <code>home</code> view.
            </li>
            <li>
              <code>&lt;int:user_id&gt;</code> converts the path segment to an{" "}
              <code>int</code> and passes it to the view.
            </li>
            <li>
              The <code>name</code> parameter (e.g. <code>name='home'</code>) is
              used for URL reversing in templates and code.
            </li>
          </ul>
        </section>

        {/* Comparison / Tips */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Tips</h2>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Use descriptive route names and URL patterns, e.g.{" "}
              <code>/users/123/profile</code> instead of{" "}
              <code>/getUser?id=123</code>.
            </li>
            <li>
              Keep URLs RESTful: use nouns and hierarchy, e.g.{" "}
              <code>/users/123/posts</code>.
            </li>
            <li>
              Use URL parameters (<code>&lt;int:id&gt;</code>,{" "}
              <code>&lt;slug:slug&gt;</code>) for dynamic content.
            </li>
            <li>
              Group related routes by blueprint (Flask) or app (Django) for
              better structure.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
