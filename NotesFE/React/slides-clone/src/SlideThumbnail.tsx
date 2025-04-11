export default function SlideThumbnail({ slide }: { slide: { order: number, image: string }}) {
  
  return (
    <>
      <span>{ slide.order} </span>
      <img src={ slide.image } onClick={() => alert("Selected!")} alt="man typing on laptop" className="rounded-circle" />
    </>
  );
}
