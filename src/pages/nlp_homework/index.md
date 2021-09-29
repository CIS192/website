---
path: '/assignments/2'
---

# Assignment 2: Learning Machine Learning

In this assignment, we will be exploring data science, and building our first machine learning model from scratch! Make sure to install dependencies with `pip install numpy pandas` as we'll be using them for the assignment. Try to explore other dependency managers such as [Pipenv](https://pipenv.pypa.io/en/latest/) and [Poetry](https://python-poetry.org/) as well! In addition, make sure to keep your data files in the same directory as your `assignment2.py` ([available here](https://raw.githubusercontent.com/CIS192/homework/master/assignment2/assignment2.py)) to keep things simple.

## Part 1: Data Wrangling with Pandas

### Section 0: Pandas Pandas Pandas Pandas (x4)

One of Python's biggest assets is its ability to let us do data analysis quickly and effortlessly, in a reproducible way. Since data analysis is a prevalent part of any field in both academia, and industry, it's worth having good data skills in your toolbelt.

The best way to do quick data analysis in Python is to use [Pandas](https://pandas.pydata.org), an open source data analysis library used by virtually every data scientist. In particular, we will be looking at a dataset of [different types of wines](https://archive.ics.uci.edu/ml/datasets/wine) and their chemical makeup. Cheers!

Recall that you can access a column from a DataFrame with a dictionary-like notation:

```python
columns = df['column']
query = df[df['column'] == True]
# >>> returns a dataframe where the inner query is satisfied
```

### Section 1: Scavenger Hunt

In this scavenger hunt, you will be using Pandas to determine the answers to the following questions about the provided [Wine Dataset](https://raw.githubusercontent.com/CIS192/homework/master/assignment2/wine.csv):

0. What are the dimensions of the dataframe? That is, how many rows and columns are there?
Give your answer as a `(rows, columns)` tuple.

1. What is the average `alcohol` content over all wines?

2. What is the standard deviation of the `magnesium` content?

3. What is the mean alcohol content, grouped by `target`?
Give your answer in terms of a list (e.g. `[class_0_alc, class_1_alc, class_2_alc]`).

4. What is the minimum `proline` content? What is the maximum? Give your answer
as a list in the form `[min, max]`.

5. How many wine samples in the dataset have a `malic_acid` content over 2.5?

6. What is the index of the wine with the lowest `flavanoid` content?

7. How many unique `hue` values are there in the dataset?

**TODO:** Implement the `scavenger_hunt()` function by returning a dictionary mapping the question number (as an integer) to the correct answers.

*Hint*: You can read the file into a `DataFrame` by using:

```python
df = pd.read_csv('wine.csv')
```

Methods that might be useful are: `mean()`, `std()`, `size()`, `groupby()`, `sort_values()`, `idxmin()`, and `unique()`. Feel free to use outside resources to figure out creative ways of answering these questions. The [Pandas Documentation](https://pandas.pydata.org/pandas-docs/stable/) will definitely be helpful.

## Part 2: Generating Text With N-Gram Language Models

### Section 0: What is a language model?

In this assignment, we will be building a **language model**, which is how we can machine learning to generate text (e.g. chatbots, summarization, translation). In particular, we will be training an **n-gram** model, which is a relatively simple but extremely powerful model. Next week, we'll work with the state-of-the-art in NLP, which includes neural networks!

In short, an n-gram language model works by treating language as a sequence of *overlapping* word tuples, of size $n$. For example, the sentence "I love CIS 192" would be represented as unigrams ($n = 1$) as:

```python
[("I"), ("love"), ("CIS"), ("192")]
```

and as bigrams ($n = 2$) as:

```python
[("I", "love"), ("love", "CIS"), ("CIS", "192")]
```

Language models work by estimating the **probability of the next word** in sequence given the previous words, and sampling from that distribution. If you're familiar with the **Markov Property**, we will be relying on it as a powerful assumption to make the generation process simpler. Powerful language models (such as [GPT-3](https://www.technologyreview.com/2020/07/20/1005454/openai-machine-learning-language-generator-gpt-3-nlp/) and the human brain) should include all the history in a sentence. However, for this assignment, we will just be considering a single n-gram of history to make the math simpler.

At a high level, in this assignment, we will build an estimator for the probability of a given word (or n-gram), given a context (n-gram), and then a way to repeatedly select new words until we have a full body of text.

We've provided some stubs to make the implementation process more clear. Feel free to add helper functions, but as usual, don't change the type signatures of the functions! You can get an idea of how the functions should work together by checking out the code under `if __name__ == "__main__"`.

### Section 1: Reading Data

The first thing you want to do is load the data from a given text file into memory. We'll start by just getting a list of the words, and chunking them into grams later. Use the `corpus.txt` file ([available here](https://raw.githubusercontent.com/CIS192/homework/master/assignment2/corpus.txt)) as a example corpus to use.

**TODO:** Implement the `get_words()` function, that takes in the file path of a plain-text `.txt` as a string. The function should return a list of lowercase words (as strings), in the order that they appear in the text file.

*Hint:* make use of the `split()` function and `lower()`.

### Section 2: Transforming Data

Getting data into a useable format is often most important part of the machine learning process. For an n-gram model, this means taking our list of words and creating our list of n-grams, provided the value for $n$.

**TODO:** Implement `get_ngrams()`, which takes a list of words and the size of the grams and returns a **list of tuples**, where each tuple is a gram.

### Section 3: Computing the Distribution of Words

The most important part of the n-gram model is our estimate of the distribution of our words. That is, we want to map a particular context n-gram to possible next n-grams and their frequencies. We'll represent this distribution by using a double dictionary, where the key of the outer dictionary is the context n-gram, and the inner dictionary maps the target n-gram to its frequency.

For example, many our `counts` dictionary looks something like:

```python
counts = get_counts(n_grams)
print(counts[('I', 'am')])

>>> {('am', 'cool'): 50, ('am', 'lame'): 20, ('am', 'asleep'): 10 ... }
```

We also want to make sure that our model *generalizes* a bit better than just the raw frequencies. So we'll also add 1 to each possible frequency so that our model has a bit more creativity. If you're interested, this is called [smoothing](https://en.wikipedia.org/wiki/Language_model#n-gram).

*Hint:* We can do this by initializing a default dictionary, which maps to a default dictionary with the default integer value of 1: 

```python
counts = defaultdict(lambda: defaultdict(lambda: 1))
```

**TODO:** Implement the `get_counts()` function, which takes in the list of n-grams and returns the frequency distribution of the n-grams.

*Hint:* The `defaultdict` with a bunch of `lambda` functions may be hard to interpret when `print`-ing. I would recommended casting the `defaultdict` to a regular `dict` to make this cleaner and easier to read.

### Section 4: Generating Words By Sampling

Now, it's time for the moment of truth: using our distribution of frequencies to select the next word given some context. 

One way to randomly select a next word would be to select a random number between 1 and `len(n_grams)`, and select that n-gram. However, that totally disregards our actual empirical estimate of the frequencies (i.e. in `get_counts`). A better way would be to randomly select a word in accordance with the distribution we computed earlier.

We can do this with [NumPy](https://numpy.org/) by using `np.random.choice`, where we provide the length of a list to sample from and a list of corresponding **probabilities**, which will return the index of the selection:

```python
word = words[np.random.choice(len(words), p=probabilities)]
```

**TODO:** Implement the `generate_gram()` function, which takes in the distribution `counts` as well as the context n-gram, and returns a selected n-gram tuple according to the distribution for the given context.

*Hint:* Make sure you understand which dictionary in `counts` to use as the distribution. You also will need to normalize the raw frequencies into probabilities for `np.random.choice` by dividing each entry by the sum of the frequencies in the distribution.

There's a lot more nuance to generating text than just random sampling, but these suffices for now. If you want to learn more about how to generate text, check out [this blog post I wrote](https://arun.ai/blog/decoding) on the subject.

### Section 5: Generating Entire Sentences

For the final part, we will put everything together. In order to generate an entire sentence or paragraph, we can repeatedly call `generate_gram()`, feeding in the previous prediction as the next context. This is known as **auto-regressive** generation.

**TODO:** Implement the `generate_sentence` function, which takes in the distribution `counts` as well as a context n-gram (and an optional parameter for the number of n-grams to generate) and should return a list of tuples.

*Hint:* We've provided a `stringify()` helper function to help you visualize what your generated sentence looks like in regular string format. Feel free to use it to help appreciate your work!

### Section 6: Build Your Own Corpus

The corpus provided consists of presidential speeches from Barack Obama, which can be a little dry. In this section, create your own corpus of text, and be creative with it! It can be things like Wikipedia, blog posts, tweets, fan-fiction, or your friend's literary assignments!

Include the corpus along with a sample generation in your Gradescope submission.

## Conclusion

Machine learning is a very interesting, but often confusing subject. In this course, unfortunately, we can't provide all the details and depth, but this assignment should serve as a springboard for all sorts of things related to data science. The final project will be a great opportunity to explore some of these ideas in greater depth.

In the next few assignments and lectures, we'll be introducing modern approaches to this very problem of text generation, such as word embeddings and neural networks!