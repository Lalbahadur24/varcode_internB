export default function MultiprocessingPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Multiprocessing</h1>
      <p>
        The <code>multiprocessing</code> module spawns separate processes to achieve true parallelism
        for CPU-bound tasks, bypassing the GIL.
      </p>

      <section>
        <h2>Pool.map()</h2>
        <pre><code>{`from multiprocessing import Pool

def f(x):
    return x*x

if __name__ == '__main__':  # Required on Windows
    with Pool(4) as p:
        print(p.map(f, [1,2,3,4]))`}</code></pre>
      </section>

      <section>
        <h2>Process and Queue</h2>
        <pre><code>{`from multiprocessing import Process, Queue

def worker(q):
    while not q.empty():
        item = q.get()
        print('processing', item)

if __name__ == '__main__':
    q = Queue()
    for i in range(5):
        q.put(i)
    ps = [Process(target=worker, args=(q,)) for _ in range(2)]
    [p.start() for p in ps]
    [p.join() for p in ps]`}</code></pre>
      </section>

      <section>
        <h2>Shared State via Manager</h2>
        <pre><code>{`from multiprocessing import Manager, Process

def add(shared_list):
    shared_list.append(1)

if __name__ == '__main__':
    with Manager() as m:
        lst = m.list()
        ps = [Process(target=add, args=(lst,)) for _ in range(3)]
        [p.start() for p in ps]
        [p.join() for p in ps]
        print(list(lst))  # [1,1,1]`}</code></pre>
      </section>

      <section>
        <h2>ProcessPoolExecutor</h2>
        <pre><code>{`from concurrent.futures import ProcessPoolExecutor

def fib(n):
    if n < 2: return n
    return fib(n-1) + fib(n-2)

if __name__ == '__main__':
    with ProcessPoolExecutor() as ex:
        results = list(ex.map(fib, [28, 29, 30]))
        print(results)`}</code></pre>
      </section>

      <section>
        <h2>Best Practices</h2>
        <ul>
          <li>Guard entry with <code>if __name__ == '__main__'</code> on Windows</li>
          <li>Only pass picklable objects between processes</li>
          <li>Use pools/executors for simple parallel maps</li>
          <li>Prefer threads for I/O-bound workloads</li>
        </ul>
      </section>
    </div>
  );
}
