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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './components/Pages/Checkout/Checkout';
import Header from './components/Home/Header/Header';
import Order from './components/Pages/Order/Order';
import Donation from './components/Pages/Donation/Donation';
import Blog from './components/Pages/Blog/Blog';

function App() {
  return (
    <div className="App"> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/donation' element={<Donation />} />
        <Route path='/blog' element={<Blog />} />

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
        <Route path='/checkout/:Id' element={
        <RequireAuth> 
          <Checkout />
        </RequireAuth>
        } />
        <Route path='/order' element={
        <RequireAuth> 
          <Order />
        </RequireAuth>
        } />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
