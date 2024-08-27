import { palette } from "@/utils/colors";
import PropTypes from "prop-types";
import { forwardRef } from "react";

import { Button } from "react-bootstrap";

// ----------------------------------------------------------------------
const CMButton = forwardRef(function CMButton(
  {
    children,
    color = "primary",
    variant = "gradient",
    staricon,
    endicon,
    style,
    className,
    ...other
  },
  ref
) {
  const filledVariant = variant === "contained";
  const outlinedVariant = variant === "outlined";
  const ghostVariant = variant === "ghost";
  const softVariant = variant === "soft";
  const gradientVariant = variant === "gradient";

  const defaultStyle = {
    ...(color === "default" && {
      // FILLED
      ...(filledVariant && {
        color: palette.text.primary,
        backgroundColor: theme.palette.grey[1400],
      }),
      // OUTLINED
      ...(outlinedVariant && {
        backgroundColor: "transparent",
        color: palette.text.primary,
        border: `1px solid ${palette.grey[1300]}`,
      }),
      // GHOST
      ...(ghostVariant && {
        color: palette.text.primary,
        backgroundColor: palette.grey[1400],
        border: `1px solid ${palette.grey[1300]}`,
      }),
    }),
  };

  const colorStyle = {
    ...(color !== "default" && {
      // FILLED
      ...(filledVariant && {
        backgroundColor: palette[color].main,
        color: palette[color].contrastText,
        border: "none",
      }),
      // OUTLINED
      ...(outlinedVariant && {
        backgroundColor: "transparent",
        color: palette[color].main,
        border: `1px solid ${palette[color].main}`,
      }),
      // SOFT
      ...(softVariant && {
        color: palette[color].main,
        backgroundColor: palette[color].lighter,
        border: "none",
      }),
      // GHOST
      ...(ghostVariant && {
        color: palette[color].main,
        backgroundColor: palette[color].lighter,
        border: `1px solid ${palette[color].main}`,
      }),
      // GRADIENT
      ...(gradientVariant && {
        color: palette[color].contrastText,
        background: `linear-gradient(180deg, ${palette[color].main} 42.53%, ${palette[color].dark} 106%)`,
        border: `none`,
      }),
    }),
  };

  const iconStyles = {
    width: "16px",
    height: "16px",
    "& svg, img": { width: "16px", height: "16px", objectFit: "cover" },
  };

  return (
    <Button
      ref={ref}
      style={{
        ...(staricon && { paddingLeft: "8px" }),
        ...(endicon && { paddingRight: "8px" }),
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
        ...defaultStyle,
        ...colorStyle,
        ...style,
      }}
      className={className}
      {...other}
    >
      {staricon && (
        <span style={{ marginRight: "8px", ...iconStyles }}> {staricon} </span>
      )}

      {children}

      {endicon && (
        <span style={{ marginLeft: "8px", ...iconStyles }}> {endicon} </span>
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
  variant: PropTypes.oneOf([
    "contained",
    "outlined",
    "soft",
    "ghost",
    "gradient",
  ]),
  color: PropTypes.oneOf(["primary", "success", "warning", "orange"]),
};

export default CMButton;
