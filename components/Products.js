import React from 'react';
import { data } from '../utils/data';
import Product from './Product';

const Products = () => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
      {data.products.map((product, i) => (
        <Product key={i.toString()} product={product} />
      ))}
    </section>
  );
};

export default Products;
