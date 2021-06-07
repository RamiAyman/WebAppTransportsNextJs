import Head from "next/head";
import Home from "../components/pages/Home";
import {ApolloClient , InMemoryCache , gql } from '@apollo/client';

export default function HomePage({vehicules}) {
  console.log('vehicules' , vehicules);
  return (
    <>
      <Head>
        <title>M A J O R E L</title>
      </Head>
      <Home />
    </>
  );
}
// export default function getStaticProps() {
//   // const client = new ApolloClient({
//   //   uri: 'https://https://driven-mammal-79.hasura.app/v1/graphql-slug-11.hasura.app/v1/graphql'
//   //   cache : new InMemoryCache
//   // }) 
//   // const await client.query({
//   //   query: gql'
 
//   //   '
//   // })
//   // return {
//   //   props : {
//   //     vehicules: [] // an empty array  of vehicules 
//   //   }
