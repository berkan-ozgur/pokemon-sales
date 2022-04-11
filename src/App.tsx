import { useRoutes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import PokemonDetails from './pages/PokemonDetails';
import PokemonList from './pages/PokemonList';
import Register from './pages/Register';



function AppRoutes() {
  const routes = useRoutes(
    [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/pokemon-list", element: <PokemonList /> },
      { path: "/poke-details/:id", element: <PokemonDetails /> }
    ]
  )
  return routes;
}


function App() {
  // const dispatch = useDispatch();
  // const id = 5;

  // React.useEffect(() => {
  //   getPokeDetails(id).then((response: AxiosResponse) => {
  //     dispatch(pokeDetails(response.data as PokeDetailsResponse));
  //   })
  // }, [])
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
