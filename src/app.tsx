import { Book } from "./components/book";
import { Carousel } from "./components/carousel";
import { BookContextProvider } from "./context/book/book-context-provider";
import "./tailwind.css";
// import lines from "./assets/lines.jpeg";

export function App() {
  return (
    <BookContextProvider maxPage={4}>
      <div className="w-screen h-screen flex justify-center items-center bg-black">
        <Carousel />
        <Book />
      </div>
    </BookContextProvider>
  );
}
