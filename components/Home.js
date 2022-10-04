import React from 'react';
import Products from './Products';

const Home = () => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
      <Products />
    </section>
  );
};

export default Home;
