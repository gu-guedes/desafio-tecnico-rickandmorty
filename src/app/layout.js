"use client"
import './globals.css'
import React from "react";
import { Header } from "./components/header/header"
import { SearchProvider } from "./context/search-context";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <SearchProvider>
        <Header/>
        {children}
        </SearchProvider>
      </body>
    </html>
  );
}
