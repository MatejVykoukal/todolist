import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList, { State } from "./Components/TodoList";
import Form from "./Components/Form";
import { useSelector } from "react-redux";
import { TodoModel } from "./Components/Todo";

function App() {
  const todos = useSelector((state: State) => state.todos.todos);
  const [status, setStatus] = useState<string>("all");
  const [filteredTodos, setFilteredTodos] = useState<TodoModel[]>([]);

  useEffect(() => {
    //
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => !todo.completed));
          break;
        default:
          setFilteredTodos(todos);
      }
    };

    filterHandler();
    console.log(status);
  }, [status, todos]);

  return (
    <div className="App">
      <header>
        <h1>Todo List App</h1>
      </header>
      <Form status={status} setStatus={setStatus} />
      <TodoList filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
