import { useRouter } from 'next/router';
import React from 'react';
import ProductDetail from '../../components/ProductDetail';
import { data } from '../../utils/data';
import Layout from '../../components/Layout';

const FitShirtPage = () => {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) return <p>Product not found!</p>;

  return (
    <Layout title={product.name}>
      <ProductDetail product={product} />;
    </Layout>
  );
};

export default FitShirtPage;
