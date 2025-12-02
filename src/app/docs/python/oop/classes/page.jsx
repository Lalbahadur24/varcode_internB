import React from "react";

export default function PythonClasses() {
  const dq = String.fromCharCode(34);

  // MASTER STYLE
  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-12 text-slate-700">
      {/* TITLE */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python Classes — Complete Cheat Sheet
      </h1>

      {/* WHAT IS A CLASS */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          What is a Class?
        </h2>

        <p className="mt-3 leading-7">
          A <strong>class</strong> is a blueprint for creating objects. It
          defines the <strong>properties</strong> (variables) and
          <strong>methods</strong> (functions) that objects created from it will
          have.
        </p>

        <p className="mt-3 leading-7">
          Think of a class as a <strong>template</strong>. Objects are
          individual copies created from this template.
        </p>
      </section>

      {/* WHY CLASSES */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Why Use Classes?
        </h2>
        <ul className="list-disc ml-6 mt-3 leading-7">
          <li>Organize code into structures</li>
          <li>Reuse code easily</li>
          <li>Follow OOP (Object-Oriented Programming)</li>
          <li>Model real-world things like Car, Student, Product, etc.</li>
        </ul>
      </section>

      {/* BASIC CLASS SYNTAX */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Basic Class Syntax
        </h2>

        <p className="mt-3">A simple class with a class attribute:</p>

        <pre className={codeClass}>
          {`class MyClass:
  x = 10`}
        </pre>

        <p className="mt-3 leading-7">
          <strong>MyClass</strong> is a class. Inside it, <strong>x</strong> is
          a <strong>class attribute</strong>.
        </p>
      </section>

      {/* CREATING AN OBJECT */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Creating an Object from a Class
        </h2>

        <pre className={codeClass}>
          {`obj = MyClass()
print(obj.x)`}
        </pre>

        <p className="mt-3 leading-7">
          <strong>obj</strong> is an object created from{" "}
          <strong>MyClass</strong>. Access its attributes using dot notation.
        </p>
      </section>

      {/* CLASS WITH METHOD */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Class with a Method
        </h2>

        <p className="mt-3">
          A class can have functions called <strong>methods</strong>:
        </p>

        <pre className={codeClass}>
          {`class Person:
  def greet(self):
    print("Hello, I am a Person")`}
        </pre>

        <pre className={codeClass}>
          {`p = Person()
p.greet()`}
        </pre>

        <p className="mt-3 leading-7">
          Every method must include <strong>self</strong> as the first
          parameter. It refers to the current object.
        </p>
      </section>

      {/* CLASS VS OBJECT TABLE */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Class vs Object
        </h2>

        <table className="w-full border text-left mt-3">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Class</th>
              <th className="border p-2">Object</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Blueprint, template</td>
              <td className="border p-2">Instance created from the class</td>
            </tr>
            <tr>
              <td className="border p-2">Defines attributes + methods</td>
              <td className="border p-2">Uses attributes + methods</td>
            </tr>
            <tr>
              <td className="border p-2">Created once</td>
              <td className="border p-2">Many objects can be created</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* BEST PRACTICES */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Best Practices
        </h2>
        <ul className="list-disc ml-6 mt-3 leading-7">
          <li>
            Use <strong>PascalCase</strong> for class names (e.g., StudentData)
          </li>
          <li>
            Use <strong>self</strong> to access attributes inside methods
          </li>
          <li>Group related functions and data inside classes</li>
          <li>Keep class names meaningful and descriptive</li>
        </ul>
      </section>
    </article>
  );
}
