import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import { ButtonContainer, Container } from "./style";

const NotFound = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <h1>Hique!</h1>
      <div>
        <p>
          Você não vai... <em>HIQUE!</em>... "encotra" nadica de nada aqui.{" "}
          <em>HIQUE!</em>
        </p>
        <p>
          Clique no botão aí embaixo e volte a escolher as brejas!
          <em>HIQUE!</em>
        </p>
        <span>ps: estou bem!</span>
      </div>
      <ButtonContainer>
        <Button
          onClick={() => {
            handleNavigation("/beverages");
          }}
        >
          Voltar para escolher bebidas
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default NotFound;
