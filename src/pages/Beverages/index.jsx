import { useContext } from "react";
import { useHistory } from "react-router";
import { BeveragesContext } from "../../providers/Beverages";
import { EventsContext } from "../../providers/Events";

const Beverages = () => {
  const history = useHistory();
  const { beverages, page, getBeverages, setPage, next, previous } =
    useContext(BeveragesContext);
  const { allEvents, addBeverageToEvent } = useContext(EventsContext);

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return <h1>Bebidas {allEvents.join(" - ")}</h1>;
};

export default Beverages;
