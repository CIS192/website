import React from 'react';
import Nav from '../components/Nav';

const staff_list = [
  {
    image: 'https://i.imgur.com/WXIJMsC.png',
    name: 'Arun Kirubarajan',
    role: 'Instructor',
    bio:
      'Arun is a junior from Mississauga, Canada studying CIS and Cognitive Science. He likes skateboarding, making coffee, and making bad jokes.',
    hours: 'Tuesdays, 1:30 to 2:30 PM @ Weiss Tech House',
  },
  {
    image: 'https://i.imgur.com/mP7wT9v.jpg',
    name: 'Amit Lohe',
    role: 'Teaching Assistant',
    bio:
      'Amit is a junior studying CIS and Business Analytics from Lexington, KY. He enjoys cooking, reading, and playing squash.',
    hours: 'Wednesdays, 10:45 to 12:45 @ Levine 5th Floor',
  },
  {
    image: 'https://i.imgur.com/CvYs5et.jpg',
    name: 'Kevin Sun',
    role: 'Teaching Assistant',
    bio:
      'Kevin is a sophomore from Cambridge, MA studying CIS and Statistics. He enjoys skiing and watching NBA. His favourite programming language is Python.',
    hours: 'Monday, 4:30 to 6:30 PM @ Rodin Mezzanine',
  },
  {
    image: 'https://danxtao.com/assets/headshot4-3.png',
    name: 'Daniel Tao',
    role: 'Teaching Assistant',
    bio:
      'Daniel is a sophomore from Chicago, IL studying Networked and Social Systems Engineering. He likes rhythm games, reading, pranks, and meaningful comedy.',
    hours: 'Thursdays, 1:30 to 3:00 PM @ Weiss Tech House',
  },
];

const Staff = () => {
  return (
    <section className="section" style={{ paddingTop: '1rem' }}>
      <div className="container">
        <div className="columns">
          <div className="column is-one-quarter"> </div>
          <div className="column is-half">
            <Nav />
            <h1 class="title" style={{ marginBottom: '0.5rem' }}>
              {' '}
              Staff{' '}
            </h1>
            <p>
              For any concerns regarding CIS 192, contact Arun Kirubarajan at{' '}
              <a href="mailto:kiruba@cis.upenn.edu">kiruba@cis.upenn.edu</a>.
            </p>
            <br />
          </div>
          <div className="column"></div>
        </div>
      </div>
      <div className="container">
        <div class="columns is-multiline">
          {staff_list.map(({ image, name, role, bio, hours }) => (
            <div class="column is-one-third">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src={image} alt={name} />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">{name}</p>
                      <p class="subtitle is-6">{role}</p>
                    </div>
                  </div>

                  <div class="content">
                    {bio}
                    <br /> <br />
                    <time datetime="2016-1-1">{hours}</time>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;
