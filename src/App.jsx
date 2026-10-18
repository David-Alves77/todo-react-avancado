
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";
import { useTodos } from "./contexts/TodoContext";
import "./App.css";

function App() {
  const { tarefas } = useTodos();

  const total = tarefas.length;
  const concluidas = tarefas.filter(
    (tarefa) => tarefa.concluida
  ).length;

  return (
    <main className="app">
      <div className="todo-container">
        <header className="todo-header">
          <h1>Minha Lista de Tarefas</h1>
          <p>
            Organize suas atividades de forma simples
            e eficiente.
          </p>
        </header>

        <TodoForm />

        <section className="todo-section">
          <div className="todo-resumo">
            <h2>Minhas tarefas</h2>
            <span>
              {concluidas} de {total} concluídas
            </span>
          </div>

          <TodoFilters />
          <TodoList />
        </section>

        <footer className="todo-footer">
          <p>Todo List React Avançado | EBAC</p>
        </footer>
      </div>
    </main>
  );
}

export default App;
