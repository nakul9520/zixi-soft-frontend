import React from "react";
import { Button } from "react-bootstrap";

const PrimaryButton = (props) => {
  const { className, btnLabel, onClick, type, startIcon, endIcon } = props;
  return (
    <>
      <Button
        className={`primary_btn ${className}`}
        onClick={onClick}
        type={type}
      >
        <span>{startIcon}</span>
        <span>{btnLabel}</span>
        <span>{endIcon}</span>
      </Button>
    </>
  );
};

export default PrimaryButton;
