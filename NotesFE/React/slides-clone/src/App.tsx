import Toolbar from "./Toolbar";
import Sidebar from "./Sidebar";
import SlideView from "./SlideView";
import { useEffect, useState, useCallback } from "react";
import thumbnailImage2 from "./assets/thumbnail2.png";
import thumbnail2Image3 from "./assets/thumbnail3.png";
import thumbnail3Image4 from "./assets/thumbnail4.png";
import thumbnail4Image5 from "./assets/thumbnail5.png";
import thumbnail5Image6 from "./assets/thumbnail6.png";
import thumbnail6Image7 from "./assets/thumbnail7.png";
import type { Slide } from "./types";
import "bootstrap/dist/css/bootstrap.min.css";

const TEST_SLIDES = [
  {
    id: 0,
    order: 1,
    image: thumbnailImage2,
    text: "React Components",
    fontColor: "green",
    speakerNotes: "",
    fontFamily: "Arial",
    fontSize: 12, // Ensure fontSize is always a number
  },
  {
    id: 1,
    order: 2,
    image: thumbnail2Image3,
    text: "React Props",
    fontColor: "black",
    speakerNotes: "",
    fontFamily: "Arial",
    fontSize: 12,
  },
  {
    id: 2,
    order: 3,
    image: thumbnail3Image4,
    text: "Passing Down Props",
    fontColor: "red",
    speakerNotes: "",
    fontFamily: "Arial",
    fontSize: 12,
  },
  {
    id: 3,
    order: 4,
    image: thumbnail4Image5,
    text: "Lifting Order Up",
    fontColor: "black",
    speakerNotes: "",
    fontFamily: "Arial",
    fontSize: 12,
  },
  {
    id: 4,
    order: 5,
    image: thumbnail5Image6,
    text: "Update State",
    fontColor: "green",
    speakerNotes: "",
    fontFamily: "Arial",
    fontSize: 12,
  },
];

export default function App() {
  const [slides, setSlides] = useState<Slide[]>(TEST_SLIDES);
  const [selectedSlideId, setSelectedSlideId] = useState(0);
  const [fontColor, setFontColor] = useState("black");
  // NEW STATE FOR FONT SETTINGS
  const [fontFamily, setFontFamily] = useState("Arial");
  const [fontSize, setFontSize] = useState(12);

  useEffect(() => {
    document.title = `Slides (${slides.length})`;
  }, [slides.length]);

  const selectedSlide = slides.find((s) => s.id === selectedSlideId);

  const addBlankSlide = () => {
    const blankSlide = {
      id: slides.length ? slides[slides.length - 1].id + 1 : 0,
      order: slides.length ? Math.max(...slides.map((s) => s.order)) + 1 : 1,
      image: thumbnail6Image7,
      text: "",
      fontColor: fontColor,
      speakerNotes: "",
      fontFamily: "Arial",
      fontSize: 12,
    };

    setSlides([...slides, blankSlide]);
  };

  const deleteSlide = (idToDelete: number) => {
    setSlides(slides.filter((s) => s.id !== idToDelete));
  };

  const updateSlide = useCallback(
    (property: string, newValue: string, idToUpdate?: number) => {
      if (idToUpdate === undefined || idToUpdate === null) return;
      console.log(
        `Updating slide ${idToUpdate} property ${property} to ${newValue}`
      );
      setSlides((prevSlides) =>
        prevSlides.map((slide) =>
          slide.id === idToUpdate ? { ...slide, [property]: newValue } : slide
        )
      );
    },
    []
  );

  const handleColorChange = useCallback(
    (color: string) => {
      if (selectedSlide) {
        updateSlide("fontColor", color, selectedSlide.id);
      }
    },
    [selectedSlide, updateSlide]
  );

  return (
    <div className="d-flex flex-column h-100">
      <Toolbar
        selectedSlide={selectedSlide}
        addBlankSlide={addBlankSlide}
        updateSlide={updateSlide}
        setFontColor={setFontColor}
        fontColor={fontColor}
        handleColorChange={handleColorChange}
        fontFamily={fontFamily} // Pass the state to Toolbar
        fontSize={fontSize} // Pass the state to Toolbar
        setFontFamily={setFontFamily} // Pass setter to Toolbar
        setFontSize={setFontSize} // Pass setter to Toolbar
      />
      <div className="d-flex flex-grow-1">
        <Sidebar
          slides={slides}
          deleteSlide={deleteSlide}
          selectedSlideId={selectedSlideId}
          setSelectedSlideId={setSelectedSlideId}
        />
        <SlideView
          slide={
            selectedSlide
              ? selectedSlide
              : { id: -1, order: 0, image: "", text: "", fontColor }
          }
          updateSlide={updateSlide}
        />
      </div>
    </div>
  );
}
