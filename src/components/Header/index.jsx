import { IoBeerOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { GiPartyPopper } from "react-icons/gi";

import { Container } from "./style";
import {
  FormControlLabel,
  IconButton,
  Switch,
  Toolbar,
} from "@material-ui/core";
import { useHistory } from "react-router";

const Header = ({ light, handleTheme }) => {
  const history = useHistory();

  const handleHistory = (path) => {
    history.push(path);
  };

  return (
    <Container>
      <Toolbar>
        <IconButton color="inherit" onClick={() => handleHistory("/")}>
          <AiOutlineHome />
        </IconButton>
        <IconButton color="inherit" onClick={() => handleHistory("/beverages")}>
          <IoBeerOutline />
        </IconButton>
        <IconButton color="inherit" onClick={() => handleHistory("/events")}>
          <GiPartyPopper />
        </IconButton>
      </Toolbar>
      <FormControlLabel
        value="end"
        control={<Switch color="primary" size="small" onChange={handleTheme} />}
        label={light ? "Light" : "Dark"}
        labelPlacement="end"
      />
    </Container>
  );
};

export default Header;
