import { Body } from "@/components/typography/body";

export const CarouselFooter = () => {
  return (
    <div
      data-component="carousel-footer"
      className="flex flex-row justify-between pt-[3vw] overflow-clip"
    >
      <Body
        data-animate-component="slide-indicator"
        className="translate-y-full"
      >
        {" "}
        [01]{" "}
      </Body>
      <div className="flex-1 flex flex-row justify-around translate-y-full translate-y-full">
        <Body caption faded>
          |
        </Body>
        <Body caption faded>
          |
        </Body>
        <Body caption faded>
          |
        </Body>
        <Body caption faded>
          |
        </Body>
        <Body caption faded>
          |
        </Body>
        <Body caption faded>
          |
        </Body>
        <Body caption faded>
          |
        </Body>
        <Body caption faded>
          |
        </Body>
        <Body caption faded>
          |
        </Body>
        <Body caption faded>
          |
        </Body>
        <Body caption faded>
          |
        </Body>
        <Body caption faded>
          |
        </Body>
        <Body caption faded>
          |
        </Body>
      </div>
      <Body
        data-animate-component="slide-indicator"
        className="translate-y-full"
        faded
      >
        {" "}
        [02]{" "}
      </Body>
      <div className="flex-1 flex flex-row justify-around translate-y-full">
        <Body caption faded>
          |
        </Body>
        <Body caption faded>
          |
        </Body>
        <Body caption faded>
          |
        </Body>
        <Body caption faded>
          |
        </Body>
        <Body caption faded>
          |
        </Body>
        <Body caption faded>
          |
        </Body>
        <Body caption faded>
          |
        </Body>
        <Body caption faded>
          |
        </Body>
        <Body caption faded>
          |
        </Body>
        <Body caption faded>
          |
        </Body>
        <Body caption faded>
          |
        </Body>
        <Body caption faded>
          |
        </Body>
        <Body caption faded>
          |
        </Body>
      </div>
      <Body
        data-animate-component="slide-indicator"
        className="translate-y-full"
        faded
      >
        {" "}
        [03]{" "}
      </Body>
    </div>
  );
};
