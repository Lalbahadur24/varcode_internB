import React from "react";

export default function FlaskPage() {
  return (
    <div className="space-y-6">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">Flask</h1>

      <p className="text-slate-700 leading-relaxed">
        Flask is a lightweight Python web framework — simple to start, flexible
        to grow. You start with a small core and add only the components you
        need, which makes Flask ideal for APIs, microservices, and small to
        medium web applications.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Why Flask */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Why Flask?</h2>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Minimal and easy to understand.</li>
            <li>No strict project structure — you design it.</li>
            <li>Choose your own ORM, auth, and extensions.</li>
            <li>Perfect for REST APIs and microservices.</li>
            <li>Great for learning how web frameworks work internally.</li>
          </ul>
        </section>

        {/* Install */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Install</h2>
          <p className="mt-2">
            Install Flask using <code>pip</code>:
          </p>
        </section>

        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Command</h3>
          </div>
          <div className="px-6 pb-8">
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

        {/* Hello World */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Hello, World
          </h2>
          <p className="mt-2">
            A minimal Flask application that responds with plain text at the
            root URL (<code>/</code>).
          </p>
        </section>

        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Example: Basic App
            </h3>
          </div>
          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 text-sm font-mono leading-7 text-slate-800 w-full">
                  {`from flask import Flask
app = Flask(__name__)

@app.get('/')
def home():
    return 'Hello Flask'

if __name__ == '__main__':
    app.run(debug=True)`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <p className="font-semibold text-[#4a0080]">How it works:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code>Flask(__name__)</code> creates the app instance.
          </li>
          <li>
            <code>@app.get('/')</code> maps the URL <code>/</code> to the{" "}
            <code>home</code> function.
          </li>
          <li>
            <code>debug=True</code> enables hot reload and debugger (development
            only).
          </li>
        </ul>

        {/* Templates Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Templates (Jinja2)
          </h2>
          <p className="mt-2">
            Flask uses the Jinja2 templating engine to render dynamic HTML
            pages. You pass variables from the view to the template.
          </p>
        </section>

        {/* Template Example: app.py */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Example: Route with Template
            </h3>
          </div>

          <div className="px-6 pb-4">
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden mb-4">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />

                <pre className="p-6 text-sm font-mono leading-7 text-slate-800 w-full">
                  {`# app.py
from flask import Flask, render_template
app = Flask(__name__)

@app.get('/hello/<name>')
def hello(name):
    return render_template('hello.html', name=name)`}
                </pre>
              </div>
            </div>

            {/* Template File */}
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />

                <pre className="p-6 text-sm font-mono leading-7 text-slate-800 w-full">
                  {`<!-- templates/hello.html -->
<!doctype html>
<h1>Hello {{ name }}!</h1>`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <p className="font-semibold text-[#4a0080]">Template flow:</p>
        <pre className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm font-mono leading-6">
          {`Request: /hello/Alice
→ hello(name='Alice')
→ render_template('hello.html', name='Alice')
→ HTML: "Hello Alice!"`}
        </pre>

        {/* Notes Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Notes & Best Practices
          </h2>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Use blueprints</strong> as your app grows to split routes
              into modules (e.g., <code>auth</code>, <code>api</code>,{" "}
              <code>dashboard</code>).
            </li>
            <li>
              Set environment variables like <code>FLASK_APP</code> and{" "}
              <code>FLASK_ENV</code> for CLI usage:
              <pre className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs font-mono mt-2">
                {`export FLASK_APP=app.py
export FLASK_ENV=development
flask run`}
              </pre>
            </li>
            <li>
              For production, disable <code>debug</code> and use a WSGI server
              like Gunicorn or uWSGI behind Nginx.
            </li>
            <li>
              For APIs, consider using extensions like{" "}
              <code>Flask-RESTful</code> or <code>Flask-Smorest</code>.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
