export default function MultithreadingPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Multithreading</h1>
      <p>
        Threads run concurrently within one process. Due to the GIL, CPU-bound code doesn't scale
        with threads, but I/O-bound work (network, disk) benefits significantly.
      </p>

      <section>
        <h2>Basic Threads</h2>
        <pre><code>{`import threading

def worker(n):
    print('worker', n)

threads = [threading.Thread(target=worker, args=(i,)) for i in range(3)]
for t in threads:
    t.start()
for t in threads:
    t.join()`}</code></pre>
      </section>

      <section>
        <h2>Locks and Race Conditions</h2>
        <pre><code>{`import threading

counter = 0
lock = threading.Lock()

def inc():
    global counter
    for _ in range(100_000):
        with lock:
            counter += 1

threads = [threading.Thread(target=inc) for _ in range(4)]
for t in threads: t.start()
for t in threads: t.join()
print(counter)`}</code></pre>
      </section>

      <section>
        <h2>Thread-safe Queues</h2>
        <pre><code>{`import threading, queue, time

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
        print('got', item)
        q.task_done()

threading.Thread(target=producer).start()
threading.Thread(target=consumer).start()`}</code></pre>
      </section>

      <section>
        <h2>ThreadPoolExecutor</h2>
        <pre><code>{`from concurrent.futures import ThreadPoolExecutor
import requests

urls = [
    'https://example.com',
    'https://httpbin.org/get',
    'https://github.com',
]

def fetch(url):
    return requests.get(url, timeout=5).status_code

with ThreadPoolExecutor(max_workers=5) as ex:
    for code in ex.map(fetch, urls):
        print(code)`}</code></pre>
      </section>

      <section>
        <h2>Best Practices</h2>
        <ul>
          <li>Use threads for I/O-bound tasks; use processes for CPU-bound work</li>
          <li>Always synchronize shared state (locks/queues)</li>
          <li>Prefer <code>ThreadPoolExecutor</code> over manual thread management</li>
        </ul>
      </section>
    </div>
  );
}
