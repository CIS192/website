---
path: "/basics"
---

# Python Basics
> A Byte of Python Syntax

Welcome to CIS 192! Python is often though of as one of the most beginner-friendly programming languages, and in the upcoming few lectures, I hope to convince you of this.

In this lecture, we will be covering:

1. The History of Python
2. Running Python
3. Primitive Variables
4. Control Flow (loops, functions etc.)

Before you get started, be sure to [install Python 3.0 here](https://www.python.org/downloads/). We will use Python 3.0 exclusively in this class, so make sure that your Python installation is up to date!

## About Python

Python is an **object-oriented, dynamically-typed, interpreted** programming language that was first published in 1991 by a man named Guido van Rossum. The language was inspired by a general purpose programming language named ABC, which he worked on in the late 1980s. Guido wanted to develop a lightweight and simple scripting language that would appeal to Unix hackers and C programmers, who would benefit from a higher level language. Fun fact: the language is actually named after [Monty Python](https://en.wikipedia.org/wiki/Monty_Python), not the snake! 

Python 1.0 was released in 1994, and featured functional programming paradigms such as map, filter and reduce (which we will learn later in the course). Soon, Python 2.0 was released in 2000, which heralded garbage collection (really huge functionality) as well as list comprehensions (everybody's favourite Python syntax). In 2008, Python 3.0 was released, which gave rise to more Python-specific constructs such as iterators and slightly more rigid syntax (e.g. `print` being a function, cleaning up datatypes etc).

Python as a programming language has its own mantra that's baked into every installation, which creates almost a cult-like essence. Running `import this` in a Python terminal gives you:

```
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one -- and preferably only one -- obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those! 
```

Python is simple, and excels in virtually every area of computer science. Although Python isn't very performance focused, there are many ways to gain performance boosts by compiling to C as opposed to being interpreted by the Python interpreter. In fact, the reason why modern machine learning (which is extremely computationally intensive) is written in Python is exactly because of this compilation trick.

## Command-Line Interpreter
Ever wanted a chatbot that worked flawlessly in the terminal? Look no further - turns out, there is a powerful chatbot bundled with every installation of Python. The catch, as you could imagine, is that *it only speaks Python*. What do I mean by this? Open your terminal and run the following command:

```
python3
```

You should see something like the following:

```
Python 3.7.4 (default, Jul  9 2019, 18:13:23)
[Clang 10.0.1 (clang-1001.0.46.4)] on darwin
Type "help", "copyright", "credits" or "license" for more information.

>>>
```

Now if we type some Python into this "chatbot", we can expect a *perfect* Python response from it. For example, inputting `print("hello world")` gives us:

```
>>> print("hello world")
hello world
```

I call this a chatbot, because when we want to debug certain behaviour of Python's language, we turn to this **[interpreter](https://docs.python.org/3.7/tutorial/interpreter.html)** to give us insight into the language. In previous courses at Penn, we ran languages like Java from an IDE. However, in this course we will get very familiar with the command line by exclusively using it!

We can actually run any Python code from the interpreter, like simple arithmetic:

```
>>> print(6 + 2)
8
```

We can even create bugs and crash our code in the interpreter, just like with any other environment:

```
>>> print(10 / 0)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
```

But, more on actual Python syntax later in this lecture.

## Running Scripts in the Command Line

So the command-line interpreter is pretty great, but as *real* programmers we want to create files that we can run over and over again, as well as move around cyberspace. Let's learn some basic Unix commands for doing this. In your terminal, you should see what folder you currently are in (most likely your computer's root directory). 

First, run `ls` in your terminal to **list contents** of the current directory. This is good for some developmental awareness of your current working environment. Next, run `mkdir lecture1` to **create a folder** named `lecture1` in your current directory. Then, run `cd lecture1` to **change directory** into `lecture1`. Finally, we'll run `touch lecture1.py` to **create a file** named `lecture1.py`, which has the valid `.py` extension for our Python interpreter to run the file appropriately. We can now do a little command-line trick and run:

```
echo 'print("hello world")' >> lecture1.py
``` 

which "writes" `print("hello world")` to `lecture1.py`. Now, if we run `cat lecture1.py`, we should be able to **view contents** of the file. 

Last but not least, we can run `python3 lecture1.py` to see our canonical message displayed to us. These are all very handy Unix commands, which make you a better/faster programmer. However, since it's only the first lecture, feel free to use a text editor such as [Sublime Text](https://www.sublimetext.com/) or [Visual Studio Code](https://code.visualstudio.com/) (recommended) to write all your homework in, running `python3` to execute the file as before.

## Python Syntax
Notice in our current `lecture1.py`:

```python
print("hello world")
```

the Python code is very minimal. Compare this with a less civilized language like Java:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("This will be printed");
    }
}
```

We have no curly braces, explicit class definitions, or semi-colons. These things are little quality of life adjustments for us, and we'll learn to thank the Python designers for this.

So how do we nest our code, and delineate the end of a line? Python uses **whitespace** as punctuation. For example, each line represents a command (the implicit `\n` token ends each line for us) and we'll come to see that *indented code* represents different levels of nesting. So although it's true that Python can look a lot like English, your code could crash due a single extra space character. However, this is a pretty good tradeoff since these errors can be caught by the intrepreter and are easy to fix (as well as easy on the eyes). 

Another quick note is that comments in Python are written either using a `#` token for a single-line comment, or using `"""` for multi-line comments:

