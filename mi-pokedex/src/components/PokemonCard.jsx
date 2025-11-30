import React from 'react';
import './PokemonCard.css';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card">
      <img src={pokemon.img} alt={pokemon.nombre} />
      <h3>#{pokemon.numero} - {pokemon.nombre}</h3>
      <div className="stats">
        <p>HP: {pokemon.hp}</p>
        <p>Ataque: {pokemon.ataque}</p>
        <p>Defensa: {pokemon.defensa}</p>
      </div>
    </div>
  );
};

export default PokemonCard;