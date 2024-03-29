---
path: '/pythonic'
---

# Pythonic Programming

> The "Python" Way of Doing Things

In this lecture, we'll be tackling a variety of Python constructs that are exclusive to the language. A variety of the examples shown today might feel a little contrived, but we'll see later in the course that each and every module shown in this lecture will be either necessary for certain functionality, or just incredibly awesome syntactic sugar.

## Objects

Let's start off with some core object-oriented concepts. Let's say we have a simple class definition as follows:

```python
class Animal():
    def __init__(self, sound):
        self.sound = sound

    def make_sound(self):
        print(self.sound)

cow = Animal("Moo")
cow.make_sound()
```

How can we extend this general class functionality into a more specific implementation?

### Inheritance

We can _inherit_ functionality from the parent class by passing in the parent class into the child class signature:

```python
class Koala(Animal):
    def __init__(self, sound):
        Animal.__init__(self, sound)

    def sleep(self):
        print("*loud snoring sound*)
```

We do this by calling the `.__init__()` of the parent class within the `.__init__()` of the child. Now, we can perform behaviour specific to both the child class, and the parent class!

```python
human = Animal("When will permits be administered?")
human.make_sound()

koala = Koala("screeching sound")
koala.make_sound()
koala.sleep()
```

But what does `.__init__()` actually do?

### Magic Methods

