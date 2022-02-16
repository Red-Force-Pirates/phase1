import "./assets/css/App.css";
import { Routes, Route } from 'react-router-dom';
import { Main, Login, Logout, Register, Roadmap, Concept } from './components/export';
import Tavern from './components/route_tavern';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/roadmap" element={<Roadmap/>}/>
        <Route exact path="/concept" element={<Concept/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/logout" element={<Logout />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
      <Tavern />
    </>
  );
}

export default App;
