import { Label } from "@/components/typography/label";

export const CarouselFooter = () => {
  return (
    <div
      data-component="carousel-footer"
      className="flex flex-row justify-between pt-[3vw] overflow-clip"
    >
      <Label
        data-animate-component="slide-indicator"
        className="translate-y-full"
      >
        {" "}
        [01]{" "}
      </Label>
      <div className="flex-1 flex flex-row justify-around translate-y-full">
        <Label caption faded>
          |
        </Label>
        <Label caption faded>
          |
        </Label>
        <Label caption faded>
          |
        </Label>
        <Label caption faded>
          |
        </Label>
        <Label caption faded>
          |
        </Label>
        <Label caption faded>
          |
        </Label>
        <Label caption faded>
          |
        </Label>
        <Label caption faded>
          |
        </Label>
        <Label caption faded>
          |
        </Label>
        <Label caption faded>
          |
        </Label>
        <Label caption faded>
          |
        </Label>
        <Label caption faded>
          |
        </Label>
        <Label caption faded>
          |
        </Label>
      </div>
      <Label
        data-animate-component="slide-indicator"
        className="translate-y-full"
        faded
      >
        {" "}
        [02]{" "}
      </Label>
      <div className="flex-1 flex flex-row justify-around translate-y-full">
        <Label caption faded>
          |
        </Label>
        <Label caption faded>
          |
        </Label>
        <Label caption faded>
          |
        </Label>
        <Label caption faded>
          |
        </Label>
        <Label caption faded>
          |
        </Label>
        <Label caption faded>
          |
        </Label>
        <Label caption faded>
          |
        </Label>
        <Label caption faded>
          |
        </Label>
        <Label caption faded>
          |
        </Label>
        <Label caption faded>
          |
        </Label>
        <Label caption faded>
          |
        </Label>
        <Label caption faded>
          |
        </Label>
        <Label caption faded>
          |
        </Label>
      </div>
      <Label
        data-animate-component="slide-indicator"
        className="translate-y-full"
        faded
      >
        {" "}
        [03]{" "}
      </Label>
    </div>
  );
};
