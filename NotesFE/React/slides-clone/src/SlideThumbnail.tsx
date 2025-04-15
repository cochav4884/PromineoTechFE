type SlideThumbnailProps = {
  slide: {
    id: string;
    order: number;
    image: string;
  };
  isSelected: boolean;
  onSelected: (id: string) => void;
  deleteSlide: (id: string) => void;
};

export default function SlideThumbnail({ 
  slide, 
  isSelected, 
  onSelected, 
  deleteSlide 
}: SlideThumbnailProps) {

  return (
    <div>
      <div className="d-flex justify-content-between mt-2 mb-1 align-items-center">
        <span>{slide.order}</span>
        <button 
          className="btn btn-sm btn-outline-danger" 
          onClick={() => deleteSlide(slide.id)}
        >
          X
        </button>
      </div>

      <img 
        src={slide.image}
        onClick={() => onSelected(slide.id)}
        alt={`Slide ${slide.order}`}
        className={`img-fluid rounded border border-2 ${isSelected ? "border-primary" : "border-light"}`}
        style={{
          width: "100%",     // 🔧 Ensures the image fits within container
          maxWidth: "160px", // 🔧 Optional: limit size inside 200px sidebar
          height: "auto",    // 🔧 Keep aspect ratio
          cursor: "pointer"  // 🔧 Improves UX
        }}
      />
    </div>
  );
}
