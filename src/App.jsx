
import './App.css'
import { BrowserRouter } from "react-router-dom";
import Routes from './components/routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes/>
      </div>
    </BrowserRouter>
  );
}

export default App;
