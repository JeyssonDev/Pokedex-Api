import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/PokedexInfo.css";
import pokeball from "../images/pngwing.com.png";
import pokedeximg from "../images/image 11.png";
import ProgressBar from "./ProgressBar";

const PokedexInfo = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}/?offset=0&limit=1126`)
            .then((res) => setPokemon(res.data));
    }, [id]);

    return (
        <div className="pokedex-info">
            <img
                className="pokedex-banner-info"
                src={pokedeximg}
                alt="pokedex"
            />

            <div className="top-info">
                <a href="/">
                    {" "}
                    <img
                        className="pokeball-info"
                        src={pokeball}
                        alt="pokeball"
                    />{" "}
                </a>
                <div className="rectangle150"></div>
                <div className="rectangle151"></div>
            </div>

            <div className="pokemon-info-card">
                <img
                    className="pokemon-image-info"
                    src={
                        pokemon?.sprites?.other?.dream_world?.front_default
                            ? pokemon?.sprites?.other?.dream_world
                                  ?.front_default
                            : pokemon?.sprites?.back_default
                    }
                    alt="pokemon"
                />

                <p className="id-pokemon-info">#{pokemon.id}</p>

                <div className="info-pokemon-name-withhr">
                    <hr className="hr-info" />
                    <h1 className="info-pokemon-name">{pokemon.name}</h1>
                    <hr className="hr-info" />
                </div>

                <section className="pokemon-information-info">
                    <div className="weight-info">
                        <p className="weight-text">Width</p>
                        <p className="weight-data">{pokemon.weight}</p>
                    </div>
                    <div className="height-info">
                        <p className="height-text">Height</p>
                        <p className="height-data">{pokemon.height}</p>
                    </div>
                </section>

                <section className="pokemon-stats-1">
                    <div className="type-stats-info">
                        <p className="title-type-stats">Type</p>
                        <div className="pokemon-type-info">
                            {pokemon?.types?.map((type, idx) => {
                                return (
                                    <p key={idx} className="pokemon-info-text">
                                        {type?.type?.name}
                                    </p>
                                );
                            })}
                        </div>
                    </div>

                    <div className="skills-stats-info">
                        <p className="title-skills-stats">Skills</p>
                        <div className="pokemon-type-info">
                            {pokemon?.abilities?.map((ability, idx) => {
                                return (
                                    <p
                                        key={idx}
                                        className="pokemon-skills-text"
                                    >
                                        {ability?.ability?.name}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <div className="stats-container">
                    <div className="stats-bar-top">
                        <p>Stats</p>
                        <hr className="hr-stats-container" />
                        <img src={pokeball} alt="" />
                    </div>

                    <section className="progress-bar-stats"></section>

                    <p>HP</p>
                    <ProgressBar
                        isLoading={false}
                        percent={pokemon?.stats?.[0].base_stat}
                        size={"large"}
                        showInfo={true}
                    />

                    <p>Attack</p>
                    <ProgressBar
                        isLoading={false}
                        percent={pokemon?.stats?.[1].base_stat}
                        size={"large"}
                        showInfo={true}
                    />

                    <p>Defense</p>
                    <ProgressBar
                        isLoading={false}
                        percent={pokemon?.stats?.[2].base_stat}
                        size={"large"}
                        showInfo={true}
                    />

                    <p>Speed</p>
                    <ProgressBar
                        isLoading={false}
                        percent={pokemon?.stats?.[5].base_stat}
                        size={"large"}
                        showInfo={true}
                    />
                </div>
            </div>

            <section className="movements-pokemon">
                <div className="movement-message">
                    <p>Movements</p>
                    <hr />
                    <img src={pokeball} alt="pokeball" />
                </div>
                <div className="pokemon-moves">
                    {pokemon?.moves?.map((move, idx) => {
                        return (
                            <p key={idx} className="pokemon-moves-text">
                                {move?.move?.name}
                            </p>
                        );
                    })}
                </div>
            </section>

            <footer className="footer-info"></footer>
        </div>
    );
};

export default PokedexInfo;
