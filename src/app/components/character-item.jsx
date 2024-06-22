import { styled } from "styled-components";
import Link from 'next/link';

export function CharacterItem({ character }) {
    return (
        <CharacterBox key={character.id}>
            <Link href={`/character/${character.id}`} passHref>
                <LinkCharacter >
                    <CharacterImage src={character.image} alt={character.name} />
                    <CharacterName>{character.name}</CharacterName>
                </LinkCharacter>
            </Link>
        </CharacterBox>
    );
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

const LinkCharacter = styled.a`
  text-decoration: none;
  color: inherit;
`;
