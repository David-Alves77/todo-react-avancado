
# Todo List React Avançado

Aplicação de gerenciamento de tarefas desenvolvida com React e Vite para uma atividade prática da EBAC.

## Tecnologias utilizadas

- React
- JavaScript (ES6+)
- Vite
- CSS3 (Mobile First)
- Context API
- Hooks: useState, useEffect, useContext e useMemo
- Hook personalizado useLocalStorage
- React.memo

## Funcionalidades

- Adicionar novas tarefas
- Marcar tarefas como concluídas
- Reabrir tarefas concluídas
- Excluir tarefas
- Filtrar tarefas por status
- Contador de tarefas concluídas e pendentes
- Persistência de dados com localStorage
- Layout responsivo para celulares e computadores

## Estrutura do projeto

src/
- components/
  - TodoForm.jsx
  - TodoItem.jsx
  - TodoList.jsx
  - TodoFilters.jsx
- contexts/
  - TodoContext.jsx
- hooks/
  - useLocalStorage.js
- App.jsx
- App.css
- index.css
- main.jsx

## Como executar localmente

1. Clone o repositório:

   git clone https://github.com/David-Alves77/todo-react-avancado.git

2. Entre na pasta:

   cd todo-react-avancado

3. Instale as dependências:

   npm install

4. Inicie o servidor:

   npm run dev

5. Abra o endereço local informado pelo Vite.

## Objetivo

Praticar gerenciamento de estado global, criação de hooks personalizados, memoization e organização modular de aplicações React.

## Autor

David Alves

Projeto desenvolvido para fins educacionais — EBAC.
