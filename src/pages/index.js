import React from 'react'
import Nav from '../components/Nav'

const Index = () => {
  return (
	  <section className="section" style={{"paddingTop": "1rem"}}>
	    <div className="container">
        <div className="columns">
          <div className="column is-one-fourth"> </div>
          <div className="column is-half">  
          	<Nav />
	          <h1 className="title">CIS 192: Python Programming 🐍</h1>
			      <h1 className="subtitle">Spring 2020</h1>

            <p><strong>Instructor: </strong> <a>Arun Kirubarajan</a> (Section 201)</p>
            <p><strong>Location: </strong> Thursdays at 12:00 PM in Towne 303 </p> <br />

	          <p>
			      Welcome! Python is a powerful interpreted language with both imperative and functional paradigms. 
            As one of the fastest growing languages of all time, Python is widely used across academia and industry; this class is aimed
            to teach you the skills necessary to excel in Python programming, no matter the circumstance. 
            As such, this course not only teaches you the latest paradigms, but also introduces you to the rapidly growing ecosystem that makes Python so powerful. 
	          </p>
            
            <br />
            <p>
              <strong>Syllabus</strong> <br />
              After working through the Python fundementals, this course is split into three modules: classical algorithms, web development and machine learning.
              At the end of the course, you will break into groups to build a final project of your choosing! 
              
              <br /> <br />

              Some highlights of topics/frameworks include:

              <ul style={{listStyleType: "circle", marginLeft: "1rem", marginTop: "0.25rem"}}>
                <li>Algorithm Programming</li>
                <li>Neural Networks (Keras and PyTorch)</li>
                <li>REST APIs (Flask)</li>
                <li>Database-driven Applications (Django)</li>
                <li>Computational Linguistics (NLP)</li>
                <li>Cloud Computing (Docker)</li>
              </ul>

            </p>

            <br />
            <p>
              <strong>Grading</strong> <br />
              Six programming assignments count for 60% of the final grade. The final project counts for 30% and 
              attendance/participation makes up the remaining 10%. There will be ample opportunity for extra credit 
              throughout the course!
            </p>

            <br />
            <p>
              <strong>Textbook</strong> <br />
              An optional textbook that the course will sometimes refer to is <a href="http://shop.oreilly.com/product/0636920032519.do">Fluent Python</a>, 
              written by Luciano Ramalho. This is an advanced textbook, and we will only use it sparingly for more intricate concepts.
            </p>
	        </div>
	        <div className="column"></div>
	      </div>
	    </div>
	  </section>
  );
}

export default Index;