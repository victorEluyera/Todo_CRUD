import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todosW", JSON.stringify({ todos: newList }));
  }

  const handleAddTodos = (newTodo) => {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  };

  const handleDeleteTodos = (id) => {
    const newTodoList = todos.filter((todo, index) => {
      return index !== id;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  };

  const handleEditTodos = (id) => {
    const todoToEdit = todos[id];
    setTodoValue(todoToEdit);
    handleDeleteTodos(id);
  };

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let locaTodos = localStorage.getItem("todosW");
    if (!locaTodos) {
      return;
    }
    locaTodos = JSON.parse(locaTodos).todos;
    setTodos(locaTodos);
  }, []);
  return (
    <>
      <TodoInput
        handleAddTodos={handleAddTodos}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList
        todos={todos}
        handleDeleteTodos={handleDeleteTodos}
        handleEditTodos={handleEditTodos}
      />
    </>
  );
}

export default App;
