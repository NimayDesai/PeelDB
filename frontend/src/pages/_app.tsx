import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import { NavBar } from "../components/NavBar";
import { withApollo } from "../utils/withApollo";
import { Footer } from "../components/Footer";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default withApollo()(MyApp);
