import React from "react";

export default function PythonDictionaries() {
  const dq = String.fromCharCode(34);

  // Base dictionary
  const exDict = `thisdict = {
  ${dq}brand${dq}: ${dq}Ford${dq},
  ${dq}model${dq}: ${dq}Mustang${dq},
  ${dq}year${dq}: 1964
}`;

  const exPrint = `${exDict}
print(thisdict)`;

  const exAccess = `${exDict}
print(thisdict[${dq}brand${dq}])`;

  const exDuplicate = `thisdict = {
  ${dq}brand${dq}: ${dq}Ford${dq},
  ${dq}model${dq}: ${dq}Mustang${dq},
  ${dq}year${dq}: 1964,
  ${dq}year${dq}: 2020
}
print(thisdict)`;

  const exLen = `print(len(thisdict))`;

  const exTypes = `thisdict = {
  ${dq}brand${dq}: ${dq}Ford${dq},
  ${dq}electric${dq}: False,
  ${dq}year${dq}: 1964,
  ${dq}colors${dq}: [${dq}red${dq}, ${dq}white${dq}, ${dq}blue${dq}]
}`;

  const exTypeCheck = `${exDict}
print(type(thisdict))`;

  const exConstructor = `thisdict = dict(name=${dq}John${dq}, age=36, country=${dq}Norway${dq})
print(thisdict)`;

  const exGet = `${exDict}
x = thisdict.get(${dq}model${dq})`;

  const exKeys = `${exDict}
x = thisdict.keys()`;

  const exValues = `${exDict}
x = thisdict.values()`;

  const exItems = `${exDict}
x = thisdict.items()`;

  const exCheck = `${exDict}
if ${dq}model${dq} in thisdict:
  print(${dq}Yes${dq})`;

  const exChange = `${exDict}
thisdict[${dq}year${dq}] = 2018`;

  const exUpdate = `${exDict}
thisdict.update({${dq}year${dq}: 2020})`;

  const exAdd = `${exDict}
thisdict[${dq}color${dq}] = ${dq}red${dq}`;

  const exAddUpdate = `${exDict}
thisdict.update({${dq}color${dq}: ${dq}red${dq}})`;

  const exPop = `${exDict}
thisdict.pop(${dq}model${dq})
print(thisdict)`;

  const exPopItem = `${exDict}
thisdict.popitem()
print(thisdict)`;

  const exDelKey = `${exDict}
del thisdict[${dq}model${dq}]
print(thisdict)`;

  const exDelDict = `${exDict}
del thisdict`;

  const exClear = `${exDict}
thisdict.clear()
print(thisdict)`;

  const exLoopKeys = `for x in thisdict:
  print(x)`;

  const exLoopValues = `for x in thisdict:
  print(thisdict[x])`;

  const exLoopValues2 = `for value in thisdict.values():
  print(value)`;

  const exLoopKeys2 = `for key in thisdict.keys():
  print(key)`;

  const exLoopItems = `for key, value in thisdict.items():
  print(key, value)`;

  const exCopy1 = `mydict = thisdict.copy()
print(mydict)`;

  const exCopy2 = `mydict = dict(thisdict)
print(mydict)`;

  const exNested = `myfamily = {
  ${dq}child1${dq}: {
    ${dq}name${dq}: ${dq}Emil${dq},
    ${dq}year${dq}: 2004
  },
  ${dq}child2${dq}: {
    ${dq}name${dq}: ${dq}Tobias${dq},
    ${dq}year${dq}: 2007
  },
  ${dq}child3${dq}: {
    ${dq}name${dq}: ${dq}Linus${dq},
    ${dq}year${dq}: 2011
  }
}`;

  const exAccessNested = `print(myfamily[${dq}child2${dq}][${dq}name${dq}])`;

  const methods = [
    ["clear()", "Removes all dictionary elements"],
    ["copy()", "Returns a shallow copy"],
    ["fromkeys()", "Creates a new dictionary from keys"],
    ["get()", "Returns the value of a key"],
    ["items()", "Returns dictionary items (key,value)"],
    ["keys()", "Returns dictionary keys"],
    ["pop()", "Removes the specified key"],
    ["popitem()", "Removes last inserted item"],
    ["setdefault()", "Returns value; inserts if not exists"],
    ["update()", "Updates dictionary with pairs"],
    ["values()", "Returns all values"],
  ];

  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python Dictionaries — Full Cheat Sheet
      </h1>

      <p className="text-slate-700 leading-relaxed">
        A <strong>dictionary</strong> stores data in{" "}
        <strong>key-value pairs</strong>. Dictionaries are:
      </p>
      <ul className="list-disc pl-6 text-slate-700 leading-relaxed">
        <li>
          <strong>Ordered</strong> (Python 3.7+)
        </li>
        <li>
          <strong>Mutable / Changeable</strong>
        </li>
        <li>
          <strong>No duplicate keys allowed</strong>
        </li>
      </ul>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* INTRO */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Create a Dictionary
          </h2>
          <p className="mt-2">
            Dictionaries are written using curly braces with key-value pairs.
          </p>
          <pre className={codeClass}>
            <code>{exPrint}</code>
          </pre>
        </section>

        {/* ACCESS ITEMS */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Access Dictionary Items
          </h2>
          <p className="mt-2">Use the key name inside square brackets.</p>
          <pre className={codeClass}>
            <code>{exAccess}</code>
          </pre>
        </section>

        {/* DUPLICATES */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Duplicate Keys
          </h2>
          <p className="mt-2">Duplicate keys overwrite the earlier value.</p>
          <pre className={codeClass}>
            <code>{exDuplicate}</code>
          </pre>
        </section>

        {/* LENGTH */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Dictionary Length
          </h2>
          <p className="mt-2">
            Use <strong>len()</strong> to count items.
          </p>
          <pre className={codeClass}>
            <code>{exLen}</code>
          </pre>
        </section>

        {/* DATA TYPES */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Values Can Be Any Data Type
          </h2>
          <pre className={codeClass}>
            <code>{exTypes}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">Check Dictionary Type</h3>
          <pre className={codeClass}>
            <code>{exTypeCheck}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">
            Using dict() Constructor
          </h3>
          <pre className={codeClass}>
            <code>{exConstructor}</code>
          </pre>
        </section>

        {/* ACCESS METHODS */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Access With Methods
          </h2>
          <pre className={codeClass}>
            <code>{exGet}</code>
          </pre>
          <pre className={codeClass}>
            <code>{exKeys}</code>
          </pre>
          <pre className={codeClass}>
            <code>{exValues}</code>
          </pre>
          <pre className={codeClass}>
            <code>{exItems}</code>
          </pre>
          <pre className={codeClass}>
            <code>{exCheck}</code>
          </pre>
        </section>

        {/* MODIFY */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Modify Dictionary Items
          </h2>
          <p className="mt-2">Change values by reassigning to their key.</p>
          <pre className={codeClass}>
            <code>{exChange}</code>
          </pre>
          <pre className={codeClass}>
            <code>{exUpdate}</code>
          </pre>
        </section>

        {/* ADD */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Add New Items
          </h2>
          <p className="mt-2">
            Use a new key name or <strong>update()</strong>.
          </p>
          <pre className={codeClass}>
            <code>{exAdd}</code>
          </pre>
          <pre className={codeClass}>
            <code>{exAddUpdate}</code>
          </pre>
        </section>

        {/* REMOVE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Remove Items
          </h2>
          <p className="mt-2">Dictionaries provide many removal methods.</p>

          <pre className={codeClass}>
            <code>{exPop}</code>
          </pre>
          <pre className={codeClass}>
            <code>{exPopItem}</code>
          </pre>
          <pre className={codeClass}>
            <code>{exDelKey}</code>
          </pre>
          <pre className={codeClass}>
            <code>{exDelDict}</code>
          </pre>
          <pre className={codeClass}>
            <code>{exClear}</code>
          </pre>
        </section>

        {/* LOOPING */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Loop Through Dictionary
          </h2>
          <p className="mt-2">You can loop through keys, values, or pairs.</p>

          <pre className={codeClass}>
            <code>{exLoopKeys}</code>
          </pre>
          <pre className={codeClass}>
            <code>{exLoopValues}</code>
          </pre>
          <pre className={codeClass}>
            <code>{exLoopValues2}</code>
          </pre>
          <pre className={codeClass}>
            <code>{exLoopKeys2}</code>
          </pre>
          <pre className={codeClass}>
            <code>{exLoopItems}</code>
          </pre>
        </section>

        {/* COPY */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Copy a Dictionary
          </h2>
          <p className="mt-2">
            Use <strong>copy()</strong> or <strong>dict()</strong> to avoid
            reference issues.
          </p>

          <pre className={codeClass}>
            <code>{exCopy1}</code>
          </pre>
          <pre className={codeClass}>
            <code>{exCopy2}</code>
          </pre>
        </section>

        {/* NESTED */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Nested Dictionaries
          </h2>
          <p className="mt-2">Dictionaries can contain dictionaries.</p>

          <pre className={codeClass}>
            <code>{exNested}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">Access Nested Item</h3>
          <pre className={codeClass}>
            <code>{exAccessNested}</code>
          </pre>
        </section>

        {/* METHODS TABLE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Dictionary Methods
          </h2>

          <table className="w-full border mt-3 text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Method</th>
                <th className="border p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {methods.map(([name, desc], index) => (
                <tr key={index}>
                  <td className="border p-2 font-mono">{name}</td>
                  <td className="border p-2">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
