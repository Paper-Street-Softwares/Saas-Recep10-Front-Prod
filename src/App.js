import './App.css';
import Interface from './pages/Interface';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Painel from './pages/Painel';
import { PrivateRoute } from './pages/privateRoute';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
              <Route path="/painel" element={<PrivateRoute><Painel/></PrivateRoute>} />
              <Route path="/home" element={<Interface/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
