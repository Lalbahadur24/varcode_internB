import React from "react";

export default function SessionsAndCookies() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Sessions & Cookies
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Web applications are stateless, meaning each request is independent.
        <strong> Cookies</strong> and <strong>Sessions</strong> help maintain
        state (like logged-in user info) across requests.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* What are cookies */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Cookies (Client-Side)
          </h2>
          <p className="mt-2">
            Cookies are small values stored in the user's browser. They are sent
            with every request and are ideal for:
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Saving user preferences</li>
            <li>Tracking sessions</li>
            <li>Lightweight authentication tokens</li>
            <li>Identifying returning users</li>
          </ul>
        </section>

        {/* Cookies Example */}
        <section className="bg-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Example: Cookies in Flask
            </h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 shadow-sm rounded-md overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 text-sm w-full leading-7 font-mono text-slate-800">
                  {`from flask import Flask, make_response, request
app = Flask(__name__)

@app.get('/set-cookie')
def set_cookie():
    resp = make_response('Cookie set')
    resp.set_cookie('username', 'alice', max_age=3600)
    return resp

@app.get('/get-cookie')
def get_cookie():
    username = request.cookies.get('username')
    return f'Username: {username}'`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Why Cookies Matter */}
        <section>
          <p className="font-semibold text-[#4a0080]">Key points:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <code>set_cookie()</code> stores data in browser.
            </li>
            <li>
              <code>max_age</code> controls expiration.
            </li>
            <li>
              <code>request.cookies</code> retrieves cookies from client.
            </li>
          </ul>
        </section>

        {/* Sessions Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Sessions (Server-Side)
          </h2>
          <p className="mt-2">
            Sessions store user data <strong>on the server</strong>, identified
            by a session cookie. Suitable for:
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Login state (user_id)</li>
            <li>Shopping cart items</li>
            <li>Dashboard preferences</li>
            <li>Temporary authentication tokens</li>
          </ul>
        </section>

        {/* Sessions Example */}
        <section className="bg-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Example: Sessions in Flask
            </h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 shadow-sm rounded-md overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 text-sm w-full leading-7 font-mono text-slate-800">
                  {`from flask import Flask, session
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
    return 'Logged out'`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Explanation */}
        <section>
          <p className="font-semibold text-[#4a0080]">Key session concepts:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <code>session</code> behaves like a Python dictionary.
            </li>
            <li>
              <code>session['user_id']</code> stores state on server.
            </li>
            <li>
              <code>session.get()</code> safely retrieves values.
            </li>
            <li>
              <code>logout</code> removes data from session with{" "}
              <code>session.pop()</code>.
            </li>
          </ul>
        </section>

        {/* Security Tips */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Security Tips
          </h2>
          <p className="mt-2">To protect sessions and cookies, always:</p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Use <code>secure=True</code> so cookies are sent{" "}
              <strong>only over HTTPS</strong>.
            </li>
            <li>
              Use <code>httponly=True</code> to prevent JavaScript theft (XSS
              protection).
            </li>
            <li>
              Set <code>samesite='Strict'</code> to prevent CSRF attacks.
            </li>
            <li>
              Keep <strong>short expiry</strong> for sensitive cookies
              (sessions, tokens).
            </li>
            <li>
              Store <code>SECRET_KEY</code> in environment variables (never in
              code).
            </li>
            <li>
              Regenerate session IDs after login to prevent fixation attacks.
            </li>
          </ul>
        </section>

        {/* Summary */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>
          <p className="mt-2">
            Cookies store data on the client, while sessions securely store data
            on the server. Both are essential for authentication, state
            management, personalization, and secure user experiences in web
            applications.
          </p>
        </section>
      </div>
    </div>
  );
}
