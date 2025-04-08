import thumbnail2 from "./assets/thumbnail2.png";

export default function SlideThumbnail() {
  const slideNumber = 2;
  return (
    <>
      <span>{ slideNumber} </span>
      <img src={thumbnail2} onClick={() => alert("Selected!")} alt="man typing on laptop" className="rounded-circle" />
    </>
  );
}
