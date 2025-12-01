import React from "react";

export default function MultithreadingPage() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">Multithreading</h1>

      <p className="text-slate-700 leading-relaxed">
        Threads run concurrently inside a single process and share the same
        memory space. Because of the Global Interpreter Lock (GIL),{" "}
        <strong>CPU-bound</strong> code doesn&apos;t scale well with threads,
        but <strong>I/O-bound</strong> work (network, disk, waiting) can improve
        significantly.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Basic Threads */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Basic Threads
          </h2>

          <p className="mt-2">
            Create a <code>Thread</code> with a target function and start them
            with <code>.start()</code>. Use <code>.join()</code> to wait for all
            threads to finish.
          </p>

          <pre className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`import threading

def worker(n):
    print("worker", n)

threads = [threading.Thread(target=worker, args=(i,)) for i in range(3)]

for t in threads:
    t.start()

for t in threads:
    t.join()`}
          </pre>
        </section>

        {/* Locks and Race Conditions */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Locks & Race Conditions
          </h2>

          <p className="mt-2">
            When multiple threads modify shared state, you can get{" "}
            <strong>race conditions</strong>. Use <code>Lock</code> (or{" "}
            <code>RLock</code>) to protect critical sections.
          </p>

          <pre className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`import threading

counter = 0
lock = threading.Lock()

def inc():
    global counter
    for _ in range(100_000):
        with lock:
            counter += 1

threads = [threading.Thread(target=inc) for _ in range(4)]

for t in threads:
    t.start()
for t in threads:
    t.join()

print(counter)`}
          </pre>

          <ul className="list-disc pl-6 mt-3 space-y-1 text-sm">
            <li>
              Without the <code>with lock:</code> block, the final{" "}
              <code>counter</code> would likely be less than expected.
            </li>
            <li>
              Locks serialize access to shared variables to keep them
              consistent.
            </li>
          </ul>
        </section>

        {/* Thread-safe Queue */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Thread-safe Queues (Producer–Consumer)
          </h2>

          <p className="mt-2">
            <code>queue.Queue</code> is a synchronized FIFO queue designed for
            multi-threaded producer–consumer workflows.
          </p>

          <pre className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`import threading, queue, time

q = queue.Queue()

def producer():
    for i in range(5):
        q.put(i)
        time.sleep(0.1)
    q.put(None)  # Sentinel

def consumer():
    while True:
        item = q.get()
        if item is None:
            break
        print("got", item)
        q.task_done()

threading.Thread(target=producer).start()
threading.Thread(target=consumer).start()`}
          </pre>

          <p className="mt-2 text-sm text-slate-600">
            A <strong>sentinel value</strong> (like <code>None</code>) is a
            common way to signal consumers to stop.
          </p>
        </section>

        {/* ThreadPoolExecutor */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            <code>ThreadPoolExecutor</code>
          </h2>

          <p className="mt-2">
            For many small I/O tasks (HTTP calls, file reads, etc.), use a
            thread pool instead of manually creating/joining threads.
          </p>

          <pre className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`from concurrent.futures import ThreadPoolExecutor
import requests

urls = [
    "https://example.com",
    "https://httpbin.org/get",
    "https://github.com",
]

def fetch(url):
    resp = requests.get(url, timeout=5)
    return url, resp.status_code

with ThreadPoolExecutor(max_workers=5) as ex:
    for url, code in ex.map(fetch, urls):
        print(url, code)`}
          </pre>
        </section>

        {/* Best practices */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Best Practices
          </h2>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Use <strong>threads for I/O-bound tasks</strong> (network calls,
              disk I/O, waiting), not heavy CPU math.
            </li>
            <li>
              Always synchronize shared state using locks, queues, or other
              thread-safe primitives.
            </li>
            <li>
              Prefer <code>ThreadPoolExecutor</code> over manual thread creation
              for task pools.
            </li>
            <li>
              Avoid sharing too many global variables; pass data via queues or
              function arguments where possible.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
