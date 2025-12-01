import React from "react";

export default function PythonSets() {
  const dq = String.fromCharCode(34);

  // Examples
  const exSet = `myset = {${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}}`;
  const exCreate = `thisset = {${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}}
print(thisset)`;

  const exDup = `thisset = {${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}, ${dq}apple${dq}}
print(thisset)`;

  const exTrue1 = `thisset = {${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}, True, 1, 2}
print(thisset)`;

  const exFalse0 = `thisset = {${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}, False, True, 0}
print(thisset)`;

  const exLen = `thisset = {${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}}
print(len(thisset))`;

  const exTypes = `set1 = {${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}}
set2 = {1, 5, 7, 9, 3}
set3 = {True, False, False}`;

  const exMixed = `set1 = {${dq}abc${dq}, 34, True, 40, ${dq}male${dq}}`;

  const exConstructor = `thisset = set((${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}))
print(thisset)`;

  const exLoop = `thisset = {${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}}
for x in thisset:
  print(x)`;

  const exIn = `thisset = {${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}}
print(${dq}banana${dq} in thisset)`;

  const exNotIn = `thisset = {${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}}
print(${dq}banana${dq} not in thisset)`;

  const exAdd = `thisset = {${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}}
thisset.add(${dq}orange${dq})
print(thisset)`;

  const exUpdate = `thisset = {${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}}
tropical = {${dq}pineapple${dq}, ${dq}mango${dq}, ${dq}papaya${dq}}
thisset.update(tropical)
print(thisset)`;

  const exUpdateList = `thisset = {${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}}
mylist = [${dq}kiwi${dq}, ${dq}orange${dq}]
thisset.update(mylist)
print(thisset)`;

  const exRemove = `thisset = {${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}}
thisset.remove(${dq}banana${dq})
print(thisset)`;

  const exDiscard = `thisset = {${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}}
thisset.discard(${dq}banana${dq})
print(thisset)`;

  const exPop = `thisset = {${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}}
x = thisset.pop()
print(x)
print(thisset)`;

  const exClear = `thisset = {${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}}
thisset.clear()
print(thisset)`;

  const exDel = `thisset = {${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}}
del thisset`;

  const methods = [
    ["add()", "Adds an element to the set."],
    ["clear()", "Removes all elements from the set."],
    ["copy()", "Returns a shallow copy of the set."],
    ["difference()", "Returns items present only in the first set."],
    ["difference_update()", "Removes items found in another set."],
    ["discard()", "Removes an item but does not give an error if missing."],
    ["intersection()", "Returns items common to both sets."],
    ["intersection_update()", "Removes items not present in all sets."],
    ["isdisjoint()", "Returns True if sets have no common items."],
    ["issubset()", "Returns True if all items of this set exist in another set."],
    ["issuperset()", "Returns True if this set contains all items of another set."],
    ["pop()", "Removes a random item from the set."],
    ["remove()", "Removes a specific item, error if missing."],
    ["symmetric_difference()", "Returns items NOT common in both sets."],
    ["symmetric_difference_update()", "Updates set with symmetric difference."],
    ["union()", "Returns a new set with items from all sets."],
    ["update()", "Adds items from other iterables to the set."]
  ];

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-10">
      <h1 className="text-4xl font-bold">Python Sets — Full Notes</h1>

      {/* INTRO */}
      <section>
        <h2 className="text-2xl font-semibold">What is a Set?</h2>
        <p className="mt-2">
          A <strong>set</strong> is an unordered collection of unique items.  
          Sets are used to store multiple items in a single variable and are written using
          <strong> curly braces {'{}'}</strong>.
        </p>

        <p className="mt-3">Basic set example:</p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exSet}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Display a Set</h3>
        <p>Since sets are unordered, the output order may differ each time.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exCreate}</code></pre>
      </section>

      {/* DUPLICATES */}
      <section>
        <h2 className="text-xl font-semibold">Duplicate Values Are Not Allowed</h2>
        <p className="mt-2">If duplicate values appear, Python removes the duplicates automatically.</p>

        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exDup}</code></pre>

        <p className="mt-4">
          <strong>True</strong> and <strong>1</strong> are treated as the same value in sets:
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exTrue1}</code></pre>

        <p className="mt-4">
          <strong>False</strong> and <strong>0</strong> are also duplicates:
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exFalse0}</code></pre>
      </section>

      {/* LENGTH */}
      <section>
        <h2 className="text-xl font-semibold">Length of a Set</h2>
        <p className="mt-2">Use <code>len()</code> to get the number of items in a set.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exLen}</code></pre>
      </section>

      {/* DATA TYPES */}
      <section>
        <h2 className="text-xl font-semibold">Set Data Types</h2>
        <p className="mt-2">Sets can store different data types, including mixed types.</p>

        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exTypes}</code></pre>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exMixed}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Create Sets Using set() Constructor</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exConstructor}</code></pre>
      </section>

      {/* ACCESS */}
      <section>
        <h2 className="text-2xl font-semibold">Access Set Items</h2>
        <p className="mt-2">
          Sets do not support indexing or key-based access.  
          You must loop through the set or use the <code>in</code> keyword.
        </p>

        <h3 className="text-lg font-semibold mt-3">Loop Through a Set</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exLoop}</code></pre>

        <h3 className="text-lg font-semibold mt-4">Check Membership</h3>
        <pre className="p-3mt-3 rounded border bg-gray-50"><code>{exIn}</code></pre>
        <pre className="p-3mt-3 rounded border bg-gray-50"><code>{exNotIn}</code></pre>
      </section>

      {/* ADD ITEMS */}
      <section>
        <h2 className="text-2xl font-semibold">Add Items to a Set</h2>

        <h3 className="text-lg font-semibold mt-2">Add a Single Item</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exAdd}</code></pre>

        <h3 className="text-lg font-semibold mt-4">Add Items From Another Set</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exUpdate}</code></pre>

        <h3 className="text-lg font-semibold mt-4">Add Items From an Iterable (List, Tuple, etc.)</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exUpdateList}</code></pre>
      </section>

      {/* REMOVE ITEMS */}
      <section>
        <h2 className="text-2xl font-semibold">Remove Items From a Set</h2>

        <h3 className="text-lg font-semibold mt-2">remove() — Error if item missing</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-2"><code>{exRemove}</code></pre>

        <h3 className="text-lg font-semibold mt-4">discard() — No error if missing</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exDiscard}</code></pre>

        <h3 className="text-lg font-semibold mt-4">pop() — Removes a random item</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exPop}</code></pre>

        <h3 className="text-lg font-semibold mt-4">clear() — Empty the set</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exClear}</code></pre>

        <h3 className="text-lg font-semibold mt-4">del — Delete the set completely</h3>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exDel}</code></pre>
      </section>

      {/* METHODS */}
      <section>
        <h2 className="text-2xl font-semibold">Set Methods</h2>
        <p className="mt-2">These are the built-in methods available for sets:</p>

        <table className="w-full border mt-3 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Method</th>
              <th className="border p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {methods.map(([name, desc], i) => (
              <tr key={i}>
                <td className="border p-2 font-mono">{name}</td>
                <td className="border p-2">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </article>
  );
}
