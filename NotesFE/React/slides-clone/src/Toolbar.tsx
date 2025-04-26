import { useState } from "react";
import { Button, Modal, Stack, Form } from "react-bootstrap";
import ToolbarButton from "./ToolbarButton";
import colorIcon from "./assets/palette-solid (1).svg";
import fontIcon from "./assets/text-height-solid.svg";
import plusIcon from "./assets/plus-solid.svg";
import type { Slide } from "./types";

// Define the colors available for selection
const colors = [
  { name: "Red", value: "red", variant: "danger" },
  { name: "Green", value: "green", variant: "success" },
  { name: "Black", value: "black", variant: "dark" },
];

const fontFamilies = [
  "Arial",
  "Verdana",
  "Georgia",
  "Times New Roman",
  "Courier New",
  "Tahoma",
  "Comic Sans MS",
  "Impact",
  "Lucida Console",
  "Trebuchet MS",
  "Palatino Linotype",
  "Segoe UI",
  "Roboto",
  "Open Sans",
  "Lato",
  "Montserrat",
  "Helvetica Neue",
];

type ToolbarProps = {
  addBlankSlide: () => void;
  fontColor: string;
  setFontColor: (color: string) => void;  // Correctly expecting setFontColor function
  updateSlide: (property: string, color: string, id?: number) => void;
  selectedSlide?: Slide;
  handleColorChange: (color: string) => void;
  fontFamily: string;
  fontSize: number;
  setFontFamily: (font: string) => void;
  setFontSize: (size: number) => void;
};

export default function Toolbar({
  addBlankSlide,
  fontFamily,
  fontSize,
  setFontFamily,
  setFontSize,
  handleColorChange,
  updateSlide,
  selectedSlide,
}: ToolbarProps) {
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);
  const [isFontModalOpen, setIsFontModalOpen] = useState(false);

  const handleColorClose = () => setIsColorModalOpen(false);
  const handleFontClose = () => setIsFontModalOpen(false);

  // Define onColorChange to update the font color and trigger any additional logic
  const onColorChange = (color: string) => {
    handleColorChange(color); // Call the function passed from the parent (App.tsx)
  };

  return (
    <>
      <div className="bg-light p-3 border-bottom">
        <ToolbarButton
          icon={plusIcon}
          onClick={addBlankSlide}
          title="Add Slide"
        />
        <ToolbarButton
          icon={colorIcon}
          onClick={() => setIsColorModalOpen(true)}
          title="Change Font Color"
        />
        <ToolbarButton
          icon={fontIcon}
          onClick={() => setIsFontModalOpen(true)}
          title="Font Options"
        />
      </div>

      {/* Font Color Modal */}
      <Modal show={isColorModalOpen} onHide={handleColorClose}>
        <Modal.Header closeButton>
          <Modal.Title>Font Color</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack direction="horizontal" gap={1}>
            {colors.map(({ name, value, variant }) => (
              <Button
                key={value}
                variant={
                  selectedSlide?.fontColor === value
                    ? variant
                    : `outline-${variant}`
                }
                onClick={() => onColorChange(value)} // Call onColorChange to update color
              >
                {name}
              </Button>
            ))}
          </Stack>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handleColorClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Font Family & Size Modal */}
      <Modal show={isFontModalOpen} onHide={handleFontClose}>
        <Modal.Header closeButton>
          <Modal.Title>Font Family & Size</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form.Group>
              <Form.Label>Font Family:</Form.Label>
              <Form.Control
                as="select"
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
              >
                {fontFamilies.map((font, index) => (
                  <option key={index} value={font}>
                    {font}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <label>
              Font Size:
              <input
                type="number"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
              />
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleFontClose}>
            Cancel
          </Button>
          <Button
            variant="success"
            onClick={() => {
              if (selectedSlide) {
                updateSlide("fontFamily", fontFamily, selectedSlide.id);
                updateSlide("fontSize", fontSize.toString(), selectedSlide.id);
              }
              handleFontClose(); // Close modal after applying
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
