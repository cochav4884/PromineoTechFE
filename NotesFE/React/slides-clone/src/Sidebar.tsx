import SlideThumbnail from "./SlideThumbnail";
import { useState } from "react";

type SidebarProps = {
    slides: Array<{ id: string, order: number, image: string }>
    selectedSlideId: number
    setSelectedSlideId: (newValue: number) => void
    deleteSlide: (id: number) => void
}

// Mapping an array to JSX to a specific component is extremely common in React and is a key skill that you want to be sure you build comfortably.
export default function Sidebar({ 
  slides, 
  selectedSlideId, 
  setSelectedSlideId, deleteSlide}: 
  SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded)
  }

  const handleSlideClick = (id: string) => {
      setSelectedSlideId(Number(id))
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
              isSelected={Number(s.id) === selectedSlideId}
              deleteSlide={(id) => deleteSlide(Number(id))} />
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
