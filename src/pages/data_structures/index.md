---
path: "/data_structures"
---

# Data Structures and Algorithms
> Efficiently Implementing Ideas in Python

Writing efficient code is part of growing as a developer, and it's what seperates real programmers from the weak. Think back to CIS 121, why do we want to use Merge Sort over Bubble Sort? Long answer: it has to do with the complexity of $O(n^2)$ being asymptotically larger than $O(n \operatorname{log} n)$. Short answer: we care about good practice, and good practice is often nothing more than better performing code, especially in Python. In this lecture, I hope to convince you of this.

Disclaimer: we don't really care about asymptotic complexity much in this class. In fact, we primarily care about lines of code written, unless its **egregiously** poor performing code (think non-polynomial time). That being said, your employer/interviewer/collaborator will definitely care about code performance with theoretical grounding, so in this lecture we will make reference to the Big-O runtimes of various operations.

## Sets

Let's take it to the basics. We want to store just *some collection* of things. That is, we want to maintain an *unordered* bag of objects. In math and computer science, this construct is known as a **set**. Similarly, in Python this is called a `set` (suprise, suprise).

### Instantiation

We can instantiate one by calling `set()`:

```python
students = set()
```

### Inserting/Deleting
Recall that sets maintain unique elements (no duplicates) and each inserted element is *immutable* (cannot be changed). We can insert into our newly created set by using the `.add()` method, which takes in any object as input. Or, we can also directly write elements into the curly braces:

```python
students.add("Arun")
other_students = {"Arun"}
other_students.add("Jorge")
```

Similarly, we can remove elements from a set by calling `remove()`:

```python
students.remove("Arun")
```

### Existence

Checking if an element exists is one of my favourite pieces of syntactic sugar from Python - we simply write the boolean expression pretty much in English using the `in` keyword:

```python
if "Arun" in students:
    print("Arun is a student")

if "Arun" not in students:
    print("Arun was a figment of our imagination")
```

Sets in Python are truthy, which means that an empty set has a value of `False` and vice versa:

```python
if students:
    print("Students exist")
```

### Size

Getting the length of a set is pretty much the same as with all data structures, and can be done by calling `len()`, and *passing* the set as an argument to the function:

```python
number_of_students = len(students)
```

Why don't we just call something like `students.length`? We'll return to this in later lectures, but for now just consider this as a "gotcha" of Python.

### Operations

Think back to CIS 160 and set operations such as intersection (i.e. $A \cap B$) and union (i.e. $ A \cup B$). These operations are supported in Python, using their English vernacular:

```python
odds = {3, 5, 7, 9}
primes = {3, 5, 7}

odd_primes = odds.intersection(primes)
```

The shorthand for this is `set1 & set2`, which makes sense if you think of intersection as an extension of the logical AND operation. Similarly, union can be expressed either by calling `.union()` or by calling `set1 | set2`. Symmetric difference between sets can be computed using the `-` operation, which also makes intuitive sense. Don't you just love Python?

## Tuples

How do we get a specific element from a set? Turns out, we can't. This is a limitation in the *API* of sets; they're mainly used as a means of checking existence of certain objects. Let's move onto data structures that we can index into, thus preserving some notion of *order*. Recall a tuple from CIS 120 as being an **immutable** sequence of elements. 

## Instantiation

In Python, we can declare a tuple by using regular brackets:

```python
name = "Arun"
score = 100

student = (name, score)
```

Note that Python, like most sane languages, is designed to support 0-indexing. This is a nice compact way of expressing these two values such that we can index them later using the square notation that we are familiar with:

```python
arun_score = student[1]
```

Some cool functionality supported by Python is **negative indexing**, this let us index by counting down from the *end* of the tuple:

```python
arun_score = student[-1]
```

Tuples can also be defined *without* the braces. The following two lines of Python are equivalent:

```python
student = (name, score)
student = name, score
```

Tuple **destructuring* is also a really elegant way of instantiating multiple variables *on the same line*:

```python
age, name, score = 20, "Arun", 100
```

This implicitly creates a tuple `(age, name, score) = (20, "Arun", 100)`. Even if we don't end up explicitly using the defined tuple, we can still access its identifiers later in our code:

```python
print(age)
print(name)
print(score)
```

Even if you don't end up using tuples much in your code, you will definitely use the tuple variable instantiation paradigm often. I'll leave you with a cool parlour trick to think about - swapping variables in a single line **without a temporary variable**:

```python
# instantiate variables
x, y = 5, 10
# swap
x, y = y, x 
# clean up after blown mind
```

## Insertion/Removal

Tuples are designed to be **immutable**, so we actually can't change the contents of a tuple once it's been instantiated. That is, if we tried to set `student[1] = 99`, the code would crash. A little "gotcha" with tuples is that although the tuple itself cannot change, the values within the tuple are subject to mutation. This is because if we held a tuple of objects (which is no more than storing the *memory locations* of the objects), and the objects were to change, the tuple would still hold reference to the mutated objects.

