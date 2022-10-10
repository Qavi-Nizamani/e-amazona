import React from 'react';
import { data } from '../../utils/data';
import Product from './Product';

const Products = () => {
  return (
    <section className="xl:max-w-[1400px] xl:mx-auto grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
      {data.products.map((product, i) => (
        <Product key={i.toString()} product={product} />
      ))}
    </section>
  );
};

export default Products;
