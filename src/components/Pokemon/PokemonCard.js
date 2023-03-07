// Components
import Image from '../UI/Image';

// Design
import placeholder from '../../assets/images/placeholder.png';
import './PokemonCard.css';

const PokemonCard = ({ data }) => {
  const {name, id, height, weight, types, sprites} = data;
  const type = types.reduce((acc, curr) => acc === '' ? curr.type.name : `${acc}, ${curr.type.name}`, '');

  return (
    <div className="pokemon__card">
      <div className="pokemon__info">
        <div className="pokemon__info-detail">
          <div>{name}</div>
          <div>#{id}</div>
        </div>
        <div className="pokemon__info-type"><b>Types:</b> <span>{type}</span></div>
        <div className="pokemon__info-extra">
          <div><b>Height:</b> <span>{height}</span></div>
          <div><b>Weight:</b> <span>{weight}</span></div>
        </div>
      </div>
      <div className="pokemon__media">
        <Image src={sprites.other?.['official-artwork']?.front_default || placeholder} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;