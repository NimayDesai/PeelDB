import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import { NavBar } from "../components/NavBar";
import { withApollo } from "../utils/withApollo";
import { Footer } from "../components/Footer";
import Head from "next/head";
import { EdgeStoreProvider } from "../lib/edgestore";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PeelDB</title>
      </Head>
      <ChakraProvider theme={theme}>
        <EdgeStoreProvider>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </EdgeStoreProvider>
      </ChakraProvider>
    </>
  );
}

export default withApollo()(MyApp);
