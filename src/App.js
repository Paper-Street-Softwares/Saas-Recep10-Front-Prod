import "./App.css";
import Interface from "./pages/Interface";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Painel from "./pages/Painel";
import { PrivateRoute } from "./pages/privateRoute";
import Login from "./pages/auth/Login";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ResetPassword from "./pages/auth/ResetPassword";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/painel"
            element={
              <PrivateRoute>
                <Painel />
              </PrivateRoute>
            }
          />
          <Route path="/home" element={<Interface />} />
          <Route path="/" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
