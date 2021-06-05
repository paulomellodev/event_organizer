import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import { ButtonContainer, Container } from "./style";

const Home = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <h1>Organizador de Eventos</h1>
      <div>
        <p>
          Abra a carta de bebidas e selecione o evento que receberá a bebida.
        </p>
      </div>

      <ButtonContainer>
        <Button
          onClick={() => {
            handleNavigation("/beverages");
          }}
        >
          Bebidas
        </Button>
        <Button
          onClick={() => {
            handleNavigation("/events");
          }}
        >
          Eventos
        </Button>
      </ButtonContainer>
      <a href="https://kenzie.com.br/" target="_blank" rel="noreferrer">
        Kenzie Academy
      </a>
    </Container>
  );
};

export default Home;
