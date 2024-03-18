import './App.css';
import Example from './Example';
import Contact from './Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Example />} />
          <Route path='/Contact' element={<Contact />} />
          {/* <Route path='/' element={<Example/>}/> */}
        </Routes>
      </BrowserRouter>
      {/* <div className='parent'>
        <div className='child1'>
          <h1 >Nishant Shinde</h1>
          <p>Age</p>
          <p>22</p>
        </div>
        <div className='child2' >
          <Example />
        </div>
      </div> */}
    </>
  );
}

export default App;
