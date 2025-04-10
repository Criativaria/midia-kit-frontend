import frontCover from "../../assets/capa.png";

export function FrontCover() {
  return (
    <div className="w-[580px]">
      <img
        className="rounded-r-4xl rounded-l-lg"
        src={frontCover}
        alt="imagem da capa"
      />
    </div>
  );
}
