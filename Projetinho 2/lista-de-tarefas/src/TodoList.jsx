// Importa React e os hooks useState e useEffect
import React, { useState, useEffect } from "react";
// Importa o CSS do componente para estilização
import "./TodoList.css";
// Importa o ícone central exibido quando a lista está vazia
import Icone from "./assets/ICON.png";

// Componente principal da lista de tarefas
function TodoList() {
  // Recupera a lista salva no localStorage, se existir
  const listaStorege = localStorage.getItem("Lista");
  // Estado da lista de tarefas (array de objetos)
  const [lista, setLista] = useState(
    listaStorege ? JSON.parse(listaStorege) : []
  );
  // Estado do novo item a ser adicionado
  const [novoItem, setNovoItem] = useState("");

  // Atualiza o localStorage sempre que a lista mudar
  useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));
  }, [lista]);

  // Função para adicionar um novo item à lista
  function adicionaItem(form) {
    form.preventDefault(); // Evita o recarregamento da página
    if (!novoItem) return; // Não adiciona se o campo estiver vazio
    setLista([...lista, { text: novoItem, isCompleted: false }]); // Adiciona novo item
    setNovoItem(""); // Limpa o campo de entrada
    document.getElementById("input-entrada").focus(); // Foca novamente no input
  }

  // Função para marcar/desmarcar uma tarefa como concluída
  function clicou(index) {
    const listaAux = [...lista]; // Cria uma cópia da lista
    listaAux[index].isCompleted = !listaAux[index].isCompleted; // Alterna o status
    setLista(listaAux); // Atualiza o estado
  }

  // Função para deletar uma tarefa específica
  function deleta(index) {
    const listaAux = [...lista]; // Cria uma cópia da lista
    listaAux.splice(index, 1); // Remove o item pelo índice
    setLista(listaAux); // Atualiza o estado
  }

  // Função para deletar todas as tarefas
  function deletaTudo() {
    setLista([]); // Limpa a lista
  }

  // Renderização do componente
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      {/* Formulário para adicionar nova tarefa */}
      <form onSubmit={adicionaItem}>
        <input
          id="input-entrada"
          type="text"
          value={novoItem}
          onChange={(e) => setNovoItem(e.target.value)}
          placeholder="Adicione uma tarefa"
        />
        <button className="add" type="submit">
          Add
        </button>
      </form>

      <div className="listaTarefas">
        <div style={{ textAlign: "center" }}>
          {/* Mostra o ícone se a lista estiver vazia */}
          {lista.length < 1 ? (
            <img className="icone-central" src={Icone} />
          ) : (
            <>
              {/* Renderiza cada tarefa da lista */}
              {lista.map((item, index) => (
                <div
                  key={index}
                  className={item.isCompleted ? "item completo" : "item"}
                >
                  {/* Ao clicar no texto, marca/desmarca como concluído */}
                  <span onClick={() => clicou(index)}>{item.text}</span>
                  {/* Botão para deletar tarefa individual */}
                  <button onClick={() => deleta(index)} className="del">
                    Deletar
                  </button>
                </div>
              ))}
              {/* Botão para deletar todas as tarefas */}
              <button onClick={deletaTudo} className="deleteAll">
                Deletar todos
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
