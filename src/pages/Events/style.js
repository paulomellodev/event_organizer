import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  margin: auto;
  h1 {
    font-size: 2rem;
    margin: 20px;
    text-align: center;
  }
  div {
    width: 90%;
    text-align: center;
    margin: 30px 0;
    p {
      font-size: 1rem;
    }
  }
  a {
    color: var(--secondaryColor);
    cursor: pointer;
    font-weight: 700;
  }
  @media (min-width: 700px) {
    h1 {
      font-size: 3.5rem;
    }
    div {
      width: 90%;
      text-align: center;
      margin: 30px 0;
      p {
        font-size: 1.8rem;
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
    button {
      margin: 0 10px;
    }
  }
`;
