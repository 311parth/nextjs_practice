import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Product({productData}) {
  const router = useRouter();
  const { product_id } = router.query;

  return (
    <>
      <Head>
        <title>{`Product ${product_id}`}</title>
      </Head>
      <main style={{height:"100vh"}}>
        <h1>{`Product ${product_id}`}</h1>
        {productData.id} <br/>
        {productData.title}<br/>
        {productData.description}<br/>
        {productData.price}<br/>
        <img style={{height:"200px",width:"200px"}} src={productData.images[0]} alt="" srcset="" />
      </main>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { product_id } = params;
  const res = await fetch(`https://dummyjson.com/products/${product_id}`);
  const data = await res.json();
  const dataSize = new TextEncoder().encode(JSON.stringify(data)).length;
  console.log(dataSize);
  return {
    props: {
      productData: data,
    },
  };
}
