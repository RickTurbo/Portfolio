import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="light"></ColorModeScript>
      <App />
    </ChakraProvider>
  </StrictMode>,
  rootElement
);
