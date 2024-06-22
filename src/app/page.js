"use client"
import { CharacterList } from "./components/character-list";
import {styled} from "styled-components"
import { getCharacters } from "./services/api";
import { useState, useEffect } from "react";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const data = await getCharacters();
        setCharacters(data);
      } catch (error) {
        console.error('Error geting characters:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <Title>Characters</Title>
      <CharacterList characters={characters}></CharacterList>
    </main>
  );
}

const Title = styled.h1`
margin-left: 160px;
`
