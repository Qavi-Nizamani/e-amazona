import React from 'react';

const Product = () => {
  return (
    <div className="shadow-md dark:shadow-white rounded-md text-center w-100 max-w-[230px] ">
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img
        src="Screenshot 2022-07-28 151337.png"
        alt="there is a image"
        className="w-[inherit] h-[200px] rounded-md"
      />
      <div className="my-4">
        <p>Product 1</p>
        <p>Brand</p>
        <p>$99.25</p>
        <button className="mt-2 rounded-md bg-yellow-300 px-4 py-1 text-black">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
