import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from './Components/NavBar'
import IconArea from './Components/IconArea'
import HeroCard from './ReuseComponents/HeroCard'
import TrendArea from './Components/TrendArea';
import FeedBackArea from './Components/FeedBackArea';
import RecentCards from './Components/RecentCards';
import Footer from './Components/Footer';

function App() {


  return (
    <>
      <NavBar />
      <IconArea />
      <HeroCard />
      <TrendArea />
      <FeedBackArea />
      <RecentCards />
      <Footer />
    </>
  )
}

export default App
