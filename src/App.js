import { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyle from "./styles/global";

const App = () => {
  const [theme, setTheme] = useState("Light");

  const handleTheme = () => {
    if (theme === "Light") {
      setTheme("Dark");
    } else {
      setTheme("Light");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
