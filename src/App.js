import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Main from './components/Main';
import ViewEmp from './components/ViewEmp';
import AddEmp from './components/AddEmp';
import Edit from './components/Edit';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position='top-center' />
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/add' element={<AddEmp />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/view/:id' element={<ViewEmp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
