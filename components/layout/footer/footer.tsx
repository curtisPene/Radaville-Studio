import { useFooterAnimation } from "@/components/layout/footer/use-footer-animaiton";
import { Body } from "../../typography/body";

export const Footer = () => {
  const ref = useFooterAnimation();
  return (
    <div data-component="footer-root" ref={ref} className="overflow-clip ">
      <footer
        data-component="footer"
        className="flex flex-row justify-between translate-y-full"
      >
        <Body underline>hello@radaville.studio</Body>
        <Body>Düsseldorf, Germany</Body>
      </footer>
    </div>
  );
};
