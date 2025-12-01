import React from "react";

export default function PythonClasses() {
  const dq = String.fromCharCode(34);

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-12">

      {/* TITLE */}
      <h1 className="text-4xl font-bold">Python Classes — Complete Cheat Sheet</h1>

      {/* WHAT IS A CLASS */}
      <section>
        <h2 className="text-2xl font-semibold">What is a Class?</h2>
        <p className="mt-3 leading-7">
          A <strong>class</strong> is a blueprint for creating objects.  
          It defines the properties (variables) and behaviors (methods) that 
          the objects created from it will have.
        </p>

        <p className="mt-3 leading-7">
          Think of a class as a <strong>template</strong>. Objects are copies of this template.
        </p>
      </section>

      {/* WHY CLASSES */}
      <section>
        <h2 className="text-2xl font-semibold">Why Use Classes?</h2>
        <ul className="list-disc ml-6 mt-3 leading-7">
          <li>To organize code into logical structures</li>
          <li>To reuse code easily</li>
          <li>To follow the OOP (Object-Oriented Programming) style</li>
          <li>To model real-world things like Car, Student, Product, etc.</li>
        </ul>
      </section>

      {/* BASIC CLASS SYNTAX */}
      <section>
        <h2 className="text-2xl font-semibold">Basic Class Syntax</h2>
        <p className="mt-3">A simple class with a class attribute:</p>

        <pre className="p-3 bg-gray-50 rounded border mt-3">
{`class MyClass:
  x = 10`}
        </pre>

        <p className="mt-3 leading-7">
          <strong>MyClass</strong> is a class.  
          Inside it, <strong>x</strong> is a <strong>class attribute</strong>.
        </p>
      </section>

      {/* CREATING AN OBJECT */}
      <section>
        <h2 className="text-2xl font-semibold">Creating an Object from a Class</h2>

        <pre className="p-3 bg-gray-50 rounded border mt-3">
{`obj = MyClass()
print(obj.x)`}
        </pre>

        <p className="mt-3 leading-7">
          <strong>obj</strong> is an object created from <strong>MyClass</strong>.  
          You can access class attributes using the dot notation.
        </p>
      </section>

      {/* CLASS WITH METHOD */}
      <section>
        <h2 className="text-2xl font-semibold">Class with a Method</h2>
        <p className="mt-3">A class can have functions, called <strong>methods</strong>:</p>

        <pre className="p-3 bg-gray-50 rounded border mt-3">
{`class Person:
  def greet(self):
    print("Hello, I am a Person")`}
        </pre>

        <pre className="p-3 bg-gray-50 rounded border mt-3">
{`p = Person()
p.greet()`}
        </pre>

        <p className="mt-3 leading-7">
          Every method must include <strong>self</strong> as its first parameter.  
          It refers to the current object.
        </p>
      </section>

      {/* CLASS VS OBJECT TABLE */}
      <section>
        <h2 className="text-2xl font-semibold">Class vs Object</h2>

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
              <td className="border p-2">Instance created from a class</td>
            </tr>
            <tr>
              <td className="border p-2">Defines attributes + methods</td>
              <td className="border p-2">Uses the attributes + methods</td>
            </tr>
            <tr>
              <td className="border p-2">Created once</td>
              <td className="border p-2">Can create many objects</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* BEST PRACTICES */}
      <section>
        <h2 className="text-2xl font-semibold">Best Practices</h2>
        <ul className="list-disc ml-6 mt-3 leading-7">
          <li>Use <strong>PascalCase</strong> names for classes (Example: StudentData)</li>
          <li>Use <strong>self</strong> for accessing attributes inside methods</li>
          <li>Group related functions and data together inside classes</li>
          <li>Keep class names descriptive and meaningful</li>
        </ul>
      </section>

    </article>
  );
}
