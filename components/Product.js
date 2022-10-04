import Image from 'next/image';
import Link from 'next/link';

const Product = ({ product }) => {
  return (
    <div className="card text-center">
      <Image
        src={product.image}
        alt="there is a image"
        layout="responsive"
        height={350}
        width={300}
        className="rounded-t-md"
      />
      <div className="py-4 font-bold bg-slate-200 rounded-b-md text-black">
        <p>{product.name}</p>
        <p>{product.brand}</p>
        <p>${product.price}</p>
        <Link href={`/products/${product.slug}`}>
          <button className="primary-button mt-2">Add to cart</button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
