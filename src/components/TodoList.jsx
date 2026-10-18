
import { useTodos } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { tarefasFiltradas, filtro } = useTodos();

  if (tarefasFiltradas.length === 0) {
    return (
      <div className="todo-vazio">
        <p>
          {filtro === "todas"
            ? "Nenhuma tarefa cadastrada. Adicione uma!"
            : filtro === "concluidas"
            ? "Nenhuma tarefa concluída."
            : "Nenhuma tarefa pendente."}
        </p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {tarefasFiltradas.map((tarefa) => (
        <TodoItem
          key={tarefa.id}
          tarefa={tarefa}
        />
      ))}
    </ul>
  );
}

export default TodoList;
