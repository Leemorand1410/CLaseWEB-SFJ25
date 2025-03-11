import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import styles from "../styles/pokemon.module.css";

export default function PokemonList({ searchTerm, filterType }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [displayedPokemon, setDisplayedPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // 📌 Mostrar solo 5 Pokémon a la vez

  useEffect(() => {
    fetchPokemon();
  }, [searchTerm, filterType]);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      setError(null);
      let url = "";

      if (searchTerm) {
        if (!isNaN(searchTerm)) {
          url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
        } else {
          url = `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`;
        }
      } else if (filterType !== "Todos") {
        url = `https://pokeapi.co/api/v2/type/${filterType.toLowerCase()}`;
      } else {
        url = "https://pokeapi.co/api/v2/pokemon?limit=30"; // 📌 Se traen hasta 30 Pokémon
      }

      const response = await fetch(url);
      const data = await response.json();

      let pokemonDetails = [];

      if (searchTerm && !isNaN(searchTerm)) {
        pokemonDetails = [data];
      } else if (searchTerm) {
        pokemonDetails = [data];
      } else if (filterType !== "Todos") {
        pokemonDetails = await Promise.all(
          data.pokemon.slice(0, 30).map(async (p) => {
            const res = await fetch(p.pokemon.url);
            return res.json();
          })
        );
      } else {
        pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );
      }

      setPokemonList(pokemonDetails);
      setCurrentPage(1); // Reiniciar la paginación
      updateDisplayedPokemon(pokemonDetails, 1);
    } catch (err) {
      setError("No se encontró el Pokémon");
    } finally {
      setLoading(false);
    }
  };

  const updateDisplayedPokemon = (list, page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedPokemon(list.slice(startIndex, endIndex));
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(pokemonList.length / itemsPerPage)) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      updateDisplayedPokemon(pokemonList, nextPage);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      updateDisplayedPokemon(pokemonList, prevPage);
    }
  };

  return (
    <div className={styles.pokemonContainer}>
      <div className={styles.pokemonGrid}>
        {displayedPokemon.length > 0 ? (
          displayedPokemon.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
        ) : (
          <p>No se encontraron Pokémon.</p>
        )}
      </div>

      {loading && <p>Cargando Pokémon...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* 📌 Paginador */}
      <div className={styles.pagination}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>Página {currentPage} de {Math.ceil(pokemonList.length / itemsPerPage)}</span>
        <button onClick={handleNextPage} disabled={currentPage === Math.ceil(pokemonList.length / itemsPerPage)}>
          Siguiente
        </button>
      </div>
    </div>
  );
}
