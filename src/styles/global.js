import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    border: 0;
  }
  :root{
    --primaryColor: ${(props) => props.theme.primaryColor};
    --secondaryColor: ${(props) => props.theme.secondaryColor};
    --thirdColor: ${(props) => props.theme.thirdColor};
    --fourthColor: ${(props) => props.theme.fourthColor};
    --fifthColor: ${(props) => props.theme.fifthColor};
  }
  body{
    color: var(--secondaryColor);
    background-color: var(--primaryColor);
    font-family: 'Heebo', sans-serif;
  }
  body, input, button {
    font-family: 'Heebo', sans-serif;
    font-size: 1rem;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    color: var(--fourthColor);
  }
  button{
    cursor: pointer;
    color: var(--fifthColor);
  }
  a{
    text-decoration: none;
  }
`;
