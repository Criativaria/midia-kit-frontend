import { PageFlipComponent } from "./page";

export function Book() {
  return (
    <div className="perspective-[2000px] perspective-origin-center transform-3d translate-x-[50%] w-[660px] h-[900px]">
      <PageFlipComponent
        pageIndex={0}
        pageFront={<p>1</p>}
        pageBack={<p>2</p>}
      />
      <PageFlipComponent
        pageIndex={1}
        pageFront={<p>3</p>}
        pageBack={<p>4</p>}
      />
      <PageFlipComponent
        pageIndex={2}
        pageFront={<p>5</p>}
        pageBack={<p>6</p>}
      />
      <PageFlipComponent
        pageIndex={3}
        pageFront={<p>7</p>}
        pageBack={<p>8</p>}
      />
    </div>
  );
}
