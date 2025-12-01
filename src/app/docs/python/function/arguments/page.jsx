import React from "react";

export default function PythonFunctionArguments() {
  const dq = String.fromCharCode(34);

  // BASIC ARGUMENTS
  const exOneArg = `def my_function(fname):
  print(fname + " Refsnes")

my_function("Emil")
my_function("Tobias")
my_function("Linus")`;

  const exParamVsArg = `def my_function(name):  # name is a *parameter*
  print("Hello", name)

my_function("Emil")  # "Emil" is an *argument*`;

  const exTwoArgs = `def my_function(fname, lname):
  print(fname + " " + lname)

my_function("Emil", "Refsnes")`;

  const exTwoArgsError = `def my_function(fname, lname):
  print(fname + " " + lname)

my_function("Emil")  # ERROR: missing argument`;

  // DEFAULT PARAMETERS
  const exDefaultParam = `def my_function(name="friend"):
  print("Hello", name)

my_function("Emil")
my_function("Tobias")
my_function()
my_function("Linus")`;

  const exDefaultCountry = `def my_function(country="Norway"):
  print("I am from", country)

my_function("Sweden")
my_function("India")
my_function()
my_function("Brazil")`;

  // KEYWORD ARGUMENTS
  const exKeyword = `def my_function(animal, name):
  print("I have a", animal)
  print("My", animal + "'s name is", name)

my_function(animal="dog", name="Buddy")`;

  const exKeywordAnyOrder = `def my_function(animal, name):
  print("I have a", animal)
  print("My", animal + "'s name is", name)

my_function(name="Buddy", animal="dog")`;

  // POSITIONAL ARGUMENTS
  const exPositional = `def my_function(animal, name):
  print("I have a", animal)
  print("My", animal + "'s name is", name)

my_function("dog", "Buddy")`;

  const exPositionalWrong = `def my_function(animal, name):
  print("I have a", animal)
  print("My", animal + "'s name is", name)

my_function("Buddy", "dog")  # wrong order`;

  // MIXED ARGUMENTS
  const exMixing = `def my_function(animal, name, age):
  print("I have a", age, "year old", animal, "named", name)

my_function("dog", name="Buddy", age=5)`;

  // PASSING DATA TYPES
  const exListArg = `def my_function(fruits):
  for fruit in fruits:
    print(fruit)

my_fruits = ["apple", "banana", "cherry"]
my_function(my_fruits)`;

  const exDictArg = `def my_function(person):
  print("Name:", person["name"])
  print("Age:", person["age"])

my_person = {"name": "Emil", "age": 25}
my_function(my_person)`;

  // RETURN VALUES
  const exReturnBasic = `def my_function(x, y):
  return x + y

result = my_function(5, 3)
print(result)`;

  const exReturnList = `def my_function():
  return ["apple", "banana", "cherry"]

fruits = my_function()
print(fruits[0])
print(fruits[1])
print(fruits[2])`;

  const exReturnTuple = `def my_function():
  return (10, 20)

x, y = my_function()
print("x:", x)
print("y:", y)`;

  // POSITIONAL-ONLY
  const exPosOnly = `def my_function(name, /):
  print("Hello", name)

my_function("Emil")`;

  const exPosOnlyErr = `def my_function(name, /):
  print("Hello", name)

my_function(name="Emil")  # ERROR`;

  // KEYWORD-ONLY
  const exKeyOnly = `def my_function(*, name):
  print("Hello", name)

my_function(name="Emil")`;

  const exKeyOnlyErr = `def my_function(*, name):
  print("Hello", name)

my_function("Emil")  # ERROR`;

  // BOTH COMBINED
  const exBoth = `def my_function(a, b, /, *, c, d):
  return a + b + c + d

result = my_function(5, 10, c=15, d=20)
print(result)`;

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-10">

      <h1 className="text-4xl font-bold">Python Function Arguments — Full Cheat Sheet</h1>

      {/* BASIC ARGUMENTS */}
      <section>
        <h2 className="text-2xl font-semibold">Arguments</h2>
        <p className="mt-2">
          Arguments are values passed into a function when calling it. You define parameters
          in the function definition, and send arguments when calling the function.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exOneArg}</code></pre>
      </section>

      {/* PARAMETER vs ARGUMENT */}
      <section>
        <h2 className="text-2xl font-semibold">Parameters vs Arguments</h2>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Parameter</strong>: variable inside function definition</li>
          <li><strong>Argument</strong>: actual value passed when calling</li>
        </ul>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exParamVsArg}</code></pre>
      </section>

      {/* NUMBER OF ARGUMENTS */}
      <section>
        <h2 className="text-2xl font-semibold">Number of Arguments</h2>
        <p className="mt-2">Must match exactly unless defaults are used.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exTwoArgs}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Error Example</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exTwoArgsError}</code></pre>
      </section>

      {/* DEFAULT PARAMETERS */}
      <section>
        <h2 className="text-2xl font-semibold">Default Parameter Values</h2>
        <p className="mt-2">If no argument is provided, the default value is used.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exDefaultParam}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Another Example</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exDefaultCountry}</code></pre>
      </section>

      {/* KEYWORD ARGUMENTS */}
      <section>
        <h2 className="text-2xl font-semibold">Keyword Arguments</h2>
        <p className="mt-2">
          You can specify parameters by name. Order does not matter.
        </p>

        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exKeyword}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Order Does Not Matter</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exKeywordAnyOrder}</code></pre>
      </section>

      {/* POSITIONAL ARGUMENTS */}
      <section>
        <h2 className="text-2xl font-semibold">Positional Arguments</h2>
        <p className="mt-2">Arguments must be in correct order.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exPositional}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Wrong Order Example</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exPositionalWrong}</code></pre>
      </section>

      {/* MIXING */}
      <section>
        <h2 className="text-2xl font-semibold">Mixing Positional and Keyword Arguments</h2>
        <p className="mt-2">
          Positional arguments must come before keyword arguments.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exMixing}</code></pre>
      </section>

      {/* DATA TYPES */}
      <section>
        <h2 className="text-2xl font-semibold">Passing Different Data Types</h2>
        <h3 className="text-xl font-semibold mt-3">List as Argument</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exListArg}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Dictionary as Argument</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exDictArg}</code></pre>
      </section>

      {/* RETURN VALUES */}
      <section>
        <h2 className="text-2xl font-semibold">Return Values</h2>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exReturnBasic}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Returning a List</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exReturnList}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Returning a Tuple</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exReturnTuple}</code></pre>
      </section>

      {/* POSITIONAL ONLY */}
      <section>
        <h2 className="text-2xl font-semibold">Positional-Only Arguments</h2>
        <p className="mt-2">Arguments before <strong>/</strong> can ONLY be positional.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exPosOnly}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Error Example</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exPosOnlyErr}</code></pre>
      </section>

      {/* KEYWORD ONLY */}
      <section>
        <h2 className="text-2xl font-semibold">Keyword-Only Arguments</h2>
        <p className="mt-2">Arguments after <strong>*</strong> must be keyword arguments.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exKeyOnly}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Error Example</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exKeyOnlyErr}</code></pre>
      </section>

      {/* COMBINED */}
      <section>
        <h2 className="text-2xl font-semibold">
          Combining Positional-Only and Keyword-Only
        </h2>
        <p className="mt-2">
          Arguments before <strong>/</strong> are positional-only,
          arguments after <strong>*</strong> are keyword-only.
        </p>

        <pre className="p-3 rounded border bg-gray-50 mt-4"><code>{exBoth}</code></pre>
      </section>

    </article>
  );
}
