import { Button, Modal, Stack } from "react-bootstrap";
import ToolbarButton from "./ToolbarButton";
import colorIcon from "./assets/palette-solid (1).svg";
import fontIcon from "./assets/text-height-solid.svg";
import plusIcon from "./assets/plus-solid.svg";
import { useState } from "react";
import type { Slide } from "./types";

const colors = [
    { name: "Red", value: "red", variant: "danger" },
    { name: "Green", value: "green", variant: "success" },
    { name: "Black", value: "black", variant: "dark" }
  ]

type ToolbarProps = {
  addBlankSlide: () => void;
  fontColor: string; // 🆕
  setFontColor: (color: string) => void; // 🆕
  updateSlide: (property: string, color: string, id?: number) => void
  selectedSlide?: Slide
};

export default function Toolbar({ addBlankSlide, updateSlide, selectedSlide }: ToolbarProps) {
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);

  // Handle the closing of the modal
  const handleClose = () => setIsColorModalOpen(false);

  // Handle color change by calling the updateSlideFontColor function
  const handleColorChange = (fontColor: string) => {
    if (selectedSlide) { //Ensure selectedSlide is available 
        updateSlide("fontColor", fontColor, selectedSlide.id); // Update font color of the selected slide    
    }
  }

  return (
    <>
      <div className="bg-light p-3 border-bottom">
        <ToolbarButton icon={plusIcon} onClick={addBlankSlide} title="Add new slide" />
        <ToolbarButton icon={colorIcon} onClick={() => setIsColorModalOpen(true)} title="Change font color" />
        <ToolbarButton icon={fontIcon} onClick={() => alert("Set font family!")} title="Set font family" />
      </div>
      <Modal show={isColorModalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Font Color</Modal.Title> {/* 🆕 fixed typo */}
        </Modal.Header>
        <Modal.Body>
        <Stack direction="horizontal" gap={1}>
            {colors.map(({ name, value, variant }) => (
              <Button
                key={value}
                variant={selectedSlide?.fontColor === value ? variant : `outline-${variant}`}
                onClick={() => handleColorChange(value)}
              >
                {name}
              </Button>
            ))}
          </Stack>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
