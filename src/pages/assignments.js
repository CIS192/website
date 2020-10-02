import React from 'react';
import Nav from '../components/Nav';

const Teaching = () => {
  return (
    <section className="section" style={{ paddingTop: '1rem' }}>
      <div className="container">
        <div className="columns">
          <div className="column is-one-fourth"> </div>
          <div className="column is-half">
            <Nav />
            <h1 class="title" style={{ marginBottom: '0.5rem' }}>
              {' '}
              Assignments{' '}
            </h1>
            <p>
              Each assignment is designed to take roughly 4 to 5 hours to
              complete. Start early, ask questions on Piazza and come to office
              hours! Note there is NO collaboration unless otherwise noted.
            </p>{' '}
            <br />
            <p>
              <strong>Pythonic Foundations</strong>
            </p>
            <div
              class="panel list-group"
              style={{ marginTop: '1rem', borderRadius: '0.2rem' }}
            >
              <a 
                href="https://raw.githubusercontent.com/CIS192/homework/master/assignment0.py"
                download
              >
                <div
                  class="panel-block list-group-item is-primary"
                >
                  Assignment 0: Finger Workouts
                </div>
              </a>
              <a 
                href="https://raw.githubusercontent.com/CIS192/homework/master/assignment1.py"
                download>
              <div
                class="panel-block list-group-item is-primary"
              >
                Assignment 1: Data Structures and Algorithms
              </div>
            </a>
            </div>
            <p>
              <strong>Data Science</strong>
            </p>
            <div
              class="panel list-group"
              style={{ marginTop: '1rem', borderRadius: '0.2rem' }}
            >
              <a href="/assignments/2">
                <div
                  class="panel-block list-group-item is-primary"
                >
                  Assignment 2: Learning Machine Learning
                </div>
              </a>
              <a 
                href="https://raw.githubusercontent.com/CIS192/homework/master/assignment3.md"
                download
              >
                <div class="panel-block list-group-item is-primary">
                  Assignment 3: Deeper Learning
                </div>
              </a>
            </div>
            <p>
              <strong>Web Development</strong>
            </p>
            <div
              class="panel list-group"
              style={{ marginTop: '1rem', borderRadius: '0.2rem' }}
            >
              <a href="/markdown">
                <div class="panel-block list-group-item is-primary">
                  Assignment 4: Bringing Tumblr Back
                </div>
              </a>
              <a href="/twitter">
                <div class="panel-block list-group-item is-primary">
                  Assignment 5: Twitter Version 192
                </div>
              </a>
            </div>
            <p>
              <strong>Final Project</strong>
            </p>
            <div
              class="panel list-group"
              style={{ marginTop: '1rem', borderRadius: '0.2rem' }}
            >
              <a href="/proposal">
                <div class="panel-block list-group-item is-primary">
                  Project Prosposal
                </div>
              </a>
            </div>
          </div>
          <div className="column"></div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
