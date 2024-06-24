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


const CharacterBox = styled.div`
  background-color: #2c2c2c;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CharacterImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 2px solid #bb86fc;
`;

const CharacterName = styled.h2`
  color: #bb86fc;
  margin: 10px 0;
  text-decoration: none;
  cursor: pointer
`;


