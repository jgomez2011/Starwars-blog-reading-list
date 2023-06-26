import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Characters = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <>
      <h1 className="ms-5 header">Characters</h1>
      <div className="container ms-5 mb-3 scroll">
        <div className="d-inline-flex">
          {store.swapiCharacters.map((character) => {
            return (
              <div
                className="card col-2 m-3 Card "
                key={character.result._id}
              >
                <div className="card">
                  <img src="https://img.freepik.com/iconos-gratis/usuario_318-552176.jpg?w=2000" className="card-img-top" alt="..."></img>
                  <div className="card-body">
                    <h5 className="card-title">
                      {character.result.properties.name}
                    </h5>
                    <p className="card-text">
                      Gender: {character.result.properties.gender}
                      <br />
                      Hair color: {character.result.properties.hair_color}
                      <br />
                      Eye color: {character.result.properties.eye_color}
                    </p>
                    <div className="d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={() =>
                          navigate(`/characterdetails/${character.result.uid}`)
                        }
                      >
                        Learn more!
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-warning"
                        onClick={() => {
                          actions.addFavorites(character);
                        }}
                      >
                        <i className="fas fa-heart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Characters;