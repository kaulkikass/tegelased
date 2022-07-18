
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Tegelased from './Pages/Tegelased';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={ <Tegelased /> } />
      </Routes>
    </div>
  );
}

export default App;
