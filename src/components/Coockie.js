import React from 'react';
import { Link } from 'react-router-dom';
const Coockie = ({ coockie }) => {
  return (
    <div className="col-lg-4">
      <div className="card h-100">
        <div className="card-header">
          <Link to={`/details/${coockie.id}`}>
            <img src={coockie.image} alt="name" className="w-100 " />
          </Link>
        </div>
        <div className="card-body">
          <h3>{coockie.name}</h3>
          <p>Price {coockie.price}</p>
          <p>{coockie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Coockie;
