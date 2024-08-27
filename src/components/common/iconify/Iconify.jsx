import { forwardRef } from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const Iconify = forwardRef(function Iconify(
  { icon, width = 20, style, ...other },
  ref
) {
  return (
    <div
      ref={ref}
      component={Icon}
      icon={icon}
      style={{ width, height: width, ...style }}
      {...other}
      className="cursor-pointer"
    />
  );
});

Iconify.displayName = "Iconify";

Iconify.propTypes = {
  style: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default Iconify;
