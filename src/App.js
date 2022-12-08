import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Main from './components/Main';
import ViewEmp from './components/ViewEmp';
import AddEditEmp from './components/AddEditEmp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position='top-center' />
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/add' element={<AddEditEmp />} />
          <Route path='/edit/:id' element={<AddEditEmp />} />
          <Route path='/view/:id' element={<ViewEmp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
