"use client"
import React, { useState, useEffect } from 'react';

import { getCharacterById } from '../../api/route';

const CharacterDetailPage = ({params}) => {

  const { id } = params;
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const loadCharacter = async () => {
        try {
          const data = await getCharacterById(id);
          setCharacter(data);
        } catch (error) {
          console.error('Error geting character:', error);
        } finally {
          setLoading(false);
        }
      };

      loadCharacter();
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!character) {
    return <p>Character not found</p>;
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>{character.status}</p>
      <p>{character.species}</p>
      <p>{character.gender}</p>
      <p>{character.origin.name}</p>
    </div>
  );
};

export default CharacterDetailPage;
