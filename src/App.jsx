import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './Pages/HomePage';
import AllRestaurents from './Pages/AllRestaurents';
import BellaItalHero from './Components/BellaItalHero';
import BellaDiscover from './Components/BellaDiscover';
import Information from './Components/Information';


function App() {


  return (
    <>
      <HomePage />
      <BellaItalHero />
      <BellaDiscover />
      <Information />
    </>
  )
}

export default App