```python
code()
# a single line comment!
more_code()
"""
a multi
line
comment
"""
code()
```

## Variables

Let's actually write some Python code in our newly created `lecture1.py` file. We showed before that we could print `6 + 8`, but what if this was a long formula? It's best to save this into its own variable. Turns out, in Python we can do this very easily:

```python
x = 6 + 8
```

No type definition necessary! Does this mean Python doesn't have any types? NO! It means that Python is something known as a **dynamically typed** language, which infers types at runtime. This is different from a statically typed language like C or Java, which will vomit errors before you even run your code. This means that developing in Python is clean and straightforward, but bad code hygiene can make programming in Python a nightmare. 

As you can imagine, `6 + 8` gives us an `int`. But the `print()` function actually takes a `string` as input. Here we have a good example of casting, where Python will actually do some nice type inferring for us, to make us do less work than in a language like Java (boo).

We can define strings similary, such as:

```python
message = "hello world"
```

We can even redefine our variables immediately after:

```python
message = "hello world"
message = "hello universe"
```

without syntactic reprocussion.

### Casting

Casting a variable to another data-type has pretty straightforward syntax. For example, casting an integer to a string is done by calling `str()` on a value:

```python
thirteen_string = str(6 + 7)
```

And converting back to an integer is similar as well:

```python
thirteen = int(thirteen_string)
```

But since Python is a dynamically typed language, usually you don't have to write many casting statements since we can let the interpreter do the difficult work for us in figuring out which variables are which type.

## Control Flow

We could write a long sequence of variable assignments and printing, but sometimes we want to exact different behaviour of our program depending on our state.

### If Statements

Let's look at the most simple form of control flow: the classic [if-statement](https://docs.python.org/3.7/tutorial/controlflow.html#if-statements). In Python this is very straight forward:

```python
x = 4

if x > 4: 
    print("x is greater than 4")
elif x < 4:
    print("x is less than 4")
else:
    print("i guess x is exactly 4")
```

We use a `:` token after the condition to indicate that the following line will by indented, representing a nested piece of code. Once again, notice the lack of brackets around the condition, as well as the `elif` command (as opposed to an `else if` delineation).

If you wanted to be even more compact (or blasphemous, depending on how you look at it), you could even compress each clause into a single command:

```python
x = 4

if x > 4: print("x is greater than 4")
elif x < 4: print("x is less than 4")
else: print("i guess x is exactly 4")
```

