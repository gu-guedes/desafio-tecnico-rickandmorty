"use client";
import { styled } from "styled-components";
import { SearchInput } from "./search-input/search-input";
import { useContext } from "react";
import { SearchContext } from "../context/search-context";

export function Header() {
    const { setSearchItem } = useContext(SearchContext)
  return (
    <TagHeader>
      <Title>Rick and Morty</Title>
      <SearchInput setSearchItem={setSearchItem} />
    </TagHeader>
  );
}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;
  background-color: #1e1e1e;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid #bb86fc;
`;

const Title = styled.h1`
  color: #bb86fc;
  font-size: 2em;
`;
