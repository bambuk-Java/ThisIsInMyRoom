import React from "react";
import "./globals.css";
import Hero from "./components/hero";
import Meet_the_artist from "./components/meet_the_artist";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero/>
      <Meet_the_artist/>
    </main>
  );
}
