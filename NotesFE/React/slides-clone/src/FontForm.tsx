type Props = {
    fontFamily: string;
    fontSize: number;
    setFontFamily: (family: string) => void;
    setFontSize: (size: number) => void;
    onSave: () => void;
    onCancel: () => void;
  };
  
  export default function FontForm({
    fontFamily,
    fontSize,
    setFontFamily,
    setFontSize,
    onSave,
    onCancel,
  }: Props) {
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-2">
          <label htmlFor="font-family" className="form-label">Font Family</label>
          <select
            id="font-family"
            className="form-select"
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
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
          <label htmlFor="font-size" className="form-label">Font Size</label>
          <select
            id="font-size"
            className="form-select"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
          >
            {[8, 9, 10, 11, 12, 14, 16, 18, 20, 22].map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
  
        <div className="text-end">
          {/* Cancel Button - Secondary Button */}
          <button 
            type="button" 
            className="btn btn-secondary me-2" 
            onClick={onCancel}
          >
            Cancel
          </button>
  
          {/* Save Button - Success Button */}
          <button 
            type="button" 
            className="btn btn-success" 
            onClick={onSave}
          >
            Save
          </button>
        </div>
      </form>
    );
  }
  