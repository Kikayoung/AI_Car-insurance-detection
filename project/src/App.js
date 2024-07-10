import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Form1 from './component/Form1';
import Form2 from './component/Form2';
import Form3 from './component/Form3';
import Form4 from './component/Form4';
import Result from './component/Result';
import Home from './component/Home'; 

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/form1" element={<Form1 />} />
          <Route path="/form2" element={<Form2 />} />
          <Route path="/form3" element={<Form3 />} />
          <Route path="/form4" element={<Form4 />} />
          <Route path="/result" element={<Result />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
