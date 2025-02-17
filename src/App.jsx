import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import CatFactPage from "./components/pages/CatFact";
import CatRandomImagePage from "./components/pages/CatRandomImage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/cat-fact" element={<CatFactPage />} />
          <Route path="/cat-images" element={<CatRandomImagePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
