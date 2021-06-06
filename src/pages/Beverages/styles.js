import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 95%;
  max-width: 700px;
  margin: auto;
  h1 {
    font-size: 2rem;
    padding: 20px;
    text-align: center;
  }

  @media (min-width: 700px) {
    max-width: 1100px;
    h1 {
      font-size: 3.5rem;
    }
  }
`;

export const Content = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  a {
    color: var(--fourthColor);
  }
  @media (min-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: stretch;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  padding: 30px;
  > span {
    transform: translateY(6px);
  }
`;
