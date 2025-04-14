import SlideThumbnail from "./SlideThumbnail";
import { useState } from "react";

type SidebarProps = {
    slides: Array<{ id: number, order: number, image: string }>
    selectedSlideId: number
    setSelectedSlideId: (newValue: number) => void
}

// Mapping an array to JSX to a specific component is extremely common in React and is a key skill that you want to be sure you build comfortably.
export default function Sidebar({ slides, selectedSlideId, setSelectedSlideId}: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded)
  }

  const handleSlideClick = (id: number) => {
    setSelectedSlideId(id)
  }
  
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
              isSelected={s.id === selectedSlideId} />
            ))}
          </div>
        ) : null}
        <button className="btn btn-light p-1 border" 
          onClick={handleButtonClick}
          >
          {isExpanded ? "<" : ">"}
        </button>
      </>
    );
    
    }



/**
 * 
 * type Slide = {
  id: number;
  order: number;
  image: string;
};

const testSlides: Slide[] = [ ... ];

 */
