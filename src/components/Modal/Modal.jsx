import React, { Component, Fragment } from 'react';
import { MyContext } from '../../context-api/context-api/context-api';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick();
  }

  render() {
    return (
      <MyContext.Consumer>
        {value => {
          const { themeTitle, themeDescription, colorTheme } = value
          return (
            <Fragment>

              <div className='modal-wrapper' onClick={this.handleClick}></div>
              <div className={`modal ${colorTheme}`}>

                <h2>{themeTitle}</h2>
                <p>{themeDescription}</p>

                <div className='modal-btn'>
                  <button className={`btn ${colorTheme}`} onClick={this.handleClick}>Ok</button>
                </div>
              </div>
            </Fragment>
          )
        }}

      </MyContext.Consumer>
    );
  }
}

export default Modal;