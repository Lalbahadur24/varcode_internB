export default function ContextManagersPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Context Managers</h1>
      <p>
        Context managers guarantee acquisition and release of resources. They are used with the
        <code>with</code> statement and implement setup/teardown logic.
      </p>

      <section>
        <h2>Basic Usage</h2>
        <pre><code>{`# File automatically closes after block
with open('notes.txt', 'w', encoding='utf-8') as f:
    f.write('hello')`}</code></pre>
      </section>

      <section>
        <h2>Create via Class</h2>
        <pre><code>{`class Managed:
    def __enter__(self):
        print('acquire')
        return self
    def __exit__(self, exc_type, exc, tb):
        print('release')
        # Return True to suppress exception
        return False

with Managed() as m:
    print('work')`}</code></pre>
      </section>

      <section>
        <h2>contextlib.contextmanager</h2>
        <pre><code>{`from contextlib import contextmanager

@contextmanager
def db_session(engine):
    conn = engine.connect()
    try:
        yield conn
        conn.commit()
    except Exception:
        conn.rollback()
        raise
    finally:
        conn.close()`}</code></pre>
      </section>

      <section>
        <h2>Other Tools</h2>
        <pre><code>{`from contextlib import suppress, ExitStack, closing
import socket

# Suppress a specific exception
with suppress(FileNotFoundError):
    open('missing.txt').read()

# Manage many contexts dynamically
files = ['a.txt', 'b.txt']
with ExitStack() as stack:
    handles = [stack.enter_context(open(p, 'w')) for p in files]
    handles[0].write('hello')

# Ensure close() is called
with closing(socket.socket()) as s:
    s.bind(('127.0.0.1', 0))`}</code></pre>
      </section>

      <section>
        <h2>Best Practices</h2>
        <ul>
          <li>Prefer <code>with</code> for files, locks, DB sessions, network sockets</li>
          <li>Make <code>__exit__</code> idempotent and exception-safe</li>
          <li>Document which exceptions are suppressed (if any)</li>
        </ul>
      </section>
    </div>
  );
}
