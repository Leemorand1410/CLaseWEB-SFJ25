import styles from "../styles/pokemon.module.css"; // Importar CSS como un módulo
import PokemonCard from "/components/PokemonCard";
import { useState, useEffect } from "react";

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);

  const fetchPokemon = async (newOffset) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${newOffset}`);
      const data = await response.json();

      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        })
      );

      setPokemonList((prevList) => [...prevList, ...pokemonDetails]);
      setOffset(newOffset);
    } catch (err) {
      setError("Error al cargar Pokémon");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon(0);
  }, []);

  return (
    <div className={styles.pokemonContainer}>
      <div className={styles.pokemonGrid}>
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      {loading && <p>Cargando Pokémon...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <button className={styles.loadMore} onClick={() => fetchPokemon(offset + 12)}>
        Cargar más Pokémon
      </button>
    </div>
  );
}
