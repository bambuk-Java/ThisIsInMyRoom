import React from "react";
import "./globals.css";
import Hero from "./components/hero";
import Meet_the_artist from "./components/meet_the_artist";
import Make_your_own_art from "./components/make_your_own_art";
import We_know_what_you_think from "./components/we_know_what_you_think";
import Footer from "./components/footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero/>
      <Meet_the_artist/>
      <Make_your_own_art/>  
      <We_know_what_you_think />
      <Footer />
    </main>
  );
}
