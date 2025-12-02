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

  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python Function Arguments — Full Cheat Sheet
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Function <strong>arguments</strong> are the values you pass when calling
        a function. You define <strong>parameters</strong> in the function
        definition and supply <strong>arguments</strong> when you call it.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* BASIC ARGUMENTS */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Basic Arguments
          </h2>
          <p className="mt-2">
            A simple function with one parameter, called multiple times with
            different arguments:
          </p>
          <pre className={codeClass}>
            <code>{exOneArg}</code>
          </pre>
        </section>

        {/* PARAMETER vs ARGUMENT */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Parameters vs Arguments
          </h2>
          <ul className="list-disc ml-6 mt-2">
            <li>
              <strong>Parameter</strong>: variable in the function definition.
            </li>
            <li>
              <strong>Argument</strong>: actual value you pass during the call.
            </li>
          </ul>
          <pre className={codeClass}>
            <code>{exParamVsArg}</code>
          </pre>
        </section>

        {/* NUMBER OF ARGUMENTS */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Number of Arguments
          </h2>
          <p className="mt-2">
            By default, the number of arguments must match the number of
            parameters.
          </p>
          <pre className={codeClass}>
            <code>{exTwoArgs}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">Error Example</h3>
          <pre className={codeClass}>
            <code>{exTwoArgsError}</code>
          </pre>
        </section>

        {/* DEFAULT PARAMETERS */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Default Parameter Values
          </h2>
          <p className="mt-2">
            You can give parameters default values. If the argument is omitted,
            the default is used.
          </p>
          <pre className={codeClass}>
            <code>{exDefaultParam}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">Another Example</h3>
          <pre className={codeClass}>
            <code>{exDefaultCountry}</code>
          </pre>
        </section>

        {/* KEYWORD ARGUMENTS */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Keyword Arguments
          </h2>
          <p className="mt-2">
            With <strong>keyword arguments</strong>, you specify which parameter
            each value belongs to.
          </p>

          <pre className={codeClass}>
            <code>{exKeyword}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">Order Does Not Matter</h3>
          <pre className={codeClass}>
            <code>{exKeywordAnyOrder}</code>
          </pre>
        </section>

        {/* POSITIONAL ARGUMENTS */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Positional Arguments
          </h2>
          <p className="mt-2">
            In positional arguments, the <strong>order</strong> decides which
            value goes to which parameter.
          </p>
          <pre className={codeClass}>
            <code>{exPositional}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">Wrong Order Example</h3>
          <pre className={codeClass}>
            <code>{exPositionalWrong}</code>
          </pre>
        </section>

        {/* MIXING */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Mixing Positional and Keyword Arguments
          </h2>
          <p className="mt-2">
            <strong>Rule:</strong> positional arguments must always come{" "}
            <strong>before</strong> keyword arguments.
          </p>
          <pre className={codeClass}>
            <code>{exMixing}</code>
          </pre>
        </section>

        {/* DATA TYPES */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Passing Different Data Types
          </h2>

          <h3 className="text-xl font-semibold mt-3">List as Argument</h3>
          <pre className={codeClass}>
            <code>{exListArg}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">Dictionary as Argument</h3>
          <pre className={codeClass}>
            <code>{exDictArg}</code>
          </pre>
        </section>

        {/* RETURN VALUES */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Return Values
          </h2>
          <p className="mt-2">
            Use <code>return</code> to send data back from a function.
          </p>
          <pre className={codeClass}>
            <code>{exReturnBasic}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">Returning a List</h3>
          <pre className={codeClass}>
            <code>{exReturnList}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">Returning a Tuple</h3>
          <pre className={codeClass}>
            <code>{exReturnTuple}</code>
          </pre>
        </section>

        {/* POSITIONAL ONLY */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Positional-Only Arguments
          </h2>
          <p className="mt-2">
            Arguments before <strong>/</strong> are{" "}
            <strong>positional-only</strong>. They cannot be passed as keyword
            arguments.
          </p>
          <pre className={codeClass}>
            <code>{exPosOnly}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">Error Example</h3>
          <pre className={codeClass}>
            <code>{exPosOnlyErr}</code>
          </pre>
        </section>

        {/* KEYWORD ONLY */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Keyword-Only Arguments
          </h2>
          <p className="mt-2">
            Arguments after <strong>*</strong> are <strong>keyword-only</strong>
            . You must call them using the parameter name.
          </p>
          <pre className={codeClass}>
            <code>{exKeyOnly}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">Error Example</h3>
          <pre className={codeClass}>
            <code>{exKeyOnlyErr}</code>
          </pre>
        </section>

        {/* COMBINED */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Combining Positional-Only and Keyword-Only
          </h2>
          <p className="mt-2">
            Here, <code>a</code> and <code>b</code> are positional-only, and{" "}
            <code>c</code>, <code>d</code> are keyword-only.
          </p>

          <pre className={codeClass}>
            <code>{exBoth}</code>
          </pre>
        </section>
      </div>
    </div>
  );
}
