import './App.css';
import Routes from './components/routes/Routes';
import {ToDoProvider } from './components/context/ToDoContext';

function App() {
  return (
    <ToDoProvider>
        <Routes />
    </ToDoProvider>
  );
}

export default App;
