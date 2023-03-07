// Dummy pokemon data
export const pokemonData = {
  id: 25,
  name: 'pikachu',
  height: 4,
  weight: 60,
  sprites: {
    other: {
      'official-artwork': {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      }
    }
  },
  types: [
    {
      slot: 1,
      type: {
        name: "electric",
        url: "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ]
};

// Helper functions for types
export const typeStr = (types) => {
  return types.reduce((acc, curr) => acc === '' ? curr.type.name : `${acc}, ${curr.type.name}`, '');
};