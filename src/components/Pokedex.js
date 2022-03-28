import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../styles/Pokedex.css";
import pokeball from "../images/pngwing.com.png";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

const Pokedex = () => {
  const navigate = useNavigate();
  const userName = useSelector((state) => state.userName);

  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonTypes, setPokemonTypes] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126")
      .then((res) => setPokemons(res.data.results));

    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((res) => setPokemonTypes(res.data.results));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    navigate(`/pokedex/${pokemonName}`);
  };

  const filteredPokemon = (index) => {
    axios
      .get(`https://pokeapi.co/api/v2/type/${String(+index + 1)}/`)
      .then((res) => setPokemons(res.data.pokemon));
  };

  return (
    <div className="Pokedex">
      <img
        className="pokedex-banner"
        src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1649030400&Signature=fCIz2ZeUoOwcLoGA9hStJyM7yJlGojwkpTp26S5UXyP10yG4NJeEpco5IDJ8fmnmst5YkUYr7giQQExHVH927cqdoAJe-kPEgtGFLIBqDDGlgeGtiVEeQzqcGSlfNk~Y3sxK12OypxunXCabBSiWkRRlk6z8nPWeUnaYxD9yf3y5qT4zKtLiXJdatifHK0poj2feMVRO36z1o2zOeje7PEMBwV5unNuyiK3-j-CmSqTwqU~NJI2MqiBkNtVICefVk7BYnH7fPGEpjo4~4k3vr7sTJaQnR~ET0RBEGi9EQh5WpTC~LR-QjGsdOTPGDIHze3YbaXW7VUJF6BLs10RsrQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        alt="pokedex"
      />

      <div className="top">
        <a href="/">
          {" "}
          <img src={pokeball} alt="pokeball" />{" "}
        </a>
        <div className="rectangle145"></div>
        <div className="rectangle146"></div>
      </div>

      <p className="welcome-message">
        {" "}
        <span>Welcome {userName},</span> here you can find your favorite pokemon
      </p>

      <div className="inputs-pokemons">
        <form className="search-form" onSubmit={submit}>
          <input
            className="input-search"
            placeholder="Search for a pokemon"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
            type="text"
          />
          <button className="search-button">Search</button>
        </form>

        <select
          id="type"
          onChange={(e) => filteredPokemon(e.target.value)}
          className="pokemons-select"
        >
          {pokemonTypes?.map((pokemonType, index) => (
            <option value={index} key={pokemonType.name}>
              {pokemonType.name}
            </option>
          ))}
        </select>
      </div>

      {<Pagination pokemons={pokemons} />}
    </div>
  );
};

export default Pokedex;