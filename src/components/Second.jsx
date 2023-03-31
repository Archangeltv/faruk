const datas = [
  {
    id: 1,
    number: "7",
    text: "Years of work experience",
  },
  {
    id: 2,
    number: "50+",
    text: "Completed projects",
  },
  {
    id: 3,
    number: "20+",
    text: "Satisfied customers",
  },
];

const Data = (props) => {
  return (
    <div className="text-[#A3ABB2] md:text-xl">
      <p>{props.number}</p>
      <p>{props.text}</p>
    </div>
  );
};

export const Second = () => {
  return (
    <div className="grid grid-cols-3 items-center justify-center py-10 text-center">
      {datas.map((data) => {
        return <Data key={data.id} number={data.number} text={data.text} />;
      })}
    </div>
  );
};
