import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Footer from './Components/Footer';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Error from './Pages/Error';
import { Logout } from './Pages/Logout';
import UploadNews from './News/UploadNews';
import AllNews from './News/AllNews';
import IndianNews from './News/IndianNews';
import InternationalNews from './News/InternationalNews';
import LocalNews from './News/LocalNews';
import TermsAndCondition from './Pages/TermsAndCondition';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/termsandconditions' element={<TermsAndCondition/>}/>
          <Route path='/uploadnews' element={<UploadNews/>}/>
          <Route path='*' element={<Error/>}/>
          <Route path='/news/allnews' element={<AllNews/>}/>
          <Route path='/news/indian' element={<IndianNews/>}/>
          <Route path='/news/international' element={<InternationalNews/>}/>
          <Route path='/news/local' element={<LocalNews/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
