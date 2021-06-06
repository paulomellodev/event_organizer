import { createContext, useState } from "react";

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
    console.log(item, event);
    const eventBeverages = events[event];
    if (event === "Casamento") {
      console.log(event);
      return setEvents({ ...events, Casamento: [...eventBeverages, item] });
    }
    if (event === "Formatura") {
      console.log(event);
      return setEvents({ ...events, Formatura: [...eventBeverages, item] });
    }
    if (event === "Confraternização") {
      console.log(event);
      return setEvents({
        ...events,
        Confraternização: [...eventBeverages, item],
      });
    }
  };

  const removeBeverageFromEvent = (event, id) => {
    const eventBeverages = events[event];

    if (event === "Casamento") {
      const beveragesKeeped = eventBeverages.map((item) => item.id !== id);
      return setEvents({ ...events, Casamento: [...beveragesKeeped] });
    }
    if (event === "Formatura") {
      const beveragesKeeped = eventBeverages.map((item) => item.id !== id);
      return setEvents({ ...events, Formatura: [...beveragesKeeped] });
    }
    if (event === "Confraternização") {
      const beveragesKeeped = eventBeverages.map((item) => item.id !== id);
      return setEvents({ ...events, Confraternização: [...beveragesKeeped] });
    }
  };

  return (
    <EventsContext.Provider
      value={{ events, allEvents, addBeverageToEvent, removeBeverageFromEvent }}
    >
      {children}
    </EventsContext.Provider>
  );
};
