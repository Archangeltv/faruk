import { useState } from "react";
import Hero from "./components/Hero";
import { Second } from "./components/Second";
import Button from "./components/Buttons";
import Links from "./components/Links";
import { createContext } from "react";
export const Appcontext = createContext();

function App() {
  const [home, useHome] = useState();

  return (
    <Appcontext.Provider value={(home, useHome)}>
      <div className="flex items-center px-8 justify-center">
        <div className="max-w-screen-md w-full">
          <Hero />
          <Second />
          <Button />
          <Links />
        </div>
      </div>
    </Appcontext.Provider>
  );
}

export default App;
