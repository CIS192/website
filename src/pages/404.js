import React from 'react'
import Nav from '../components/Nav'

const ErrorPage = () => {
  return (
	  <section className="section" style={{"paddingTop": "1rem"}}>
	    <div className="container">
        <div className="columns">
          <div className="column is-one-fourth"> </div>
          <div className="column is-half">  
          	<Nav />
	          <h1 className="title">404! 🐍</h1>
			      <h1 className="subtitle">This page isn't ready yet!</h1>
            <p>Programming is hard. <a href="/">Let's go back to the working parts of this website.</a></p>

	        </div>
	        <div className="column"></div>
	      </div>
	    </div>
	  </section>
  );
}

export default ErrorPage;