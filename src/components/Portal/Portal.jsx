import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Portal extends Component {
  constructor(props) {
    super(props);
    this.modal = document.getElementById("modal");
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.modal
    );
  }
}

export default Portal;