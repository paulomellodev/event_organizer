import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { EventsContext } from "../../providers/Events";

const Events = () => {
  const history = useHistory();
  const { events, removeBeverageFromEvent } = useContext(EventsContext);

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return <h1>Eventos</h1>;
};

export default Events;
