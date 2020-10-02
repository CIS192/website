import React from 'react';
import Nav from '../components/Nav';

const staff_list = [
  {
    image: 'https://avatars.githubusercontent.com/u/6424868',
    name: 'Arun Kirubarajan',
    role: 'Instructor',
    bio:
      'Arun is a junior from Mississauga, Canada studying CIS and Linguistics. He likes skateboarding, making coffee, and making bad jokes.',
    hours: 'Mondays from 3:30 to 5:00 PM EST',
  },
  {
    image: 'https://danxtao.com/assets/headshot4-3.png',
    name: 'Daniel Tao',
    role: 'Teaching Assistant',
    bio:
      'Daniel is a sophomore from Chicago, IL studying NETS. He likes rhythm games, reading, pranks, and meaningful comedy.',
    hours: 'Fridays from 2:00 to 4:00 PM EST',
  },
  {
    image: 'https://i.imgur.com/bgp7xKH.jpg',
    name: 'Jerry Lu',
    role: 'Teaching Assistant',
    bio: 'Jerry is a senior from Nashville, TN studing CIS and Cognitive Science. He likes rock climbing, cooking, and gardening.',
    hours: 'Wednesdays from 2:00 to 4:00 PM EST'
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
            <div class="column is-one-fourth">
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
