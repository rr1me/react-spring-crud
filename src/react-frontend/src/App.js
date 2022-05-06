import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Books from './components/Books';

import Modal from './modal/Modal';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ModalProvider from './modal/ModalProvider';

export default function App() {

  return (
    <ModalProvider>
      <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<Books/>}/>

      </Routes>
      <Modal/>
      </Router>
    </ModalProvider>
  )
};