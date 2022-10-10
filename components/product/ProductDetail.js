import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();

  const cartClickHandler = () => {
    dispatch(cartActions.addToCart({ product, quantity: 1 }));
  };

  return (
    <div>
      <Link href={'/'} passHref>
        <a className="p-4 block bg-th-background-secondary primary-link">Back to products</a>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:p-12 gap-3">
        <div className="w-full h-full max-w-[600px] max-h-[600px] relative mx-auto">
          <Image
            src={product.image}
            alt="there is a image"
            layout="responsive"
            height={500}
            width={500}
            className="rounded"
          />
        </div>

        <div className="flex flex-col card p-2 md:p-4 align-middle self-center w-full max-w-[500px] mx-auto h-[fit-content]">
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
            <button className="primary-button mt-4 w-full font-bold" onClick={cartClickHandler}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
