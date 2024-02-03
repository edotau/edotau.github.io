import '../styles.css'

import { Provider as StyletronProvider } from "styletron-react";
import { Div, StyleReset, ThemeProvider } from "atomize";
import { styletron } from "../styletron";

const theme = {
  colors: {
    black900: "#1d1d1e",
    greyLight: "#f2f3f4",
  },
};

export default function MyApp({ Component, pageProps }) {
  return (
    <StyletronProvider value={styletron}>
      <ThemeProvider theme={theme}>
        <StyleReset />
          <Div
            w="90%"
            h="90%"
            maxW="900px"
            minW="600px"
            maxH="auto"
            textColor="black900"
            rounded="br1"
            align="center"
            d="flex"
            textWeight="500"
            flexDir="column"
            fontFamily="secondary"
          >
        <Component {...pageProps} />
        </Div>
      </ThemeProvider>
    </StyletronProvider>
  );
}
