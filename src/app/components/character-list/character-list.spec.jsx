// CharacterList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterList from './character-list'

describe('CharacterList component', () => {
  test('should render list of characters', () => {
    const characters = [
        { id: 1, name: 'Rick Sanchez' },
        { id: 2, name: 'Morty Smith' },
      { id: 3, name: 'Summer Smith'},
    ];

    render(<CharacterList characters={characters} />);

    characters.forEach(character => {
      const characterNameElement = screen.getByText(character.name);
      expect(characterNameElement).toBeInTheDocument();
    });
  });

 
});
