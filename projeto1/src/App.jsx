// Importa os componentes de roteamento do React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importa as páginas do projeto
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

// Componente principal da aplicação
function App() {
  return (
    <div>
      {/* Define as rotas da aplicação */}
      <BrowserRouter>
        <Routes>
          {/* Rota para a página Home */}
          <Route path="/" element={<Home />} />
          {/* Rota para a página Sobre */}
          <Route path="/sobre" element={<Sobre />} />
          {/* Rota para a página Contato */}
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
