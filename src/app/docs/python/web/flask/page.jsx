import React from "react";

export default function FlaskPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Flask</h1>
      <p>
        Flask is a lightweight web framework—simple to start, flexible to grow.
      </p>

      <h2>Install</h2>
      <pre><code>{`pip install flask`}</code></pre>

      <h2>Hello, World</h2>
      <pre><code>{`from flask import Flask
app = Flask(__name__)

@app.get('/')
def home():
    return 'Hello Flask'

if __name__ == '__main__':
    app.run(debug=True)`}</code></pre>

      <h2>Templates (Jinja2)</h2>
      <pre><code>{`# app.py
from flask import Flask, render_template
app = Flask(__name__)

@app.get('/hello/<name>')
def hello(name):
    return render_template('hello.html', name=name)`}</code></pre>
      <pre><code>{`<!-- templates/hello.html -->
<!doctype html>
<h1>Hello {{ name }}!</h1>`}</code></pre>

      <h2>Notes</h2>
      <ul>
        <li>Use blueprints as your app grows.</li>
        <li>Set <code>FLASK_ENV</code> / <code>FLASK_APP</code> or use <code>python app.py</code>.</li>
      </ul>
    </div>
  );
}
