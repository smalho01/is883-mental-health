"use client";
import React from "react";

const shapes = {
  round: "rounded-lg",
} as const;

const variants = {
  fill: {
    "1_white": "bg-1_white",
    gray_100_01: "bg-gray-100_01 shadow-xl",
  },
} as const;

const sizes = {
  xs: "h-[3.63rem] px-[0.75rem]",
  sm: "h-[4.75rem] px-[0.75rem]",
} as const;

// Common props for both input and textarea
interface CommonProps {
  label?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  shape?: keyof typeof shapes;
  variant?: keyof typeof variants | null;
  size?: keyof typeof sizes;
  color?: string;
  className?: string;
  name?: string;
  placeholder?: string;
}

// Props when multiline is false (input)
interface SingleLineProps extends CommonProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof CommonProps> {
  multiline?: false;
  ref?: React.Ref<HTMLInputElement>;
}

// Props when multiline is true (textarea)
interface MultiLineProps extends CommonProps, Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, keyof CommonProps> {
  multiline: true;
  ref?: React.Ref<HTMLTextAreaElement>;
}

type InputProps = SingleLineProps | MultiLineProps;

const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  (props, ref) => {
    const {
      className = "",
      name = "",
      placeholder = "",
      label = "",
      prefix,
      suffix,
      shape,
      variant = "fill",
      size = "sm",
      color = "gray_100_01",
      multiline,
      ...restProps
    } = props;

    const baseClasses = `${className} flex items-center justify-center self-stretch md:mr-0 cursor-text border-solid ${
      shape && shapes[shape]
    } ${
      variant && 
      (variants[variant]?.[color as keyof (typeof variants)[typeof variant]] || 
       variants[variant])
    } ${size && sizes[size]}`;

    return (
      <label className={baseClasses}>
        {!!label && label}
        {!!prefix && prefix}
        {multiline ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            name={name}
            placeholder={placeholder}
            className="w-full resize-none bg-transparent outline-none"
            {...(restProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            name={name}
            placeholder={placeholder}
            className="w-full bg-transparent outline-none"
            type={props.type || "text"}
            {...(restProps as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        {!!suffix && suffix}
      </label>
    );
  }
);

export { Input };