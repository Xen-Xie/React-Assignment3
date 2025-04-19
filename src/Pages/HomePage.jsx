// src/Pages/HomePage.jsx
import React from 'react';
import HeroCard from '../ReuseComponents/HeroCard';
import IconArea from '../Components/IconArea';
import TrendArea from '../Components/TrendArea';
import FeedBackArea from '../Components/FeedBackArea';
import RecentCards from '../Components/RecentCards';
import Navigates from '../Navigate';

function HomePage() {
  return (
    <div className="relative z-30">
      <Navigates />
      <IconArea />
      <HeroCard />
      <TrendArea />
      <FeedBackArea />
      <RecentCards />
    </div>
  );
}

export default HomePage;
