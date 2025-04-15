import Toolbar from './Toolbar';
import Sidebar from './Sidebar';
import SlideView from './SlideView';
import { useState } from 'react';
import thumbnailImage2 from "./assets/thumbnail2.png";
import thumbnail2Image3 from "./assets/thumbnail3.png";
import thumbnail3Image4 from "./assets/thumbnail4.png";
import thumbnail4Image5 from "./assets/thumbnail5.png";
import thumbnail5Image6 from "./assets/thumbnail6.png";

const TEST_SLIDES = [
  {
    id: 0,
    order: 1,
    image: thumbnailImage2,
    text: "React Components"
  },
  {
    id: 1,
    order: 2,
    image: thumbnail2Image3,
    text: "React Props"
  },
  {
    id: 2,
    order: 3,
    image: thumbnail3Image4,
    text: "Passing Down Props"
  },
  {
    id: 3,
    order: 4,
    image: thumbnail4Image5,
    text: "Lifting Order Up"
  },
];

export default function App() {
  const [slides, setSlides] = useState(TEST_SLIDES);
  const [selectedSlideId, setSelectedSlideId] = useState(0);
  const [fontColor, setFontColor] = useState("black"); // 🆕 Lifted font color state

  const selectedSlide = slides.find(s => s.id === selectedSlideId);

  const addBlankSlide = () => {
    const blankSlide = {
      id: slides.length ? slides[slides.length - 1].id + 1 : 0,
      order: 5,
      image: thumbnail5Image6,
      text: "",
      fontColor: fontColor // 🆕 new slides inherit current font color
    };

    setSlides([...slides, blankSlide]);
  };

  const deleteSlide = (idToDelete: number) => {
    setSlides(slides.filter(s => s.id !== idToDelete));
  };

  return (
    <div className="d-flex flex-column h-100">
      <Toolbar addBlankSlide={addBlankSlide} setFontColor={setFontColor} fontColor={fontColor} /> {/* 🆕 pass down */}
      <div className="d-flex flex-grow-1">
        <Sidebar 
          slides={slides.map(slide => ({ ...slide, id: slide.id.toString() }))} 
          deleteSlide={deleteSlide} 
          selectedSlideId={selectedSlideId} 
          setSelectedSlideId={setSelectedSlideId} 
        />
        <SlideView slide={{ ...selectedSlide ?? { id: 0, order: 0, image: '', text: '' }, fontColor }} /> {/* 🆕 pass fontColor explicitly */}
      </div>
    </div>
  );
}
