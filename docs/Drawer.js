// Basic Sidedrawer
import React from 'react';

import { Div, Button, SideDrawer, Icon, Text } from "atomize";

const BasicSideDrawer = ({ isOpen, onClose }) => {
  return (
    <SideDrawer duration={10} isOpen={isOpen} onClose={onClose}>
      <Div d="flex" m={{ b: '4rem' }}>
        <Icon name="AlertSolid" color="warning700" />
        <Text p={{ l: '0.5rem', t: '0.25rem' }}>This is the modal</Text>
      </Div>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: '1rem' }}>
          Cancel
        </Button>
        <Button onClick={onClose} bg="info700">
          Submit
        </Button>
      </Div>
    </SideDrawer>
  );
};

class Drawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideDrawer: false
    };
  }

  render() {
    const { showSideDrawer } = this.state;

    return (
      <>
        <Button
          bg="info700"
          hoverBg="info600"
          m={{ r: '0.5rem' }}
          onClick={() => this.setState({ showSideDrawer: true })}>
          Show Basic Sidedrawer
        </Button>
        <BasicSideDrawer
          transition="modal_custom"
          isOpen={showSideDrawer}
          onClose={() => this.setState({ showSideDrawer: false })}
        />
      </>
    );
  }
}

export default Drawer;
