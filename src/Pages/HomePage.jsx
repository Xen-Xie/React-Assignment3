import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import HeroCard from '../ReuseComponents/HeroCard';
import IconArea from '../Components/IconArea';
import TrendArea from '../Components/TrendArea';
import FeedBackArea from '../Components/FeedBackArea';
import RecentCards from '../Components/RecentCards';
import Footer from '../Components/Footer';

function HomePage() {
  const [focused, setFocused] = useState(false);

  // Disable scroll when focused
  useEffect(() => {
    if (focused) {
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = 'auto'; // Enable scroll
    }

    // Cleanup when component unmounts or focused changes
    return () => {
      document.body.style.overflow = 'auto'; // Ensure scrolling is enabled if the component unmounts
    };
  }, [focused]);

  return (
    <div className="relative min-h-screen">
      {/* All content */}
      <div className="relative z-30">
        <NavBar focused={focused} setFocused={setFocused} />
        
        {/* Faded Overlay - Only for content below NavBar */}
        {focused && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40 top-[60px]" // Adjust `top` value for NavBar height
            onClick={() => setFocused(false)}
          />
        )}

        {/* All the rest of the content */}
        <div className="relative z-30">
          <IconArea />
          <HeroCard />
          <TrendArea />
          <FeedBackArea />
          <RecentCards />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