A hack-y way to get around the lack of insertion with tuples is just to concatenate tuples together:

```python
name = "Arun"
score = 100
age = 20

student = (name, score)

updated_student = student + (age)
```

A cool Python parlour trick is to repeat the contents of a tuple by multiplying by a contant, an extension of concatenation using `+`:

```python
three_ones = (1) * 3
# this is equal to (1, 1, 1)
```

## Lists

What if we wanted the indexing power of a tuple, but in the form of a *mutable* data structure, one that allows us to change the contents inside. Suprise suprise - we've arrived back at the array! In Python, these are lovingly known as **lists**. Lists are completely mutable objects that can contain *any* arbitrary datatype. This means that we can have a list containing strings, integers, and custom Koala objects,

### Instantiation

List declaration is extremely simple in Python. Similar to sets, we can either instantiate them by calling `list()` or by writing out the contents within a `[]`:

```python
students = ["Arun", "Kevin", "Bob"]
```

Similar to tuples, we can retrive a single value within a list by indexing into it using the square bracket notation:

```python
print(students[0])
# prints Arun
```

We can also index using negative indices to index from the end of an array:

```python
print(students[-1]) # -> prints Bob
```

### Insertion/Removal

We can append values to a list using `.append()`, which is an $O(1)$ operation in expectation:

```python
students.append("Imposter Arun")
```

Similarly, we can remove elements from a list using `.remove()`, which is an $O(n)$ operation in expectation (using linear search):

```python
students.remove("Arun")
```

Concatenation using lists can be done using the `+` operator, as before:

```python
old_students = ["Harry, Sumit"]
new_students = ["Arun"]
all_students = old_students + new_students
```

### Iteration

Iterating over lists is very elegant using the `for _ in _` paradigm:

```python
for student in students:
    print(student)
    # prints Arun, Kevin, Bob
```

Note that we can rename `student` in the above code to be `x`, or `name` or any other identifier. This is equivalent to a `for each` loop in languages such as Java or JavaScript.

If we had a nested list (a list of lists), we can iterate over each element using a nested `for` loop:

```python
pixels = [[1, 4, 6], [1, 3, 5], [1, 5, 7]]
for row in pixels:
    for pixel in row:
        print(pixel)
        # prints each pixel
```

### Sorting
We can sort lists in a variety of ways. The first is to call `sorted()` on the list. This creates a **copy** of the original list:

```python
numbers = [1, 5, 4, 12, 3, 0]
print(sorted(numbers)[0]) # -> prints 0
print(numbers[0]) # -> prints 1
```

The second way is to call `.sort()` on a list. This sorts the list **in-place**:

```python
numbers = [1, 5, 4, 12, 3, 0]
numbers.sort()
print(numbers[0]) # -> prints 0
```

We can even sort in descending order by passing in a *keyword* arguement `reverse`:

```python
numbers = [1, 5, 4, 12, 3, 0]
numbers.sort(reverse=True)
print(numbers[0]) # -> prints 12
```

There's also a way to define a custom sort by proving a keyword arguement `key` which is a function over the values in a list:

```python
students = ["Arun", "Kevin", "Bob"]
students.sort(key=len) # -> sorts by length of each string
print(numbers[0]) # -> prints Bob
```

We can also use this `key` arguement to sort a list of tuples. By default, sorting a list of tuples operates on the *first* element of each tuple in the list. We can use the `key` arguement to sort by the *second* element in eachh tuple:

```python
students = [("Arun", 50), ("Bob", 80), ("Kevin", 100)]
students.sort(key=lambda x: x[1], reverse=True)
print(students[0]) # -> prints ("Kevin", 100)
```

We've thrown a couple of obscure concepts here: functions as objects and `lambda` functions. We'll cover both of these in our section on *Functional Programming*. Until then, feel free to think about these concepts only in the context of sorting lists!

## Strings

We will re-introduce strings in the context of being a data structure. In particular, there are a variety of operations we can perform on them.

Recall that a string can be instantiated by defining the characters within quotations:

```python
name = "Arun Kirubarajan"
```

Remember to note that strings are immutable, which means that we can only alter `name` by redefining a *new* string, either by concatenation (an $O(n)$ operation), or by redefining the string completely.

### Substrings

Let's say we want to see if the string `"Arun Kirubarajan"` contains the substring "Arun". Since we are searching for a contiguous substring within the larger string, turns out we can just use our favourite `in` operator:

```python
if "Arun" in name:
    print("First name exists!")
```

### Slicing

Now, imagine we have the need of actually computing the substrings within the string. This can be done using `slicing`, another elegant Python operation. To slice a string we just need to provide the starting index (*inclusive*), and the ending index (*exclusive*), seperated by a colon `:`.

```python
first_name = name[0:4]
print(name) # -> prints Arun
```

In fact, the Python interpreter assumes that if no starting or ending index is provided, it will default to `0` and the length of the string respectively:

