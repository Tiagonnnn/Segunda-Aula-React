// Importa o StrictMode do React para ajudar a identificar problemas na aplicação
import { StrictMode } from "react";
// Importa a função createRoot para renderizar o app na DOM
import { createRoot } from "react-dom/client";
// Importa o componente principal da lista de tarefas
import TodoList from "./TodoList";

// Renderiza o componente TodoList dentro do StrictMode no elemento com id 'root'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoList />
  </StrictMode>
);
