import React from "react";

export default function PythonTuples() {
  const dq = String.fromCharCode(34);

  // Code examples
  const exTuple = `mytuple = (${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq})`;
  const exCreate = `thistuple = (${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq})
print(thistuple)`;
  const exDup = `thistuple = (${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}, ${dq}apple${dq}, ${dq}cherry${dq})
print(thistuple)`;
  const exLen = `thistuple = (${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq})
print(len(thistuple))`;
  const exOneItem = `thistuple = (${dq}apple${dq},)
print(type(thistuple))`;
  const exNotTuple = `thistuple = (${dq}apple${dq})
print(type(thistuple))`;

  const exDataTypes = `tuple1 = (${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq})
tuple2 = (1, 5, 7, 9, 3)
tuple3 = (True, False, False)`;
  const exMixed = `tuple1 = (${dq}abc${dq}, 34, True, 40, ${dq}male${dq})`;
  const exType = `mytuple = (${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq})
print(type(mytuple))`;
  const exConstructor = `thistuple = tuple((${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}))
print(thistuple)`;

  const exAccess = `thistuple = (${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq})
print(thistuple[1])`;
  const exNegative = `thistuple = (${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq})
print(thistuple[-1])`;
  const exRange = `thistuple = (${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}, ${dq}orange${dq}, ${dq}kiwi${dq}, ${dq}melon${dq}, ${dq}mango${dq})
print(thistuple[2:5])`;

  const exChange = `x = (${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq})
y = list(x)
y[1] = ${dq}kiwi${dq}
x = tuple(y)
print(x)`;

  const exAdd1 = `thistuple = (${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq})
y = list(thistuple)
y.append(${dq}orange${dq})
thistuple = tuple(y)`;

  const exAdd2 = `thistuple = (${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq})
y = (${dq}orange${dq},)
thistuple += y
print(thistuple)`;

  const exPack = `fruits = (${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq})`;
  const exUnpack = `fruits = (${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq})
(green, yellow, red) = fruits`;

  const exAsterisk1 = `fruits = (${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}, ${dq}strawberry${dq}, ${dq}raspberry${dq})
(green, yellow, *red) = fruits`;

  const exAsterisk2 = `fruits = (${dq}apple${dq}, ${dq}mango${dq}, ${dq}papaya${dq}, ${dq}pineapple${dq}, ${dq}cherry${dq})
(green, *tropic, red) = fruits`;

  const methods = [
    {
      name: "count()",
      desc: "Returns the number of times a value occurs in a tuple.",
    },
    {
      name: "index()",
      desc: "Returns the index of the first occurrence of a value.",
    },
  ];

  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python Tuples — Full Notes
      </h1>

      <p className="text-slate-700 leading-relaxed">
        A <strong>tuple</strong> is an ordered, unchangeable collection in
        Python. Tuples are used to store multiple items in a single variable and
        are written using <strong>round brackets ( )</strong>.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* BASICS */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            What is a Tuple?
          </h2>

          <p className="mt-2">Example of creating a tuple:</p>
          <pre className={codeClass}>
            <code>{exTuple}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">Printing a Tuple</h3>
          <pre className={codeClass}>
            <code>{exCreate}</code>
          </pre>
        </section>

        {/* DUPLICATES */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Tuples Allow Duplicate Values
          </h2>
          <p className="mt-2">
            Since tuples are indexed, duplicate values are allowed.
          </p>
          <pre className={codeClass}>
            <code>{exDup}</code>
          </pre>
        </section>

        {/* LENGTH */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Tuple Length
          </h2>
          <p className="mt-2">
            Use <code>len()</code> to get the number of elements in a tuple.
          </p>
          <pre className={codeClass}>
            <code>{exLen}</code>
          </pre>
        </section>

        {/* ONE ITEM */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Tuple With One Item
          </h2>
          <p className="mt-2">
            A tuple with one item <strong>must</strong> include a comma,
            otherwise Python treats it as a string.
          </p>
          <pre className={codeClass}>
            <code>{exOneItem}</code>
          </pre>
          <pre className={codeClass}>
            <code>{exNotTuple}</code>
          </pre>
        </section>

        {/* DATA TYPES */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Data Types in Tuples
          </h2>
          <p className="mt-2">
            Tuples can contain any data type, including mixed types.
          </p>
          <pre className={codeClass}>
            <code>{exDataTypes}</code>
          </pre>
          <pre className={codeClass}>
            <code>{exMixed}</code>
          </pre>
        </section>

        {/* TYPE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Tuple Type</h2>
          <p className="mt-2">
            Tuples belong to the <strong>tuple</strong> data type.
          </p>
          <pre className={codeClass}>
            <code>{exType}</code>
          </pre>
        </section>

        {/* CONSTRUCTOR */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            tuple() Constructor
          </h2>
          <p className="mt-2">
            You can also create a tuple using the <code>tuple()</code>{" "}
            constructor.
          </p>
          <pre className={codeClass}>
            <code>{exConstructor}</code>
          </pre>
        </section>

        {/* ACCESS */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Access Tuple Items
          </h2>
          <p className="mt-2">
            Tuple items can be accessed using indexes or slicing.
          </p>

          <h3 className="text-lg font-semibold mt-3">Access by Index</h3>
          <pre className={codeClass}>
            <code>{exAccess}</code>
          </pre>

          <h3 className="text-lg font-semibold mt-4">Negative Indexing</h3>
          <pre className={codeClass}>
            <code>{exNegative}</code>
          </pre>

          <h3 className="text-lg font-semibold mt-4">Range of Indexes</h3>
          <pre className={codeClass}>
            <code>{exRange}</code>
          </pre>
        </section>

        {/* UPDATE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Updating Tuples
          </h2>
          <p className="mt-2">
            Tuples are <strong>immutable</strong>, meaning their values cannot
            be changed directly. However, you can convert a tuple into a list,
            modify it, and convert it back.
          </p>

          <h3 className="text-lg font-semibold mt-3">
            Change Tuple Values (Workaround)
          </h3>
          <pre className={codeClass}>
            <code>{exChange}</code>
          </pre>

          <h3 className="text-lg font-semibold mt-4">
            Add Items (via list conversion)
          </h3>
          <pre className={codeClass}>
            <code>{exAdd1}</code>
          </pre>

          <h3 className="text-lg font-semibold mt-4">Add Tuple to Tuple</h3>
          <pre className={codeClass}>
            <code>{exAdd2}</code>
          </pre>
        </section>

        {/* UNPACK */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Tuple Packing & Unpacking
          </h2>

          <h3 className="text-lg font-semibold mt-2">Packing</h3>
          <pre className={codeClass}>
            <code>{exPack}</code>
          </pre>

          <h3 className="text-lg font-semibold mt-4">Unpacking</h3>
          <pre className={codeClass}>
            <code>{exUnpack}</code>
          </pre>

          <h3 className="text-lg font-semibold mt-4">Using Asterisk (*)</h3>
          <p className="mt-1">
            Asterisk collects remaining values into a list while unpacking.
          </p>
          <pre className={codeClass}>
            <code>{exAsterisk1}</code>
          </pre>
          <pre className={codeClass}>
            <code>{exAsterisk2}</code>
          </pre>
        </section>

        {/* METHODS */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Tuple Methods
          </h2>
          <p className="mt-2">Tuples have only two built-in methods:</p>

          <table className="w-full border mt-3 text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Method</th>
                <th className="border p-2">Definition</th>
              </tr>
            </thead>
            <tbody>
              {methods.map((m, i) => (
                <tr key={i}>
                  <td className="border p-2 font-mono">{m.name}</td>
                  <td className="border p-2">{m.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
