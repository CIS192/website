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
    notes: "/algorithms",
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
    topics: "Natural Language Processing",
    notes: "/nlp",
  },
  {
    week: 4,
    topics: "Machine Learning",
    notes: "/ml",
  },
  {
    week: 5,
    topics: "Deep Learning",
    notes: "/ml",
  },
  {
    week: 6,
    topics: "REST APIs",
    notes: "/flask",
  },
  {
    week: 6,
    topics: "Databases",
    notes: "/flask",
  },
  {
    week: 7,
    topics: "User-Based Applications",
    notes: "/flask",
  },
  {
    week: 8,
    topics: "Cloud Computing",
    notes: "/docker",
  },
  {
    week: 9,
    topics: "Lightning Lectures",
    notes: "/lightning",
  },
  {
    week: 10,
    topics: "Course Wrap-Up",
    notes: "/final",
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
	        </div>
	        <div className="column"></div>
	      </div>
	    </div>
	  </section>
  );
}

export default Teaching;