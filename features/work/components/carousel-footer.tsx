import { Body } from "@/components/typography/body";

export const CarouselFooter = () => {
  return (
    <div
      data-component="carousel-footer"
      className="flex flex-row justify-between pt-[3vw]"
    >
      <Body data-animate-component="slide-indicator"> [01] </Body>
      <div className="flex-1 flex flex-row justify-around ">
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
      <Body data-animate-component="slide-indicator" faded>
        {" "}
        [02]{" "}
      </Body>
      <div className="flex-1 flex flex-row justify-around ">
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
      <Body data-animate-component="slide-indicator" faded>
        {" "}
        [03]{" "}
      </Body>
    </div>
  );
};
