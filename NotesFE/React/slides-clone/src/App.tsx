import Toolbar from './Toolbar';
import Sidebar from './Sidebar';
import SlideView from './SlideView';
import { useState } from 'react';
import thumbnailImage2 from "./assets/thumbnail2.png";
import thumbnail2Image3 from "./assets/thumbnail3.png";
import thumbnail3Image4 from "./assets/thumbnail4.png";
import thumbnail4Image5 from "./assets/thumbnail5.png";

const testSlides = [
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
  const [selectedSlideId, setSelectedSlideId] = useState(0)

  const selectedSlide = testSlides.find(s => s.id === selectedSlideId)

  return (
    <div className="d-flex flex-column h-100">
      <Toolbar />
      <div className="d-flex flex-grow-1">
        <Sidebar slides={testSlides} selectedSlideId={selectedSlideId} setSelectedSlideId={setSelectedSlideId} />
        <SlideView slide={selectedSlide}/>
      </div>
    </div>
  );
}
