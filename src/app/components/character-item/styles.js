import styled from "styled-components"

export const CharacterName = styled.h2`
  color: var(--color-text);
  margin: 10px 0;
  text-decoration: none;
  cursor: pointer
`;


export const CharacterBox = styled.div`
  position: relative; 
  background-color: var(--color-background-secundary);
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  &::after {
    content: 'show details';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.5rem;
    opacity: 0; 
    transition: opacity 0.3s;
  }

  &:hover::after {
    opacity: 1; 
  }
`;

export const CharacterImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 2px solid #bb86fc;
`;



