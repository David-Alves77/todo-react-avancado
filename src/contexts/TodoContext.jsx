
import useLocalStorage from "../hooks/useLocalStorage";

import { createContext, useContext, useState, useMemo } from "react";

const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  const [tarefas, setTarefas] = useLocalStorage("tarefas", []);
  const [filtro, setFiltro] = useState("todas");

  function adicionarTarefa(texto) {
    if (!texto.trim()) return;

    const novaTarefa = {
      id: crypto.randomUUID(),
      texto: texto.trim(),
      concluida: false,
    };

    setTarefas((anteriores) => [...anteriores, novaTarefa]);
  }

  function concluirTarefa(id) {
    setTarefas((anteriores) =>
      anteriores.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  }

  function removerTarefa(id) {
    setTarefas((anteriores) =>
      anteriores.filter((tarefa) => tarefa.id !== id)
    );
  }

  const tarefasFiltradas = useMemo(() => {
    if (filtro === "concluidas") {
      return tarefas.filter((tarefa) => tarefa.concluida);
    }

    if (filtro === "pendentes") {
      return tarefas.filter((tarefa) => !tarefa.concluida);
    }

    return tarefas;
  }, [tarefas, filtro]);

  return (
    <TodoContext.Provider
      value={{
        tarefas,
        tarefasFiltradas,
        filtro,
        setFiltro,
        adicionarTarefa,
        concluirTarefa,
        removerTarefa,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  const contexto = useContext(TodoContext);

  if (!contexto) {
    throw new Error("useTodos deve ser usado dentro de TodoProvider");
  }

  return contexto;
}
