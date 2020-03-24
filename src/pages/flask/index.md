---
path: '/flask'
---

# An Intro to Web Dev

> Featuring the Web Framework Flask!

As a programmer, it can seem like building websites involves [countless](https://xkcd.com/927/) frameworks and [complex](https://xkcd.com/1270/) paradigms… However, the [complexity](https://www.cis.upenn.edu/~cis455/) of web development has actually led to the creation of easy-to-use libraries and frameworks that abstract most of the complicated processes!

In this lecture, we will be working with [Flask](https://github.com/pallets/flask), a Python framework for web development, by using it to build a [REST API](https://developer.mozilla.org/en-US/docs/Glossary/REST). Web development involves a lot of moving parts - we recommend you ask many questions!

## HTTP and REST APIs

**HTTP** (Hyper Text Transfer Protocol) is a way for us to communicate between machines. The core technology was developed by Tim Berners-Lee in 1989 at CERN. Put simply, this is the underlying technology that has enabled the internet to work.

HTTP is a protocol that consists solely of requests and responses. HTTP is stateless; this means that requests/responses are made independent of each other. Typically a client (e.g. website and mobile app) will make requests for resources (e.g. text/images) from a server. It’s is a common mistake to conflate **HTML** (Hyper Text Markup Language) with HTTP. The distinction is that HTML is the content of a webpage that will eventually be displayed to a user, where HTTP is the transportation method of the HTML.

The client and server can exist as one application or separately (as is typically the case with Flask). The actual layers of the protocol can get very technical, but this is essentially all you need to understand as a Python developer. As Python developers, we build **REST APIs**, server applications that respond to requests accessed through urls (e.g. http://upenn.edu) over HTTP. Data in REST API’s are typically sent and received using **JSON** (Javascript Object Notation), which follows a key-value interface similar to dictionaries.

If you are interested in learning more about the infastructure of the web, we recommend checking out [NETS-150](https://www.cis.upenn.edu/~mkse150/), [NETS-212](https://www.cis.upenn.edu/~nets212/), or if you are feeling really adventurous, [CIS-455](https://www.cis.upenn.edu/~cis455/)!

## Introducing: Flask

As mentioned above, we will be building a REST API in Python using a library named [Flask](https://github.com/pallets/flask). Flask is a web framework that allows us to build a server that other applications can make HTTP requests to. Flask is the backbone for the architecture of a lot of Python software, including [LinkedIn](https://engineering.linkedin.com/blog/) and [Pinterest](https://medium.com/pinterest-engineering/) (but is 100% open source).

## Creating a Flask application

Flask makes it quick and simple to build a server using Python. First, we need to install Flask using `pip` and create the server file. In this demo, we will be building a REST API to clone a question/answering site like Stack Overflow.

1. Create a folder using `mkdir 192overflow`.
2. Enter the folder using `cd 192overflow`.
3. Create a file named `server.py` here with a text editor or `touch`.
4. Install Flask using `pip install flask`.
5. Place the following contents in the `server.py` file and save.

```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
	return "Hello World!"

if __name__ == "__main__":
	app.run(port=5000, debug=True)
```

6. Run the server using `python server.py`.
7. Access the server at `localhost:5000` in your web browser.

## Defining Routes

In the above example, we build a server that exposes a REST API. Our only access point to the interface is the route `"/”` that returns the return value of a function named `hello()`. We defined this behavior using the function decorator `@app.route("/")`.

We can similarity create decorated functions that allow us to define more routes. Let’s change the message of our function to return `"Welcome to 192overflow's API!"`. The Flask server automatically reloads and if we refresh our web browser, we should see the updated value.

## Making Requests to Query

We define a dictionary mapping questions to answers before we define routes:

```python
answers = dict()
# This also works!
answers = {}
```

We can now create another route to take in an argument (a string value of the question) and return a result in JSON. We import the `jsonify` and `request` module from Flask using `from flask import jsonify, request`. We can now add another route that takes in a string of the question (using only alphanumeric characters with underscores for spaces):

```python
@app.route("/api/answers", methods=['GET'])
def get_answer():
	question = request.args.get('question')
	if question in answers:
		return jsonify({"status": 200, "answer": answers[question]})
	else:
		return jsonify({"status": 404, "message": "No answer."})
```

Now, we can access this route from our browser supplying a URL argument for the question `localhost:5000/api/answers?question=what_is_love`. Clearly, we don’t have any questions or answers, we can change that by adding another route for adding a question and answer pairing.

## Making Requests to Insert

Next, we define a route for setting the answer to a question. Both arguments are sent using a JSON encoded object, that we decode using the `get_json` function to convert the arguments to a dictionary.

```python
@app.route("/api/answers", methods=['POST'])
def post_answer():
	data = request.get_json()
	question = str(data["question"])
	answer = str(data["answer"])
	answers[question] = answer
	return jsonify({"question": question, "answer": answer})
```

We can test this in the command line using:

```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"question":"what_is_love", "answer":"dont_hurt_me"}' \
  http://localhost:5000/api/answers
```

If you're not on a UNIX based system (looking at you, Windows) then you can download [curl](https://curl.haxx.se/) here. Instead of the above command, navigate to the directory you unzipped the curl executable in, and run
```bash
curl.exe --header "Content-Type: application/json" \
  --request POST \
  --data '{"question":"what_is_love", "answer":"dont_hurt_me"}' \
  http://localhost:5000/api/answers
```
instead. (Same thing, except we're telling Windows to use the curl executable we downloaded.)

Or install a graphical HTTP client like [Postman](https://www.postman.com/), and click the 'Send' button after filling out the fields like below:
![screenshot](https://i.imgur.com/PedEksL.png)

## Exporting to JSON

However, you may have noticed that the server will wipe all the data whenever we navigate away from it. This is because our server is still a Python script and variables are often reset. We need some more persistent server-side storage, similar to how a site can remember your searches.

We can use the `json` library (bundled with Python, different from `jsonify`) to save information into a `.json` file that can be serialized and deserialized as we wish. We can import the `json` library with a simple `import json`. We use the `with` keyword to safely interact with file I/O (e.g. reading and writing without worrying about closing).

```python
@app.route("/api/answers", methods=['POST'])
def post_answer():
	data = request.get_json()
	question = str(data["question"])
	answer = str(data["answer"])
	with open('db.json', 'r') as db_read:
		data = json.load(db_read)
	with open('db.json', 'w') as db_write:
		data[question] = answer
		json.dump(data, db_write)
	return jsonify({"question": question, "answer": answer})
```

We’ll also need to update how we query the database so that we query the JSON database as opposed to our `answers` dictionary.

```python
@app.route("/api/answers", methods=['GET'])
def get_answer():
	question = request.args.get('question')
	with open('db.json', 'r') as db_read:
		answers = json.load(db_read)
	if question in answers:
		return jsonify({"answer": answers[question]})
	else:
		return jsonify({"message": "No answer."})
```

**DISCLAIMER**
Saving to a local file (like our `db.json`) can create consistency issues if multiple users edit/query the same file at the same time. We’ll ignore this scenario for this course since it isn’t a Python-specific issue. There are [entire courses](https://www.seas.upenn.edu/~cis550/) devoted to solving this and the other challenges that arise when storing data, if you're interested.

## Rendering HTML

Allowing others (i.e. non-technical people) to use your project will involve the use of some HTML. However, `.html` files are static, and thus aren’t good by themselves at receiving input and processing/result results. Using Flask, we can solve this by defining **templates** that we can “inject” Python data into. Let’s add another route to display a template at `GET /answers` (NOTE: not `GET /api/answers`):

```python
@app.route("/answers", methods=['GET'])
def render_answer():
	question = request.args.get('question')
	with open('db.json', 'r') as db_read:
		answers = json.load(db_read)
	if question in answers:
		# Make sure to also import render_template from flask in the imports above!
		return render_template("answer.html", question=question, answer=answers[question])
	else:
		return jsonify({"status": 404, "message": "No answer."})
```

Here, we perform the same logic as before in `/api/answers`. However, instead of returning a JSON response upon success, we return a rendered template. We pass in keyword arguments (i.e. `kwargs`) for the question and answer to be rendered in the HTML.

Now, we need to define the HTML page. Let’s create a new folder named `templates` in the `192overflow` directory that contains a single file named `answer.html`. In this file, we’ll adding some HTML code:

```html
<h1>Question</h1>
<p>{{question}}</p>
<h2>Answer</h2>
<p>{{answer}}</p>
```

Essentially, we are defining a webpage that has large, title text that will indicate whether the following text is a question or answer, followed by the question/answer. The double curly braces `{{variable}}` signify that some keyword argument `variable` will be passed in as a Python object to be rendered.

## Conclusion

In this section of the course, you learned some crucial paradigms for web development and software engineering as a whole:

1. HTTP
2. JSON
3. REST APIs
4. Flask
5. HTML rendering

Some next steps would involve adding more routes, some way to add users, and more front-end (HTML) pages! Feel free to email the staff if you have any questions!

Later assignments will be in [Django](https://www.djangoproject.com/), another Python framework which comes with more built in functionality at the cost of being more abstract/harder to understand. Django is used by companies like [Instagram](https://instagram-engineering.com/web-service-efficiency-at-instagram-with-python-4976d078e366), [Spotify](https://labs.spotify.com/), and also in most Penn Labs products, like [Penn Course Review](https://github.com/pennlabs/pcr)! Hopefully, understanding the Flask code presented in this lecture will help you understand how to implement and debug the functionality of your future Django apps.
