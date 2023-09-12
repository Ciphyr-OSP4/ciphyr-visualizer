import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './components/home/HomePage.jsx/';
import Dashboard from './components/dashboard/Dashboard.jsx';
import LoginV2 from './components/auth/LoginV2.jsx';
import Signup from './components/auth/Signup.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/login" element={<LoginV2 />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
