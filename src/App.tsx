import { Route, Routes } from 'react-router';
import './App.scss';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import PokemonDetails from './pages/PokemonDetails';
import PokemonList from './pages/PokemonList';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pokemon-list" element={<PokemonList />} />
        <Route path="/pokemon-list/poke-details/:id" element={<PokemonDetails />} />
      </Routes>
    </>
  );
}

export default App;