Sometimes, doing this code compression is easier to read, and helps the reader see symmetry in the logic. However, this is usually a bad idea since it can make the code feel cluttered.

### While Loop
A [while loop](https://docs.python.org/3.7/reference/compound_stmts.html#while) is similar to an if statement, with its use of a condition that controls the flow of code. For example:

```python
counter = 0

while counter < 10:
    print("counter is less than 10")
    counter += 1
```

This will have the program print `"counter is less than 10"` ten times. Again, notice the simple definition of the condition, the `:` token, and the indentation. Again, indentation is VERY important in Python!

Like with other languages, we can get even more specific with the loop behaviour with the [`continue`](https://docs.python.org/3.7/reference/simple_stmts.html#the-continue-statement) and [`break`](https://docs.python.org/3.7/reference/simple_stmts.html#the-break-statement) constructs. The `continue` token will cause the program to restart the loop when encountered, whereas the `break` token will completely exit the entire loop. These can be useful if, for example, we wanted to emulate a do-while loop in Python (which isn't natively supported):

```python
while True:
  # do things
  if False:
    break
```

### For Loop
If you noticed, the previous bit of code involved us essentially executing a [for loop](https://docs.python.org/3.7/tutorial/controlflow.html#for-statements), a special case of a while loop where we have an explicit update step and condition. An identical implementation of the previous counter would look like:

```python
for counter in range(10):
    print("counter is less than 10")
```

What does the [`range()`](https://docs.python.org/3.7/tutorial/controlflow.html#the-range-function) function do? It returns a `range` object, which is an iterable. We'll expand on what this means later, but for now it just gives us an object that contains the integers between 0 and 9 that we can iterate over. Although there is no explicit condition in the for loop, we can see that the loop terminates when there are no more elements left in the `range` object to iterate over. 

There is a lot of nuance that we can gain from the for loop, and we will expand upon this in later sections.

### Functions

The final piece of control flow is [functions](https://docs.python.org/3.7/tutorial/controlflow.html#defining-functions). As with for loops, there is a TON of nuance in implementing functions in Python, so for now, we'll stick with the basics. 

Defining a function is done using the `def` keyword:

```python
def add_one(n):
    return n + 1
```

Notice the lack of a return type. Although running `add_one(4)` will return us 5, it's still possible to have a "void" type that returns "null":

```python
# standby, doing nothing
def do_nothing():
    pass
```

Saving this return value to a variable (e.g. `x = do_nothing()`) will give us a `None` value, which is Python's version of "null". Since Python supports functional paradigms, I'll blow your mind with the notion that functions are actually objects in Python, same as integers, `None`, and custom `Koala` objects. Weird stuff that we will return to.

## Conclusion
This is enough Python syntax to get you started, and at the very least will let you identify Python code in the wild. For loops and functions in Python are particularly weird since they contain a lot of power baked into them. More on them in the later lectures!

---

### References

1. [python-course.eu](https://www.python-course.eu/python3_history_and_philosophy.php)
2. [Interpreter - Python Docs](https://docs.python.org/3.7/tutorial/interpreter.html)
3. [If-statements - Python Docs](https://docs.python.org/3.7/tutorial/controlflow.html#if-statements)
4. [While-loop - Python Docs](https://docs.python.org/3.7/reference/compound_stmts.html#while)
5. [Continue statement - Python Docs](https://docs.python.org/3.7/reference/simple_stmts.html#the-continue-statement)
6. [Break statement - Python Docs](https://docs.python.org/3.7/reference/simple_stmts.html#the-break-statement)
7. [For-statements - Python Docs](https://docs.python.org/3.7/tutorial/controlflow.html#for-statements)
8. [Range function - Python Docs](https://docs.python.org/3.7/tutorial/controlflow.html#the-range-function)
9. [Functions - Python Docs](https://docs.python.org/3.7/tutorial/controlflow.html#defining-functions)
