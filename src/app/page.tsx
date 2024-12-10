"use client"

import { useState } from "react";
import AboutMe from "./components/aboutMe";
import Hero from "./components/hero";


export default function Home() {
  const [isAboutMeOpen, setIsAboutMeOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const handleBackButtonClick = () => {
    setIsClosing(true);
    setIsAboutMeOpen(false);
    setIsClosing(false);

  };

  return (
    <div className="">
      <main className="">
        <Hero setIsAboutMeOpen={setIsAboutMeOpen} />
        {isAboutMeOpen && <AboutMe handleBackButtonClick={handleBackButtonClick} isClosing={isClosing} />}
      </main>
    </div>
  );
}