We know [`__init__()`](https://docs.python.org/3.7/reference/datamodel.html#object.__init__) as something like a constructor. But there are a varitey of other core object functionalities that can be implemented (or overridden). For example, getting the length of a list using `len()` is actually implemented on the list object using [`__len__()`](https://docs.python.org/3.7/reference/datamodel.html#object.__len__). There are a variety of ther magic methods that can be used:

```python
class Sloth(Animal):
    def __init__(self, sound, length):
        Animal.__init__(self, sound)
        self.length = length

    def __hang_out__(self):
        print("Hanging out.")

    def __len__(self):
        return self.length

    def __add__(self, other):
        return Sloth("I'm A BIG SLOTH.", self.length + len(other))

    def __str__(self):
        return "The sloth is currently unavailable."

sloth2 = Sloth("I'm lazy.", 10)
len(sloth2)

sloth3 = sloth2 + sloth2
sloth3.make_sound()
```

There are dozens of magic methods, which makes sense since magic methods typically implement some core piece of Python functionality with respect to objects. Explore the magic methods and see where that takes you!

### Extras: Class Methods and Static Methods

So far, we've talked about methods which relate to a specific instance. These are known as instance methods (suprise, suprise). However, there are entirely different families of functions which are defined within classes. Thinking about these can get a little abstract and paritcular, so I've decided to summarize them for you here in case you ever need to implement one of these functions. The explanation for "decorating" a function is a little out of order and is at the end of these notes, so return here after reading it!

The first interesting family of methods are Static methods, which you may be familiar with from other languages such as Java, allow us to define functionality for a specific class that does not depend on any specific instance. To do this, we decorate a function with [`@staticmethod`](https://docs.python.org/3.7/library/functions.html#staticmethod) and we can subsequently call the method using something like `CustomClass.static_method()`. Note that this is entirely different from first instantiating `obj = CustomClass()` and then calling `obj.static_method()`.

Next, let's talk about Class Methods, which are functions which are decorated with [`@classmethod`](https://docs.python.org/3.7/library/functions.html#classmethod). They don't pertain to a specific instance, but instead maintain state across all instances of the class. For example, a `count()` class method can be defined to return the amount of objects that are instantiated for a given class.

### Copying

Sometimes, trying to work with objects and their locations in memory can get confusing. So, Python lets you explicitly deal with these situations using the [`copy`](https://docs.python.org/3.7/library/copy.html#module-copy) module. The two relevant modules can be imported by calling `from copy import copy, deepcopy`.

The two relevant packages here are `copy` and `deepcopy`. Copy lets you copy the contents of an object into another object:

```python
from copy import copy

# initializing list 1
li1 = [1, 2, [3,5], 4]
li2 = copy(li1)

li1[0] = 5

print(li1[0], li2[0])
```

Notice that editing `li1` does not change `li2`. But copying objects like this doesn't always work so cleanly. Imagine if we had _more objects_ as fields in the copied object. This naive copying wouldn't update the references on those nested objects. To fix this, we need to use the `deepcopy` package, which recursively copies objects and fields:

```python
from copy import deepcopy

li3 = copy.deepcopy(li1)

li2[2][0] = 5
li3[2][0] = 0

print(li1[2], li2[2], li3[2])
```

These functions can resolve a lot of headaches when working with algorithms involving duplicate (or nearly identical) data.

## Functions

Recall that we can define functions using the `def` parameter, and that we're at a lot of liberty with arguments and return types:

```python
def add_two(x, y):
    return x + y
```

Something that's even more interesting about functions is the use of _positional arguments_ and _keyword arguments_.

### Positional Arguments and Args

The [language reference](https://docs.python.org/3.7/reference/compound_stmts.html#function-definitions) succinctly describes positional and keyword arguments as follows:

> If the form *identifier is present, it is initialized to a tuple receiving any excess positional parameters, defaulting to the empty tuple. If the form **identifier is present, it is initialized to a new dictionary receiving any excess keyword arguments, defaulting to a new empty dictionary.

Sometimes, we might choose to be less explicit with our function signatures. Specifically, we can use the single asterisk `*` before a function argument to allow for a variable amount of inputs. Let's refactor our `add_two` function into `def add(*args)`.

In our function definition, the multiple parameters are represented as a list:

```python
def add(*args):
    total = 0
    for number in args:
        total = total + number
    return total
```

Isn't that convenient? For more on positional arguments, see [here](https://docs.python.org/3.7/tutorial/controlflow.html#arbitrary-argument-lists) and [here](https://docs.python.org/3/glossary.html#term-argument).

### Keyword Arguments and Kwargs

In Python, we can also extend argument definitions with [_keyword arguments_](https://docs.python.org/3.7/tutorial/controlflow.html#keyword-arguments). Consider the following subtract function:

```python
def subtract(x, y):
    return x - y
```

Note that the operation is not symmetric. That is, `subtract(10, 5)` is not `subtract(5, 10)`. We can fix this by providing our arguments as keyworded arguments. In particular, we can call `subtract(y=5, x=10)` to yield the equivalent result as `subtract(10, 5)`.

In fact, we can even set default parameters this way as well:

```python
def print_error(message="This is the default error message!"):
    print(message)
```

Our notion of `*args` to denote multiple positional arguments extends as well to keyworded arguments, which gives us `**kwargs` (with the double asterisk). In our function body this is represented as a dictionary:

```python
def print_attributes(kind, **kwargs):
    print("this is a ", kind)

    for attribute in kwargs:
        print(attribute, kwargs[attribute])
```

Isn't that also convenient?

## Comprehensions

Let's motivate the next few concepts by displaying more Python elegance through the `for` construct. In particular, let's think about how we can square a list of numbers. Consider the naive approach:

```python
old_list = [1, 2, 3, 4, 5]
new_list = list()

for number in old_list:
    new_list.append(number ** 2)
```

This looks like it should work fine, and it does! However, this idea of looping over a list to create a new list is a common paradigm in Python programming. As such, the language supports some of my favourite syntactic sugar: [_list comprehensions_](https://docs.python.org/3.7/tutorial/datastructures.html#list-comprehensions).

Let's re-write this code using a list comprehension:

```python
old_list = [1, 2, 3, 4, 5]
new_list = [x ** 2 for x in old_list]
```

And we're done! The general formula for a _list comprehension_ is:

```python
(expression) for (value) in (list) (if condition)
```

We can selectively choose values using an `if` clause at the end of the comprehension:

```python
numbers = [1, 2, 3, 4, 5, 6, 7]
even_numbers = [x for x in numbers if x % 2 == 0]
```

Comprehensions can also be applied to sets and dictionaries:

```python
names = ["ARun", "saIF", "KeVin"]

# dictionary comprehension for lengths
name_lengths = {name: len(name) for name in names}

# set comprehension for string formatting
formatted_names = {name[0].upper() + name[1:].lower() for name in names}
```

As a hint, whenever we want you to implement functions in a single line, we generally want you to think about some kind of comprehension.

## Iterators

So how do for loops and list comprehensions work so seamlessly? And what kinds of objects can we iterate over? Turns out, any object that implements the magic methods `__next__` and `__iter__`. So something that looks like this:

```python
li = list()
for item in li:
    print(item)
print("complete")
```

actually looks like this:

```python
li = list()
iterator = iter(li)

try:
    while True:
        item = next(iterator)
        print(item)
except:
    print("complete")
```

Here's an example definition:

```python
class CountByOne:
    def __init__(self, start=0):
        self.num = start

    def __iter__(self):
        return self

    def __next__(self):
        num = self.num
        self.num += 1
        return num

iterator = CountByOne()
for i in range(10):
    print(next(iterator))
```

## Generators

Let's talk about some more function behaviour. We're used to functions that return a single value and terminate their execution upon returning. In Python, we can extend this idea of returning a value to [_generators_](https://docs.python.org/3.7/tutorial/classes.html#generators). Generators are functions that `yield` a value, and do not terminate upon doing so. As a result, we can declare functions that act as iterators.

```python
def simple_yields():
    yield 1
    print("only see this when yielding 2!")
    yield 2
    print("only see this when yielding 3!")
    yield 3
    print("only see this when yielding 4!")
    yield 4

generator = simple_yields()
print(next(generator))
print(next(generator))
print(next(generator))
```

Notice this is the same thing as the iterator, but we don't need to define an iterator class, or even a `next` function!

Let's now see how we can perform computation and yield results sequentially. We can implement `CountByOne` from before as a generator:

```python
def count(start=0, end=10):
    num = start
    while num < end:
        yield num
        num += 1

generator = count(end=20) # defines generator object
for number in generator:
    print(number)
```

Note that when calling `count(end=20)`, we are returned the generator itself and we can then iterate over the outputs of the generator. Between `yield` statements, the execution of the function is essentially stopped until the caller makes another call.

We can even define generators in terms of other iterators:

```python
def square_generator(n):
    for i in range(n):
        yield i ** 2
```

I hope this helps you understand how for-loops work behind the scenes!

## Lambda Functions

Python is an object-oriented language at its core, and that means that functions are also first-class citizens in the language. We can see this if we define a custom function `def foo(): pass` and then call `print(foo)` without brackets to start the function call.

Recall the notion of anonymous functions from CIS 120. We have a similar notion in Python named [_lambda functions_](https://docs.python.org/3.7/tutorial/controlflow.html#lambda-expressions), which unlocks functional programming paradigms in Python by letting us use _functions as arguments_.

Lambda functions look like this:

```python
lambda x: x + 1
```

This is a function that, as you can imagine, adds by 1. Note that lambda functions by default return the expression that is defined. This is expected behaviour in functional programming. We can apply this function directly or by giving it a name. The following function calls are equivalent

```python
y = (lambda x: x + 1)(4)

add_one = lambda x: x + 1
y = add_one(4)
```

Let's consider sorting a list of strings by their length. In a language like Java, we would have to define a custom sorting function, or mutate the original list to include auxillary data. However, in Python, we can provide a lambda function to the `sorted` function:

```python
names = ["Arun", "Saif", "Kevin"]
sorted_names = sorted(names, key=lambda x: len(x))
```

Let's disect this. The `key` parameter tells the `sorted` function what value to use for comparing elements. So, when we pass a lambda function that returns the length of the values, we get the algorithm to sort based off of length.

We can also implement some classical functional programming ideas on lists such as `map` (which is sort of like a comprehension) and `filter` (which filters elements according to some function):

```python
numbers = [1, 2, 3, 4, 5, 6]
squares = map(lambda x: x ** 2, numbers)
events = filter(lambda x: x % 2 == 0, numbers)
```

Lambda functions give us powerful programming capabilities.

## Decorators

[Decorators](https://docs.python.org/3.7/glossary.html#term-decorator) are a complex topic in Python, so we'll try to introduce the elegance of the topic without too many headaches.

Following from the previous section, we can see that passing functions as parameters is a powerful construct. Decorators extend this by letting us define "function wrappers". Consider the following code:

```python
def do_something():
    print("doing something")

def check(function):
    if True:
        print("check complete!")
        return function()
    else:
        raise Exception()

wrapped = check(do_something)
```

Here, we've defined a function that executes some code that checks some conditions before a given function is executed, and returns the function to be executed. This construct is useful, for example, if we wanted to check if a user has the necessary permissions to perform some action. Notice we get a function returned back, with all the conditions met.

In Python, we have shorthand syntax to perform this by _decorating_ the function:

```python
@check
def do_something():
    print("doing something")
```

It's easy to see how powerful decorators are when we see them in action. We're gonna leave it at here for now, and we'll return to decorators when we learn about the Flask web development framework, where their use will be more apparent.

---

## References

1. https://dbader.org/blog/python-iterators
2. [init - Python Docs](https://docs.python.org/3.7/reference/datamodel.html#object.__init__)
3. [len - Python Docs](https://docs.python.org/3.7/reference/datamodel.html#object.__len__)
4. [Static Methods - Python Docs](https://docs.python.org/3.7/library/functions.html#staticmethod)
5. [Class Methods - Python Docs](https://docs.python.org/3.7/library/functions.html#classmethod)
6. [Copy - Python Docs](https://docs.python.org/3.7/library/copy.html#module-copy)
7. [Positional Arguments 1 - Python Docs](https://docs.python.org/3.7/tutorial/controlflow.html#arbitrary-argument-lists)
8. [Positional Arguments 2 - Python Docs](https://docs.python.org/3/glossary.html#term-argument)
9. [Keyword Arguments - Python Docs](https://docs.python.org/3.7/tutorial/controlflow.html#keyword-arguments)
10. [List Comphrensions - Python Docs](https://docs.python.org/3.7/tutorial/datastructures.html#list-comprehensions)
11. [Generators - Python Docs](https://docs.python.org/3.7/tutorial/classes.html#generators)
12. [Lambda Functions - Python Docs](https://docs.python.org/3.7/tutorial/controlflow.html#lambda-expressions)
13. [Decorators - Python Docs](https://docs.python.org/3.7/glossary.html#term-decorator)
