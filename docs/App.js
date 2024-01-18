import React, { Component } from "react";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Anchor, Col, Div, Row, StyleReset, Text, ThemeProvider } from "atomize";
import Modal from './FullScreenModal';
const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const engine = new Styletron();

const theme = {
  colors: {
    black900: "#1d1d1e",
    greyLight: "#f2f3f4",
    border: "#d1d1d1"
  },
  rounded: {
    br1: "4px"
  }
};
class App extends Component {
  render() {
    return (
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>

        <ThemeProvider theme={theme}>
          <StyleReset />
          <Div
            textColor="black900"
            w="80%"
            h="90%"
            maxW="800px"
            m={{ x: "auto", y: "2rem" }}
            p={{ x: "2rem", y: "2rem" }}
            border="1px solid"
            borderColor="border"
            rounded="br1"
            shadow="3"
            d="flex"
            flexDir="column"
          >

            <Div
              p={{ x: "1rem", y: "1rem" }}
              border={{ b: "1px solid" }}
              borderColor="border"
              d="flex"
              flexDir="column"
              justify="center"
              align="center"
            >
              <Text
                tag="h1"
                textSize="display1"
                fontFamily="secondary"
                textWeight="500"
                p={{ x: "1rem", y: "1rem" }}
              >
                Welcome to my life
              </Text>
              <Div d="flex" justify="space-around" align="center" p={{ x: "1rem"}}>
              <Row>
                <Col size={{ xs: "auto" }}>
                  <Div p="1rem">
                    <Anchor href="https://www.linkedin.com/in/edotau/" target="https://www.linkedin.com/in/edotau/" textColor="info800" textDecor="none" hoverTextColor="info900">
                      Linkedin
                    </Anchor>
                    </Div>
                  </Col>
                  <Col size={{ xs: "auto" }}>
                    <Div p="1rem">
                      <Anchor href="https://github.com" target="https://github.com/edotau" textColor="info800" textDecor="none" hoverTextColor="info900">
                        Github
                      </Anchor>
                      </Div>
                  </Col>
                <Col size={{ xs: "auto" }}>
                  <Div p="1rem">
                    <Anchor href="https://pinterest.com" target="https://www.pinterest.com/edotau/redefined/" textColor="info800" textDecor="none" hoverTextColor="info900">
                      Pinterest
                    </Anchor>
                    </Div>
                  </Col>
                  <Col size={{ xs: "auto" }}>
                    <Div p="1rem">
                      <Anchor href="https://instagram.com" target="https://www.instagram.com/_edotau/" textColor="info800" textDecor="none" hoverTextColor="info900">
                        Instagram
                      </Anchor>
                      </Div>
                  </Col>
              </Row>
              </Div>
            </Div>
            {
              <Text
              p={{ x: "1rem", y: "1rem" }}
            >
                Hi there! I'm a Software Engineer who studied Computer Science & Mathematics and knows more genetics than your average biologist. The curiosity I have for developmental biology and genomics inspired me to pursue a technical background in computer science and molecular genetics. It’s incredibly motivating looking back on the knowledge I've accumulated, to realize how my areas of expertise can work together and answer questions at the intersection of computer science and biotechnology.
              </Text>
            }
            {
              <Text
              p={{ x: "1rem", y: "1rem" }}
            >
                When I am not thinking about recombinant DNA and/or deployments of full stack cloud applications, I enjoy blogging about fashion and lifesyle on Pinterest. I love playing and competing in sports, especially badminton, golf, power lifting, and skiing. I cheer for the Golden State Warriors and the San Francisco 49ers and absolutely love watching my favorite NBA and NFL teams competing head to head every week.
              </Text>
            }
            {
              <Text
              p={{ x: "1rem", y: "1rem" }}
            >
                While the best chapters of my life are being written, I’m living my best life because life's too precious to spend even a single second unhappy. I hope being who I am will start redefining the boundaries of happiness, success and hard work.
              </Text>
            }
            <Div
              p={{ x: "1rem", y: "1rem" }}
              align="left"
            >
              <Modal />
            </Div>

          </Div>

        </ThemeProvider>
      </StyletronProvider>
    );
  }
}

export default App;
