import { BackCover } from "../pages/cover/back-cover";
import { FrontCover } from "../pages/cover/front-cover";
import { PageFlipComponent } from "./page";

export function Book() {
  return (
    <div className="perspective-[2000px] perspective-origin-center transform-3d translate-x-[50%] w-[660px] h-[900px] p-0">
      <PageFlipComponent
        pageIndex={0}
        pageFront={<FrontCover />}
        pageBack={<BackCover />}
      />
      <PageFlipComponent pageIndex={1} pageFront={<p></p>} pageBack={<p></p>} />
    </div>
  );
}
