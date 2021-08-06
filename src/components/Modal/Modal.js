import React, { Component } from "react";
import PropTypes from "prop-types";

import { createPortal } from "react-dom";
import { OverlayDiv, ModalDiv } from "./styled";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.closeModalByEsc);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeModalByEsc);
  }

  closeModalByEsc = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
  closeModalWindow = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <OverlayDiv className="Overlay" onClick={this.closeModalWindow}>
        <ModalDiv className="Modal">
          <img src={this.props.largeImg} alt="" />
        </ModalDiv>
      </OverlayDiv>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Modal;
