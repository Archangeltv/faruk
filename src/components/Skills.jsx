import SkillsData from "../datas/Skillsdata";

function Skills() {
  return (
    <div>
      <ul className="text-[#A3ABB2] text-center">
        {SkillsData.map((data) => {
          return (
            <li
              key={data.id}
              className="my-3
            "
            >
              {data.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Skills;
