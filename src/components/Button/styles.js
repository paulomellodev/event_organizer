import styled from "styled-components";

export const Container = styled.button`
  background: var(--secondaryColor);
  color: var(--thirdColor);
  line-height: 3rem;
  border-radius: 10px;
  border: 2px solid var(--fourthColor);
  font-family: "Roboto Mono", monospace;
  width: 100%;
  margin-top: 1.5rem;
  font-size: 1.1rem;
  transition: 0.5s;
  font-weight: 700;

  :hover {
    background: var(--fifthColor);
    border: 2px solid var(--thirdColor);
  }
`;
