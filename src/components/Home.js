import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="container mt5">
        <div className="row">
          <div className="col-lg-12">
            <h1>Home</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
