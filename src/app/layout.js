import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
