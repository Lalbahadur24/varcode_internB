import React from "react";

export default function PythonEncapsulation() {
  const dq = String.fromCharCode(34);

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-12">

      {/* TITLE */}
      <h1 className="text-4xl font-bold">Python Encapsulation — Complete Cheat Sheet</h1>

      {/* INTRO */}
      <section>
        <h2 className="text-2xl font-semibold">What is Encapsulation?</h2>
        <p className="mt-3 leading-7">
          <strong>Encapsulation</strong> is an OOP concept used to hide the internal data of a class  
          and protect it from being accessed or modified directly.  
        </p>

        <p className="mt-3 leading-7">
          In Python, encapsulation is handled using:
        </p>

        <ul className="list-disc ml-6 mt-3 leading-7">
          <li><strong>Public Members</strong> — accessible everywhere</li>
          <li><strong>Protected Members</strong> — single underscore (<code>_value</code>)</li>
          <li><strong>Private Members</strong> — double underscore (<code>__value</code>)</li>
        </ul>
      </section>

      {/* PUBLIC MEMBERS */}
      <section>
        <h2 className="text-2xl font-semibold">Public Members</h2>
        <p className="mt-3 leading-7">
          Public attributes and methods can be accessed from anywhere in the program.
        </p>

        <pre className="p-3 bg-gray-50 rounded border mt-3">
{`class Person:
  def __init__(self, name):
    self.name = name  # Public attribute

p = Person("Emil")
print(p.name)`}
        </pre>
      </section>

      {/* PROTECTED MEMBERS */}
      <section>
        <h2 className="text-2xl font-semibold">Protected Members (_variable)</h2>
        <p className="mt-3 leading-7">
          Identified using a <strong>single underscore</strong>.  
          They are meant for internal use but can still be accessed.
        </p>

        <pre className="p-3 bg-gray-50 rounded border mt-3">
{`class Student:
  def __init__(self):
    self._grade = "A"  # Protected

s = Student()
print(s._grade)  # Still accessible but not recommended`}
        </pre>
      </section>

      {/* PRIVATE MEMBERS */}
      <section>
        <h2 className="text-2xl font-semibold">Private Members (__variable)</h2>
        <p className="mt-3 leading-7">
          Private attributes cannot be accessed directly from outside the class.  
          They use **double underscore**.
        </p>

        <pre className="p-3 bg-gray-50 rounded border mt-3">
{`class Bank:
  def __init__(self, balance):
    self.__balance = balance  # Private attribute

b = Bank(2000)
print(b.__balance)  # Error!`}
        </pre>

        <p className="mt-3 leading-7 font-semibold">
          Private attributes use <strong>name mangling</strong>:  
          Python renames <code>__balance</code> to <code>_Bank__balance</code>.
        </p>

        <pre className="p-3 bg-gray-50 rounded border mt-3">
{`print(b._Bank__balance)  # Works, but not recommended`}
        </pre>
      </section>

      {/* GETTERS AND SETTERS */}
      <section>
        <h2 className="text-2xl font-semibold">Getters and Setters (Safe Access)</h2>
        <p className="mt-3 leading-7">
          To safely access private data, use getter and setter methods.
        </p>

        <pre className="p-3 bg-gray-50 rounded border mt-3">
{`class Bank:
  def __init__(self, balance):
    self.__balance = balance

  def get_balance(self):  # Getter
    return self.__balance

  def set_balance(self, amount):  # Setter
    if amount >= 0:
      self.__balance = amount
    else:
      print("Invalid amount")

b = Bank(2000)
print(b.get_balance())
b.set_balance(5000)
print(b.get_balance())`}
        </pre>
      </section>

      {/* METHODS ENCAPSULATION */}
      <section>
        <h2 className="text-2xl font-semibold">Private Methods</h2>
        <p className="mt-3 leading-7">
          Methods can also be private using <strong>double underscores</strong>.
        </p>

        <pre className="p-3 bg-gray-50 rounded border mt-3">
{`class Car:
  def __start_engine(self):
    print("Engine started!")

  def drive(self):
    self.__start_engine()
    print("Car is moving")

c = Car()
c.drive()`}
        </pre>
      </section>

      {/* TABLE SUMMARY */}
      <section>
        <h2 className="text-2xl font-semibold">Levels of Encapsulation</h2>

        <table className="w-full border mt-3 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Type</th>
              <th className="border p-2">Syntax</th>
              <th className="border p-2">Accessibility</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-2 font-mono">Public</td>
              <td className="border p-2 font-mono">name</td>
              <td className="border p-2">Accessible everywhere</td>
            </tr>

            <tr>
              <td className="border p-2 font-mono">Protected</td>
              <td className="border p-2 font-mono">_name</td>
              <td className="border p-2">Accessible but meant for internal use</td>
            </tr>

            <tr>
              <td className="border p-2 font-mono">Private</td>
              <td className="border p-2 font-mono">__name</td>
              <td className="border p-2">Not directly accessible, uses name mangling</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* SUMMARY */}
      <section>
        <h2 className="text-2xl font-semibold">Summary</h2>

        <ul className="list-disc ml-6 mt-3 leading-7">
          <li>Encapsulation hides internal data and methods</li>
          <li><strong>Public</strong> → free access</li>
          <li><strong>Protected</strong> → internal use</li>
          <li><strong>Private</strong> → fully hidden (name mangling)</li>
          <li>Use <strong>Getters/Setters</strong> to control access to private data</li>
          <li>Prevents accidental modification and makes code safe</li>
        </ul>
      </section>

    </article>
  );
}
