import React from "react";
import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";

function App() {
  let [todos, setTodos] = React.useState(localStorage.getItem('todos') 
    ? JSON.parse(localStorage.getItem('todos'))  
    : [])

  function setTodosWithSave (newTodos) {
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  function deleteItem(id) {
    setTodosWithSave(
      todos.filter(todo => {
        return todo.id !== id;
      })
    )
  }

  function ToggleItem(id) {
    setTodosWithSave(
      todos.map(todo => {
        if (todo.id === id) {
          todo.checked = !todo.checked
        }
        return todo
      })
    )
  }

  function createItem(title, content, checked) {
    setTodosWithSave(
      todos.concat([{
        id: Date.now(),
        title,
        content,
        checked
      }])
    )
  }

  return (
    <div className="wrapper">
      <div className="flexContainerMainApp">
        <h1>Список дел</h1>
        <AddForm createItem = {createItem}/>
        {todos.length !== 0
          ? <TodoList todos = {todos} deleteItem = {deleteItem} ToggleItem = {ToggleItem}/>
          : <div className="emptyTitle">Список дел пуст!</div>
        }
      </div>
    </div>
  );
}

export default App;
