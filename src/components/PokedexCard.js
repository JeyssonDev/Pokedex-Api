import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/PokedexCard.css";
import { getBackgroundByType } from "../helpers/getBackgroundByType";

const PokedexCard = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(pokemonUrl).then((res) => setPokemon(res.data));
  }, [pokemonUrl]);

  const { bgCpGrass, bgBgGrass } = getBackgroundByType(
    pokemon?.types?.[0]?.type.name
  );

  return (
    <Link className="card-pokemon-link" to={`/pokedex/${pokemon.id}`}>
      {/* <div className={`content-card ${bgCpGrass}`}> */}
        <li className={`card-pokemon ${bgCpGrass}`}>
          <div className={`div-image ${bgBgGrass}`}>
            <img
              className="pokemon-image"
              src={
                pokemon?.sprites?.other?.dream_world?.front_default
                  ? pokemon?.sprites?.other?.dream_world?.front_default
                  : pokemon?.sprites?.back_default
              }
              alt="pokemon"
            />
          </div>

          <p className="pokemon-name">{pokemon.name}</p>
          <div className="pokemon-type">
            {pokemon?.types?.map((type, idx) => {
              return (
                <div key={idx} className="pokemon-type-text">
                  {type?.type?.name}
                </div>
              );
            })}
          </div>

          <p className="text-type-cardpokemon">Type</p>
          <hr className="line-card-pokemon" />

          <div className="statspokemon">
            <div className="stats-pokemon-card-1">
              <div className="hp-stat">
                <p>
                  {" "}
                  <span>HP</span> {pokemon?.stats?.[0].base_stat}
                </p>
              </div>
              <div className="hp-stat">
                <p>
                  {" "}
                  <span>DEFENSE</span> {pokemon?.stats?.[2].base_stat}
                </p>
              </div>
            </div>
            <div className="stats-pokemon-card-2">
              <div className="hp-stat">
                <p>
                  {" "}
                  <span>ATTACK</span> {pokemon?.stats?.[1].base_stat}
                </p>
              </div>
              <div className="hp-stat">
                <p>
                  {" "}
                  <span>SPEED</span> {pokemon?.stats?.[5].base_stat}
                </p>
              </div>
            </div>
          </div>
        </li>
      {/* </div> */}
    </Link>
  );
};

export default PokedexCard;
