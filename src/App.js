import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FormProduct from './components/FormProduct';
import FormEditProduct from './components/FormEditProduct';

function App() {
  //javascript

  return (
    <BrowserRouter>

      <div className="App">
        {/* {HTML} */}
        <h1>From CRUD</h1>

        <Routes>
          <Route path='/' element={<FormProduct />}></Route>
          <Route path='/edit/:id' element={<FormEditProduct />}></Route>

        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
