import { ReactNode } from "react";

interface BodyConfig {
  inline?: boolean;
  children: ReactNode;
  color?: string;
  sub?: boolean;
  faded?: boolean;
  leadingNone?: boolean;
}

export const Body = ({
  inline = false,
  sub = false,
  faded = false,
  leadingNone = false,
  children,
}: BodyConfig) => {
  const Element = inline ? "span" : "p";
  const className = `${sub ? "text-[3.25vw]" : "text-[3.75vw]"} font-sans leading-${leadingNone ? "none" : "tight"}`;

  return (
    <Element
      className={className}
      style={{
        opacity: faded ? 0.5 : 1,
      }}
    >
      {children}
    </Element>
  );
};
