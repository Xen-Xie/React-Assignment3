import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from './Components/NavBar'
import IconArea from './Components/IconArea'
import HeroCard from './ReuseComponents/HeroCard'
import TrendArea from './Components/TrendArea';
import FeedBackArea from './Components/FeedBackArea';

function App() {


  return (
    <>
      <NavBar />
      <IconArea />
      <HeroCard />
      <TrendArea />
      <FeedBackArea />
    </>
  )
}

export default App
