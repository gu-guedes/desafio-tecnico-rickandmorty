import styled from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
  padding: 20px 160px;
  text-align: center;
  
`;

export const Title = styled.h1`
  font-size: 2.5em;
  margin: 20px 0;
  color: var(--color-text);
`;

export const LoadingMessage = styled.p`
  font-size: 1.5em;
  color: var(--color-text);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NotFoundMessage = styled.p`
  font-size: 1.5em;
  color: #ff5722; 
`;

export const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: var(--color-text);
  color: #121212;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-hover);
  }

  &:disabled {
    background-color: var(--color-disabled);
    cursor: not-allowed;
  }
`;
export const PageIndicator = styled.span`
  font-size: 1.2em;
  color: var(--color-text);
`;
