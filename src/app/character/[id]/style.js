import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: #e0e0e0;
  font-family: 'Roboto', sans-serif;
  background-color: var(--color-background);
`;

export const CharacterCard = styled.div`
  background-color: var(--color-background-secundary);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  padding: 20px;
  max-width: 500px;
  text-align: center;
`;

export const CharacterImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  border-bottom: 2px solid var(--color-text);
`;

export const CharacterDetails = styled.div`
  margin-top: 20px;
`;

export const CharacterName = styled.h1`
  color: var(--color-text);
  margin: 10px 0;
`;

export const CharacterInfo = styled.p`
  color: var(--color-text);
  margin: 5px 0;
`;

export const LoadingMessage = styled.p`
  font-size: 1.5em;
  color: var(--color-text);
`;

export const NotFoundMessage = styled.p`
  font-size: 1.5em;
  color: var(--color-text);
`;

export const BackButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #bb86fc;
  color: #121212;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s;
  text-decoration: none;

  &:hover {
    background-color: var(--color-hover);
  }
`;
