import { HashRouter, Routes, Route } from "react-router-dom";
import PokedexInfo from "./components/PokedexInfo";
import Pokedex from "./components/Pokedex";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import "./styles/index.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex/>}/>
          <Route path="/pokedex/:id" element={<PokedexInfo/>}/>
          </Route>

        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
