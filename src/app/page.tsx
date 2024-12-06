"use client"

import AboutMe from "./components/aboutMe";
import Hero from "./components/hero";


export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <AboutMe />
      </main>
    </div>
  );
}
