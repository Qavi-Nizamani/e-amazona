import { useRouter } from 'next/router';
import React from 'react';
import ProductDetail from '../../components/product/ProductDetail';
import { data } from '../../utils/data';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';

const FitShirtPage = () => {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) return <p>Product not found!</p>;

  return (
    <>
      <Head>
        <title>{product.name ? product.name + ' - Amazona' : 'Amazona'}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ProductDetail product={product} />
      </Layout>
    </>
  );
};

export default FitShirtPage;
