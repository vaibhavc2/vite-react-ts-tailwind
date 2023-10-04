import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const Footer = ({
  className,
  children,
  ...restProps
}: ComponentProps<"footer">) => {
  return (
    <footer
      className={twMerge("m-10 font-serif text-lg", className)}
      {...restProps}
    >
      I am a decent Footer!
      {children}
    </footer>
  );
};

export default Footer;
