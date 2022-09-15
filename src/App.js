import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListaPersonajes from "./components/ListaPersonajes";
import PaginaError from "./components/PaginaError";
import Inicio from "./components/Inicio";
import Personaje from "./components/Personaje";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/ListaPersonajes" element={<ListaPersonajes />} />
        <Route path="/Personaje/:idPersonaje" element={<Personaje />} />
        <Route path="*" element={<PaginaError />} />
      </Routes>
    </Router>
  );
}

export default App;
