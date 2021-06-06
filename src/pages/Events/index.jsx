import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "../../components/Button";
import { EventsContext } from "../../providers/Events";
import { Content } from "../Beverages/styles";
import { ButtonContainer, Container } from "./style";

const Events = () => {
  const history = useHistory();

  const params = useParams();
  const event = params.event;

  const { events, allEvents, removeBeverageFromEvent } =
    useContext(EventsContext);

  const [beverages, setBeverages] = useState([]);

  useEffect(() => {
    if (event) {
      setBeverages(events[event]);
    }
  }, [event]);

  const othersEvents = allEvents.filter((item) => item !== event);

  const handleNavigation = (path) => {
    return history.push(path);
  };

  if (event === undefined) {
    return (
      <Container>
        <h1>Eventos</h1>
        <div>
          <p>
            Selecione uns dos eventos para verificar as bebidas adicionadas.
          </p>
        </div>

        <ButtonContainer>
          {allEvents.map((event, index) => {
            return (
              <Button
                key={index}
                onClick={() => {
                  handleNavigation(`/events/${event}`);
                }}
              >
                {event}
              </Button>
            );
          })}
        </ButtonContainer>
      </Container>
    );
  } else {
    return (
      <Container>
        <h1>{event}</h1>
        <ButtonContainer>
          {othersEvents.map((event, index) => {
            return (
              <Button
                key={index}
                onClick={() => {
                  handleNavigation(`/events/${event}`);
                }}
              >
                {event}
              </Button>
            );
          })}
        </ButtonContainer>
        <Content></Content>
      </Container>
    );
  }
};

export default Events;
