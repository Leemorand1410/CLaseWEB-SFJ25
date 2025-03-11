import { useState } from "react";
import PokemonList from "../components/PokemonList.js";

export default function PokemonFetcher() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  const getPokemon = async () => {
    try {
      setError(null);
      setPokemonData(null);

      if (!pokemonName) {
        setError("Por favor, ingresa un nombre o ID de Pokémon.");
        return;
      }

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);

      if (!response.ok) {
        throw new Error("Pokémon no encontrado");
      }

      const data = await response.json();
      setPokemonData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Lista de Pokémon</h1>
      <PokemonList />
    </div>
  );
}
