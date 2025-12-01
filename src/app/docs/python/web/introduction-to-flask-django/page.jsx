import React from "react";

export default function IntroFlaskDjango() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Introduction to Flask / Django</h1>
      <p>
        Flask and Django are the two most popular Python web frameworks.
      </p>

      <h2>Flask (Micro Framework)</h2>
      <ul>
        <li>Lightweight and flexible</li>
        <li>Minimal setup required</li>
        <li>Choose your own components (ORM, template engine)</li>
        <li>Great for APIs and small to medium apps</li>
      </ul>
      <pre><code>{`pip install flask

from flask import Flask
app = Flask(__name__)

@app.get('/')
def home():
    return 'Hello Flask'

if __name__ == '__main__':
    app.run(debug=True)`}</code></pre>

      <h2>Django (Full-Stack Framework)</h2>
      <ul>
        <li>Batteries included (ORM, admin, auth, forms)</li>
        <li>Convention over configuration</li>
        <li>Built-in security features</li>
        <li>Ideal for large, complex applications</li>
      </ul>
      <pre><code>{`pip install django
django-admin startproject mysite
cd mysite
python manage.py runserver`}</code></pre>

      <h2>Comparison</h2>
      <table>
        <thead>
          <tr><th>Feature</th><th>Flask</th><th>Django</th></tr>
        </thead>
        <tbody>
          <tr><td>Learning Curve</td><td>Easy</td><td>Moderate</td></tr>
          <tr><td>Setup Time</td><td>Fast</td><td>Medium</td></tr>
          <tr><td>Built-in Admin</td><td>No</td><td>Yes</td></tr>
          <tr><td>ORM</td><td>Optional</td><td>Built-in</td></tr>
          <tr><td>Best For</td><td>APIs, Small Apps</td><td>Large Apps</td></tr>
        </tbody>
      </table>
    </div>
  );
}
