import SlideThumbnail from "./SlideThumbnail";

export default function Sidebar() {
  return (
    <div className="border-end bg-light p-3 d-flex flex-column" style={{width: "200px"}}>
        <SlideThumbnail />
        <SlideThumbnail />
        <SlideThumbnail />    
    </div>
  );
}
