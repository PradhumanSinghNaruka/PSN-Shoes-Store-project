import './App.css';

// import Home from '../src../Home';
import Home from './Home'; 
// import Cards from './Cards';
import Shoes from './Shoes/shoes'; 
import Men from './Middle/Men';
import Footer from './Footer';
import Signup from './Signup';
import { Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Card" element={<Shoes />}/>
        <Route path="/women" element={<Men />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/footer" element={<Footer />}/>
      </Routes>
      <Toaster />
      </div>
    </>
  );
}

export default App;
