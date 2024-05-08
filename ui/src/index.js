import React from "react";
import { createRoot } from "react-dom/client";
import { Div, StyleReset, ThemeProvider } from "atomize";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "./styletron";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import App from "./App";

const theme = {
  colors: {
    black900: "#1d1d1e",
  },
};

function MyApp() {
  return (
    <PrimeReactProvider>
      <StyletronProvider value={styletron}>
        <ThemeProvider theme={theme}>
          <StyleReset />
          <Div
            textColor="black900"
            rounded="br1"
            d="flex"
            flexDir="column"
            p={{ x: "1rem", y: "1rem" }}
          >
            <div className="layout-main-container">
              <App />
            </div>
          </Div>
        </ThemeProvider>
      </StyletronProvider>
    </PrimeReactProvider>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<MyApp />);
