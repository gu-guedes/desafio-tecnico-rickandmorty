"use client";

import styled from "styled-components";
import { CharacterItem } from "./character-item";

export function CharacterList({ characters }) {
  return (
    <>
      <CharacterListContainer>
        {characters.map(character => (
          <CharacterItem key={character.id} character={character}></CharacterItem>
        ))}
      </CharacterListContainer>
    </>
  );
}

const CharacterListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 160px;
  justify-content: space-between
`;

