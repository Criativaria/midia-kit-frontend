import React, { useCallback, useState } from "react";
import { bookContext } from "./book-context";

export type BookContextProviderProps = {
  children: React.ReactNode;
  maxPage: number;
};

//prove qualquer info do context em qualquer lugar da aplicação
export function BookContextProvider({
  children,
  maxPage,
}: BookContextProviderProps) {
  const [page, setPage] = useState(0);

  const goToPage = useCallback((page: number) => {
    console.log(page);
    setPage(page);
  }, []);

  const nextPage = useCallback(() => {
    setPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }, [maxPage]);

  const prevPage = useCallback(() => {
    setPage((currentPage) => Math.max(currentPage - 1, 0));
  }, []);

  return (
    <bookContext.Provider value={{ page, nextPage, prevPage, goToPage }}>
      {children}
    </bookContext.Provider>
  );
}
