import { useState } from "react";
import Hero from "./components/Hero";
import { Second } from "./components/Second";
import Button from "./components/Buttons";
import Links from "./components/Links";
import { createContext } from "react";
export const Appcontext = createContext();
import { Routes, Route } from "react-router-dom";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

function App() {
  const [home, useHome] = useState(false);

  return (
    <Appcontext.Provider value={{ home, useHome }}>
      <div className="flex items-center flex-col px-8 justify-center">
        <div className="max-w-screen-md w-full">
          <Hero />
          <Second />
          <Button />
          <Links />
        </div>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </Appcontext.Provider>
  );
}

export default App;
