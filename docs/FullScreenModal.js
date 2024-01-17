import React from 'react';
import { Div, Button, Modal, Icon, Text } from "atomize";

const ModalSize = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      rounded="0"
      maxW="90vw"
      transition="custom"
      m="0"
      h="100vh">
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="30px"
        onClick={onClose}
        cursor="pointer"
      />

      <Div
        m={{ x: "auto", y: "1rem" }}
        p={{ x: "1rem", y: "1rem" }}
        h="90%"
        d="flex"
        flexDir="column"
        justify="center"
        align="center"
      >
      <embed src="./2023-edotau.pdf" width="500px" height="100%" />

      </Div>
    </Modal>
  );
};

class FullScreenModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  render() {
    const { showModal } = this.state;

    return (
      <>
        <Button
          bg="info900"
          hoverBg="info800"
          m={{ r: '0.5rem' }}
          onClick={() => this.setState({ showModal: true })}>
          About Me
        </Button>
        <ModalSize
          isOpen={showModal}
          onClose={() => this.setState({ showModal: false })}
        />
      </>
    );
  }
}

export default FullScreenModal;
