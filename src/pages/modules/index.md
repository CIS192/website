---
path: "/modules"
---

# Exceptions, Files, and Modules
> Disclaimer: these notes are a work in progress

In this section, we're going to progress from Python-specific functionality back to familiar paradigms and modules from other languages. The goal for this lecture is to build the foundations to work on larger software projects that you might not be used to (since coursework and problem sets tend to be a little smaller in nature). 

## Exceptions
Sometimes, things go wrong. We can preemptively catch these errors:

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

We can define custom exceptions as follows:

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

## Modules
Sometimes, we want to *modularize* our codebase into seperate components that can interact with each other.

### Writing Our Own Modules
We can import entire modules using `import xyz` or we can import submodules using `from xyz import abc`.

### Importing First-Party Modules
For example, we can import the `random` module:

```python
import random
```

Or if we just want a specific functionality from the module, we can use `from`:

```python
from random import choice
```

### Importing Third-Party Modules
If we write a function in another file, we can import it by calling `from script import function`.

## Files
Sometimes, we want to leverage information from the *outside world*. 

### Reading From Files
Coming soon!

### Writing To Files
Coming soon!