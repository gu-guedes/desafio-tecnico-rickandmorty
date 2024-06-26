"use client";
import { TagHeader, Title } from "./styles";
import { SearchInput } from "../search-input/search-input";
import React, { useContext} from "react";
import { SearchContext } from "../../context/search-context";
import Link from "next/link";

export function Header() {
    const { setSearchItem, resetSearch, searchItem } = useContext(SearchContext)

    const handleTitleClick = () => {
        resetSearch(); 
      };

  return (
    <TagHeader>
        <Link href={"/"}>
      <Title onClick={handleTitleClick}>Rick and Morty</Title>
      </Link>
      <SearchInput setSearchItem={setSearchItem} searchItem={searchItem}/>
    </TagHeader>
  );
}

