import React from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


const PlanetDetails = () => {
  const navigate = useNavigate();
  const { store } = useContext(Context);
  const params = useParams();
  const { id } = params;
  const getPlanet = store.swapiPlanets.find(
    (planet) => planet.result.uid == id
  );
  return (
    <div className="h-100">
      <div className="container text-center">
        <div className="text-center fs-4 d-flex justify-content-between border-bottom border-4 border-danger">
          <img src="https://cnnespanol.cnn.com/wp-content/uploads/2019/08/190823094900-03-pluto-not-a-planet-super-tease.jpg?quality=100&strip=info" className="Card" alt="..."></img>
          <span className="w-50">
            <h2>{getPlanet?.result.properties.name}</h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              assumenda suscipit modi dolor! Ea quasi ipsa ab et, nulla deserunt
              nihil dolorem adipisci soluta quaerat, asperiores veniam quia,
              neque ullam ratione. Corrupti, ratione? Minus nobis ad natus
              asperiores repudiandae voluptatibus.
            </p>
          </span>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <div className="text-center Green">
            <h5>NAME</h5>
            <p>{getPlanet?.result.properties.name}</p>
          </div>
          <div className="text-center Green">
            <h5>CLIMATE</h5>
            <p>{getPlanet?.result.properties.climate}</p>
          </div>
          <div className="text-center Green">
            <h5>GRAVITY</h5>
            <p>{getPlanet?.result.properties.gravity}</p>
          </div>
          <div className="text-center Green">
            <h5>POPULATION</h5>
            <p>{getPlanet?.result.properties.population}</p>
          </div>
          <div className="text-center Green">
            <h5>TERRAIN</h5>
            <p>{getPlanet?.result.properties.terrain}</p>
          </div>
          <div className="text-center Green">
            <h5>ROTAION PERIOD</h5>
            <p>{getPlanet?.result.properties.rotation_period}</p>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-outline-danger fs-3"
          onClick={() => {
            navigate("/");
          }}
        >
          Go back!
        </button>
      </div>
    </div>
  );
};

export default PlanetDetails;