import React from "react";

export default function PythonEncapsulation() {
  const dq = String.fromCharCode(34);

  // MASTER CODE BOX STYLE
  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-12 text-slate-700">
      {/* TITLE */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python Encapsulation — Complete Cheat Sheet
      </h1>

      {/* INTRO */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          What is Encapsulation?
        </h2>

        <p className="mt-3 leading-7">
          <strong>Encapsulation</strong> is an OOP concept used to hide the
          internal data of a class and protect it from being accessed or
          modified directly.
        </p>

        <p className="mt-3 leading-7">
          In Python, encapsulation is handled using:
        </p>

        <ul className="list-disc ml-6 mt-3 leading-7">
          <li>
            <strong>Public Members</strong> — accessible everywhere
          </li>
          <li>
            <strong>Protected Members</strong> — single underscore (
            <code>_value</code>)
          </li>
          <li>
            <strong>Private Members</strong> — double underscore (
            <code>__value</code>)
          </li>
        </ul>
      </section>

      {/* PUBLIC MEMBERS */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Public Members
        </h2>

        <p className="mt-3 leading-7">
          Public attributes and methods can be accessed from anywhere in the
          program.
        </p>

        <pre className={codeClass}>
          {`class Person:
  def __init__(self, name):
    self.name = name  # Public attribute

p = Person("Emil")
print(p.name)`}
        </pre>
      </section>

      {/* PROTECTED MEMBERS */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Protected Members (_variable)
        </h2>

        <p className="mt-3 leading-7">
          Identified using a <strong>single underscore</strong>. They are meant
          for internal use but still technically accessible.
        </p>

        <pre className={codeClass}>
          {`class Student:
  def __init__(self):
    self._grade = "A"  # Protected

s = Student()
print(s._grade)  # Accessible but not recommended`}
        </pre>
      </section>

      {/* PRIVATE MEMBERS */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Private Members (__variable)
        </h2>

        <p className="mt-3 leading-7">
          Private attributes cannot be accessed directly from outside the class.
          They use <strong>double underscores</strong>.
        </p>

        <pre className={codeClass}>
          {`class Bank:
  def __init__(self, balance):
    self.__balance = balance  # Private attribute

b = Bank(2000)
print(b.__balance)  # Error!`}
        </pre>

        <p className="mt-3 leading-7 font-semibold">
          Private attributes use <strong>name mangling</strong>. Python renames{" "}
          <code>__balance</code> → <code>_Bank__balance</code>.
        </p>

        <pre className={codeClass}>
          {`print(b._Bank__balance)  # Works, but not recommended`}
        </pre>
      </section>

      {/* GETTERS AND SETTERS */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Getters and Setters (Safe Access)
        </h2>

        <p className="mt-3 leading-7">
          Getters & Setters safely control access to private data.
        </p>

        <pre className={codeClass}>
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

      {/* PRIVATE METHODS */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Private Methods
        </h2>

        <p className="mt-3 leading-7">
          Methods can also be private using <strong>double underscores</strong>.
        </p>

        <pre className={codeClass}>
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
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Levels of Encapsulation
        </h2>

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
              <td className="border p-2">
                Accessible, but meant for internal use
              </td>
            </tr>

            <tr>
              <td className="border p-2 font-mono">Private</td>
              <td className="border p-2 font-mono">__name</td>
              <td className="border p-2">
                Not directly accessible, uses name mangling
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* SUMMARY */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>

        <ul className="list-disc ml-6 mt-3 leading-7">
          <li>Encapsulation hides internal data and methods</li>
          <li>
            <strong>Public</strong>: free access
          </li>
          <li>
            <strong>Protected</strong>: intended for internal use
          </li>
          <li>
            <strong>Private</strong>: fully hidden (via name mangling)
          </li>
          <li>
            Use <strong>Getters/Setters</strong> for safe access
          </li>
          <li>Makes your code secure and prevents accidental modification</li>
        </ul>
      </section>
    </article>
  );
}
