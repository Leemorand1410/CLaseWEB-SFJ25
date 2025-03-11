import styles from "../styles/pokemon.module.css"; // Importar el CSS como módulo

const typeColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD"
};

export default function PokemonCard({ pokemon }) {
  const primaryType = pokemon.types[0].type.name;
  const cardStyle = {
    border: `5px solid ${typeColors[primaryType] || "#ccc"}` // Borde con color del tipo
  };

  return (
    <div className={styles.pokemonCard} style={cardStyle}>
      <div className={styles.pokemonImage}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <h2 className={styles.pokemonName}>{pokemon.name.toUpperCase()} (#{pokemon.id})</h2>
      <div className={styles.pokemonInfo}>
        <p><strong>Tipo:</strong> {pokemon.types.map(t => t.type.name).join(", ")}</p>
        <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
        <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
      </div>
    </div>
  );
}
