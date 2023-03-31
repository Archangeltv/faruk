import { useContext } from "react";
import { Appcontext } from "../App";

function Links() {
  const [home, setHome] = useContext(Appcontext);

  return (
    <div className="w-full bg-[#171F26]">
      <button>Portfolio</button>
      <button>Skills</button>
    </div>
  );
}

export default Links;
