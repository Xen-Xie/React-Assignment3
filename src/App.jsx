// src/App.jsx
import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import HomePage from "./Pages/HomePage";
import BellaItalia from './Pages/BellaItalia';
import AllRestaurents from './Pages/AllRestaurents';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="/home/allrestaurent" element={<AllRestaurents />} />
        <Route path='home/bellaitalia' element={<BellaItalia/>} />
        {/* Add more routes here */}
      </Route>
    </Routes>
  );
}

export default App;
