import React from "react";

export default function SessionsAndCookies() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Sessions & Cookies</h1>
      <p>
        Maintain user state across requests with sessions and cookies.
      </p>

      <h2>Cookies (Client-Side)</h2>
      <p>Small pieces of data stored in the browser.</p>
      <pre><code>{`from flask import Flask, make_response, request
app = Flask(__name__)

@app.get('/set-cookie')
def set_cookie():
    resp = make_response('Cookie set')
    resp.set_cookie('username', 'alice', max_age=3600)
    return resp

@app.get('/get-cookie')
def get_cookie():
    username = request.cookies.get('username')
    return f'Username: {username}'`}</code></pre>

      <h2>Sessions (Server-Side)</h2>
      <p>Store user data on the server, identified by a session cookie.</p>
      <pre><code>{`from flask import Flask, session
app = Flask(__name__)
app.secret_key = 'dev-secret-key'  # Change in production

@app.get('/login')
def login():
    session['user_id'] = 123
    return 'Logged in'

@app.get('/profile')
def profile():
    user_id = session.get('user_id')
    if not user_id:
        return 'Not logged in', 401
    return f'User {user_id}'

@app.get('/logout')
def logout():
    session.pop('user_id', None)
    return 'Logged out'`}</code></pre>

      <h2>Security Tips</h2>
      <ul>
        <li>Use <code>secure=True</code> for HTTPS-only cookies</li>
        <li>Set <code>httponly=True</code> to prevent JS access</li>
        <li>Use short expiry times for sensitive sessions</li>
        <li>Store session secrets in environment variables</li>
      </ul>
    </div>
  );
}
