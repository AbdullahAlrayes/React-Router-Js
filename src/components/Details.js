import React from 'react';
import { useParams } from 'react-router';
import products from '../products';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Details = () => {
  const id = useParams().id;
  const coockie = products.find((product) => product.id === +id);

  return (
    <div className="container mt-5">
      <Helmet>
        <title>Details</title>
      </Helmet>
      <div className="row">
        <div className="col-lg-2">
          <Link to="/list" className="btn btn-primary">
            Back
          </Link>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">
              <img src={coockie.image} alt="name" className="w-100" />
            </div>
            <div className="card-body">
              <h3>{coockie.name}</h3>
              <p>Price {coockie.price}</p>
              <p>{coockie.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
