import {ApolloProvider, useApolloClient} from "@apollo/Client"
// simport "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Sidebar from "../components/layouts/sidebar";
import Header from "../components/layouts/Header";
import client from "src/apollo";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps}/>
    </ApolloProvider>
//  <div  className="  h-screen " >
//  <div  className=" flex  w-screen h-screen">
//    <Sidebar />
//    <div className="w-screen overflow-y-scroll ">
//    <Header />
//      <div className="p-8 bg-gray-100 ">
//    <Component {...pageProps} />
//      </div>
//    </div>
//  </div>
// </div>
   
  );
 
}

export default MyApp;




