import React, { useContext } from "react";
import { useTodo } from "../../../contexts/ToDoContext";

function Item({ todo }) {
  const { toggleTodo } = useTodo();

  const onChange = (id) => {
    toggleTodo(id);
  };
  

  return (
    <div>
      <li key={todo.id} className={todo.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => onChange(todo.id)}
          />
          <label>{todo.text}</label>
          <button className="destroy"></button>
        </div>
      </li>
    </div>
  );
}

export default Item;