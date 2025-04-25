import SlideThumbnail from "./SlideThumbnail";
import { useState } from "react";
import type { Slide } from "./types";

type SidebarProps = {
  slides: Array<Slide>;
  selectedSlideId: number;
  setSelectedSlideId: (newValue: number) => void;
  deleteSlide: (id: number) => void;
};

export default function Sidebar({
  slides,
  selectedSlideId,
  setSelectedSlideId,
  deleteSlide,
}: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSlideClick = (id: number) => {
    setSelectedSlideId(id);
  };

  return (
    <>
      {isExpanded ? (
        <div
          className="border-end bg-light p-3 d-flex flex-column"
          style={{ width: "200px" }}
        >
          {slides.map((s) => (
            <SlideThumbnail
              key={s.id}
              slide={s}
              onSelected={handleSlideClick}
              isSelected={Number(s.id) === selectedSlideId}
              deleteSlide={(id) => deleteSlide(Number(id))}
            />
          ))}
        </div>
      ) : null}
      <button className="btn btn-light p-1 border" onClick={handleButtonClick}>
        {isExpanded ? "<" : ">"}
      </button>
    </>
  );
}
