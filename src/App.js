import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Cars from './components/Cars';
import Bikes from './components/Bikes';
import User from './components/User';
import UserDet from './components/UserDet';
import Admin from './components/Admin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Product />}>
          <Route index element={<Cars />}></Route>
          <Route path="/products/cars" element={<Cars />}></Route>
          <Route path="/products/bikes" element={<Bikes />}></Route>
        </Route>

        <Route path="user" element={<User />}>
          <Route path=":id" element={<UserDet />}></Route>
          <Route path="admin" element={<Admin />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
