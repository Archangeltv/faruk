import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import { Second } from "./components/Second";
import Button from "./components/Buttons";
import Links from "./components/Links";
import { createContext } from "react";
export const Appcontext = createContext();
import { Routes, Route } from "react-router-dom";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    window.location.pathname === "/skills" ? useHome(true) : useHome(false);
  }, []);

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
        <div className="max-w-screen-md w-full">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
          <Contact />
        </div>
      </div>
    </Appcontext.Provider>
  );
}

export default App;
