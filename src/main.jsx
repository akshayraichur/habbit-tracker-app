import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import theme from "./constants/Theme.jsx";
import DatabaseContextProvider from "./store/DatabaseContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <DatabaseContextProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </DatabaseContextProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
