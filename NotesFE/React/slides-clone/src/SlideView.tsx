type SlideViewProps = {
  slide?: {
    id: number;
    order: number;
    image: string;
    text: string;
    fontColor?: string;
  };
};

export default function SlideView({ slide }: SlideViewProps) {
  const slideHeight = 500;

  return (
    <div className="flex-grow-1 d-flex flex-column">
      {/* Removed empty div here */}
      <div
        className="bg-white m-3 w-75 shadow-sm p-3 border"
        style={{
          height: slideHeight + "px",
          color: slide?.fontColor, // 🆕 use passed fontColor
        }}
      >
        {slide?.text}
      </div>
      <div>
        <label htmlFor="speaker-notes">Speaker Notes</label>
        <textarea
          className="form-control"
          id="speaker-notes"
          placeholder="Enter your notes here"
          defaultValue=""
        ></textarea>
      </div>
    </div>
  );
}
