import React from "react";

const sizes = {
  headingxs: "text-[1.00rem] font-bold",
  headings: "text-[1.50rem] font-bold md:text-[1.38rem]",
  headingmd: "text-[2.50rem] font-bold md:text-[2.38rem] sm:text-[2.25rem]",
  headinglg: "text-[3.00rem] font-bold md:text-[2.75rem] sm:text-[2.38rem]",
  headingxl: "text-[4.00rem] font-bold md:text-[3.00rem]",
  heading2xl: "text-[6.00rem] font-bold md:text-[3.00rem]",
  heading3xl: "text-[8.00rem] font-black md:text-[3.00rem]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "heading2xl",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-deep_purple-800 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
