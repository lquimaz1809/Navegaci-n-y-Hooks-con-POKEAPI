import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import DigimonList from './components/DigimonList';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* BARRA DE NAVEGACIÓN */}
      <nav className="navbar">
        <NavLink to="/" className="nav-link">
          Inicio
        </NavLink>
        <NavLink to="/gen1" className="nav-link">
          Gen 1
        </NavLink>
        <NavLink to="/gen2" className="nav-link">
          Gen 2
        </NavLink>
        <NavLink to="/gen3" className="nav-link">
          Gen 3
        </NavLink>
        <NavLink to="/digimon" className="nav-link digimon-link">
          Digimon
        </NavLink>
      </nav>

      <div className="main-content">
        <Routes>
          <Route path="/" element={
            <div className="home-container">
              <h1>Bienvenido a la Random Pokédex</h1>
              <p>Selecciona una generación arriba para empezar tu aventura.</p>
              <img 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" 
                alt="Pikachu" 
                style={{marginTop: '20px', width: '200px'}}
              />
            </div>
          } />
          
          <Route path="/gen1" element={<PokemonList min={1} max={151} />} />
          <Route path="/gen2" element={<PokemonList min={152} max={251} />} />
          <Route path="/gen3" element={<PokemonList min={252} max={386} />} />
          
          <Route path="/digimon" element={<DigimonList />} />
          
          <Route path="*" element={
            <div style={{textAlign: 'center', marginTop: '50px'}}>
              <img src="https://http.cat/404" alt="Not Found" style={{borderRadius: '10px', maxWidth: '100%'}}/>
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;