```python
first_name = name[:4]
last_name = name[5:]
```

Finally, we can provide a value after a second second colon `:` to indicate the increment size of the indexing:

```python
every_second_letter = name[::2]
```

Note that calling slicing using `[::1]` is equivalent to the identity function. A corrolary of this is that we can *reverse* a list quickly by providing a step size of `-1`:

```python
reversed_name = name[::-1]
```

These slicing operations also apply to lists and tuples:

```python
numbers = [1, 2, 3, 4, 5]
print(numbers[1:3])

letters = ('a', 'b', 'c', 'd', 'e', 'f')
print(letters[::-1])
```

How convenient!

## Dictionaries

One of the most common paradigms for storing information is in the form of a key-value pair. In CIS 120 and 121, we learned about HashMaps, which allow us to perform lookup, insertion/deletion and retrieval in $O(1)$ time. In Python, these data structures are known as **dictionaries**. Furthermore, they're *even easier* to instantiate and use in Python. Dictionaries are **mutable** data structures that can take an arbitrary object as a key, and provide an arbitrary object as a value.

### Instantiation 

We can create a dictionary by either calling `dict()` or by writing out its contents within curly braces `{}`:

```python
scores = dict()
scores = {"Arun": 50, "Bob": 99}
```

### Insertion/Removal

We can insert into a dictionary simply by using the square brackets:

```python
scores["New Student"] = 100
scores["Another Student"] = 90
```

We can confirm that these insertions work as expected by calling `len` on the dictionary, which works as expected.

We can also delete elements from a list using the `del` operator:

```python
del scores["Arun"]
```

### Default Dictionary
If we index into a dictionary with a key that doesn't exist, then our code will crash. We can check key existence with a dictionary by using the `in` operator:

```python
if "Imposter Arun" not in scores:
    scores["Imposter Arun"] = 0
else:
    scores["Imposter Arun"] = scores["Imposter Arun"] + 1 
```

But sometimes, this isn't very compact. We can instantiate a dictionary with an initialized value by using the `defaultdict` package. We haven't covered imports yet, but this package is a module that comes bundled with Python (known as a *first-party* package) and includes a variety of useful features that we don't need to implement again.

At the top of our code we can add `from collections import defaultdict`, and we can now have a dictionary that has all of its values initialized to 0. 

```python
words = ["I", "am", "going", "to", "the", "store", "I", "like", "the", "store"]
counts = defaultdict()

for word in words:
    counts[word] += 1
    # do not need to worry about any errors!
```

By default, the `defaultdictionary` has all of its keys initialized to the default integer value of 0, but we can specify types by passing a data-type into the constructor of the default dict. 

```python
default_names = defaultdict(str)
```

## Objects

Python is an object-oriented programming language, through and through. This means that all values such as integers, strings, and dictionaries are all considered objects to the Python interpreter. Defin

### Definition

We can define an object using the `class` keyword:

```python
class Koala:
    pass
```

The `pass` keyword indicates that there is no code to execute in the current block, and to escape to the next scope. Now, we can provide our Koala with *as many* member variables as we want:

```python
koala = Koala()
koala.name = "Bert"
koala.age = 2
```

Note that we didn't define Koala to have any public/private variables or anything like that. Instead, all member variables can be defined at runtime and by default every variable is public. But let's say we want to initialize the supported member variables. We can do this in the equivalent of a constructor, otherwise known as an `init` function in Python:

```python
class Koala:
    def __init__(self, name, age):
        self.name = name
        self.age = age
```

The first thing to note here is the use of a `self` identifier. This is equivalent to `this` in Java, and it refers to the current object as context. The second thing to note is the double underscores before and after the `init`. The double underscores (hereby referred to as "dunders") show that this is a reserved function in Python. In fact, these types of methods with dunders in their names are called **magic methods**, and we'll cover them more in depth next lecture.

### Inheritance

## Conclusion

We've only scratched the surface with the different operations and member functions available to use for each data structure. I highly recommend checking out the [documentation](https://docs.python.org/3/library/collections.html) for collections and the data structures shown today, since a lot of quirky/specific uses are too broad to cover in a single lecture. As we progress in the course, you'll be exposed to different Pythonic syntactic sugar as well as other powerful paradigms for manipulating variables/information efficiently.

You might also be noticing some parallel APIs between lists, tuples, and strings. We'll make these similarities concrete when we talk about *Iterators* next lecture. For now, just appreciate how easy it is to remember all the various operations!

For now, some fun exercises would be to implement canonical algorithms from CIS 121 such as DFS, BFS, Djikstra, Merge Sort, and Union Find. You'll find that a vast majority of algorithms have an elegant solution in Python! I'll leave you with a 5 line implementation of DFS in Python (for a vertex `node` and a set of `nodes` named `visited`):

```python
def dfs(node, visited):
    for neighbour in node.neighbours:
        if neighbour not in visited:
            visited.add(neighbour)
            dfs(neighbour, visited)
```

Ah, feels good.
