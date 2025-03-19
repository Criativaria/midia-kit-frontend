import { motion, useAnimation } from "motion/react";
import { JSX, useEffect } from "react";
import pageBackgrond from "../assets/page-background.png";
import { useBookContext } from "../context/book/book-context";

export type page = {
  pageFront: JSX.Element;
  pageBack: JSX.Element;
  pageIndex: number;
};

export function PageFlipComponent({ pageFront, pageBack, pageIndex }: page) {
  const animationControl = useAnimation();
  const { page } = useBookContext();

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
      <div
        className="h-full w-full flex justify-center absolute items-center backface-hidden rounded-r-4xl overflow-hidden"
        style={{ backgroundImage: `url(${pageBackgrond})` }}
      >
        <div className="absolute">{pageFront}</div>
      </div>

      <div
        className="h-full w-full flex justify-center items-center absolute rotate-y-180 backface-hidden rounded-l-4xl overflow-hidden"
        style={{ backgroundImage: `url(${pageBackgrond})` }}
      >
        <div className="absolute">{pageBack}</div>
      </div>
    </motion.div>
  );
}
