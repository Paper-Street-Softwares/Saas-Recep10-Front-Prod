import "./App.css";
import Interface from "./pages/Interface";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Painel from "./pages/Painel";
import { PrivateRoute } from "./pages/privateRoute";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/painel" element={<PrivateRoute><Painel/></PrivateRoute>}/>
          <Route path="/home" element={<Interface />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
