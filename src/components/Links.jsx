import { useContext } from "react";
import { Appcontext } from "../App";
import { Link } from "react-router-dom";

function Links() {
  const { home, useHome, toggle } = useContext(Appcontext);

  return (
    <div className="w-full bg-[#171F26] text-[#A3ABB2] flex items-center justify-center gap-10 px-5 py-2 mt-8 rounded">
      <button
        className={`flex h-[45px] md:h-[80px] ${
          home ? "bg-transparent" : "bg-[#0c151d]"
        } rounded w-full items-center justify-center gap-1 md:gap-3`}
        onClick={() => {
          useHome(false);
        }}
      >
        <Link className="w-full" to="/">
          Portfolio
        </Link>
      </button>
      <button
        className={`flex h-[45px] md:h-[80px] ${
          home ? "bg-[#0c151d]" : "bg-transparent"
        } rounded w-full items-center justify-center gap-1 md:gap-3`}
        onClick={() => {
          useHome(true);
        }}
      >
        <Link className="w-full" to="/skills">
          Skills
        </Link>
      </button>
    </div>
  );
}

export default Links;
