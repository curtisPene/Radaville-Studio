"use client";

import { useFooterAnimation } from "@/components/layout/footer/use-footer-animaiton";
import { Label } from "../../typography/label";

type FooterConfig = {
  trigger?: boolean;
};

export const Footer = ({ trigger = false }: FooterConfig) => {
  const ref = useFooterAnimation({ trigger });
  return (
    <div data-component="footer-root" ref={ref} className="overflow-clip ">
      <footer
        data-component="footer"
        className="flex flex-row justify-between translate-y-full"
      >
        <Label underline>hello@radaville.studio</Label>
        <Label>Düsseldorf, Germany</Label>
      </footer>
    </div>
  );
};
