
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Tegelased from './Pages/Tegelased';
import TegelaseLisamine from './Pages/TegelaseLisamine';

function App() {
  return (
    <div>
      <Link to='/tegelase-lisamine'>
        <button>Tegelase lisamine</button>
      </Link>
      <Routes>
        <Route path='/' exact element={ <Tegelased /> } />
        <Route path='/tegelase-lisamine' exact element={ <TegelaseLisamine /> } />
      </Routes>
    </div>
  );
}

export default App;
