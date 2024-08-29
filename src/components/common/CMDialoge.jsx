import React from "react";
import Modal from "react-bootstrap/Modal";
const CMDialoge = (props) => {
  const {
    open,
    handleClose,
    dialogeTitle,
    dialogContent,
    dialogAction,
    children,
    size,
    closeIcon,
    ...rest
  } = props;
  return (
    <>
      <Modal size={size} centered show={open} onHide={handleClose} {...rest}>
        {dialogeTitle && (
          <Modal.Header closeButton={closeIcon}>
            <Modal.Title>{dialogeTitle}</Modal.Title>
          </Modal.Header>
        )}
        {dialogContent && <Modal.Body>{dialogContent}</Modal.Body>}
        {dialogAction && <Modal.Footer>{dialogAction}</Modal.Footer>}
        {children}
      </Modal>
    </>
  );
};

export default CMDialoge;
