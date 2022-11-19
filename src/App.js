import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import DashboardHome from './components/Dashboard/DashboardHome/DashboardHome';
import AddEvent from './components/Dashboard/AddEvent/AddEvent';
import RequireAuth from './components/Auth/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/dashboard' element={
          <RequireAuth> 
            <DashboardHome />
          </RequireAuth>
        } />
        <Route path='/add-event' element={
        <RequireAuth> 
          <AddEvent />
        </RequireAuth>
        } />
      </Routes>
    </div>
  );
}

export default App;
