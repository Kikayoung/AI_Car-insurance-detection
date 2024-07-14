import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Form from './component/Form';
// import Form2 from './component/Form2';
// import Form3 from './component/Form3';
import Result from './component/Result';
import Home from './component/Home'; 
import './css/home.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <oi>
              <Link to="/" class="styled-link">
              <Link to="/" class="image-link">
              <img src="/car2.png" alt="Car Insurance Detection"/>
            </Link></Link>
            </oi>
          </ul>
        </nav>
        <Routes>
          <Route path="/form" element={<Form/>} />
          {/* <Route path="/form2" element={<Form2 />} />
          <Route path="/form3" element={<Form3 />} /> */}
          <Route path="/result" element={<Result />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
