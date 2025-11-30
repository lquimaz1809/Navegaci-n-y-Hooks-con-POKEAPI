import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({ min, max }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const getRandomId = () => Math.floor(Math.random() * (max - min + 1)) + min;

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      setError(false);
      setPokemons([]); 

      const randomIds = Array.from({ length: 10 }, getRandomId);

      try {
        const promises = randomIds.map(id => 
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => {
                if(!res.ok) throw new Error("Error en la petición");
                return res.json();
            })
        );

        const results = await Promise.all(promises);

        const formattedData = results.map(data => ({
          id: data.id,
          numero: data.id,
          nombre: data.name,
          img: data.sprites.other['official-artwork'].front_default || data.sprites.front_default,
          hp: data.stats[0].base_stat,
          ataque: data.stats[1].base_stat,
          defensa: data.stats[2].base_stat,
        }));

        setPokemons(formattedData);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [min, max]);

  if (loading) return <h2>Cargando Pokébola...</h2>;
  
  if (error) return (
    <div style={{textAlign: 'center'}}>
        <img src="https://http.cat/404" alt="Error 404" style={{width: '300px'}}/>
        <p>Ups, un Pokémon salvaje escapó (Error al cargar).</p>
    </div>
  );

  return (
    <div className="pokemon-container">
      {pokemons.map((p) => (
        <PokemonCard key={p.id + Math.random()} pokemon={p} />
      ))}
    </div>
  );
};

export default PokemonList;