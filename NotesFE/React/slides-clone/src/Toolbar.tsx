import ToolbarButton from "./ToolbarButton";
import colorIcon from "./assets/palette-solid (1).svg";
import fontIcon from "./assets/text-height-solid.svg";

export default function Toolbar() {
    return (
        <div className="bg-light p-3 border-bottom ">
            <ToolbarButton icon={ colorIcon } onClick={() => alert("Set font color!")} />
            <ToolbarButton icon={ fontIcon } onClick={() => alert("Set font family!")} />
        </div>
    );
}