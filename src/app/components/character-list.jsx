import styled from 'styled-components';
import { CharacterItem } from './character-item';

export default function CharacterList({ characters }) {
  return (
    <Grid>
      {characters.map(character => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 20px;
`;
