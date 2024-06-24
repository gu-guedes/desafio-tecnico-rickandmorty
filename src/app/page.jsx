"use client";
import { useState, useEffect, useContext } from "react";
import { CharacterList } from "./components/character-list";
import styled, { createGlobalStyle } from "styled-components";
import { getCharacters } from "./api/route";
import { SearchContext } from "./context/search-context";

export default function HomePage() {
  const { searchItem } = useContext(SearchContext)
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [info, setInfo] = useState({})
  const [noCharactersFound, setNoCharactersFound] = useState(false)
  console.log('queroooo', noCharactersFound)


  useEffect(() => {
    const loadCharacters = async () => {
      try {
        setNoCharactersFound(false)
        setLoading(true)
        const { results, info } = await getCharacters(page, searchItem)
        setCharacters(results)
        setInfo(info)
      } catch (error) {
        setNoCharactersFound(true)
        console.error('Error getting characters:', error)
      } finally {
        setLoading(false)
      }
    };

    loadCharacters();
  }, [page, searchItem]);

  const nextPage = () => {
    if (info.next) {
      setPage(prevPage => prevPage + 1)
    }

  };

  const prevPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1))
  };

  if (loading) {
    return <LoadingMessage>Loading...</LoadingMessage>
  }

  return (
    <Main>
      <GlobalStyle />
      <Title>Characters</Title>
      {noCharactersFound ? (
        <NotFoundMessage>No characters found with that name. Please use a different search term.</NotFoundMessage>
      ) : (<>
        <CharacterList characters={characters} />
        <Pagination>
          <Button onClick={prevPage} disabled={page === 1}>Previous</Button>
          <PageIndicator>Page {page}</PageIndicator>
          <Button onClick={nextPage} disabled={!info.next}>Next</Button>
        </Pagination>
        </>
      )}
    </Main>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #2c2c2c;
    font-family: 'Roboto', sans-serif;
  }
`;

const Main = styled.main`
  margin: 0 auto;
  padding: 20px 160px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin: 20px 0;
  color: #bb86fc;
`;

const LoadingMessage = styled.p`
  font-size: 1.5em;
  color: #bb86fc;
`;
const NotFoundMessage = styled.p`
  font-size: 1.5em;
  color: #ff5722; 
`;

const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: #bb86fc;
  color: #121212;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3700b3;
  }

  &:disabled {
    background-color: #6200ea;
    cursor: not-allowed;
  }
`;

const PageIndicator = styled.span`
  font-size: 1.2em;
  color: #bb86fc;
`;
