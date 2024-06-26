import { Grid } from './styles';
import React from 'react';
import { CharacterItem } from '../character-item/character-item';

export default function CharacterList({ characters }) {
  return (
    <Grid>
      {characters.map(character => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </Grid>
  );
};

