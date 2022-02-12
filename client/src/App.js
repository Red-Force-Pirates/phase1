import "./assets/css/App.css";
import { Routes, Route } from 'react-router-dom';
import { Main, Login, Logout, Register, Roadmap } from './components/export';
import Tavern from './components/route_tavern';
import Vault from './components/Vault/Vault';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/roadmap" element={<Roadmap/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/logout" element={<Logout />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/vault" element={<Vault />}/>
      </Routes>
      
      <Tavern />
    </>
  );
}

export default App;
