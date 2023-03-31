import { AiOutlineDownload } from "react-icons/ai";

function Button() {
  return (
    <div className="flex items-center w-full justify-between md:justify-around md:text-xl">
      <button className="flex h-[45px] md:h-[80px] bg-[#FFE071] rounded w-[150px] md:w-[290px] items-center justify-center gap-1 md:gap-3">
        Download CV <AiOutlineDownload />
      </button>
      <button className=" h-[45px] md:h-[80px] w-[150px] md:w-[290px] text-[#A3ABB2] bg-[#171F26]">
        Contact me
      </button>
    </div>
  );
}

export default Button;
