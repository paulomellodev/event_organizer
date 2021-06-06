import { useState } from "react";
import { useContext } from "react";
import { EventsContext } from "../../providers/Events";
import { Container } from "./style";
import Button from "../../components/Button";

const Card = ({ beverage }) => {
  const { allEvents, addBeverageToEvent } = useContext(EventsContext);

  const [event, setEvent] = useState("");

  const { id, image_url, name, description, tagline, first_brewed, volume } =
    beverage;

  const handleChangeEvents = (e) => {
    setEvent(e.event);
  };

  return (
    <Container
      onMouseEnter={() => {
        handleChangeEvents("");
      }}
    >
      <div className="main_Info">
        <img src={image_url} alt={name} />
        <span>
          <h2>{name}</h2>
          <p>{tagline}</p>
        </span>
      </div>
      <hr />

      <div className="more_info">
        <p>
          Início da produção: <span>{first_brewed}</span>
        </p>
        <p>Descrição</p>
        <span>{description}</span>
        <p>
          Litros: <span> {volume.value} </span>
        </p>
      </div>

      <div className="addToEvent">
        <hr />
        <h4>Adicionar em qual evento</h4>
        {allEvents.map((event, index) => {
          return (
            <div key={index} onChange={() => handleChangeEvents({ event })}>
              <input
                type="radio"
                id={`${event}-${id}`}
                name="events"
                value={event}
              />
              <label htmlFor={`${event}-${id}`}> {event}</label>
            </div>
          );
        })}
        <Button onClick={() => addBeverageToEvent(event, beverage)}>
          Adicionar ao Evento
        </Button>
      </div>
    </Container>
  );
};
export default Card;
