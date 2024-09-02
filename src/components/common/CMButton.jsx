import styled from "styled-components";
import { palette } from "@/utils/colors";
import PropTypes from "prop-types";
import { forwardRef } from "react";
import { Button } from "react-bootstrap";

// Styled component for CMButton
const StyledButton = styled(Button)`
  height: 40px;
  min-width: 24px;
  line-height: 0;
  border-radius: 6px;
  cursor: pointer;
  align-items: center;
  white-space: nowrap;
  display: inline-flex;
  justify-content: center;
  text-transform: capitalize;
  padding: 1rem 1.5rem;
  font-size: 16px;
  font-weight: 700;

  ${(props) =>
    props.staricon &&
    `
    padding-left: 8px;
  `}

  ${(props) =>
    props.endicon &&
    `
    padding-right: 8px;
  `}

  ${(props) =>
    props.variant === "contained" &&
    `
    background-color: ${palette[props.color].main};
    color: ${palette[props.color].contrastText};
    border: 1px solid;
    border-color: transparent;
    transition: .3s all ease-in-out;
    &:hover {
      border: 1px solid ${palette[props.color].main};
      color: ${palette[props.color].main};
      background: transparent;
      transition: .3s all ease-in-out;
    }
  `}

  ${(props) =>
    props.variant === "outlined" &&
    `
    background-color: transparent;
    color: ${palette[props.color].main};
    border: 1px solid ${palette[props.color].main};
    transition: .3s all ease-in-out;
    &:hover {
      border: 1px solid ${palette[props.color].main};
      color: ${palette[props.color].contrastText};
      background: ${palette[props.color].main};
      transition: .3s all ease-in-out;
    }
  `}

  ${(props) =>
    props.variant === "soft" &&
    `
    background-color: ${palette[props.color].lighter};
    color: ${palette[props.color].main};
    border: none;
    &:hover {
      background-color: ${palette[props.color].light};
    }
  `}

  ${(props) =>
    props.variant === "ghost" &&
    `
    background-color: ${palette[props.color].lighter};
    color: ${palette[props.color].main};
    border: 1px solid ${palette[props.color].main};
    &:hover {
      background-color: ${palette[props.color].light};
    }
  `}

  ${(props) =>
    props.variant === "gradient" &&
    `
    background: linear-gradient(180deg, ${palette[props.color].main} 42.53%, ${palette[props.color].dark} 106%);
    color: ${palette[props.color].contrastText};
    border: 1px solid;
    border-color: transparent;
    transition: .3s all ease-in-out;
    &:hover {
      border: 1px solid ${palette[props.color].main};
      color: ${palette[props.color].main};
      background: transparent;
      transition: .3s all ease-in-out;
    }
  `}

  ${(props) =>
    props.color === "default" &&
    `
    background-color: ${props.variant === "contained" ? palette.grey[1400] : "transparent"};
    color: ${palette.text.primary};
    border: ${props.variant === "outlined" || props.variant === "ghost" ? `1px solid ${palette.grey[1300]}` : "none"};
    &:hover {
      background-color: "${props.variant === "contained" ? palette.grey[1300] : palette.grey[1200]}";
    }
  `}
`;

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
  return (
    <StyledButton
      ref={ref}
      color={color}
      variant={variant}
      staricon={staricon}
      endicon={endicon}
      style={style}
      className={className}
      {...other}
    >
      {staricon && <span style={{ marginRight: "8px" }}> {staricon} </span>}
      {children}
      {endicon && <span style={{ marginLeft: "8px" }}> {endicon} </span>}
    </StyledButton>
  );
});

CMButton.displayName = "CMButton";

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
