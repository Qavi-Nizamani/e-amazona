import Link from 'next/link';
import Image from 'next/image';

const ProductDetail = ({ product }) => {
  return (
    <div>
      <Link href={'/'} passHref>
        <a className="p-4 block text-primary bg-th-background-secondary font-bold hover:text-blue-700 active:text-blue-800">
          Back to products
        </a>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:p-28">
        <div className="w-full h-full max-w-[500px] max-h-[500px] relative mx-auto">
          <Image
            src={product.image}
            alt="there is a image"
            layout="responsive"
            height={500}
            width={500}
            className="rounded"
          />
        </div>
        <div className="flex flex-col card p-2 md:p-4 align-middle self-center font-bold w-full max-w-[400px] mx-auto h-[fit-content]">
          <div className="mb-4">
            <p>{product.name}</p>
            <p>Category: {product.category}</p>
            <p>Brand: {product.brand}</p>
            <p>
              {product.rating} of {product.numReviews} reviews
            </p>
            <p>Description: {product.description}</p>
          </div>
          <div className="card w-full p-3">
            <div>
              <div className="w-full flex justify-between">
                <p>Price</p>
                <p>${product.price}</p>
              </div>
              <div className="w-full flex justify-between">
                <p>Status</p>
                <p>In stock</p>
              </div>
            </div>
            <button className="primary-button mt-4 w-full ">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
