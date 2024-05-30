import React from "react";
import { Context } from "../store/appContext";
import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import './card.css'

const PlanetsDetails = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();
  console.log("params", params);

  useEffect(() => {
    actions.getPlanetData(params.uid);
  }, []);

  return (
    <div className='container-fluid'>
      <div>
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`}
          alt={store.planet?.name}
        />
      </div>
      <div>
        <h1>name : {store.planet?.terrain}</h1>
        <p>climate : {store.planet?.climate}</p>
        <p>population : {store.planet?.population}</p>
        <p>rotation_period : {store.planet?.rotation_period}</p>
        <p>orbital_period : {store.planet?.orbital_period}</p>
        <p>diameter : {store.planet?.diameter}</p>

      </div>

      <button className="btn btn-dark " onClick={() => navigate("/")}>
        take me back
      </button>
    </div>
  );
};

export default PlanetsDetails;
