import { React } from "react";
//import { useSelector } from "react-redux";
import data from "../tempData/mockData.json";

export const CardContainer = ({ input }) => {
  const filteredProjects = data.filter((el) => {
    if (input === "") {
      return el;
    } else {
      return (
        el.company.name.toLowerCase().includes(input) ||
        el.brief.toLowerCase().includes(input)
      );
    }
  });
  return (
    <div>
      <div className="cardContainer">
        {filteredProjects.map((i) => (
          <div className="card">
            <p>{i.company.name}</p>
            <p>
              {i.location.city}, {i.location.country}
            </p>
            <p>{i.brief}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
