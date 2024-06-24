import { Inter } from "next/font/google";

import "./globals.css";
import { Header } from "./components/header"
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
