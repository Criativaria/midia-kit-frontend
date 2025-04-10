import { motion, useAnimation } from "motion/react";
import { JSX, useEffect } from "react";
import pageBackgrond from "../assets/white-page.png";
import { useBookContext } from "../context/book/book-context";
import { pageMarkers } from "../utils/page-markers";
import { twMerge } from "tailwind-merge";

export type page = {
  pageFront: JSX.Element;
  pageBack: JSX.Element;
  pageIndex: number;
};

export function PageFlipComponent({ pageFront, pageBack, pageIndex }: page) {
  const animationControl = useAnimation();
  const { page } = useBookContext();
  const markers = pageMarkers();
  const { goToPage } = useBookContext();
  useEffect(() => {
    if (page <= pageIndex) {
      animationControl.start("flipRtoL");
    } else {
      animationControl.start("flipLtoR");
    }
  }, [page, pageIndex, animationControl]);
  return (
    <motion.div
      className="w-[660px] h-[900px] flex justify-center items-center absolute transform-3d"
      initial={"flipRtoL"}
      animate={animationControl}
      variants={{
        flipLtoR: {
          rotateY: -180,
          originX: 0,
          originZ: pageIndex,
          translateZ: -pageIndex,
          translateX: pageIndex * 2 + "px",
        },
        flipRtoL: {
          rotateY: 0,
          originX: 0,
          originZ: pageIndex,
          translateZ: -pageIndex,
          translateX: pageIndex * 2 + "px",
        },
      }}
      transition={{ duration: 1 }}
    >
      <div className="h-full w-full flex justify-center absolute items-start backface-hidden overflow-hidden flex-col">
        <div className="flex flex-row gap-5 absolute top-11 left-3">
          {markers.map((markers) => (
            <div
              className={twMerge(
                "h-7 w-fit bg-pink-800 rounded-t-md p-0.5 px-1.5 flex justify-center",
                markers.id == pageIndex && "h-12 bg-pink-400"
              )}
              key={markers.id}
              onClick={() => goToPage(markers.id)}
            >
              <p className="">{markers.name}</p>
            </div>
          ))}
        </div>
        <div
          className="h-[758px] w-[558px] rounded-r-4xl rounded-l-lg"
          style={{ backgroundImage: `url(${pageBackgrond})` }}
        >
          <div className="absolute">{pageFront}</div>
        </div>
      </div>

      <div className="h-full w-full flex justify-center absolute items-end backface-hidden overflow-hidden flex-col rotate-y-180">
        <div
          className="h-[758px] w-[558px] rounded-l-4xl rounded-r-lg"
          style={{ backgroundImage: `url(${pageBackgrond})` }}
        >
          <div className="absolute">{pageBack}</div>
        </div>
      </div>
    </motion.div>
  );
}
