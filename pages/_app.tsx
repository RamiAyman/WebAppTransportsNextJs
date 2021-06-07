import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Sidebar from "../components/layouts/sidebar";
import Header from "../components/layouts/Header";
import type { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://driven-mammal-79.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": "1S440jianGhUdL0kPUzoH8OXZtTZb374nktQMLmWZRxHGIqJh9PmNrSvAqR5SVly"
}
});
function MyApp({ Component, pageProps }) {
  return (
    <div  className="  h-screen " >
      <div  className=" flex  w-screen h-screen">
        <Sidebar />
        <div className="w-screen overflow-y-scroll ">
          <Header />
          <div className="p-8 bg-gray-100 ">
          <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
          </div>
       
        </div>
      </div>
     
    </div>
  );
}

export default MyApp;



