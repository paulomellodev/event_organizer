import { createContext, useState } from "react";
import api from "../../services/api";

// criar contexto das bebidas
export const BeveragesContext = createContext([]);

// criar provider
export const BeveragesProvider = ({ children }) => {
  const [beverages, setBeverages] = useState([]);
  const [page, setPage] = useState(1);
  const [next, setNext] = useState(true);
  const [previous, setPrevious] = useState(false);
  const [loading, setLoading] = useState(true);

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
      setPrevious(true);
    }
  };

  const getBeverages = (page) => {
    api
      .get(`/beers?page=${page}`)
      .then((response) => {
        setBeverages([...response.data]);
      })
      .then(setLoading(false))
      .catch((e) => console.log(e));
  };

  return (
    <BeveragesContext.Provider
      value={{
        beverages,
        page,
        getBeverages,
        setPage,
        next,
        previous,
        loading,
        setLoading,
        isAllowedPrevious,
        isAllowedNext,
      }}
    >
      {children}
    </BeveragesContext.Provider>
  );
};
