import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Dashboard/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
