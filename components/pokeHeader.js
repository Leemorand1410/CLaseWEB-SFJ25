import { useState } from "react";
import styles from "../styles/pokemon.module.css";

export default function PokeHeader({ onSearch, onFilter }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Llamamos a la función de búsqueda cada vez que cambia el input
  };

  const handleFilter = (event) => {
    onFilter(event.target.value);
  };

  return (
    <div className={styles.headerContainer}>
      <input
        type="text"
        placeholder="Buscar por nombre, ID o tipo..."
        value={searchTerm}
        onChange={handleSearch}
        className={styles.searchBar}
      />
      <select onChange={handleFilter} className={styles.filterDropdown}>
        <option value="Todos">Todos</option>
        <option value="Fire">Fire</option>
        <option value="Water">Water</option>
        <option value="Grass">Grass</option>
        <option value="Electric">Electric</option>
        <option value="Ice">Ice</option>
        <option value="Fighting">Fighting</option>
        <option value="Poison">Poison</option>
        <option value="Ground">Ground</option>
        <option value="Flying">Flying</option>
        <option value="Psychic">Psychic</option>
        <option value="Bug">Bug</option>
        <option value="Rock">Rock</option>
        <option value="Ghost">Ghost</option>
        <option value="Dragon">Dragon</option>
        <option value="Dark">Dark</option>
        <option value="Steel">Steel</option>
        <option value="Fairy">Fairy</option>
        <option value="Normal">Normal</option>
      </select>
    </div>
  );
}
