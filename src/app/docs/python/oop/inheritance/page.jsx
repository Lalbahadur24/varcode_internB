import React from "react";

export default function PythonInheritance() {
  const dq = String.fromCharCode(34);

  // SHARED MASTER STYLE
  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-12 text-slate-700">
      {/* TITLE */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python Inheritance — Complete Cheat Sheet
      </h1>

      {/* INTRO */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          What is Inheritance?
        </h2>

        <p className="mt-3 leading-7">
          <strong>Inheritance</strong> is an OOP concept where one class (child)
          can acquire properties and methods of another class (parent).
        </p>

        <ul className="list-disc ml-6 mt-3 leading-7">
          <li>Makes code reusable</li>
          <li>Removes repetition</li>
          <li>Allows building advanced structures</li>
        </ul>
      </section>

      {/* BASIC EXAMPLE */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Basic Inheritance
        </h2>

        <pre className={codeClass}>
          {`class Parent:
  def display(self):
    print("This is the parent class")

class Child(Parent):
  pass

c = Child()
c.display()`}
        </pre>
      </section>

      {/* CONSTRUCTOR WITH SUPER */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Using Constructor (__init__) with super()
        </h2>

        <p className="mt-2 leading-7">
          <code>super()</code> calls the parent class constructor.
        </p>

        <pre className={codeClass}>
          {`class Person:
  def __init__(self, name):
    self.name = name

class Student(Person):
  def __init__(self, name, grade):
    super().__init__(name)
    self.grade = grade

s = Student("Emil", "A")
print(s.name, s.grade)`}
        </pre>
      </section>

      {/* METHOD OVERRIDING */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Method Overriding
        </h2>

        <p className="mt-2 leading-7">
          Child class replaces the parent method.
        </p>

        <pre className={codeClass}>
          {`class Parent:
  def greet(self):
    print("Hello from Parent")

class Child(Parent):
  def greet(self):
    print("Hello from Child")

c = Child()
c.greet()`}
        </pre>
      </section>

      {/* SUPER() METHOD ACCESS */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Using super() to Access Parent Methods
        </h2>

        <pre className={codeClass}>
          {`class Parent:
  def greet(self):
    print("Hello from Parent")

class Child(Parent):
  def greet(self):
    super().greet()
    print("Hello from Child")

c = Child()
c.greet()`}
        </pre>
      </section>

      {/* TYPES OF INHERITANCE TABLE */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Types of Inheritance in Python
        </h2>

        <table className="w-full border mt-3 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Type</th>
              <th className="border p-2">Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-2 font-mono">Single</td>
              <td className="border p-2">One parent → one child</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">Multiple</td>
              <td className="border p-2">
                Child inherits from multiple parents
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">Multi-level</td>
              <td className="border p-2">Parent → child → grandchild</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">Hierarchical</td>
              <td className="border p-2">One parent → many children</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">Hybrid</td>
              <td className="border p-2">Combination of different types</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* MULTIPLE INHERITANCE */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Multiple Inheritance
        </h2>

        <p className="mt-2 leading-7">
          A class inherits from more than one parent.
        </p>

        <pre className={codeClass}>
          {`class A:
  def showA(self):
    print("A")

class B:
  def showB(self):
    print("B")

class C(A, B):  # Multiple Inheritance
  pass

obj = C()
obj.showA()
obj.showB()`}
        </pre>
      </section>

      {/* MULTI-LEVEL INHERITANCE */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Multi-Level Inheritance
        </h2>

        <pre className={codeClass}>
          {`class A:
  def showA(self):
    print("A")

class B(A):
  def showB(self):
    print("B")

class C(B):
  def showC(self):
    print("C")

obj = C()
obj.showA()
obj.showB()
obj.showC()`}
        </pre>
      </section>

      {/* HIERARCHICAL INHERITANCE */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Hierarchical Inheritance
        </h2>

        <pre className={codeClass}>
          {`class Parent:
  def greet(self):
    print("Hello from Parent")

class Child1(Parent):
  pass

class Child2(Parent):
  pass

c1 = Child1()
c2 = Child2()
c1.greet()
c2.greet()`}
        </pre>
      </section>

      {/* SUMMARY */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>

        <ul className="list-disc ml-6 mt-3 leading-7">
          <li>Child class inherits methods & properties of parent</li>
          <li>
            <strong>super()</strong> calls parent constructor/method
          </li>
          <li>Child can override parent methods</li>
          <li>Python supports 5 types of inheritance</li>
          <li>Helps reduce repeated code</li>
        </ul>
      </section>
    </article>
  );
}
