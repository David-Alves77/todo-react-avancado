
import { useTodos } from "../contexts/TodoContext";

function TodoFilters() {
  const { filtro, setFiltro, tarefas } = useTodos();

  const total = tarefas.length;
  const concluidas = tarefas.filter(
    (tarefa) => tarefa.concluida
  ).length;
  const pendentes = total - concluidas;

  return (
    <div className="todo-filters">
      <div className="todo-filters__botoes">
        <button
          type="button"
          className={filtro === "todas" ? "ativo" : ""}
          onClick={() => setFiltro("todas")}
        >
          Todas ({total})
        </button>

        <button
          type="button"
          className={filtro === "concluidas" ? "ativo" : ""}
          onClick={() => setFiltro("concluidas")}
        >
          Concluídas ({concluidas})
        </button>

        <button
          type="button"
          className={filtro === "pendentes" ? "ativo" : ""}
          onClick={() => setFiltro("pendentes")}
        >
          Pendentes ({pendentes})
        </button>
      </div>
    </div>
  );
}

export default TodoFilters;
