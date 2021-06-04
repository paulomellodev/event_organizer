import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

// criar contexto das bebidas
export const BeveragesContext = createContext([]);

// criar provider
export const BeveragesProvider = ({ children }) => {
  const [beverages, setBeverages] = useState([]);
  const [page, setPage] = useState(1);
  const [next, setNext] = useState(true);
  const [previous, setPrevious] = useState(false);

  const isAllowedNext = (page) => {
    if (page >= 13) {
      setNext(false);
    } else {
      setNext(true);
    }
  };

  const isAllowedPrevious = (page) => {
    if (page <= 1) {
      setPrevious(false);
    } else {
      setNext(true);
    }
  };

  const getBeverages = (page) => {
    api
      .get(`/beers?page=${page}`)
      .then((response) => setBeverages([...response.data]))
      .then(() => {
        isAllowedNext(page);
        isAllowedPrevious(page);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getBeverages(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BeveragesContext.Provider
      value={{ beverages, page, getBeverages, setPage, next, previous }}
    >
      {children}
      {console.log(beverages)}
    </BeveragesContext.Provider>
  );
};
