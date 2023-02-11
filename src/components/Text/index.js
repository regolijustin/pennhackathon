import React from "react";
const variantClasses = {
  h1: "sm:text-[41px] md:text-[47px] text-[55px]",
  h2: "font-normal sm:text-[36px] md:text-[38px] text-[40px]",
  h3: "font-normal sm:text-[21px] md:text-[23px] text-[25px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
