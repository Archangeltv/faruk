import { PortfolioData } from "../datas/Portfoliodata";
import { FiExternalLink } from "react-icons/fi";

function Portfolio() {
  return (
    <div className="mt-8 w-full">
      <div className="grid md:grid-cols-2 max-w-screen-md gap-10 w-full items-center justify-center">
        {PortfolioData.map((data) => {
          return <Each data={data} key={data.id} />;
        })}
      </div>
    </div>
  );
}

function Each({ data }) {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-2">
      <img
        src={data.image}
        className=" aspect-video w-auto rounded object-cover "
        alt={data.title}
      />
      {/* <p className="text-[#A3ABB2] ">{data.title}</p> */}
      <a href={data.link} className=" mt-1 ">
        <button className="text-[#A3ABB2] flex items-center justify-center gap-2 ">
          View on Behance <FiExternalLink />
        </button>
      </a>
    </div>
  );
}

export default Portfolio;
