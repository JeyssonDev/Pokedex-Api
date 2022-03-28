import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../styles/PokedexInfo.css"
import pokeball from '../images/pngwing.com.png';
import ProgressBar from './ProgressBar';

const PokedexInfo = () => {

  const {id} = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/?offset=0&limit=1126`)
      .then(res => setPokemon(res.data))
  }, [id])

  return (
    
    <div className='pokedex-info'>

    <img className="pokedex-banner-info" src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1649030400&Signature=fCIz2ZeUoOwcLoGA9hStJyM7yJlGojwkpTp26S5UXyP10yG4NJeEpco5IDJ8fmnmst5YkUYr7giQQExHVH927cqdoAJe-kPEgtGFLIBqDDGlgeGtiVEeQzqcGSlfNk~Y3sxK12OypxunXCabBSiWkRRlk6z8nPWeUnaYxD9yf3y5qT4zKtLiXJdatifHK0poj2feMVRO36z1o2zOeje7PEMBwV5unNuyiK3-j-CmSqTwqU~NJI2MqiBkNtVICefVk7BYnH7fPGEpjo4~4k3vr7sTJaQnR~ET0RBEGi9EQh5WpTC~LR-QjGsdOTPGDIHze3YbaXW7VUJF6BLs10RsrQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="pokedex" />

    <div className="top-info">
        <a href="/"> <img className='pokeball-info' src={pokeball} alt="pokeball"/> </a> 
        <div className="rectangle150"></div>
        <div className="rectangle151"></div>
    </div>    

    <div className='pokemon-info-card'>


      <img 
          className="pokemon-image-info" 
          src={pokemon?.sprites?.other?.dream_world?.front_default ? pokemon?.sprites?.other?.dream_world?.front_default : pokemon?.sprites?.back_default} 
          alt="pokemon"
      />

      <p className='id-pokemon-info'>#{pokemon.id}</p>

      <div className="info-pokemon-name-withhr">
          <hr className='hr-info'/>
          <h1 className='info-pokemon-name'>{pokemon.name}</h1>
          <hr className='hr-info'/>
      </div>

      <section className='pokemon-information-info'>
        <div className="weight-info">
            <p className='weight-text'>Width</p>
            <p className='weight-data'>{pokemon.weight}</p>
        </div>
        <div className="height-info">
            <p className='height-text'>Height</p>
            <p className='height-data'>{pokemon.height}</p>
        </div>
      </section>

      <section className='pokemon-stats-1'>

        <div className='type-stats-info'>
            <p className='title-type-stats'>Type</p>
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

        <div className='skills-stats-info'>
            <p className='title-skills-stats'>Skills</p>
            <div className="pokemon-type-info">
                {pokemon?.abilities?.map((ability, idx) => { 
                  return (
                    <p key={idx} className="pokemon-skills-text">
                    {ability?.ability?.name}
                    </p>
                  );
            })}
            </div>
        </div>
        
      </section>

        <div className="stats-container">
            
            <div className='stats-bar-top'>
                <p>Stats</p>
                <hr className='hr-stats-container'/>
                <img src={pokeball} alt="" />
            </div>

            <section className="progress-bar-stats">

            </section>

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

        <section className='movements-pokemon'>

            <div className="pokemon-moves">
                {pokemon?.moves?.map((move, idx) => { 
                  return (
                    <p key={idx} className="pokemon-moves-text">
                    {move?.move?.name}
                    </p>
                  );
                })}
            </div>

            {/* <div>

            {[...Array(20).keys()].map((move, index, pokemon?.moves?)
             => 
             <p key={index}>
               {move?.move?.name}
             </p>
              )}
             
            </div> */}
          
        </section>



        <footer className='footer-info'>
        </footer>

    </div>

    
  )
}

export default PokedexInfo