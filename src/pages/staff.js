import React from 'react'
import Nav from '../components/Nav'

const Staff = () => {
  return (
	  <section className="section" style={{"paddingTop": "1rem"}}>
	    <div className="container">
        <div className="columns">
          <div className="column is-one-fourth"> </div>
          <div className="column is-half">  
          	<Nav />
				    <h1 class="title" style={{marginBottom: "0.5rem"}}> Staff </h1>
	          <p>
              Office Hours TBD!
	          </p> <br />
	        </div>
	        <div className="column"></div>
	      </div>
	    </div>
	  </section>
  );
}

export default Staff;