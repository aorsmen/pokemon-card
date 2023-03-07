import React, { useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { pokeActions } from './store/poke-slice';

// Components
import Layout from './components/UI/Layout';
import Loading from './components/UI/Loading';

// Design
import './App.css';

// Pages
import NoMatch from './pages/NoMatch';
const Home = React.lazy(() => import("./pages/Home"));
const Pokemon = React.lazy(() => import("./pages/Pokemon"));

// First app load
let isInit = true;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Prepare data map only first load
    if(isInit){
      dispatch(pokeActions.createIndex());
      isInit = false;
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            } />
          <Route path="pokemon/:id"
            element={
              <Suspense fallback={<Loading />}>
                <Pokemon />
              </Suspense>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
