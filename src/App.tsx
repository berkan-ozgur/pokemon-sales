import { AxiosResponse } from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useParams } from 'react-router';
import './App.scss';
import { PokeDetailsResponse } from './models/responses/PokeDetailsResponse.interface';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import PokemonDetails from './pages/PokemonDetails';
import PokemonList from './pages/PokemonList';
import Register from './pages/Register';
import { getPokeDetails } from './services/PokeService.service';
import { pokeDetails } from './store/Actions';

function App() {
  const dispatch = useDispatch();
  const id = 5;

  React.useEffect(() => {
    getPokeDetails(id).then((response: AxiosResponse) => {
      dispatch(pokeDetails(response.data as PokeDetailsResponse[]));
    })
  }, [])
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pokemon-list" element={<PokemonList />} />
        <Route path="/poke-details/:id" element={<PokemonDetails />} />
      </Routes>
    </>
  );
}

export default App;
