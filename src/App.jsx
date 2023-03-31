import { useState } from "react";
import Hero from "./components/Hero";
import { Second } from "./components/Second";
import Button from "./components/Buttons";

function App() {
  return (
    <div className="flex items-center px-8 justify-center">
      <div className="max-w-screen-md w-full">
        <Hero />
        <Second />
        <Button />
      </div>
    </div>
  );
}

export default App;
