import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import Card from "./Card.jsx";
import "./card.css";
import PlanetsCard from "./PlanetsCard.jsx";
import StarshipCard from "./StarshipCard.jsx";

const Main = ({ name, uid }) => {
  const { store, actions } = useContext(Context);
  const [search, setSearch] = useState("");
  return (
    <div className="mainBody">
      <div id="item" className="container-fluid cover">
        {store.people?.map((el, i) => (
          <Card key={i} name={el.name} uid={el.uid} />
        ))}
      </div>
      <div id="item1" className="container-fluid cover">
        {store.planets?.map((ele, io) => (
          <PlanetsCard key={io} name={ele.name} uid={ele.uid} />
        ))}

      </div>
      <div id="item2" className="container-fluid cover">
        {store.starships?.map((eli, ie) => (
          <StarshipCard key={ie} name={eli.name} uid={eli.uid} />
        ))}

      </div>
      
    </div>
  );
};

export default Main;
