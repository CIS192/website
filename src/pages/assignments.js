import React from 'react'
import Nav from '../components/Nav'

const Teaching = () => {
  return (
	  <section className="section" style={{"paddingTop": "1rem"}}>
	    <div className="container">
        <div className="columns">
          <div className="column is-one-fourth"> </div>
          <div className="column is-half">  
          	<Nav />
				    <h1 class="title" style={{marginBottom: "0.5rem"}}> Assignments </h1>
	          <p>
              Each assignment is designed to take roughly 4 to 5 hours to complete. Start early, 
              ask questions on Piazza and come to office hours! Note there is NO collaboration unless otherwise noted. 
	          </p> <br />
            <p><strong>Pythonic Foundations</strong></p>
	          <div class="panel list-group" style={{marginTop: "1rem", borderRadius: "0.2rem"}}>
	            <a class="panel-block list-group-item is-primary" href="https://github.com/CIS192/homework/blob/master/assignment1.py" download>Assignment 1: Finger Workouts</a>
	            <a class="panel-block list-group-item is-primary" href="https://github.com/CIS192/homework/blob/master/assignment2.py">Assignment 2: Data Structures and Algorithms</a>
	          </div>
	          <p><strong>Data Science</strong></p>
	          <div class="panel list-group" style={{marginTop: "1rem", borderRadius: "0.2rem"}}>
	            <a class="panel-block list-group-item is-primary">Assignment 3: Learning Machine Learning</a>
	            <a class="panel-block list-group-item is-primary">Assignment 4: Hyperparameter Search</a>
	          </div>
	          <p><strong>Web Development</strong></p>
	          <div class="panel list-group" style={{marginTop: "1rem", borderRadius: "0.2rem"}}>
	            <a class="panel-block list-group-item is-primary">Assignment 5: Markdown Blog</a>
	            <a class="panel-block list-group-item is-primary">Assignment 6: Twitter Clone</a>
	          </div>
            <p><strong>Final Project</strong></p>
	          <div class="panel list-group" style={{marginTop: "1rem", borderRadius: "0.2rem"}}>
	            <a class="panel-block list-group-item is-primary">Milestone 1: Project Prosposal</a>
              <a class="panel-block list-group-item is-primary">Milestone 2: Final Project Submission</a>
              <a class="panel-block list-group-item is-primary">Milestone 3: Blog Post</a>
	          </div>
	        </div>
	        <div className="column"></div>
	      </div>
	    </div>
	  </section>
  );
}

export default Teaching;
