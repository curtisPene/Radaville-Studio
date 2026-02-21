import { Label } from "@/components/typography/label";
import { fluid } from "@/lib/fluid";

export const CarouselFooter = () => {
  return (
    <div
      data-component="carousel-footer"
      className="flex flex-row justify-between items-center overflow-clip"
      style={{ paddingTop: fluid(9, 12) }}
    >
      <Label
        data-animate-component="slide-indicator"
        className="translate-y-[160%]"
      >
        {" "}
        [01]{" "}
      </Label>
      <div className="flex-1 flex flex-row justify-around translate-y-[160%]">
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
      </div>
      <Label
        data-animate-component="slide-indicator"
        className="translate-y-[160%]"
        faded
      >
        {" "}
        [02]{" "}
      </Label>
      <div className="flex-1 flex flex-row justify-around translate-y-[160%]">
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
        <Label sub faded>
          |
        </Label>
      </div>
      <Label
        data-animate-component="slide-indicator"
        className="translate-y-[160%]"
        faded
      >
        {" "}
        [03]{" "}
      </Label>
    </div>
  );
};
