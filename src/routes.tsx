import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Receitas from "./pages/Receitas";
import ReceitasInternas from "./pages/ReceitasInternas";
import Contato from "./pages/Contato";

const MyRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/receitas" element={<Receitas />}>
          <Route path=":id" element={<ReceitasInternas />} />
        </Route>
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;

