import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../styles/Pokedex.css";
import pokeball from "../images/pngwing.com.png";
import pokedeximg from "../images/image 11.png";
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
            <img className="pokedex-banner" src={pokedeximg} alt="pokedex" />

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
                <span>Welcome {userName},</span> here you can find your favorite
                pokemon
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
