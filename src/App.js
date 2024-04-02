import logo from './logo.svg';
import './App.css';


import Wel from './Components/Welcome/Wel';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Header from './Components/Header/Header';
import Educ from './Components/Education/Educ';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Headers from './Components/Headers/Headers';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <Wel/>
      <Routes>
  
        <Route path="/about" element={<About/>}></Route>
        <Route path="/welcome" element={<Wel/>}></Route>
        <Route path="/skills" element={<Skills/>}></Route>
        <Route path="/header" element={<Header/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/education" element={<Educ/>}></Route>
        <Route path="/headers" element={<Headers/>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
