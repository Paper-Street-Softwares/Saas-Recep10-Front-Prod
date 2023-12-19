import './App.css';
import Interface from './pages/Interface';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Painel from './pages/Painel';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
              <Route path="/painel" element={<Painel/>} />
              <Route path="/home" element={<Interface/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
