import PropTypes from "prop-types";
import { forwardRef } from "react";

import { Button } from "react-bootstrap";

// ----------------------------------------------------------------------
const CMButton = forwardRef(function CMButton(
  {
    children,
    color = "primary",
    variant = "contained",
    staricon,
    endicon,
    style,
    className,
    ...other
  },
  ref
) {
  const primaryFilledVariant = variant === "contained" && color === "primary";
  const primaryOutlinedVariant = variant === "outlined" && color === "primary";

  const iconStyles = {
    width: 16,
    height: 16,
    "& svg, img": { width: 1, height: 1, objectFit: "cover" },
  };

  return (
    <Button
      ref={ref}
      style={{
        ...(staricon && { paddingLeft: 0.75 }),
        ...(endicon && { paddingRight: 0.75 }),
        height: 40,
        minWidth: 24,
        lineHeight: 0,
        borderRadius: 6,
        cursor: "pointer",
        alignItems: "center",
        whiteSpace: "nowrap",
        display: "inline-flex",
        justifyContent: "center",
        textTransform: "capitalize",
        padding: "1rem 1.5rem",
        fontSize: 16,
        fontWeight: 700,
        ...style,
      }}
      className={`${primaryFilledVariant ? "primary_contained_btn" : primaryOutlinedVariant ? "primary_outlined_btn" : ""} ${className}`}
      {...other}
    >
      {staricon && (
        <span style={{ marginRight: 0.75, ...iconStyles }}> {staricon} </span>
      )}

      {children}

      {endicon && (
        <span style={{ marginLeft: 0.75, ...iconStyles }}> {endicon} </span>
      )}
    </Button>
  );
});

CMButton.displayName = "CMButton"; // Set the display name here

CMButton.propTypes = {
  children: PropTypes.node,
  endicon: PropTypes.object,
  staricon: PropTypes.object,
  style: PropTypes.object,
  variant: PropTypes.oneOf(["contained", "outlined"]),
  color: PropTypes.oneOf(["primary"]),
};

export default CMButton;
