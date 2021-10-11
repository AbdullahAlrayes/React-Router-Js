import React from 'react';
import products from '../products';
import Coockie from './Coockie';
import { Helmet } from 'react-helmet';
const List = () => {
  return (
    <div className="container mt-5">
      <Helmet>
        <title>List</title>
      </Helmet>
      <div className="row">
        {products.map((coockie) => {
          return <Coockie key={coockie.id} coockie={coockie} />;
        })}
      </div>
    </div>
  );
};

export default List;
