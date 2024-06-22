"use client"
import { styled } from "styled-components"
import { SearchInput } from "./search-input"


export function Header() {
    return (
        <TagHeader>
            <h1>Rick and Morty</h1>
            <SearchInput></SearchInput>
        </TagHeader>
    )
}

const TagHeader = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px 160px;
background-color: red;
`