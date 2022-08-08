import React from 'react';
import Product from './Product';

const Home = () => {
  return (
    <section className="flex flex-wrap justify-start gap-4">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </section>
  );
};

export default Home;
