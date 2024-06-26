"use client"
import React, { useState, useEffect } from 'react';
import { SearchContainer, StyledInput, SearchIcon } from './styles';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { handleChange, handleSubmit } from './utils/filter-name';

export function SearchInput({ setSearchItem, searchItem }) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(searchItem);
  }, [searchItem])
  
  return (
    <SearchContainer onSubmit={(e) => handleSubmit(e, inputValue, setSearchItem)}>
      <StyledInput
        type="text"
        placeholder="Search by name..."
        value={inputValue}
        onChange={(e) => handleChange(e, setInputValue)}
      />
      <SearchIcon icon={faSearch} />
    </SearchContainer>
  );
}

