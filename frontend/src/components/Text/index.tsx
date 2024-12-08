import React from "react";

const sizes = {
  textxs: "text-[1.00rem] font-normal",
  texts: "text-[1.69rem] font-normal md:text-[1.56rem] sm:text-[1.44rem]",
  textmd: "text-[2.25rem] font-light md:text-[2.13rem] sm:text-[2.00rem]",
  textlg: "text-[3.00rem] font-normal md:text-[2.75rem] sm:text-[2.38rem]",
  textxl: "text-[3.31rem] font-normal md:text-[2.81rem] sm:text-[2.44rem]",
  text2xl: "text-[4.00rem] font-normal md:text-[3.00rem]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "textxs",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-1_white font-sfcompactdisplay ${className} ${sizes[size]} `} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
