import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const ToDoContext = createContext();
export const ToDoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn What is the React ",
      completed: true,
    },
    {
      id: 2,
      text: "Learn JS ",
      completed: false,
    },
  ]);

  const toggleTodo=(id) => {
    const cloned_todos = [...todos];
    const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
    /* console.log(itemIndex); */
    const item = todos[itemIndex];
    /* console.log("itemm", item); */
    item.completed = !item.completed;
    console.log("cloned", cloned_todos);
    setTodos(cloned_todos);

  }
  

  const addTodo = (text) =>
    setTodos((prev) => [
      ...prev,
      { id: uuidv4(), text: text, completed: false },
    ]);
  const values = { todos, setTodos, addTodo,toggleTodo };
  return <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(ToDoContext);
  if (context === undefined) {
    throw new Error("useTodo hook must be call inside TodoProvider component");
  }
  return context;
};
/* export default ToDoContext; ? */
