import { ChevronLeft, ChevronRight } from "lucide-react";
import { useBookContext } from "../context/book/book-context";

export function Carousel() {
  const { nextPage, prevPage } = useBookContext();

  return (
    <div className="absolute flex justify-between items-center w-full h-full px-56 text-rosinha">
      <ChevronLeft size={50} onClick={prevPage} />
      <ChevronRight size={50} onClick={nextPage} />
    </div>
  );
}
