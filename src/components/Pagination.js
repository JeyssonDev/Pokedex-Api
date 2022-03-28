import React, { useState } from 'react'
import PokedexCard from './PokedexCard';
import '../styles/Pagination.css';

const Pagination = ({pokemons}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 16;
 
    const lastIndex = currentPage * itemsPerPage;
    const firtsIndex = lastIndex - itemsPerPage;
    const pokemonPaginated = pokemons?.slice(firtsIndex, lastIndex);
    const totalPages = Math.ceil(pokemons?.length/itemsPerPage);
    const pagesNumbers = [];
    for(let i = 1; i <= totalPages; i++){
      pagesNumbers.push(i)
    }

  return (

    <div className='pagination'>

        <ul className='ul-pokemons'>
            {pokemonPaginated.map((pokemon) => (
            <PokedexCard pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url} key={pokemon.url ? pokemon.url : pokemon.pokemon.url}/> 
            ))}
        </ul>
        
        <div className='buttons-pagination'>
            <button
                className='button-previous-page' 
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled= {currentPage <= 1}
                >
                Previous page
            </button>
            <button
                className='button-next-page' 
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled= {currentPage >= totalPages}
            >
                Next page
            </button>
        </div>
        
    </div>

  )
}

export default Pagination