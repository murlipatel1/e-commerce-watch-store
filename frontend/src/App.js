import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLoginSignup from './components/AdminLoginSignUp';
import UserLoginSignup from './components/UserloginSignUp';
import AdminDashboard from './components/AdminPage';
import ProductDisplay from './components/ProductDisplay';
import PaymentPage from './components/Payment';
import UpdateBillingAddress from './components/UpdateAddress';
import SupportCenter from './components/Supportcenter';
import Home from './components/Home/Home';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/adminlogin" element={<AdminLoginSignup />} />
        <Route path="/userlogin" element={<UserLoginSignup />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/productdisplay" element={<ProductDisplay />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/address" element={<UpdateBillingAddress />} />
        <Route path="/support" element={<SupportCenter />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
