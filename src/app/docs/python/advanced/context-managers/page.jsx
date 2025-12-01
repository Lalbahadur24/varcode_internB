import React from "react";

export default function ContextManagersPage() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Context Managers
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Context managers guarantee proper acquisition and release of resources.
        They are used with the <code>with</code> statement and handle
        setup/teardown logic safely even when exceptions occur.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Basic Usage */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Basic Usage</h2>

          <p className="mt-2">
            The most common example is working with files. The file will always
            be closed when the block exits.
          </p>

          <pre className="mt-4 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`# File automatically closes after block
with open("notes.txt", "w", encoding="utf-8") as f:
    f.write("hello")`}
          </pre>

          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>
              If an exception happens inside the block, the file is still safely
              closed.
            </li>
            <li>
              The object returned by <code>open(...)</code> is bound to{" "}
              <code>f</code>.
            </li>
          </ul>
        </section>

        {/* Creating via Class */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Creating a Context Manager via Class
          </h2>

          <p className="mt-2">
            A custom context manager class implements <code>__enter__</code> and{" "}
            <code>__exit__</code>.
          </p>

          <pre className="mt-4 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`class Managed:
    def __enter__(self):
        print("acquire")
        return self

    def __exit__(self, exc_type, exc, tb):
        print("release")
        # Return True to suppress exception, False to propagate
        return False

with Managed() as m:
    print("work")`}
          </pre>

          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>
              <code>__enter__</code> runs at the start; its return value becomes{" "}
              <code>as m</code>.
            </li>
            <li>
              <code>__exit__(exc_type, exc, tb)</code> always runs, even if an
              exception happens.
            </li>
            <li>
              Returning <code>True</code> swallows the exception (use
              carefully).
            </li>
          </ul>
        </section>

        {/* contextlib.contextmanager */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Using <code>contextlib.contextmanager</code>
          </h2>

          <p className="mt-2">
            You can write context managers using a generator function with a{" "}
            <code>yield</code> instead of a class.
          </p>

          <pre className="mt-4 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`from contextlib import contextmanager

@contextmanager
def db_session(engine):
    conn = engine.connect()
    try:
        yield conn          # code inside "with" block runs here
        conn.commit()
    except Exception:
        conn.rollback()
        raise
    finally:
        conn.close()`}
          </pre>

          <pre className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`with db_session(engine) as conn:
    conn.execute("INSERT INTO logs(message) VALUES ('ok')")`}
          </pre>

          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>
              Code before <code>yield</code> is setup (acquire).
            </li>
            <li>
              Code after <code>yield</code> runs on exit (teardown).
            </li>
            <li>
              Exceptions inside the <code>with</code> are caught in the{" "}
              <code>except</code> block.
            </li>
          </ul>
        </section>

        {/* Other Tools from contextlib */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Helpful Tools in <code>contextlib</code>
          </h2>

          <pre className="mt-4 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`from contextlib import suppress, ExitStack, closing
import socket

# Suppress a specific exception
with suppress(FileNotFoundError):
    open("missing.txt").read()

# Manage many contexts dynamically
files = ["a.txt", "b.txt"]
with ExitStack() as stack:
    handles = [stack.enter_context(open(p, "w")) for p in files]
    handles[0].write("hello")

# Ensure close() is called on arbitrary objects
with closing(socket.socket()) as s:
    s.bind(("127.0.0.1", 0))`}
          </pre>

          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>
              <code>suppress</code> is useful for ignoring expected errors
              (e.g., missing files).
            </li>
            <li>
              <code>ExitStack</code> is great when you don’t know in advance how
              many <code>with</code> contexts you&apos;ll need.
            </li>
            <li>
              <code>closing</code> adapts any object with <code>.close()</code>{" "}
              into a context manager.
            </li>
          </ul>
        </section>

        {/* More Real-World Examples */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Real-World Examples
          </h2>

          <pre className="mt-4 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`import threading
from contextlib import contextmanager

lock = threading.Lock()

@contextmanager
def locked():
    lock.acquire()
    try:
        yield
    finally:
        lock.release()

with locked():
    # critical section
    print("Only one thread at a time")`}
          </pre>

          <pre className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`import time
from contextlib import contextmanager

@contextmanager
def timed(label: str):
    start = time.perf_counter()
    try:
        yield
    finally:
        duration = time.perf_counter() - start
        print(f"{label} took {duration:.4f}s")

with timed("heavy_task"):
    sum(range(10_000_000))`}
          </pre>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Best Practices
          </h2>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Prefer <code>with</code> for files, locks, DB sessions, network
              sockets, temporary directories, etc.
            </li>
            <li>
              Make <code>__exit__</code> / teardown code idempotent and
              exception-safe.
            </li>
            <li>
              Be careful when suppressing exceptions; document clearly what is
              being suppressed and why.
            </li>
            <li>
              If your setup/cleanup logic repeats everywhere → wrap it in a
              context manager.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
