import React from "react";

export default function MultiprocessingPage() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Multiprocessing
      </h1>

      <p className="text-slate-700 leading-relaxed">
        The <code>multiprocessing</code> module starts separate Python{" "}
        <strong>processes</strong> to achieve true parallelism for{" "}
        <strong>CPU-bound</strong> tasks, bypassing the Global Interpreter Lock
        (GIL). Each process has its own memory space.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Pool.map */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Parallel map with <code>Pool.map()</code>
          </h2>

          <p className="mt-2">
            Use a <code>Pool</code> when you want to apply a function to many
            items in parallel, like a CPU-heavy transformation.
          </p>

          <pre className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`from multiprocessing import Pool

def f(x):
    return x * x

if __name__ == "__main__":  # Required on Windows
    with Pool(4) as p:
        print(p.map(f, [1, 2, 3, 4]))`}
          </pre>

          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>
              The <code>if __name__ == "__main__"</code> guard is{" "}
              <strong>required on Windows</strong> to avoid infinite spawning.
            </li>
            <li>
              <code>Pool(4)</code> creates 4 worker processes (use CPU count as
              a guideline).
            </li>
          </ul>
        </section>

        {/* Process + Queue */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Manual <code>Process</code> and <code>Queue</code>
          </h2>

          <p className="mt-2">
            For more control, you can create individual processes and share work
            via a queue.
          </p>

          <pre className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`from multiprocessing import Process, Queue

def worker(q):
    while not q.empty():
        item = q.get()
        print("processing", item)

if __name__ == "__main__":
    q = Queue()
    for i in range(5):
        q.put(i)

    ps = [Process(target=worker, args=(q,)) for _ in range(2)]

    for p in ps:
        p.start()
    for p in ps:
        p.join()`}
          </pre>

          <p className="mt-2 text-sm text-slate-600">
            Note: <code>q.empty()</code> is not always 100% reliable in highly
            concurrent cases, but fine for simple examples and small scripts.
          </p>
        </section>

        {/* Shared state via Manager */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Shared State with <code>Manager</code>
          </h2>

          <p className="mt-2">
            A <code>Manager</code> creates proxy objects (like list/dict) that
            multiple processes can safely share and modify.
          </p>

          <pre className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`from multiprocessing import Manager, Process

def add(shared_list):
    shared_list.append(1)

if __name__ == "__main__":
    with Manager() as m:
        lst = m.list()
        ps = [Process(target=add, args=(lst,)) for _ in range(3)]

        for p in ps:
            p.start()
        for p in ps:
            p.join()

        print(list(lst))  # [1, 1, 1]`}
          </pre>

          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>
              Manager objects are convenient but a bit slower (data goes through
              a server process).
            </li>
            <li>Use them when simplicity matters more than raw speed.</li>
          </ul>
        </section>

        {/* ProcessPoolExecutor */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            <code>ProcessPoolExecutor</code> (high-level API)
          </h2>

          <p className="mt-2">
            The <code>concurrent.futures</code> API provides a nicer interface
            for pools, especially when mixing threads and processes.
          </p>

          <pre className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`from concurrent.futures import ProcessPoolExecutor

def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

if __name__ == "__main__":
    with ProcessPoolExecutor() as ex:
        results = list(ex.map(fib, [28, 29, 30]))
        print(results)`}
          </pre>

          <p className="mt-2">
            <code>ex.map()</code> behaves like built-in <code>map</code>, but
            runs each call in parallel processes.
          </p>
        </section>

        {/* When to use */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            When to Use Multiprocessing vs Threads
          </h2>

          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              Use <strong>multiprocessing</strong> for CPU-bound work (heavy
              math, image processing, ML inference, etc.).
            </li>
            <li>
              Use <strong>threading / async</strong> for I/O-bound work (network
              calls, disk I/O).
            </li>
            <li>
              Don&apos;t spawn too many short-lived processes; process startup
              has overhead.
            </li>
          </ul>
        </section>

        {/* Best practices */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Best Practices
          </h2>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Always guard multiprocessing code with{" "}
              <code>if __name__ == "__main__":</code> (especially on Windows).
            </li>
            <li>
              Only pass <strong>picklable</strong> objects between processes.
            </li>
            <li>
              Use <code>Pool</code> / <code>ProcessPoolExecutor</code> for
              simple parallel &quot;map&quot; patterns.
            </li>
            <li>
              Prefer threads or async for I/O-bound workloads; processes for
              CPU-bound.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
