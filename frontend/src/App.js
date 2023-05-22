import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Register';
import Dashboard from './Dashboard';

function App() {



  return (

    <Routes>

      <Route path='/' element={<Register />} />
      <Route path='/:name' element={<Dashboard />} />

    </Routes>


  );
}

export default App;
