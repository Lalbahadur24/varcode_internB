import React from "react";

export default function Scope() {
  const dq = String.fromCharCode("34");

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

  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python Scope — Full Detailed Notes
      </h1>

      <p className="text-slate-700 leading-relaxed">
        <strong>Scope</strong> defines where a variable is accessible. A
        variable can only be used inside the region where it is created.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* INTRO */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            What is Scope?
          </h2>
          <p className="mt-2">
            Understanding scope helps you control variable access and avoid
            conflicts between local and global names.
          </p>
        </section>

        {/* LOCAL */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Local Scope</h2>
          <p className="mt-2">
            A variable inside a function exists only within that function.
          </p>
          <pre className={codeClass}>
            <code>{exLocal}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">
            Local Scope inside Inner Functions
          </h3>
          <p className="mt-2">
            Inner functions can access variables from their parent function.
          </p>
          <pre className={codeClass}>
            <code>{exInner}</code>
          </pre>
        </section>

        {/* GLOBAL */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Global Scope
          </h2>
          <p className="mt-2">
            A variable created outside any function belongs to the global scope
            and can be accessed anywhere.
          </p>
          <pre className={codeClass}>
            <code>{exGlobal}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">
            Same Variable Name (Local vs Global)
          </h3>
          <p className="mt-2">
            Local and global variables with the same name are treated
            separately.
          </p>
          <pre className={codeClass}>
            <code>{exNaming}</code>
          </pre>
        </section>

        {/* GLOBAL KEYWORD */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            The global Keyword
          </h2>
          <p className="mt-2">
            Use <strong>global</strong> to make a variable inside a function
            become global.
          </p>

          <h3 className="text-xl font-semibold mt-4">Create Global Variable</h3>
          <pre className={codeClass}>
            <code>{exGlobalKeyword}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">Modify Global Variable</h3>
          <pre className={codeClass}>
            <code>{exChangeGlobal}</code>
          </pre>
        </section>

        {/* NONLOCAL */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            The nonlocal Keyword
          </h2>
          <p className="mt-2">
            <strong>nonlocal</strong> lets you modify variables from an
            enclosing (outer) function within a nested function.
          </p>
          <pre className={codeClass}>
            <code>{exNonlocal}</code>
          </pre>
        </section>

        {/* LEGB */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            The LEGB Rule
          </h2>
          <p className="mt-2">Python searches variables in the order:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>
              <strong>L – Local</strong>
            </li>
            <li>
              <strong>E – Enclosing</strong>
            </li>
            <li>
              <strong>G – Global</strong>
            </li>
            <li>
              <strong>B – Built-in</strong>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">Example</h3>
          <pre className={codeClass}>
            <code>{exLEGB}</code>
          </pre>
        </section>

        {/* SUMMARY */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>
          <p className="mt-2">
            Mastering scope prevents name conflicts and helps write clean,
            maintainable code.
          </p>
        </section>
      </div>
    </div>
  );
}
