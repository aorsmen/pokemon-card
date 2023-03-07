import { render, screen } from "@testing-library/react";
import PokemonCard from "./PokemonCard";
import { pokemonData, typeStr } from '../../test/util';

test('fields on pokemon card should be correct', () => {
  
  render(<PokemonCard data={pokemonData} />);

  const type = typeStr(pokemonData.types);

  const name = screen.getByText(pokemonData.name);
  const id = screen.getByText(`#${pokemonData.id}`);
  const types = screen.getByText(type);
  const height = screen.getByText(pokemonData.height);
  const weight = screen.getByText(pokemonData.weight);
  const image = screen.getByAltText(pokemonData.name);
  
  expect(name).toBeInTheDocument();
  expect(id).toBeInTheDocument();
  expect(types).toBeInTheDocument();
  expect(height).toBeInTheDocument();
  expect(weight).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});