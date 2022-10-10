import Image from 'next/image';
import Link from 'next/link';

const Product = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`} passHref>
      <div className="card text-center hover:cursor-pointer hover:opacity-80">
        <Image
          src={product.image}
          alt="there is a image"
          layout="responsive"
          height={300}
          width={300}
          className="rounded-t-md"
        />
        <div className="py-4 bg-th-background-secondary rounded-b-md text-th-accent-light">
          <p>{product.name}</p>
          <p>{product.brand}</p>
          <p>${product.price}</p>
          {/* <button className="primary-button mt-2 font-bold" onClick={cartClickHandler}>
            Add to cart
          </button> */}
        </div>
      </div>
    </Link>
  );
};

export default Product;
