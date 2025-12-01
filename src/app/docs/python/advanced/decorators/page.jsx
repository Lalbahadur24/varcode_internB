export default function DecoratorsPage() {
  return (
  <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Decorators</h1>
      
    <section>
    <h2>Introduction to Decorators</h2>
    <p>
      Decorators are a powerful feature in Python that allow you to modify or extend the 
      behavior of functions or classes without permanently modifying them. They provide a 
      clean and readable way to wrap functionality around existing code.
    </p>
        
    <h3>Why Use Decorators?</h3>
    <ul>
      <li>Add functionality to existing functions/methods</li>
      <li>Reduce code duplication (DRY principle)</li>
      <li>Implement cross-cutting concerns (logging, timing, authentication)</li>
      <li>Modify function behavior dynamically</li>
      <li>Create reusable components</li>
    </ul>
    </section>

    <section>
    <h2>Function Basics</h2>
    <p>Understanding functions as first-class objects is key to decorators.</p>
        
    <h3>Functions as Objects</h3>
    <pre><code>{`# Functions are objects
def greet(name):
  return f"Hello, {name}!"

# Assign function to variable
say_hello = greet
print(say_hello("Alice"))  # Hello, Alice!

# Pass function as argument
def call_function(func, arg):
  return func(arg)

result = call_function(greet, "Bob")
print(result)  # Hello, Bob!`}</code></pre>

    <h3>Nested Functions</h3>
    <pre><code>{`# Function inside function
def outer():
  message = "Hello"
    
  def inner():
    return message + " World!"
    
  return inner()

print(outer())  # Hello World!

# Returning inner function
def outer():
  def inner():
    return "Hello from inner"
  return inner  # Return function object

func = outer()
print(func())  # Hello from inner`}</code></pre>
    </section>

    <section>
    <h2>Basic Decorators</h2>
        
    <h3>Simple Decorator</h3>
    <pre><code>{`def my_decorator(func):
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
# After function call`}</code></pre>

    <h3>Using @ Syntax</h3>
    <pre><code>{`def my_decorator(func):
  def wrapper():
    print("Before function call")
    func()
    print("After function call")
  return wrapper

# Apply decorator with @
@my_decorator
def say_hello():
  print("Hello!")

say_hello()
# Output:
# Before function call
# Hello!
# After function call`}</code></pre>
    </section>

    <section>
    <h2>Decorators with Arguments</h2>
        
    <h3>Function with Arguments</h3>
    <pre><code>{`def my_decorator(func):
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
greet("Alice", greeting="Hi")`}</code></pre>
    </section>

    <section>
    <h2>Practical Decorators</h2>
        
    <h3>Timing Decorator</h3>
    <pre><code>{`import time

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

result = slow_function()`}</code></pre>

    <h3>Logging Decorator</h3>
    <pre><code>{`def logger(func):
  def wrapper(*args, **kwargs):
    print(f"Calling {func.__name__} with args={args}, kwargs={kwargs}")
    result = func(*args, **kwargs)
    print(f"{func.__name__} returned {result}")
    return result
  return wrapper

@logger
def add(a, b):
  return a + b

add(3, 5)`}</code></pre>

    <h3>Caching Decorator (Memoization)</h3>
    <pre><code>{`from functools import wraps, lru_cache

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
  return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(100))  # Fast due to caching

# Python's built-in version
@lru_cache(maxsize=None)
def fibonacci_v2(n):
  if n < 2:
    return n
  return fibonacci_v2(n-1) + fibonacci_v2(n-2)`}</code></pre>
    </section>

    <section>
    <h2>Decorators with Parameters</h2>
    <pre><code>{`def repeat(times):
  def decorator(func):
    def wrapper(*args, **kwargs):
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
# Hello, Alice!`}</code></pre>
    </section>

    <section>
    <h2>Built-in Decorators</h2>
        
    <h3>@property</h3>
    <pre><code>{`class Circle:
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
    return 3.14159 * self._radius ** 2

c = Circle(5)
print(c.radius)  # 5
print(c.area)    # 78.53975
c.radius = 10
print(c.area)    # 314.159`}</code></pre>

    <h3>@staticmethod and @classmethod</h3>
    <pre><code>{`class MathOperations:
  multiplier = 2
    
  @staticmethod
  def add(a, b):
    """Static method - no access to class or instance"""
    return a + b
    
  @classmethod
  def multiply_by_class_var(cls, x):
    """Class method - access to class via cls"""
    return x * cls.multiplier

print(MathOperations.add(5, 3))  # 8
print(MathOperations.multiply_by_class_var(10))  # 20`}</code></pre>
    </section>

    <section>
    <h2>Summary</h2>
    <p>
      Decorators are a powerful Python feature for modifying function behavior without 
      changing their code. They enable clean, reusable solutions for cross-cutting concerns 
      like logging, timing, caching, and authentication.
    </p>
    </section>
    </div>
  );
}
