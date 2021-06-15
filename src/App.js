import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import { Light, Dark } from "./styles/themes";
import Header from "./components/Header";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <Header light={lightMode} handleTheme={handleTheme} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
