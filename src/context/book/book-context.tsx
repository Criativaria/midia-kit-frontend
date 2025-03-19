import React from "react";

export type BookContextProps = {
  page: number;
  nextPage: () => void;
  prevPage: () => void;
};

export const bookContext = React.createContext<BookContextProps | undefined>(
  undefined
);
export function useBookContext() {
  const context = React.useContext(bookContext);

  if (context == undefined) {
    throw new Error("mano parô ta fazendo merda");
  }
  return context;
}
