import { Routes, Route } from 'react-router-dom';
import { TavernPage, TavernWrite } from './export';

function Tavern() {
  return (
        <Routes>
            <Route path="tavern/page/:page" element={<TavernPage />}/>
            <Route path="tavern/write" element={<TavernWrite />}/>
        </Routes>
  );
}

export default Tavern;