"use client";

import List from "@/slices/List";
import { Content } from "@prismicio/client";
import styles from "@/features/about/styles/about.module.css";
import { fluid } from "@/lib/fluid";
import { useListAnimation } from "@/features/about/animation/use-services-animation";

export const Services = ({ slices }: { slices: Content.ListSlice[] }) => {
  return (
    <div
      className={`${styles["services-root"]} flex flex-row w-full justify-between ${styles.services}`}
      style={
        {
          "--padding-y": fluid(24, 48),
          "--padding-y-landscape": fluid(6, 12),
        } as React.CSSProperties
      }
    >
      {slices.map((list, index) => {
        return (
          <List
            key={list.id}
            slice={list}
            index={index}
            slices={slices}
            context={{}}
            useAnimation={useListAnimation}
          />
        );
      })}
    </div>
  );
};
