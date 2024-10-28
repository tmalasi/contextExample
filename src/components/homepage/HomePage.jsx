// HomePage.js
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { ToDoContext } from '../context/ToDoContext';

const HomePage = () => {
    const { deleteTodo } = useContext(ToDoContext);
    const navigate=useNavigate();


  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Global State TODOLIST </h1>
      <p className="home-description">
        Create my first useContext
      </p>
      <button onClick={()=>{navigate("/todos")}}>TODO-LIST</button>
      <button onClick={deleteTodo}>Delete All</button>
    </div>
  );
};

export default HomePage;
