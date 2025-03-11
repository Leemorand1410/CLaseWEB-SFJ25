import { useState } from "react";
import PokemonList from "../components/PokemonList";
import PokeHeader from "/components/PokeHeader"; // 📌 Importado
import styles from"/styles/globals.css";

export default function PokemonPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("Todos");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilter = (type) => {
    setFilterType(type);
  };

  return (
    <div>
      <PokeHeader onSearch={handleSearch} onFilter={handleFilter} /> {/* 📌 Ahora solo con buscador y filtro */}
      <PokemonList searchTerm={searchTerm} filterType={filterType} />
    </div>
  );
}
