type ToolbarButtonProps = {
  icon: string;
  onClick: () => void;
  title: string;
};

export default function ToolbarButton({ icon, onClick, title }: ToolbarButtonProps) {
  return (
    <button
      className="btn btn-outline-secondary me-2"
      type="button"
      onClick={onClick}
      title={title}
    >
      <img src={icon} alt={title} style={{ width: "1rem" }} />
    </button>
  );
}
