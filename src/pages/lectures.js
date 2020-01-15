import React from 'react'
import Nav from '../components/Nav'

const lectures = [
  {
    week: 0,
    topics: "Python Basics",
    notes: "/basics",
  },
  {
    week: 1,
    topics: "Data Structures and Algorithms",
    notes: "/data_structures",
  },
  {
    week: 2,
    topics: "Pythonic Programming",
    notes: "/pythonic",
  },
  {
    week: 3,
    topics: "Modules and Files",
    notes: "/files",
  },  
  {
    week: 3,
    topics: "Natural Language Processing with NLTK",
    notes: "/nlp",
  },
  {
    week: 4,
    topics: "Machine Learning with NumPy and Sci-Kit Learn",
    notes: "/ml",
  },
  {
    week: 5,
    topics: "Deep Learning with Keras/Tensorflow",
    notes: "/ml",
  },
  {
    week: 6,
    topics: "REST APIs with Flask",
    notes: "/flask",
  },
  {
    week: 7,
    topics: "Full Stack Development with Django",
    notes: "/django1",
  },
  {
    week: 8,
    topics: "Relational Databases and Security",
    notes: "/django2",
  },
  {
    week: 9,
    topics: "Cloud Computing with Docker",
    notes: "/docker",
  },
  {
    week: 10,
    topics: "Lightning Lectures [TBD]",
    notes: "/lightning",
  },
  {
    week: 11,
    topics: "Course Wrap-Up",
    notes: "/final",
  },
]

const references = [
  {
    topics: "Unix Commands",
    notes: "/unix",
  }, 
  {
    topics: "Installing Python",
    notes: "/install",
  }, 
  {
    topics: "Virtual Environments",
    notes: "/virtualenv",
  }, 
  {
    topics: "Git Commands",
    notes: "/git",
  }, 
]

const Teaching = () => {
  return (
	  <section className="section" style={{"paddingTop": "1rem"}}>
	    <div className="container">
        <div className="columns">
          <div className="column is-one-fourth"> </div>
          <div className="column is-half">  
          	<Nav />
				    <h1 class="title" style={{marginBottom: "0.5rem"}}> Lectures </h1>
	          <p>
              Each lecture has its associated readings listed
              under the link to the lecture material. Schedule is subject to change throughout the semester. 
              <br /> <br />
              This class is split into three sections: Pythonic APIs, Data Science, and Web Development.
	          </p> <br />
	  
            <table class="table is-bordered is-fullwidth">
              <thead>
                <tr>
                  <th><abbr title="Week">Week</abbr></th>
                  <th><abbr title="Week">Topics</abbr></th>
                  <th><abbr title="Slides">Resources</abbr></th>
                </tr>
              </thead>
              {lectures.map(lecture =>
                <tr>
                  <td> Week {lecture.week}</td>
                  <td> {lecture.topics} </td>
                  <td> <a href={lecture.notes}>Notes</a> </td>
                </tr>
              )}
            </table>
            
            <h1 class="title" style={{marginBottom: "0.5rem"}}> References </h1>
	          <p>
                A variety of handy guides to quickly get yourself up and running:
	          </p> <br />

            <table class="table is-bordered is-fullwidth">
              <thead>
                <tr>
                  <th><abbr title="Week">Topics</abbr></th>
                  <th><abbr title="Slides">Resources</abbr></th>
                </tr>
              </thead>
              {references.map(reference =>
                <tr>
                  <td> {reference.topics} </td>
                  <td> <a href={reference.notes}>Guide</a> </td>
                </tr>
              )}
            </table>
	        </div>
	        <div className="column"></div>
	      </div>
	    </div>
	  </section>
  );
}

export default Teaching;