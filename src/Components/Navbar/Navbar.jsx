import React from 'react'
import './Navbar.css'

const Navbar = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
    
        <div>
      <nav className="navbar navbar-expand-lg  p-3 ">
  <div className="container-fluid ">
    <a className="navbar-brand" to="/welcome">Anumitha</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item px-2" >
          <a   onClick={() => scrollToSection('#aboutsec')} className="nav-link active " id="item1" aria-current="page" href="#aboutsec">About</a>
        </li>
        <li className="nav-item px-2" id="item2">
        <a  onClick={() => scrollToSection('#projectsec')} className="nav-link active "  id="item2" aria-current="page" href="#projectsec">Projects</a>
        </li>
        <li className="nav-item px-2" >
        <a onClick={() => scrollToSection('#skillsec')} className="nav-link active " id="item4" aria-current="page" href="#skillsec">Skills</a>
        </li>
        <li className="nav-item px-2" >
        <a  onClick={() => scrollToSection('#edusec')} className="nav-link active "  id="item3"aria-current="page" href="#edusec">Education</a>
        </li>
        
        <li className="nav-item px-2" >
        <a onClick={() => scrollToSection('#contactsec')} className="nav-link active " id="item4" aria-current="page" href="#contactsec">Contact</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar