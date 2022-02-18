import { React } from "react";
import data from "../tempData/mockData.json";

export function CardContainer({ input }) {
  const filteredProjects = data.filter((el) => {
    if (input === "") {
      return el;
    } else {
      return el.location.city.toLowerCase().includes(input);
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
}
