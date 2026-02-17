import clsx from "clsx";

type BodyConfig = {
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>;

export const Body = ({ className = "text-[4vw]", children }: BodyConfig) => {
  return <p className={clsx(className)}>{children}</p>;
};
