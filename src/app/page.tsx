"use client"

import { useState } from "react";
import AboutMe from "./components/aboutMe";
import Hero from "./components/hero";

export default function Home() {
  const [isAboutMeOpen, setIsAboutMeOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const handleBackButtonClick = () => {
    // Set isClosing to true to trigger the slide-up animation
    setIsClosing(true);

    // Delay setting isAboutMeOpen to false to wait for the animation to complete
    setTimeout(() => {
      setIsAboutMeOpen(false); // Hide the component after the animation
      setIsClosing(false); // Reset the closing state
    }, 1000); // Adjust this duration to match your animation duration
  };

  return (
    <div>
      <main>
        <Hero setIsAboutMeOpen={setIsAboutMeOpen} />
        {isAboutMeOpen && (
          <AboutMe
            handleBackButtonClick={handleBackButtonClick}
            isClosing={isClosing}
            onAnimationEnd={() => { }}
          />
        )}
      </main>
    </div>
  );
}
