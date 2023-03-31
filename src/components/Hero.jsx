import musa from "../assets/musa.png";
import { BsGithub, BsTwitter, BsWhatsapp } from "react-icons/bs";

function Hero() {
  return (
    <section className="w-full mt-[80px] px-5">
      <div className="flex flex-col md:flex-row text-center w-full items-center justify-center gap-5">
        <div className=" border-[4px] border-[#FFE071] bg-[#FFE071] w-fit rounded-full ">
          <div className=" bg-[#FFE071] border-[8px] border-[#0c151d] w-fit rounded-full ">
            <img src={musa} width="191px" className="" />
          </div>
        </div>
        <div className="h-auto flex gap-4 flex-col items-center md:items-start justify-center ">
          <h1 className=" text-[#F1F2F4] text-5xl font-medium ">Musa Faruk</h1>
          <p className=" text-[#A3ABB2] text-2xl ">Ui/Ux Designer</p>
          <div className="flex text-[#A3ABB2] gap-8 text-2xl">
            <BsGithub />
            <BsTwitter />
            <BsWhatsapp />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
