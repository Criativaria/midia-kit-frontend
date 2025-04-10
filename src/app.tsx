import { Book } from "./components/book";
import { Carousel } from "./components/carousel";
import { Toggle } from "./components/toggle-theme";
import { BookContextProvider } from "./context/book/book-context-provider";
import "./tailwind.css";

export function App() {
  return (
    <BookContextProvider maxPage={6}>
      <Toggle />
      <div className="flex justify-center items-center">
        <Carousel />
        <Book />
      </div>
    </BookContextProvider>
  );
}
