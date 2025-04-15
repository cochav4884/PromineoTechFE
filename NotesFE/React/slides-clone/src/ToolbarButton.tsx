
type ToolbarButtonProps = {
    icon: string,
    onClick: () => void;
    title: string; // Added title to props
}

export default function ToolbarButton({ icon, onClick}: ToolbarButtonProps) {
   return (
    <button 
        className="btn btn-outline-secondary me-2" 
        type="button"  
        onClick={onClick}
        title="Toolbar button"
    >        
        <img src={icon} alt="Toolbar icon" style={{ width: "1rem"}} />
    </button>
  );
}
