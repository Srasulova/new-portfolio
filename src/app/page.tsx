"use client"

import { useState } from "react";
import AboutMe from "./components/aboutMe";
import Hero from "./components/hero";
import MyTechStack from "./components/myTechStack";
import Experience from "./components/experience";
import MyProjects from "./components/project";

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
      <main className="overflow-auto w-full h-full">
        <Hero setActiveModal={setActiveModal} />
        {activeModal === "aboutMe" && (
          <AboutMe handleCloseModal={handleCloseModal} isClosing={isClosing} onAnimationEnd={() => { }} />
        )}
        {activeModal === "myTechStack" && (
          <MyTechStack handleCloseModal={handleCloseModal} isClosing={isClosing} onAnimationEnd={() => { }} />
        )}

        {activeModal === "experience" && (
          <Experience handleCloseModal={handleCloseModal} isClosing={isClosing} onAnimationEnd={() => { }} />
        )}

        {activeModal === "projects" && (
          <MyProjects handleCloseModal={handleCloseModal} isClosing={isClosing} onAnimationEnd={() => { }} />
        )}


      </main>
    </div>
  );
}
