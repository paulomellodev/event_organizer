import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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

export const Content = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  h2 {
    text-align: center;
  }
  a {
    color: var(--fourthColor);
  }
  @media (min-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
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

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 10px;
  border: 2px solid var(--fourthColor);
  margin: 10px 0;
  border-radius: 5px;
  @media (min-width: 700px) {
    width: 70%;
    flex-direction: row;
  }
  hr {
    border: 1px solid var(--thirdColor);
  }

  div.main_Info {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      width: 30%;
      height: 150px;
      object-fit: contain;
      margin: 10px;
    }
    p {
      font-weight: 700;
      color: var(--fourthColor);
      span {
        font-weight: 400;
        color: var(--secondaryColor);
      }
    }
  }

  div.removeFromEvent {
    display: flex;
    flex-direction: column;
  }
`;
