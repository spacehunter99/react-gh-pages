import React from "react"
import Button from "./Button"

function TodoItem(props) {
    console.log("todo",props.todo)
    return (
        <li className="todoItem">
            <div className="gridContainer">
                <div className="checkbox">
                    <input type="checkbox" checked = {props.todo.checked} onChange={() => props.ToggleItem(props.todo.id)}></input>
                </div>
                <div className="taskContent">
                    <i><h2>{props.index + 1 + "."} {props.todo.title}</h2></i>
                    <p>{props.todo.content}</p>
                </div>
                <div>
                    <Button className="deleteButton" onClick={() => props.deleteItem(props.todo.id)}>Удалить</Button>
                </div>
            </div>
            
        </li>
    )
}

export default TodoItem