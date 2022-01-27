import React from "react"
import TodoItem from "./TodoItem"

function TodoList(props) {
    return (
        <ul className="todoList">
            {props.todos.map((todo, index) => {
                return <TodoItem todo = {todo} key = {todo.id} index = {index} deleteItem = {props.deleteItem} ToggleItem = {props.ToggleItem}/>
             } )}
        </ul>
    )
}

export default TodoList