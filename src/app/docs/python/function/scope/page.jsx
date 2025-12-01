import React from "react";

export default function Scope() {
  const dq = String.fromCharCode(34);

  // Examples
  const exLocal = `def myfunc():
  x = 300
  print(x)

myfunc()`;

  const exInner = `def myfunc():
  x = 300
  def myinnerfunc():
    print(x)
  myinnerfunc()

myfunc()`;

  const exGlobal = `x = 300

def myfunc():
  print(x)

myfunc()
print(x)`;

  const exNaming = `x = 300

def myfunc():
  x = 200
  print(x)

myfunc()
print(x)`;

  const exGlobalKeyword = `def myfunc():
  global x
  x = 300

myfunc()
print(x)`;

  const exChangeGlobal = `x = 300

def myfunc():
  global x
  x = 200

myfunc()
print(x)`;

  const exNonlocal = `def myfunc1():
  x = "Jane"
  def myfunc2():
    nonlocal x
    x = "hello"
  myfunc2()
  return x

print(myfunc1())`;

  const exLEGB = `x = "global"

def outer():
  x = "enclosing"
  def inner():
    x = "local"
    print("Inner:", x)
  inner()
  print("Outer:", x)

outer()
print("Global:", x)`;

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-10">
      <h1 className="text-4xl font-bold">Python Scope — Full Detailed Notes</h1>

      {/* INTRO */}
      <section>
        <h2 className="text-2xl font-semibold">What is Scope?</h2>
        <p className="mt-2">
          <strong>Scope</strong> refers to the region of a program where a variable is
          accessible. A variable is only available from inside the region where it is
          created.
        </p>
        <p className="mt-2">
          Understanding scope helps you control variable access and avoid conflicts
          between local and global names.
        </p>
      </section>

      {/* LOCAL SCOPE */}
      <section>
        <h2 className="text-2xl font-semibold">Local Scope</h2>
        <p className="mt-2">
          A variable created <strong>inside a function</strong> is said to be in the{" "}
          <strong>local scope</strong>. It can only be accessed from within that function.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exLocal}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Local Scope inside Inner Functions</h3>
        <p className="mt-2">
          Inner functions can access variables from their parent function.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exInner}</code></pre>
      </section>

      {/* GLOBAL SCOPE */}
      <section>
        <h2 className="text-2xl font-semibold">Global Scope</h2>
        <p className="mt-2">
          A variable created outside any function belongs to the{" "}
          <strong>global scope</strong>, and can be accessed from anywhere in the code.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exGlobal}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Same Variable Name (Local vs Global)</h3>
        <p className="mt-2">
          If a variable exists both inside and outside a function, they are treated as{" "}
          <strong>different variables</strong>.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exNaming}</code></pre>
      </section>

      {/* GLOBAL KEYWORD */}
      <section>
        <h2 className="text-2xl font-semibold">The global Keyword</h2>
        <p className="mt-2">
          You can make a variable inside a function become global by using the{" "}
          <strong>global</strong> keyword.
        </p>

        <h3 className="text-xl font-semibold mt-4">Create a Global Variable from Inside a Function</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exGlobalKeyword}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Modify a Global Variable from Inside a Function</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exChangeGlobal}</code></pre>
      </section>

      {/* NONLOCAL KEYWORD */}
      <section>
        <h2 className="text-2xl font-semibold">The nonlocal Keyword</h2>
        <p className="mt-2">
          The <strong>nonlocal</strong> keyword lets you access variables from an
          enclosing (outer) function inside a nested function.
        </p>
        <p className="mt-2">
          This is useful when you need to modify a variable defined in the outer
          function.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exNonlocal}</code></pre>
      </section>

      {/* LEGB RULE */}
      <section>
        <h2 className="text-2xl font-semibold">The LEGB Rule</h2>
        <p className="mt-2">
          Python searches for variables in the following order (LEGB):
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>L – Local</strong>: Inside the current function</li>
          <li><strong>E – Enclosing</strong>: Inside any outer functions</li>
          <li><strong>G – Global</strong>: At the top level of the script</li>
          <li><strong>B – Built-in</strong>: Python’s built-in names</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Example Demonstrating LEGB</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exLEGB}</code></pre>
      </section>

      {/* END */}
      <section>
        <h2 className="text-2xl font-semibold">Summary</h2>
        <p className="mt-2">
          Understanding Python's scope system ensures that your variables behave the way
          you expect. It helps avoid naming conflicts and allows clean, maintainable
          code.
        </p>
      </section>
    </article>
  );
}
