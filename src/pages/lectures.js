import React from 'react';
import Nav from '../components/Nav';

const lectures = [
  {
    week: 0,
    date: '01/20',
    topics: 'Python Basics',
    notes: '/basics',
    hw: 'HW 0',
    hw_link: 'https://raw.githubusercontent.com/CIS192/homework/master/assignment1.py'
  },
  {
    week: 1,
    date: '01/27',
    topics: 'Data Structures and Algorithms',
    notes: '/data_structures',
  },
  {
    week: 2,
    date: '02/03',
    topics: 'Pythonic Programming',
    notes: '/pythonic',
    hw: 'HW 1',
    hw_link: 'https://raw.githubusercontent.com/CIS192/homework/master/assignment1.py'
  },
  {
    week: 3,
    date: '02/10',
    topics: 'Exceptions, Modules and Files',
    notes: '/modules',
  },
  {
    week: 4,
    date: '02/17',
    topics: 'Machine Learning with NumPy and Sci-Kit Learn',
    notes: '/ml',
    hw: 'HW 2',
    hw_link: '/assignments/2'
  },
  {
    week: 5,
    date: '02/24',
    topics: 'Natural Language Processing with NLTK',
    notes: '/nlp',
  },
  {
    week: 6,
    date: '03/03',
    topics: 'Deep Learning with Keras/Tensorflow',
    notes: '/deep',
    hw: 'HW 3',
    hw_link: '/assignments/3'
  },
  {
    week: 7,
    date: '03/10',
    topics: 'REST APIs with Flask',
    notes: '/flask',
    hw: 'HW 4',
    hw_link: '/markdown'
  },
  {
    week: 8,
    date: '03/17',
    topics: 'Full Stack Development with Django',
    notes: '/django1',
    hw: 'HW 5',
    hw_link: '/twitter'
  },
  {
    week: 9,
    date: '03/24',
    topics: 'Relational Databases and Security',
    notes: '/django2',
  },
  {
    week: 10,
    date: '03/31',
    topics: 'Cloud Computing with Docker',
    notes: '/docker',
    hw: 'Final Project',
    hw_link: '/final'
  },
  {
    week: 11,
    date: '04/07',
    topics: 'Lightning Lectures [TBD]',
    notes: '/lightning',
  },
  {
    week: 12,
    date: '04/21',
    topics: 'Course Wrap-Up',
    notes: '/final',
  },
];

const guides = [
  {
    topics: 'Useful Python Resources',
    'notes': '/useful'
  },
  {
    topics: 'Unix Commands',
    notes: '/unix',
  },
  {
    topics: 'Installing Python',
    notes: '/install',
  },
  {
    topics: 'Git Reference',
    notes: '/git',
  },
  {
    topics: 'Virtual Environments',
    notes: '/virtualenv',
  },
];

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
              Lectures{' '}
            </h1>
            <p>
              Each lecture has its associated readings listed under the link to
              the lecture material. Schedule is subject to change throughout the
              semester.
              <br /> <br />
              This class is split into three sections: Pythonic Foundations,
              Data Science, and Web Development.
            </p>{' '}
            <br />
            <table class="table is-bordered is-fullwidth">
              <thead>
                <tr>
                  <th>
                    <abbr title="Week">Week</abbr>
                  </th>
                  <th>
                    <abbr title="Date">Date</abbr>
                  </th>
                  <th>
                    <abbr title="Week">Topics</abbr>
                  </th>
                  <th>
                    <abbr title="Slides">Homework</abbr>
                  </th>
                </tr>
              </thead>
              {lectures.map(lecture => (
                <tr>
                  <td> Week {lecture.week}</td>
                  <td> {lecture.date}</td>
                  <td> <a href={lecture.notes}> {lecture.topics} </a></td>
                  <td>
                    {' '}
                    <a href={lecture.hw_link}> {lecture.hw}</a>{' '}
                  </td>
                </tr>
              ))}
            </table>
            <h1 class="title" style={{ marginBottom: '0.5rem' }}>
              {' '}
              Guides{' '}
            </h1>
            <p>
              A variety of handy guides to quickly get yourself up and running:
            </p>{' '}
            <br />
            <table class="table is-bordered is-fullwidth">
              <thead>
                <tr>
                  <th>
                    <abbr title="Week">Topics</abbr>
                  </th>
                  <th>
                    <abbr title="Slides">Resources</abbr>
                  </th>
                </tr>
              </thead>
              {guides.map(guide => (
                <tr>
                  <td> {guide.topics} </td>
                  <td>
                    {' '}
                    <a href={guide.notes}>Guide</a>{' '}
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <div className="column"></div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
