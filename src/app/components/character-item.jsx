import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';


export function CharacterItem({ character }) {
  return (
    <Link href={`/character/${character.id}`} passHref>
      <CharacterBox>
        <CharacterImage src={character.image} alt={character.name} />
        <CharacterName>
          {character.name}
          </CharacterName>
      </CharacterBox>
    </Link>
  );
};


const CharacterName = styled.h2`
  color: #bb86fc;
  margin: 10px 0;
  text-decoration: none;
  cursor: pointer
`;


const CharacterBox = styled.div`
  position: relative; /* Necessário para posicionamento do pseudo-elemento */
  background-color: #2c2c2c;
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
    background-color: rgba(0, 0, 0, 0.5); /* Fundo escurecido com opacidade */
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.5rem;
    opacity: 0; /* Começa invisível */
    transition: opacity 0.3s;
  }

  &:hover::after {
    opacity: 1; /* Torna visível ao passar o mouse */
  }
`;

const CharacterImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 2px solid #bb86fc;
`;



