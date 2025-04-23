import React from "react";
import type { Slide } from "./types";

type SlideViewProps = {
  slide?: Slide;
  updateSlide: (property: string, newValue: string, idToUpdate?: number) => void;
};

export default function SlideView({ slide, updateSlide }: SlideViewProps) {
  const slideHeight = 500;

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (slide && slide.id !== -1) {
      updateSlide("speakerNotes", e.target.value, slide.id);
    } else {
      console.warn("No slide ID provided for update.");
    }
  };

  return (
    <div className="flex-grow-1 d-flex flex-column">
      <div
        className="bg-white m-3 w-75 shadow-sm p-3 border"
        style={{
          height: slideHeight + "px",
          color: slide?.fontColor || "black",
        }}
      >
        {slide?.text || ""}
      </div>
      <div className="m-3 w-75">
        <label htmlFor="speaker-notes">Speaker Notes</label>
        <textarea
          className="form-control"
          id="speaker-notes"
          placeholder="Enter your notes here"
          disabled={!slide || slide.id === -1}
          value={slide?.speakerNotes === "Default notes" ? "" : slide?.speakerNotes || ""}
          onChange={handleNotesChange}
        />
      </div>
    </div>
  );
}
