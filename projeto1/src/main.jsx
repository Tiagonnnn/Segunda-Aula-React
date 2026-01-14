// Importa o StrictMode do React para identificar problemas
import { StrictMode } from "react";
// Importa a função createRoot para renderizar o app
import { createRoot } from "react-dom/client";

// Importa o componente principal da aplicação
import App from "./App.jsx";

// Renderiza o componente App dentro do StrictMode no elemento com id 'root'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
