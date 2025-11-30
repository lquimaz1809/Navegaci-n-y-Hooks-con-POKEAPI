import React, { useState, useEffect } from 'react';

const DigimonList = () => {
  const [digimons, setDigimons] = useState([]);

  useEffect(() => {
    fetch('https://digimon-api.vercel.app/api/digimon')
      .then(res => res.json())
      .then(data => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        setDigimons(shuffled.slice(0, 10));
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="pokemon-container">
      {digimons.map(d => (
        <div className="card" key={d.name}>
            <img src={d.img} alt={d.name} />
            <h3>{d.name}</h3>
            <p>Nivel: {d.level}</p>
        </div>
      ))}
    </div>
  );
};

export default DigimonList;