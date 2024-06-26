import React from 'react'
import Link from 'next/link';
import { CharacterBox, CharacterImage, CharacterName} from './styles';

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



