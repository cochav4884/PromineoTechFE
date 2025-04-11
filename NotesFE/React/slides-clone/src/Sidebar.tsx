import SlideThumbnail from "./SlideThumbnail";
import thumbnailImage2 from "./assets/thumbnail2.png";
import thumbnail2Image3 from "./assets/thumbnail3.png";
import thumbnail3Image4 from "./assets/thumbnail4.png";

const testSlides = [
  {
    id: 0,
    order: 1,
    image: thumbnailImage2
  },
  {
    id: 1,
    order: 2,
    image: thumbnail2Image3
  },
  {
    id: 2,
    order: 3,
    image: thumbnail3Image4
  },
];

export default function Sidebar() {
  return (
    <div className="border-end bg-light p-3 d-flex flex-column" style={{ width: "200px" }}>
      <SlideThumbnail slide={testSlides[0]} />
      <SlideThumbnail slide={testSlides[1]} />
      <SlideThumbnail slide={testSlides[2]} />
    </div>
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