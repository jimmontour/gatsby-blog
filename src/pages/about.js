import React from 'react';

import Layout from '../components/layout';

export default function About({ location }) {
  return (
    <Layout location={location}>
      <div>
        <h1>About us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          similique nam molestias perspiciatis corporis consectetur mollitia
          velit ut cum neque pariatur dolorum adipisci qui libero, cupiditate
          reprehenderit illum architecto magni deserunt, accusamus id excepturi
          et.
        </p>
      </div>
    </Layout>
  );
}
