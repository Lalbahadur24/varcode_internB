import React from "react";

export default function DecoratorsPage() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">Decorators</h1>

      <p className="text-slate-700 leading-relaxed">
        Decorators are a powerful feature in Python that let you modify or
        extend the behavior of functions or classes <strong>without</strong>{" "}
        changing their original code. They&apos;re perfect for cross-cutting
        concerns like logging, timing, caching, and authentication.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Intro */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Introduction to Decorators
          </h2>

          <p className="mt-2">
            A decorator is basically a function that takes another function and
            returns a new function that adds extra behavior around it.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">
            Why Use Decorators?
          </h3>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Add functionality to existing functions or methods.</li>
            <li>Reduce duplication (DRY principle).</li>
            <li>Implement logging, timing, caching, authentication, etc.</li>
            <li>Modify behavior dynamically at import/runtime.</li>
            <li>Create reusable, composable components.</li>
          </ul>
        </section>

        {/* Functions as objects */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Functions as First-Class Objects
          </h2>

          <p className="mt-2">
            To understand decorators, you must be comfortable with functions as
            values: you can assign them, pass them, and return them.
          </p>

          <h3 className="mt-3 text-lg font-semibold text-slate-900">
            Functions as Objects
          </h3>
          <pre className="mt-2 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`# Functions are objects
def greet(name):
    return f"Hello, {name}!"

# Assign function to variable
say_hello = greet
print(say_hello("Alice"))  # Hello, Alice!

# Pass function as argument
def call_function(func, arg):
    return func(arg)

result = call_function(greet, "Bob")
print(result)  # Hello, Bob!`}
          </pre>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">
            Nested Functions & Returning Functions
          </h3>
          <pre className="mt-2 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`# Function inside function
def outer():
    message = "Hello"

    def inner():
        return message + " World!"

    return inner()

print(outer())  # Hello World!

# Returning inner function (no call)
def outer():
    def inner():
        return "Hello from inner"
    return inner  # Return function object, not result

func = outer()
print(func())  # Hello from inner`}
          </pre>
        </section>

        {/* Basic Decorators */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Basic Decorators
          </h2>

          <h3 className="mt-3 text-lg font-semibold text-slate-900">
            Simple Decorator (Manual Application)
          </h3>
          <pre className="mt-2 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`def my_decorator(func):
    def wrapper():
        print("Before function call")
        func()
        print("After function call")
    return wrapper

# Apply decorator manually
def say_hello():
    print("Hello!")

say_hello = my_decorator(say_hello)
say_hello()
# Output:
# Before function call
# Hello!
# After function call`}
          </pre>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">
            Using <code>@</code> Syntax
          </h3>
          <pre className="mt-2 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`def my_decorator(func):
    def wrapper():
        print("Before function call")
        func()
        print("After function call")
    return wrapper

# Apply decorator with @ syntax
@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# Output:
# Before function call
# Hello!
# After function call`}
          </pre>
        </section>

        {/* Decorators with args */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Decorators That Accept Arguments
          </h2>

          <p className="mt-2">
            Use <code>*args</code> and <code>**kwargs</code> in your wrapper so
            the decorator works with any function signature.
          </p>

          <pre className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`def my_decorator(func):
    def wrapper(*args, **kwargs):
        print(f"Arguments: {args}, {kwargs}")
        result = func(*args, **kwargs)
        print(f"Result: {result}")
        return result
    return wrapper

@my_decorator
def add(a, b):
    return a + b

@my_decorator
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

add(5, 3)
greet("Alice", greeting="Hi")`}
          </pre>
        </section>

        {/* Practical Decorators */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Practical Decorators
          </h2>

          <h3 className="mt-3 text-lg font-semibold text-slate-900">
            Timing Decorator
          </h3>
          <pre className="mt-2 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)
    return "Done"

result = slow_function()`}
          </pre>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">
            Logging Decorator
          </h3>
          <pre className="mt-2 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`def logger(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with args={args}, kwargs={kwargs}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result}")
        return result
    return wrapper

@logger
def add(a, b):
    return a + b

add(3, 5)`}
          </pre>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">
            Caching / Memoization
          </h3>
          <pre className="mt-2 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`from functools import wraps, lru_cache

def memoize(func):
    cache = {}

    @wraps(func)
    def wrapper(*args):
        if args not in cache:
            cache[args] = func(*args)
        return cache[args]
    return wrapper

@memoize
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(30))  # Fast due to caching

# Python's built-in version
@lru_cache(maxsize=None)
def fibonacci_v2(n):
    if n < 2:
        return n
    return fibonacci_v2(n - 1) + fibonacci_v2(n - 2)`}
          </pre>
        </section>

        {/* Decorators with parameters */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Decorators With Their Own Parameters
          </h2>

          <p className="mt-2">
            A &quot;decorator factory&quot; returns a decorator. This gives you
            extra configuration (like how many times to repeat).
          </p>

          <pre className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            result = None
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(times=3)
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")
# Hello, Alice!
# Hello, Alice!
# Hello, Alice!`}
          </pre>
        </section>

        {/* functools.wraps */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Preserving Metadata with <code>@wraps</code>
          </h2>

          <p className="mt-2">
            Without <code>@wraps</code>, the wrapped function loses its original{" "}
            <code>__name__</code>, docstring, etc.
          </p>

          <pre className="mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`from functools import wraps

def debug(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

@debug
def greet(name: str) -> str:
    """Say hello to someone."""
    return f"Hello, {name}"

print(greet.__name__)  # greet
print(greet.__doc__)   # Say hello to someone.`}
          </pre>
        </section>

        {/* Built-in decorators */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Built-in Decorators
          </h2>

          <h3 className="mt-3 text-lg font-semibold text-slate-900">
            <code>@property</code>
          </h3>
          <pre className="mt-2 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("Radius must be positive")
        self._radius = value

    @property
    def area(self):
        return 3.14159 * (self._radius ** 2)

c = Circle(5)
print(c.radius)  # 5
print(c.area)    # 78.53975
c.radius = 10
print(c.area)    # 314.159`}
          </pre>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">
            <code>@staticmethod</code> and <code>@classmethod</code>
          </h3>
          <pre className="mt-2 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]">
            {`class MathOperations:
    multiplier = 2

    @staticmethod
    def add(a, b):
        """Static method - no access to class or instance"""
        return a + b

    @classmethod
    def multiply_by_class_var(cls, x):
        """Class method - access to class via cls"""
        return x * cls.multiplier

print(MathOperations.add(5, 3))               # 8
print(MathOperations.multiply_by_class_var(10))  # 20`}
          </pre>
        </section>

        {/* Summary / Best practices */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Summary & Best Practices
          </h2>

          <p className="mt-2">
            Decorators let you wrap reusable behavior around functions and
            methods in a clean, readable way.
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Use decorators for logging, timing, caching, auth, validation,
              etc.
            </li>
            <li>
              Always use <code>@wraps</code> in custom decorators so metadata
              isn&apos;t lost.
            </li>
            <li>
              Keep decorators small and focused; avoid hiding heavy logic inside
              them.
            </li>
            <li>
              For configurable decorators, use a decorator factory (
              <code>repeat(times)</code> style).
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
