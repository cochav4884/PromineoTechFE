import { ChangeEvent } from "react";
import type { Slide } from "./types";
import { useState, MouseEvent } from "react";

type Props = {
  updateSlide: (property: string, value: string, id?: number) => void;
  selectedSlide?: Slide;
  handleClose: () => void;
};

export default function FontForm({
  updateSlide,
  selectedSlide,
  handleClose,
}: Props) {
  const [formValues, setFormValues] = useState({
    fontFamily: selectedSlide?.fontFamily || "Arial",
    fontSize: selectedSlide?.fontSize || "12",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    updateSlide("fontFamily", formValues.fontFamily, selectedSlide?.id);
    updateSlide(
      "fontSize",
      formValues.fontSize.toString(),
      selectedSlide?.id
    );
    handleClose();
  };

    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-2">
          <label htmlFor="font-family" className="form-label">
            Font Family
          </label>
          <select
            id="font-family"
            className="form-select"
            value={formValues.fontFamily}
            name="fontFamily"
            onChange={handleChange}
          >
            <option value="Verdana">Verdana</option>
            <option value="Arial">Arial</option>
            <option value="Courier New">Courier New</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Georgia">Georgia</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Trebuchet MS">Trebuchet MS</option>
            <option value="Impact">Impact</option>
            <option value="Lucida Console">Lucida Console</option>
          </select>
        </div>

        <div className="mb-2">
          <label htmlFor="font-size" className="form-label">
            Font Size
          </label>
          <select
            id="font-size"
            className="form-select"
            value={formValues.fontSize}
            name="fontSize"
            onChange={handleChange}
          >
            {[8, 9, 10, 11, 12, 14, 16, 18, 20, 22].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div className="text-end">
          {/* Cancel Button - Secondary Button */}
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={handleClose}
          >
            Cancel
          </button>

          {/* Save Button - Success Button */}
          <button
            type="button"
            className="btn btn-success"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </form>
    );
  };
