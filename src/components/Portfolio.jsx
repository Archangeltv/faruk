import { PortfolioData } from "../datas/Portfoliodata";

function Portfolio() {
  return (
    <div className="mt-8 w-full">
      <div className="grid md:grid-cols-2 gap-10 w-full items-center justify-center">
        {PortfolioData.map((data) => {
          return <Each data={data} key={data.id} />;
        })}
      </div>
    </div>
  );
}

function Each({ data }) {
  return (
    <div className="flex flex-col items-start justify-center gap-2">
      <img
        src={data.image}
        className=" aspect-video w-auto rounded object-cover "
        alt={data.title}
      />
      <p className="text-[#A3ABB2] ">{data.title}</p>
      <a href={data.link}>
        <button className="text-[#A3ABB2] ">View on Behance</button>
      </a>
    </div>
  );
}

export default Portfolio;
