import "./assets/css/App.css";
import { Routes, Route } from 'react-router-dom';
import { Main, Login, Logout, Register, Roadmap } from './components/export';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/roadmap" element={<Roadmap/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/logout" element={<Logout />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </>
  );
}

export default App;
