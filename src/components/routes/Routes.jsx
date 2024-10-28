// Routes.js
import { Routes as AppRoutes, Route, BrowserRouter} from 'react-router-dom';
import HomePage from '../homepage/HomePage';
import TodoList from '../toDoDisplay/ToDoList';

const Routes = () => {
  return (
    <BrowserRouter> 
    <AppRoutes>    
      <Route path="/" element={<HomePage />} />
      <Route path='/todos' element={<TodoList/>}/>
    </AppRoutes>
    </BrowserRouter>
  );
};

export default Routes;
