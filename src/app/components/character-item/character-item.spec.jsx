import React from 'react';
import { render, screen } from '@testing-library/react';
import { CharacterItem } from './character-item';

describe('CharacterItem component', () => {
  test('should render character item with correct information', () => {
    const character = {
      id: 1,
      name: 'Rick Sanchez',
    };
    render(<CharacterItem character={character} />);

    const characterNameElement = screen.getByText(character.name);
    expect(characterNameElement).toBeInTheDocument();
  });

});
