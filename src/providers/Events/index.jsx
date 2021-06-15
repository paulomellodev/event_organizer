import { createContext, useState } from "react";
import { toast } from "react-toastify";

// criar contexto das bebidas
export const EventsContext = createContext([]);

// criar provider
export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState({
    Casamento: [],
    Formatura: [],
    Confraternização: [],
  });

  const allEvents = Object.keys(events);

  const addBeverageToEvent = (event, item) => {
    const eventBeverages = events[event];
    if (event === "Casamento") {
      setEvents({ ...events, Casamento: [...eventBeverages, item] });
    }
    if (event === "Formatura") {
      setEvents({ ...events, Formatura: [...eventBeverages, item] });
    }
    if (event === "Confraternização") {
      setEvents({
        ...events,
        Confraternização: [...eventBeverages, item],
      });
    }
    toast.success(`Bebida foi adicionada a(o) ${event}!`);
  };

  const removeBeverageFromEvent = (event, id) => {
    const eventBeverages = events[event];

    let indexId = 0;

    for (let i = 0; i < eventBeverages.length; i++) {
      let beverage = eventBeverages[i];
      if (beverage.id === id) {
        indexId = i;
      }
    }
    eventBeverages.splice(indexId, 1);

    if (event === "Casamento") {
      setEvents({ ...events, Casamento: [...eventBeverages] });
    }
    if (event === "Formatura") {
      setEvents({ ...events, Formatura: [...eventBeverages] });
    }
    if (event === "Confraternização") {
      setEvents({ ...events, Confraternização: [...eventBeverages] });
    }
    toast.success(`Bebida removida com sucesso!`);
  };

  return (
    <EventsContext.Provider
      value={{ events, allEvents, addBeverageToEvent, removeBeverageFromEvent }}
    >
      {children}
    </EventsContext.Provider>
  );
};
