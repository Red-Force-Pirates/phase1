import { Routes, Route } from 'react-router-dom';
import { TavernMain, TavernPage } from './export';

function Tavern() {
  return (
        <Routes>
            <Route path="tavern/page/:page" element={<TavernPage />}/>
        </Routes>
  );
}

export default Tavern;