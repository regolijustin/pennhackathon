import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder15: "rounded-radius15",
  RoundedBorder19: "rounded-radius19",
};
const variants = {
  FillDeeppurple9007f: "bg-deep_purple_900_7f text-white_A700",
  FillDeeppurple900b2: "bg-deep_purple_900_b2 text-white_A700",
  OutlineBlack9003f: "bg-white_A700 shadow-bs text-indigo_900",
};
const sizes = { sm: "p-[7px]", md: "p-[10px]", lg: "p-[13px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder15", "RoundedBorder19"]),
  variant: PropTypes.oneOf([
    "FillDeeppurple9007f",
    "FillDeeppurple900b2",
    "OutlineBlack9003f",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder15",
  variant: "FillDeeppurple9007f",
  size: "sm",
};

export { Button };
