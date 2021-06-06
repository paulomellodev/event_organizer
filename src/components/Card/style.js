import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 10px;
  border: 2px solid var(--fourthColor);
  box-shadow: 2px 5px 4px 2px var(--secondaryColor);
  margin: 10px 0;
  flex-grow: 0;
  border-radius: 5px;
  transition: all 0.5s;
  @media (min-width: 700px) {
    width: 30%;
    :hover {
      width: 40%;
      flex-grow: 1;
    }
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
  }
  div.more_info {
    display: flex;
    flex-direction: column;
    p {
      font-weight: 700;
      color: var(--fourthColor);
      span {
        font-weight: 400;
        color: var(--secondaryColor);
      }
    }
  }

  div.addToEvent {
    display: none;

    h4 {
      margin-top: 15px;
      text-align: center;
    }
    p {
      font-weight: 700;
      color: var(--fourthColor);
      span {
        font-weight: 400;
        color: var(--secondaryColor);
      }
    }
    transition: all 0.5;
  }
  :hover > .addToEvent {
    display: flex;
    flex-direction: column;
  }
`;
