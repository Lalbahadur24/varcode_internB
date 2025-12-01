import React from "react";

export default function PythonPolymorphism() {
  const dq = String.fromCharCode(34);

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
    <article className="max-w-4xl mx-auto p-6 space-y-14">

      <h1 className="text-4xl font-bold">Python Polymorphism — Complete Cheat Sheet</h1>

      {/* INTRO */}
      <section>
        <h2 className="text-2xl font-semibold">What is Polymorphism?</h2>
        <p className="mt-3 leading-7">
          <strong>Polymorphism</strong> means <em>"many forms"</em>.  
          In OOP, it allows different classes to have methods with the <strong>same name</strong>  
          that behave <strong>differently</strong>.
        </p>

        <p className="mt-3 leading-7">
          Example: Many objects can have a method named <code>sound()</code>,  
          but each object can implement it in its own way.
        </p>
      </section>

      {/* BASIC EXAMPLE */}
      <section>
        <h2 className="text-2xl font-semibold">Basic Polymorphism Example</h2>
        <pre className="mt-3 p-3 bg-gray-50 border rounded"><code>{exBasic}</code></pre>
      </section>

      {/* OVERRIDING */}
      <section>
        <h2 className="text-2xl font-semibold">Polymorphism Through Method Overriding</h2>
        <p className="mt-2 leading-7">
          Child classes override parent class methods to give different behaviour.
        </p>
        <pre className="mt-3 p-3 bg-gray-50 border rounded"><code>{exOverride}</code></pre>
      </section>

      {/* FUNCTION POLYMORPHISM */}
      <section>
        <h2 className="text-2xl font-semibold">Polymorphism with Functions</h2>
        <p className="mt-2 leading-7">
          Functions can take objects of different classes and call the same-named method.
        </p>
        <pre className="mt-3 p-3 bg-gray-50 border rounded"><code>{exPolymorphicFunc}</code></pre>
      </section>

      {/* DUCK TYPING */}
      <section>
        <h2 className="text-2xl font-semibold">Duck Typing</h2>
        <p className="mt-2 leading-7">
          Python follows <strong>"If it walks like a duck, it is a duck"</strong>.  
          If an object has the required method, Python runs it, regardless of its class.
        </p>
        <pre className="mt-3 p-3 bg-gray-50 border rounded"><code>{exDuckTyping}</code></pre>
      </section>

      {/* INHERITANCE EXAMPLE */}
      <section>
        <h2 className="text-2xl font-semibold">Polymorphism in Inheritance</h2>
        <pre className="mt-3 p-3 bg-gray-50 border rounded"><code>{exInheritPoly}</code></pre>
      </section>

      {/* TYPES TABLE */}
      <section>
        <h2 className="text-2xl font-semibold">Types of Polymorphism in Python</h2>

        <table className="w-full border mt-4 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Type</th>
              <th className="border p-2">Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-2 font-mono">Compile-Time (Not in Python)</td>
              <td className="border p-2">Python doesn't support function overloading by default</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">Run-Time Polymorphism</td>
              <td className="border p-2">Achieved using method overriding</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">Duck Typing</td>
              <td className="border p-2">If object has a method, Python runs it</td>
            </tr>
            <tr>
              <td className="border p-2 font-mono">Operator Polymorphism</td>
              <td className="border p-2">Same operator behaves differently (`+` adds numbers, joins strings)</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* SUMMARY */}
      <section>
        <h2 className="text-2xl font-semibold">Summary</h2>

        <ul className="list-disc ml-6 mt-3 leading-7">
          <li>Polymorphism allows the same method name to behave differently</li>
          <li>Achieved using method overriding in inheritance</li>
          <li>Functions can accept any object with expected method</li>
          <li>Python uses duck typing — behavior matters, not the class</li>
          <li>Improves flexibility and reduces code repetition</li>
        </ul>
      </section>

    </article>
  );
}
