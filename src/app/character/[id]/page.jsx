"use client";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getCharacterById } from '../../api/route';
import Link from 'next/link';

export default function CharacterDetailPage({ params }) {
  const { id } = params
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      const loadCharacter = async () => {
        try {
          const data = await getCharacterById(id)
          setCharacter(data)
        } catch (error) {
          console.error('Error getting character:', error)
        } finally {
          setLoading(false)
        }
      };

      loadCharacter();
    }
  }, [id]);

  if (loading) {
    return <LoadingMessage>Loading...</LoadingMessage>
  }

  if (!character) {
    return <NotFoundMessage>Character not found</NotFoundMessage>
  }

  return (
    <Container>
      <CharacterCard>
        <CharacterImage src={character.image} alt={character.name} />
        <CharacterDetails>
          <CharacterName>{character.name}</CharacterName>
          <CharacterInfo>Status: {character.status}</CharacterInfo>
          <CharacterInfo>Species: {character.species}</CharacterInfo>ef
          <CharacterInfo>Gender: {character.gender}</CharacterInfo>
          <CharacterInfo>Origin: {character.origin.name}</CharacterInfo>
        </CharacterDetails>
        <Link href="/" passHref>
          <BackButton>Back to Characters</BackButton>
        </Link>
      </CharacterCard>
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: #e0e0e0;
  font-family: 'Roboto', sans-serif;
  background-color: #121212;
`;

const CharacterCard = styled.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  padding: 20px;
  max-width: 500px;
  text-align: center;
`;

const CharacterImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  border-bottom: 2px solid #bb86fc;
`;

const CharacterDetails = styled.div`
  margin-top: 20px;
`;

const CharacterName = styled.h1`
  color: #bb86fc;
  margin: 10px 0;
`;

const CharacterInfo = styled.p`
  color: #e0e0e0;
  margin: 5px 0;
`;

const LoadingMessage = styled.p`
  font-size: 1.5em;
  color: #bb86fc;
`;

const NotFoundMessage = styled.p`
  font-size: 1.5em;
  color: #bb86fc;
`;

const BackButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #bb86fc;
  color: #121212;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s;
  text-decoration: none;

  &:hover {
    background-color: #3700b3;
  }
`;
