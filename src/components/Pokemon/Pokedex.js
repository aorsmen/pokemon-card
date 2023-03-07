import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Design
import './Pokedex.css';

const Pokedex = () => {
  const pokeData = useSelector(state => state.poke);

  return (
    <div className="pokedex">
      <h1>Pokedex</h1>
      <div className="pokedex__list">{Object.keys(pokeData).map(item => <Link className="pokedex__list-link" key={item} to={`pokemon/${item}`}>{item}</Link>)}</div>
    </div>
  );
};

export default Pokedex;