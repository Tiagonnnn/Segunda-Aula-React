// Importa o hook useState do React
import { useState } from "react";

// Componente Titulo recebe a cor como prop
function Titulo({ cor }) {
  // Estado do texto exibido no título
  const [texto, setTexto] = useState("Titulo Inicial");
  // Estado do texto digitado no input
  const [inputText, setInputText] = useState("");

  // Função chamada ao clicar no botão para alterar o título
  function Clicou() {
    setTexto(inputText);
  }

  return (
    <div>
      {/* Título com cor dinâmica */}
      <h1 style={{ color: cor }}>{texto}</h1>
      {/* Input controlado para digitar novo texto */}
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        type="text"
      />
      {/* Botão para atualizar o título */}
      <button onClick={Clicou}>Mudar</button>
    </div>
  );
}

export default Titulo;
