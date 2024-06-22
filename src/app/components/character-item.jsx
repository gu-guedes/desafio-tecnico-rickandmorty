import { styled } from "styled-components"

export function CharacterItem({ character }) {
    return (
        <>
            <CharacterBox key={character.id}>
                <CharacterImage src={character.image} alt={character.name} />
                <CharacterName>{character.name}</CharacterName>
            </CharacterBox>
        </>
    )
}
const CharacterBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 250px; 
`;

const CharacterImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10px;
`;

const CharacterName = styled.span`
  margin-top: 10px;
  text-align: center;
`;
