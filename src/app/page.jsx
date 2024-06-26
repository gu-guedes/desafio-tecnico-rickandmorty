"use client";
import React,{ useState, useEffect, useContext } from "react";
import CharacterList from "./components/character-list/character-list";
import { Main, Title, NotFoundMessage, LoadingMessage, Pagination, PageIndicator, Button} from "./styles-page";
import { getCharacters } from "./api/route";
import { SearchContext } from "./context/search-context";

export default function HomePage() {
  const { searchItem, page, setPage} = useContext(SearchContext)
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState({})
  const [noCharactersFound, setNoCharactersFound] = useState(false)

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
  const goToFirstPage = () => {
    setPage(1);
  };

  const goToLastPage = () => {
    setPage(info.pages);
  };

  if (loading) {
    return <LoadingMessage>Loading...</LoadingMessage>
  }

  return (
    <Main>
      <Title>Characters</Title>
      {noCharactersFound ? (
        <NotFoundMessage>No characters found with that name. Please use a different search term.</NotFoundMessage>
      ) : (<>
        <CharacterList characters={characters} />
        <Pagination>
        <Button onClick={goToFirstPage} disabled={page === 1}>
              1
            </Button>
            <Button onClick={prevPage} disabled={page === 1}>
            Previous
            </Button>
            <PageIndicator>{page}</PageIndicator>
            <Button onClick={nextPage} disabled={!info.next}>
              Next
            </Button>
            <Button onClick={goToLastPage} disabled={page === info.pages}>
              {info.pages}
            </Button>
        </Pagination>
        </>
      )}
    </Main>
  );
}

