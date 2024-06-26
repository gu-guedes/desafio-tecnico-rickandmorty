"use client";
import React, { useState, useEffect } from 'react';
import { Container, CharacterCard, CharacterImage, CharacterInfo, CharacterName, CharacterDetails, NotFoundMessage, LoadingMessage, BackButton } from './style';
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
          <CharacterInfo>Species: {character.species}</CharacterInfo>
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


