// URL de la API de Pokémon
const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

// Hacer la solicitud GET
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Nombre:", data.name);
    console.log("ID:", data.id);
    console.log("Altura:", data.height);
    console.log("Peso:", data.weight);
    console.log("Tipos:", data.types.map(t => t.type.name).join(", "));
  })
  .catch(error => console.error("Error al obtener los datos:", error));
