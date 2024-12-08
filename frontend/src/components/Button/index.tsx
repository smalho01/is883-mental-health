import React from "react";

const shapes = {
  round: "rounded-[30px]",
} as const;
const variants = {
  fill: {
    teal_900_e5: "bg-teal-900_e5 shadow-sm text-1_white",
    teal_900: "bg-teal-900 shadow-sm text-1_white",
  },
} as const;
const sizes = {
  sm: "h-[3.50rem] px-[1.75rem] text-[1.50rem]",
  xs: "h-[2.88rem] px-[1.63rem] text-[1.50rem]",
  md: "h-[3.75rem] px-[2.13rem] text-[1.50rem]",
  lg: "h-[4.13rem] px-[2.13rem] text-[2.00rem]",
  xl: "h-[5.00rem] pl-[1.75rem] pr-[2.13rem] text-[2.00rem]",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "teal_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap text-1_white font-bold border-gray-900 border-2 border-solid shadow-sm ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
