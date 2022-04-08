import { Route, Routes } from 'react-router';
import './App.scss';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
