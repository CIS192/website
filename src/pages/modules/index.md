---
path: '/modules'
---

# Exceptions, Breakpoints, Modules, and Files

> Disclaimer: these notes are a work in progress

In this section, we're going to progress from Python-specific functionality back to familiar paradigms and modules from other languages. The goal for this lecture is to build the foundations to work on larger software projects that you might not be used to (since coursework and problem sets tend to be a little smaller in nature).


## Exceptions

Sometimes, things go wrong. We can preemptively catch these errors using a `try` and `except` block (similar to the `try` and `catch` paradigm from Java), whenever we anticipate run-time errors:

```python
# we can condition on certain errors!
while True:
    try:
        # x = int(input("Please enter a number: "))
        break
    except ValueError:
        print("Oops!  That was no valid number.  Try again...")
    except (RuntimeError, TypeError, NameError):
        print("something weird happened!")
    except:
        print("i dont know what you did but i dont like it")
```

We can even define custom exceptions by defining a base class that inherits from the `Exception` class, and then a child class that inherits from our defined `Error` class:

```python
# we can also create our own exceptions!
class Error(Exception):
    """Base class for exceptions in this module."""
    pass


class InputError(Error):
    """Exception raised for errors in the input.

    Attributes:
        expression -- input expression in which the error occurred
        message -- explanation of the error
    """

    def __init__(self, expression, message):
        self.expression = expression
        self.message = message

# DO SOMETHING BAD!
# PROGRAM CAUGHT THAT!
raise InputError("you did something bad", "fix it!")
```

Note that the `raise` keyword allows us to programmatically trigger an error, which can be caught with a `try` and `except` block (or crash the program altogether).


## Breakpoints

Another handy Python tool is to use `breakpoint` to halt execution of a Python program *at the current program state*. This is super useful for quickly debugging behaviour, or to have a convinient sandbox for prototyping function calls.

For example, we can add a `breakpoint()` statement to the body of an `except` block, so that if  we encounter an error, we can quickly debug the error:

```python
response = input("What is your age?")

try:
    age = int(response)
except:
    breakpoint()
```

If we were to input a string (intead of an integer), we would hit the `except` block and the breakpoint would activate, launching us into the Python debugger at the current program state. More information about `breakpoint` can be found in the [official PEP specification](https://www.python.org/dev/peps/pep-0553/).


## Modules

Sometimes, we want to _modularize_ our codebase into seperate components that can interact with each other. This is a good way to not only organize our codebase more logically, but also enable the possibility of us releasing *standalone* libraries that other developers can utilize. This idea of abstraction and modularization is what enables significant programming paradigms, like the open source movement.


### Importing Modules

If you recall from earlier in the course, we sometimes relied on functions that weren't part of the vanilla Python experience (e.g. `defaultdict` and `copy`) by `import`-ing them.

As a refresher, we can import entire modules using `import xyz` or we can import submodules using `from xyz import abc`. For example, we can import the `random` module (which is a first-party module, and included with every Python installation):

```python
import random
```

Or if we just want a specific functionality from the module, we can use `from`:

```python
from random import choice
```

This gives us only the `choice` method, instead of importing the entire (possibly bukly) `random` module.

### Defining Third-Party Modules

The Python packages we `import` from the standard library (or the internet from `pip`), follows the same convention as importing a local module (i.e. one we write ourselves).

If we write a function named `function` in another file named `script.py`, we can first import our custom script using `import script`, and later call `script.function()` (this is because even modules are considered objects in Python). We can also directly import the function by calling `from script import function`.

What if `script.py` exists in another directory, say a folder named `folder/`? To import this module, we follow the same steps as before, but we also add an empty `__init__.py` file in `folder/`. This allows the folder to be viewed as a Python module, so we can import it as `from folder.script import function`.

## Files

Sometimes, we want to leverage information from the _outside world_ (or in other words, or local file system) that exists beyond the scope of Python program. Anything from selfie pictures to legal transcripts is fair game in Python!

For the sake of simplicity, let's work with simple `.txt` files, which gives us raw text. In theory, this is all we need to build higher level abstractions and data, so this code will generalize to different formats (images, csv, tsv etc.). Let's create a dummy text file in `names.txt` containing:

```
Arun
Sumit
Jorge
Tony
```

### Reading From Files

Reading from this file is (un)suprisingly easy in Python:

```python
with open('names.txt') as f:
    content = f.read()
```

The `open()` makes intuitive sense to "open" the file provided. A gotcha is to make sure whether you are using a relative or absolute path -- depending on your Python/environment configuration, only one may be supported.

We can now split the names on its `\n` values by doing `content.split('\n')`, or we can simply call `f.readlines()` to have Python do it for us! In general the `split()` command is an extremely useful string command for working with real world textual data.

### Writing To Files

Writing to a file is also rather easy in Python:

```python
with open('names.txt', 'w') as f:
    for name in names:
        f.write(name + '\n')
```

Notice we pass in the `'w'` argument (known as a *mode*) to the `open` function. This is because depending on what we want to do with the file, we need to be *safe* in specifying whether we are reading or writing to the file. By default, Python assumes we are reading (hence the lack of a mode in the reading example). However, we can even specify the `'a'` mode (short for *"append"*) so the Python file reference knows to start the cursor at the end of the file, instead of overwriting the file altogether.

### Pickle

In the previous section, we worked with a `.txt` file since a list of names is a rather bare-bones data format. However, what if we wanted to save more advanced data structures (e.g. `list`, 'dict', custom objects) to the file system? We could figure out how to serialize it ourselves into a `.txt` format, but that's a lot of work and we're lazy (at least I am).

We actually have a very Python-object friendly module that does exactly this called `pickle`! The goal of this module is to provide Python-specific object serialization to the file system, which is very convinient for working with Python objects.

We can write to a Pickle file in a similar way:

```python
import pickle

scores = {'Arun': 60, 'Jorge': 80, 'Tony': 100, 'Sumit': 100}

with open('scores.p', 'wb') as f:
    pickle.dump(scores, f)
```

Notice the `'wb'` flag, indicating that we are *writing bytes* directly to the file.

Similarly, we can read from a pickled file like so:

```python
with open('scores.p', 'rb') as f:
    pickle.load(scores, f)
```

## Conclusion

This lecture is about laying the foundations for some very useful programming skills that we will make use of later in the course (and hopefully in your career). A lot of these tools aren't necessary per se, but are crucial for building feature-filled and robust code bases.