import { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "../../components/Button";
import { EventsContext } from "../../providers/Events";
import { ButtonContainer, Card, Container, Content } from "./style";

const Events = () => {
  const history = useHistory();

  const params = useParams();
  const event = params.event;

  const { events, allEvents, removeBeverageFromEvent } =
    useContext(EventsContext);

  // useEffect(() => {
  //   if (event) {
  //     setBeverages(events[event]);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [events]);
  console.log(events[event]);

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
        <Content>
          {events[event].length === 0 ? (
            <>
              <h2>Nenhuma bebida adicionada neste evento.</h2>
              <p>
                Vá a página de bebidas, <a href="/beverages">clicando aqui</a>
              </p>
            </>
          ) : (
            <>
              {events[event].map((beverage, index) => {
                return (
                  <Card key={index}>
                    <div className="main_Info">
                      <img src={beverage.image_url} alt={beverage.name} />
                      <span>
                        <h2>{beverage.name}</h2>
                        <span>{beverage.tagline}</span>
                      </span>
                    </div>

                    <div className="removeFromEvent">
                      <Button
                        onClick={() =>
                          removeBeverageFromEvent(event, beverage.id)
                        }
                      >
                        Remover bebida
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </>
          )}
        </Content>
      </Container>
    );
  }
};

export default Events;
