import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from './Components/NavBar'
import IconArea from './Components/IconArea'
import HeroCard from './ReuseComponents/HeroCard'
import TrendArea from './Components/TrendArea';

function App() {


  return (
    <>
      <NavBar />
      <IconArea />
      <HeroCard />
      <TrendArea />
    </>
  )
}

export default App
