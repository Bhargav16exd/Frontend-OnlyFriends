import React, { useState, useEffect } from 'react';
import bgDesktop from '../assets/Frame 5.png';
import bgMobile from '../assets/ab.png';


function LandingPage() {
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 768px)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <div className="h-fit w-screen flex justify-center items-center">
        <img src={isMobile ? bgMobile : bgDesktop} alt="" />
      </div>
    </>
  );
}

export default LandingPage;
