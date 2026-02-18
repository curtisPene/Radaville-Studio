import { ReactNode } from "react";
import clsx from "clsx";

type LabelConfig = {
  inline?: boolean;
  children: ReactNode;
  color?: string;
  sub?: boolean;
  faded?: boolean;
  caption?: boolean;
  underline?: boolean;
  leadingNone?: boolean;
  className?: string;
} & React.HTMLAttributes<HTMLSpanElement>;

export const Label = ({
  inline = false,
  sub = false,
  faded = false,
  underline = false,
  leadingNone = false,
  caption = false,
  className = "",
  children,
  ...rest
}: LabelConfig) => {
  return (
    <span
      {...rest}
      className={clsx(
        underline && "underline",
        inline ? "inline" : "block",
        "font-sans",
        leadingNone && "leading-none",
        "leading-tight",
        className,
      )}
      style={{
        opacity: faded ? 0.5 : 1,
        fontSize: sub
          ? "var(--step--2)"
          : caption
            ? "var(--step--1)"
            : "var(--step-0)",
      }}
    >
      {children}
    </span>
  );
};
