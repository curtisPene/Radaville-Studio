import { ReactNode } from "react";
import clsx from "clsx";

type BodyConfig = {
  inline?: boolean;
  children: ReactNode;
  color?: string;
  sub?: boolean;
  faded?: boolean;
  caption?: boolean;
  underline?: boolean;
  leadingNone?: boolean;
  className?: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

export const Body = ({
  inline = false,
  sub = false,
  faded = false,
  underline = false,
  leadingNone = false,
  caption = false,
  className = "",
  children,
  ...rest
}: BodyConfig) => {
  const Element = inline ? "span" : "p";

  return (
    <Element
      {...rest}
      className={clsx(
        underline && "underline",
        sub
          ? "text-[3.25vw]"
          : caption
            ? "text-[2.5vw]"
            : // : "text-[3.75vw] xs:text-[clamp(8px,0.568vw+10.18px,16px)]",
              "text-[3.75vw]",
        "font-sans",
        leadingNone ? "leading-none" : "leading-tight",
        className,
      )}
      style={{
        opacity: faded ? 0.5 : 1,
      }}
    >
      {children}
    </Element>
  );
};
