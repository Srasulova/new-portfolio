"use client"

import { useState } from "react";
import AboutMe from "./components/aboutMe";
import Hero from "./components/hero";
import MyTechStack from "./components/myTechStack";

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState<boolean>(false);


  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActiveModal(null);
      setIsClosing(false);
    }, 1000);
  };


  return (
    <div>
      <main>
        <Hero setActiveModal={setActiveModal} />
        {activeModal === "aboutMe" && (
          <AboutMe handleCloseModal={handleCloseModal} isClosing={isClosing} onAnimationEnd={() => { }} />
        )}
        {activeModal === "myTechStack" && (
          <MyTechStack handleCloseModal={handleCloseModal} isClosing={isClosing} onAnimationEnd={() => { }} />
        )}

      </main>
    </div>
  );
}
