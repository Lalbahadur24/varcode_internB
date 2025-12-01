import React from "react";

export default function PythonObjectMethods() {
  const dq = String.fromCharCode(34);

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-12">

      {/* TITLE */}
      <h1 className="text-4xl font-bold">Python Object Methods — Complete Cheat Sheet</h1>

      {/* INTRO */}
      <section>
        <h2 className="text-2xl font-semibold">What Are Object Methods?</h2>
        <p className="mt-3 leading-7">
          Object methods are <strong>functions defined inside a class</strong> 
          that belong to the object's behavior.  
          They operate on the data stored inside an object and usually take 
          <strong>self</strong> as the first parameter.
        </p>

        <p className="mt-3 leading-7">
          When an object calls a method, <strong>self</strong> refers to that specific object.
        </p>
      </section>

      {/* BASIC METHOD */}
      <section>
        <h2 className="text-2xl font-semibold">Basic Object Method</h2>
        <p className="mt-3">A simple class containing a method:</p>

        <pre className="p-3 bg-gray-50 rounded border mt-3">
{`class Person:
  def greet(self):
    print("Hello!")`}
        </pre>

        <pre className="p-3 bg-gray-50 rounded border mt-3">
{`p = Person()
p.greet()`}
        </pre>

        <p className="mt-3 leading-7">
          Here, <strong>greet()</strong> is an object method.  
          The object <strong>p</strong> uses the dot notation <code>p.greet()</code> to call it.
        </p>
      </section>

      {/* SELF EXPLANATION */}
      <section>
        <h2 className="text-2xl font-semibold">What is the {dq}self{dq} Parameter?</h2>
        <p className="mt-3 leading-7">
          <strong>self</strong> refers to the current object (instance) calling the method.
          It is used to access:
        </p>

        <ul className="list-disc ml-6 mt-3 leading-7">
          <li>Object attributes</li>
          <li>Other methods inside the class</li>
          <li>Object-specific data</li>
        </ul>

        <pre className="p-3 bg-gray-50 rounded border mt-3">
{`class Car:
  def show(self):
    print("This is a car object:", self)`}
        </pre>

        <p className="mt-3 leading-7">
          The method receives the object automatically when called using the dot notation.
        </p>
      </section>

      {/* METHOD USING ATTRIBUTES */}
      <section>
        <h2 className="text-2xl font-semibold">Methods That Use Object Attributes</h2>
        <pre className="p-3 bg-gray-50 rounded border mt-3">
{`class Student:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def details(self):
    print("Name:", self.name)
    print("Age:", self.age)`}
        </pre>

        <pre className="p-3 bg-gray-50 rounded border mt-3">
{`s = Student("Emil", 21)
s.details()`}
        </pre>

        <p className="mt-3 leading-7">
          The method <strong>details()</strong> uses object attributes stored inside <strong>self</strong>.
        </p>
      </section>

      {/* METHODS WITH PARAMETERS */}
      <section>
        <h2 className="text-2xl font-semibold">Object Methods with Parameters</h2>
        <p className="mt-3 leading-7">
          Methods can accept additional parameters besides self.
        </p>

        <pre className="p-3 bg-gray-50 rounded border mt-3">
{`class MathTool:
  def multiply(self, a, b):
    return a * b`}
        </pre>

        <pre className="p-3 bg-gray-50 rounded border mt-3">
{`tool = MathTool()
print(tool.multiply(4, 5))`}
        </pre>

        <p className="mt-3 leading-7">
          When calling the method, you only pass values for <strong>a</strong> and <strong>b</strong>.
          Python automatically passes the object as <strong>self</strong>.
        </p>
      </section>

      {/* CALLING ONE METHOD FROM ANOTHER */}
      <section>
        <h2 className="text-2xl font-semibold">Calling One Method From Another</h2>

        <pre className="p-3 bg-gray-50 rounded border mt-3">
{`class Person:
  def greet(self):
    print("Hello")

  def introduce(self):
    self.greet()
    print("I am a person")`}
        </pre>

        <pre className="p-3 bg-gray-50 rounded border mt-3">
{`p = Person()
p.introduce()`}
        </pre>

        <p className="mt-3 leading-7">
          You use <strong>self.method_name()</strong> to call another method inside the same class.
        </p>
      </section>

      {/* TABLE */}
      <section>
        <h2 className="text-2xl font-semibold">Summary of Object Method Concepts</h2>

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
              <td className="border p-2">Refers to the object calling the method</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">Method</td>
              <td className="border p-2">Function inside a class</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">Object.method()</td>
              <td className="border p-2">Calling a method through an object</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">self.attribute</td>
              <td className="border p-2">Accessing or modifying object data</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">self.other_method()</td>
              <td className="border p-2">Call another method from inside class</td>
            </tr>
          </tbody>
        </table>
      </section>

    </article>
  );
}
