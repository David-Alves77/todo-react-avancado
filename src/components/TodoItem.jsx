
import { memo } from "react";
import { useTodos } from "../contexts/TodoContext";

function TodoItem({ tarefa }) {
  const { concluirTarefa, removerTarefa } = useTodos();

  return (
    <li className={`todo-item ${tarefa.concluida ? "concluida" : ""}`}>
      <label className="todo-item__conteudo">
        <input
          type="checkbox"
          checked={tarefa.concluida}
          onChange={() => concluirTarefa(tarefa.id)}
        />

        <span>{tarefa.texto}</span>
      </label>

      <button
        type="button"
        className="todo-item__remover"
        onClick={() => removerTarefa(tarefa.id)}
        aria-label={`Remover tarefa ${tarefa.texto}`}
      >
        Excluir
      </button>
    </li>
  );
}

export default memo(TodoItem);
