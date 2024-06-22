"use client"
import { useState, useEffect } from "react";
import { CharacterList } from "./components/character-list";
import { styled } from "styled-components";
import { getCharacters } from "./api/route";

export default function HomePage() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); 

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        setLoading(true); 
        const data = await getCharacters(page); 
        setCharacters(data);
      } catch (error) {
        console.error('Error getting characters:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, [page]); 

  const nextPage = () => {
    setPage(prevPage => prevPage + 1); 
  };

  const prevPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1)); 
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <Title>Characters</Title>
      <CharacterList characters={characters}></CharacterList>
      <Pagination>
        <button onClick={prevPage} disabled={page === 1}>Previous</button>
        <span>Page {page}</span>
        <button onClick={nextPage}>Next</button>
      </Pagination>
    </main>
  );
}

const Title = styled.h1`
  margin-left: 160px;
`;

const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin: 0 10px;
    padding: 5px 10px;
    cursor: pointer;
  }
`;
