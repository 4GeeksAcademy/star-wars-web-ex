import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ name, uid }) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card">
      <div>
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
          alt={name}
        />
        <div className="name"><p>{name}</p></div>
      </div>
      <figure>
        <div className="button">
          <button className="btn btn-primary">
            <Link to={`/details/${uid}`}> More info</Link>
          </button>
          <button className="btn btn-warning" onClick={() => actions.addFav({ name: name, uid: uid })}>
            fav
          </button>
        </div>
      </figure>
    </div>
  );
};

export default Card;
