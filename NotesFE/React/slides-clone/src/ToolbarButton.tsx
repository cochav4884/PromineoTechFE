export default function ToolbarButton() {

    const handleButtonClick = () => {
        alert("Button clicked!");
    };
    return (
        <button className="btn btn-outline-secondary me-2"
        onClick={handleButtonClick}
        >
        Button
        </button>
    );
}