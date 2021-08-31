import React from 'react';
import Nav from '../components/Nav';

const staff_list = [
  {
    image: 'https://i.imgur.com/Trv8Amg.png',
    name: 'Arun Kirubarajan',
    role: 'Instructor',
    bio: '',
    hours: 'Office Hours TBD',
  }
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
