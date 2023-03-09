import cn from "clsx";
import React from "react";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "white" | "black";
  size?: "sm" | "md" | "lg";
}

const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  variant,
  size = "md",
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cn(
        "rounded-lg font-medium shadow px-10 py-2 hover:shadow-lg transition duration-300 ease-in-out",
        {
          "text-black bg-primary": variant === "primary",
          "text-primary bg-white": variant === "white",
          "text-white bg-black": variant === "black",
          "px-5 py-2 text-sm": size === "sm",
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
