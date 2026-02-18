import { fluid } from "@/lib/fluid";
import clsx from "clsx";

type BodyConfig = {
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>;

export const Body = ({ className = "", children }: BodyConfig) => {
  return (
    <p
      className={clsx("leading-tight", className)}
      style={{ fontSize: fluid(12, 16) }}
    >
      {children}
    </p>
  );
};
