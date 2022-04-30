import React, { Component, Fragment } from 'react';
import { MyContext, lightThemeData, darkThemeData } from '../../context-api/context-api/context-api';
import Modal from '../Modal/Modal';
import Portal from '../Portal/Portal';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isDark: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e) {
      this.setState(
        {
          isDark: e.target.name == "dark"
        }
      )
    }

    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <Fragment>
        <button name='dark' onClick={this.handleClick}>Open dark theme popup</button>
        <button name='light' onClick={this.handleClick}>Open light theme popup</button>
        {this.state.open &&
          <MyContext.Provider
            value={this.state.isDark ?
              darkThemeData :
              lightThemeData}>
            <Portal>
              <Modal handleClick={this.handleClick} />
            </Portal>
          </MyContext.Provider>
        }

      </Fragment>

    );
  }
}

export default Parent;