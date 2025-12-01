import React from "react";

export default function RoutingTemplatesPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Routing & Templates (Flask)</h1>
      <p>Define routes and render Jinja2 templates.</p>

      <h2>Routes</h2>
      <pre><code>{`from flask import Flask, url_for, redirect
app = Flask(__name__)

@app.get('/')
def home():
    return 'Home'

@app.get('/user/<int:uid>')
def user(uid):
    return f'User {uid}'

@app.get('/go-home')
def go_home():
    return redirect(url_for('home'))`}</code></pre>

      <h2>Templates</h2>
      <pre><code>{`from flask import Flask, render_template
app = Flask(__name__)

@app.get('/hello/<name>')
def hello(name):
    return render_template('hello.html', name=name)`}</code></pre>
      <pre><code>{`<!-- templates/hello.html -->
<!doctype html>
<h1>Hello {{ name|e }}</h1>`}</code></pre>

      <h2>Static Files</h2>
      <p>Place under <code>static/</code> and link with <code>url_for('static', filename='...')</code>.</p>
    </div>
  );
}
