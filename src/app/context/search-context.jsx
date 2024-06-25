"use client"
import React, { createContext, useState } from "react";

export const SearchContext = createContext()

export const SearchProvider = ({children}) => {
 const [searchItem, setSearchItem] = useState('')
 const [page, setPage] = useState(1)

 const resetSearch = () => {
    setSearchItem("");
    setPage(1);
  };
 return(
 <SearchContext.Provider value={{searchItem, setSearchItem, page, setPage, resetSearch}}>
    {children}
 </SearchContext.Provider>
 )
}