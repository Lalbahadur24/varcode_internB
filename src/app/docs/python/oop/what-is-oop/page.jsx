import React from "react";

export default function PythonOOPBasics() {
  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-12 text-slate-700">
      {/* TITLE */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python OOP — Basics, Classes, and Objects
      </h1>

      {/* WHAT IS OOP */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">What is OOP?</h2>
        <p className="mt-3 leading-7">
          <strong>Object-Oriented Programming (OOP)</strong> is a programming
          structure that organizes code around <strong>objects</strong> and{" "}
          <strong>classes</strong>.
        </p>

        <p className="mt-3 leading-7">
          Python is an object-oriented language. OOP makes code cleaner,
          reusable, easier to maintain, and follows the{" "}
          <strong>DRY (Don{"'"}t Repeat Yourself)</strong> principle.
        </p>

        <h3 className="text-xl font-semibold mt-4">Advantages of OOP</h3>
        <ul className="list-disc ml-6 leading-7 mt-2">
          <li>Helps create clean and organized code</li>
          <li>Improves code reuse through classes and objects</li>
          <li>Makes programs easier to maintain and debug</li>
          <li>Supports modular and scalable development</li>
        </ul>
      </section>

      {/* CLASS & OBJECT */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          What are Classes and Objects?
        </h2>

        <p className="mt-3 leading-7">
          A <strong>class</strong> is a blueprint for creating objects. It
          defines how an object behaves and what properties it has.
        </p>

        <p className="mt-3 leading-7">
          An <strong>object</strong> is an instance created from a class. When
          you create an object, it inherits everything defined inside the class.
        </p>

        <h3 className="text-xl font-semibold mt-4">Example Comparison</h3>
        <ul className="list-disc ml-6 leading-7 mt-2">
          <li>
            <strong>Class:</strong> Car — <strong>Objects:</strong> BMW, Audi,
            Tesla
          </li>
          <li>
            <strong>Class:</strong> Fruit — <strong>Objects:</strong> Apple,
            Mango, Banana
          </li>
        </ul>

        {/* CLASS SYNTAX */}
        <h3 className="text-xl font-semibold mt-6">Defining a Class</h3>
        <pre className={codeClass}>
          <code>{`class MyClass:
  x = 10`}</code>
        </pre>

        <p className="mt-3 leading-7">
          This class contains one variable named <strong>x</strong>. A class can
          contain variables (attributes) and functions (methods).
        </p>

        {/* OBJECT CREATION */}
        <h3 className="text-xl font-semibold mt-6">Creating an Object</h3>
        <pre className={codeClass}>
          <code>{`obj = MyClass()
print(obj.x)`}</code>
        </pre>

        <p className="mt-3 leading-7">
          Here, <strong>obj</strong> is an object created from{" "}
          <strong>MyClass</strong>. You can access class variables and methods
          through the object.
        </p>
      </section>

      {/* SUMMARY */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>
        <ul className="list-disc ml-6 leading-7 mt-3">
          <li>
            <strong>OOP</strong> organizes code using classes and objects
          </li>
          <li>
            <strong>Class</strong> = Blueprint or template
          </li>
          <li>
            <strong>Object</strong> = Created from a class
          </li>
          <li>Objects inherit behaviors and properties from their class</li>
          <li>OOP makes code reusable, modular, and clean</li>
        </ul>
      </section>
    </article>
  );
}
