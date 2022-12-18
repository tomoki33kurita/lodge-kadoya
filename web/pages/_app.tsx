import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "../components/Header";
import "../styles/calendar.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      {/* @ts-ignore */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
