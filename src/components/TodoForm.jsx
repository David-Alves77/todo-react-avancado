
import { useState } from "react";
import { useTodos } from "../contexts/TodoContext";

function TodoForm() {
  const [texto, setTexto] = useState("");
  const { adicionarTarefa } = useTodos();

  function handleSubmit(evento) {
    evento.preventDefault();

    if (!texto.trim()) return;

    adicionarTarefa(texto);
    setTexto("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma nova tarefa..."
        value={texto}
        onChange={(evento) => setTexto(evento.target.value)}
        aria-label="Nova tarefa"
      />

      <button type="submit">
        Adicionar
      </button>
    </form>
  );
}

export default TodoForm;
