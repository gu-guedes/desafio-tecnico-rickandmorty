import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { SearchInput } from './search-input';

describe('SearchInput component', () => {
  test('should render search input', () => {
    render(<SearchInput setSearchItem={() => {}} searchItem="" />);

    const inputElement = screen.getByPlaceholderText('Search by name...');
    expect(inputElement).toBeInTheDocument();
  });

  test('should update input value on change', () => {
    const setSearchItemMock = jest.fn();

    render(<SearchInput setSearchItem={setSearchItemMock} searchItem="" />);

    const inputElement = screen.getByPlaceholderText('Search by name...');
    fireEvent.change(inputElement, { target: { value: 'Rick' } });

    expect(inputElement.value).toBe('Rick');
  });

});
