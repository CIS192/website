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
                href="https://raw.githubusercontent.com/CIS192/homework/master/assignment1.py"
                download
              >
                <div
                  class="panel-block list-group-item is-primary"
                >
                  Assignment 1: Finger Workouts
                </div>
              </a>
              <a 
                href="https://raw.githubusercontent.com/CIS192/homework/master/assignment2.py"
                download>
              <div
                class="panel-block list-group-item is-primary"
              >
                Assignment 2: Data Structures and Algorithms
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
              <a href="/assignments/3">
                <div
                  class="panel-block list-group-item is-primary"
                >
                  Assignment 3: Learning Machine Learning
                </div>
              </a>
              <a 
                href="https://kirubarajan.nyc3.digitaloceanspaces.com/fall2019/deep_learning.ipynb"
                download
              >
                <div class="panel-block list-group-item is-primary">
                  Assignment 4: Learning Deep Learning
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
              <div class="panel-block list-group-item is-primary">
                Assignment 5: Markdown Blog
              </div>
              <div class="panel-block list-group-item is-primary">
                Assignment 6: Twitter Clone
              </div>
            </div>
            <p>
              <strong>Final Project</strong>
            </p>
            <div
              class="panel list-group"
              style={{ marginTop: '1rem', borderRadius: '0.2rem' }}
            >
              <div class="panel-block list-group-item is-primary">
                Milestone 1: Project Prosposal
              </div>
              <div class="panel-block list-group-item is-primary">
                Milestone 2: Final Project Submission
              </div>
              <div class="panel-block list-group-item is-primary">
                Milestone 3: Blog Post
              </div>
            </div>
          </div>
          <div className="column"></div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
