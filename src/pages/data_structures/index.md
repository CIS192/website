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

We can instantiate one by calling either `set()` or by directly calling `{}`:

```python
students = set()
other_students = {}
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

## Arrays

### Sorting

## Strings

### Slicing

## Dictionaries

### Default Dictionary

## Objects

## Conclusion

We've only scratched the surface with the different operations and member functions available to use for each data structure. I highly recommend checking out the [documentation](https://docs.python.org/3/library/collections.html) for collections and the data structures shown today, since a lot of quirky/specific uses are too broad to cover in a single lecture. As we progress in the course, you'll be exposed to different Pythonic syntactic sugar as well as other powerful paradigms for manipulating variables/information efficiently.

For now, some fun exercises would be to implement canonical algorithms from CIS 121 such as DFS, BFS, Djikstra, Merge Sort, and Union Find. You'll find that a vast majority of algorithms have an elegant solution in Python! I'll leave you with a 5 line implementation of DFS in Python (for a vertex `node` and a set of `nodes` named `visited`):

```python
def dfs(node, visited):
    for neighbour in node.neighbours:
        if neighbour not in visited:
            visited.add(neighbour)
            dfs(neighbour, visited)
```