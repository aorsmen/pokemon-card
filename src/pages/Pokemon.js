import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { pokeActions } from '../store/poke-slice';
import useHttp from '../hooks/useHttp';

// Components
import PokemonCard from '../components/Pokemon/PokemonCard';
import Loading from '../components/UI/Loading';
import ErrorMsg from '../components/UI/ErrorMsg';

// Design
import './Pokemon.css';

const Pokemon = () => {
  const { id } = useParams();
  const poke = useSelector(state => state.poke[id]);
  const dispatch = useDispatch();
  const { isLoading, createRequest } = useHttp();

  useEffect(() => {
    if(poke === false){
      createRequest(`https://pokeapi.co/api/v2/pokemon/${id}`, (data) => {
        dispatch(pokeActions.addCreature(data));
      });
    }
  }, [createRequest, poke, dispatch, id]);

  return (
    <div className="page pokemon">
      {poke && <PokemonCard data={poke} />}
      {isLoading && <Loading />}
      {poke === undefined && <ErrorMsg msg={`No match for found here`} />}
    </div>
  );
};

export default Pokemon;