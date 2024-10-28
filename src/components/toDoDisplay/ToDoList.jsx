import React, { useContext, useState } from 'react';
import { ToDoContext } from '../context/ToDoContext';
import { useNavigate } from 'react-router';

const TodoList = () => {
  const { todos, addTodo} = useContext(ToDoContext);
  const [newTodo, setNewTodo] = useState('');
  const navigate=useNavigate();


  const handleAddTodo = () => {
      addTodo(newTodo);
      setNewTodo('');
  };


  return (
    <div className="todo-container">
      <h1>My To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add</button>
      <button onClick={()=>{navigate("/")}}>HomePage</button>
      <ul>
        {todos.map((todo) => (
          <li >
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;