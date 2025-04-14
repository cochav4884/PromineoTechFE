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
      <div className="d-flex flex-grow-1 justify-items-center align-items-center bg-light"></div>
      <div
        className="bg-white m-3 w-75 shadow-sm p-3 border"
        style={{
          height: slideHeight + "px",
          color: slide?.fontColor,
        }}
      >
        {slide?.text}
      </div>
      <div>
        <label htmlFor="speaker-notes"></label>
        <textarea
          className="form-control"
          id="speaker-notes"
          placeholder="Enter your notes here"
          defaultValue="Speaker Notes"
        ></textarea>
      </div>
    </div>
  );
}
