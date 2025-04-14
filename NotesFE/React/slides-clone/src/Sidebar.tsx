import SlideThumbnail from "./SlideThumbnail";
import thumbnailImage2 from "./assets/thumbnail2.png";
import thumbnail2Image3 from "./assets/thumbnail3.png";
import thumbnail3Image4 from "./assets/thumbnail4.png";
import thumbnail4Image5 from "./assets/thumbnail5.png";
import { useState } from "react";

const testSlides = [
  {
    id: 0,
    order: 1,
    image: thumbnailImage2,
  },
  {
    id: 1,
    order: 2,
    image: thumbnail2Image3,
  },
  {
    id: 2,
    order: 3,
    image: thumbnail3Image4,
  },
  {
    id: 3,
    order: 4,
    image: thumbnail4Image5,
  },
];

// Mapping an array to JSX to a specific component is extremely common in React and is a key skill that you want to be sure you build comfortably.
export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const [selectedSlideId, setSelectedSlideId] = useState(0)

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
            {testSlides.map((s) => (
              <SlideThumbnail key={s.id} slide={s} onSelected={handleSlideClick} isSelected={s.id === selectedSlideId} />
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
