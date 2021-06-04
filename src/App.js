import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import { Light, Dark } from "./styles/themes";

const App = () => {
  const [lightMode, setLightMode] = useState(true);
  const [theme, setTheme] = useState({ ...Light });

  const handleTheme = () => {
    if (lightMode) {
      setTheme({ ...Dark });
      setLightMode(false);
    } else {
      setTheme({ ...Light });
      setLightMode(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App-header">
        <button onClick={handleTheme}>Tema</button>
        Teste Bebida
      </div>
    </ThemeProvider>
  );
};

export default App;
