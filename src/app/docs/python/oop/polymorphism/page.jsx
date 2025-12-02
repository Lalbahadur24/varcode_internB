import React from "react";

export default function PythonPolymorphism() {
  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

  // EXAMPLES
  const exBasic = `class Bird:
  def sound(self):
    print("Chirp")

class Dog:
  def sound(self):
    print("Bark")

for animal in (Bird(), Dog()):
  animal.sound()`;

  const exOverride = `class Animal:
  def speak(self):
    print("Animal speaks")

class Cat(Animal):
  def speak(self):
    print("Meow")

class Dog(Animal):
  def speak(self):
    print("Bark")

for pet in (Cat(), Dog()):
  pet.speak()`;

  const exPolymorphicFunc = `def greet(obj):
  obj.say_hello()

class English:
  def say_hello(self):
    print("Hello")

class Spanish:
  def say_hello(self):
    print("Hola")

greet(English())
greet(Spanish())`;

  const exDuckTyping = `class Car:
  def start(self):
    print("Car engine started")

class Laptop:
  def start(self):
    print("Laptop turning on")

def begin(device):
  device.start()

begin(Car())
begin(Laptop())`;

  const exInheritPoly = `class Shape:
  def area(self):
    return "Undefined"

class Square(Shape):
  def __init__(self, side):
    self.side = side
  def area(self):
    return self.side * self.side

class Circle(Shape):
  def __init__(self, r):
    self.r = r
  def area(self):
    return 3.14 * self.r * self.r

for s in (Square(4), Circle(3)):
  print(s.area())`;

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-14 text-slate-700">
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python Polymorphism — Complete Cheat Sheet
      </h1>

      {/* INTRO */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          What is Polymorphism?
        </h2>

        <p className="mt-3 leading-7">
          <strong>Polymorphism</strong> means <em>"many forms"</em>. In OOP, it
          allows different classes to have methods with the{" "}
          <strong>same name</strong> that behave <strong>differently</strong>.
        </p>

        <p className="mt-3 leading-7">
          Example: Different objects can have a method named{" "}
          <code>sound()</code>, but each object implements it in its own way.
        </p>
      </section>

      {/* BASIC EXAMPLE */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Basic Polymorphism Example
        </h2>

        <pre className={codeClass}>
          <code>{exBasic}</code>
        </pre>
      </section>

      {/* OVERRIDING */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Polymorphism Through Method Overriding
        </h2>

        <p className="mt-2 leading-7">
          Child classes override parent methods to give their own behaviour.
        </p>

        <pre className={codeClass}>
          <code>{exOverride}</code>
        </pre>
      </section>

      {/* FUNCTION POLYMORPHISM */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Polymorphism with Functions
        </h2>

        <p className="mt-2 leading-7">
          A single function can take different types of objects and call the
          same-named method on them.
        </p>

        <pre className={codeClass}>
          <code>{exPolymorphicFunc}</code>
        </pre>
      </section>

      {/* DUCK TYPING */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Duck Typing in Python
        </h2>

        <p className="mt-2 leading-7">
          Python follows{" "}
          <strong>
            {" "}
            "If it walks like a duck and quacks like a duck, it is a duck"
          </strong>
          . If an object has the required method, Python calls it, regardless of
          the class.
        </p>

        <pre className={codeClass}>
          <code>{exDuckTyping}</code>
        </pre>
      </section>

      {/* INHERITANCE EXAMPLE */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Polymorphism in Inheritance
        </h2>

        <pre className={codeClass}>
          <code>{exInheritPoly}</code>
        </pre>
      </section>

      {/* TYPES TABLE */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Types of Polymorphism in Python
        </h2>

        <table className="w-full border mt-4 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Type</th>
              <th className="border p-2">Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-2 font-mono">
                Compile-Time (Not in Python)
              </td>
              <td className="border p-2">
                Python does not support traditional function overloading by
                signature.
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">Run-Time Polymorphism</td>
              <td className="border p-2">
                Achieved mainly using method overriding in inheritance.
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">Duck Typing</td>
              <td className="border p-2">
                If an object has the expected method, Python runs it.
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">Operator Polymorphism</td>
              <td className="border p-2">
                Same operator behaves differently (for example, <code>+</code>{" "}
                adds numbers, concatenates strings, or extends lists).
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* SUMMARY */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>

        <ul className="list-disc ml-6 mt-3 leading-7">
          <li>
            Polymorphism allows the same method name to behave differently on
            different objects.
          </li>
          <li>Method overriding in inheritance is the most common pattern.</li>
          <li>
            Functions can work with any object that provides the expected
            method.
          </li>
          <li>
            Python relies on duck typing: behavior matters more than type.
          </li>
          <li>
            Polymorphism improves flexibility and reduces code repetition.
          </li>
        </ul>
      </section>
    </article>
  );
}
