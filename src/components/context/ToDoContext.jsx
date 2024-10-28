
import { createContext, useState } from 'react';

export const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos((prevTodos) => [...prevTodos,  newTodo ]);
      };
      const deleteTodo = () => {
        setTodos([]);
      };
    
    

  return (
    <ToDoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </ToDoContext.Provider>
  );
};
