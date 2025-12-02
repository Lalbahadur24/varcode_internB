import React from "react";

export default function PythonObjectMethods() {
  const dq = String.fromCharCode(34);

  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-12 text-slate-700">
      {/* TITLE */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python Object Methods — Complete Cheat Sheet
      </h1>

      {/* INTRO */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          What Are Object Methods?
        </h2>

        <p className="mt-3 leading-7">
          Object methods are <strong>functions defined inside a class</strong>{" "}
          that represent the behavior of an object. They always take{" "}
          <strong>self</strong> as the first parameter.
        </p>

        <p className="mt-3 leading-7">
          When an object calls a method, <strong>self</strong> refers to that
          specific object.
        </p>
      </section>

      {/* BASIC METHOD */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Basic Object Method
        </h2>

        <p className="mt-3">A simple class containing a method:</p>

        <pre className={codeClass}>
          {`class Person:
  def greet(self):
    print("Hello!")`}
        </pre>

        <pre className={codeClass}>
          {`p = Person()
p.greet()`}
        </pre>

        <p className="mt-3 leading-7">
          Here, <strong>greet()</strong> is an object method. The object{" "}
          <strong>p</strong>
          calls it using <code>p.greet()</code>.
        </p>
      </section>

      {/* SELF EXPLANATION */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          What is the {dq}self{dq} Parameter?
        </h2>

        <p className="mt-3 leading-7">
          <strong>self</strong> refers to the current calling object. It gives
          access to:
        </p>

        <ul className="list-disc ml-6 mt-3 leading-7">
          <li>Object attributes</li>
          <li>Other object methods</li>
          <li>Data stored inside the instance</li>
        </ul>

        <pre className={codeClass}>
          {`class Car:
  def show(self):
    print("This is a car object:", self)`}
        </pre>

        <p className="mt-3 leading-7">
          The object reference is passed automatically when calling a method.
        </p>
      </section>

      {/* METHODS USING ATTRIBUTES */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Methods That Use Object Attributes
        </h2>

        <pre className={codeClass}>
          {`class Student:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def details(self):
    print("Name:", self.name)
    print("Age:", self.age)`}
        </pre>

        <pre className={codeClass}>
          {`s = Student("Emil", 21)
s.details()`}
        </pre>

        <p className="mt-3 leading-7">
          <strong>details()</strong> displays the object’s stored data via{" "}
          <strong>self</strong>.
        </p>
      </section>

      {/* METHODS WITH PARAMETERS */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Object Methods with Parameters
        </h2>

        <p className="mt-3 leading-7">
          Methods can accept additional arguments:
        </p>

        <pre className={codeClass}>
          {`class MathTool:
  def multiply(self, a, b):
    return a * b`}
        </pre>

        <pre className={codeClass}>
          {`tool = MathTool()
print(tool.multiply(4, 5))`}
        </pre>

        <p className="mt-3 leading-7">
          You only pass <strong>a</strong> and <strong>b</strong>; Python
          automatically passes the object as <strong>self</strong>.
        </p>
      </section>

      {/* CALLING ONE METHOD FROM ANOTHER */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Calling One Method From Another
        </h2>

        <pre className={codeClass}>
          {`class Person:
  def greet(self):
    print("Hello")

  def introduce(self):
    self.greet()
    print("I am a person")`}
        </pre>

        <pre className={codeClass}>
          {`p = Person()
p.introduce()`}
        </pre>

        <p className="mt-3 leading-7">
          Use <strong>self.method_name()</strong> to call other methods inside
          the class.
        </p>
      </section>

      {/* SUMMARY TABLE */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Summary of Object Method Concepts
        </h2>

        <table className="w-full border text-left mt-3">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Concept</th>
              <th className="border p-2">Meaning</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-2 font-mono">self</td>
              <td className="border p-2">Refers to the calling object</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">Method</td>
              <td className="border p-2">Function inside a class</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">object.method()</td>
              <td className="border p-2">Calling a method using an object</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">self.attribute</td>
              <td className="border p-2">Access or modify object data</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">self.other_method()</td>
              <td className="border p-2">
                Call another method inside the class
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
