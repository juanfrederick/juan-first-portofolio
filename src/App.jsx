import { useState, useRef } from "react";

import Nav from "./Component/Nav/Nav";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Skills from "./Component/Skills/Skills";
import Portofolio from "./Component/Portofolio/Portofolio";
import Contact from "./Component/Contact/Contact";

function App() {
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [skills, setSkills] = useState(false);
  const [portofolio, setPortofolio] = useState(false);
  const [contact, setContact] = useState(false);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const portRef = useRef(null);
  const contactRef = useRef(null);

  const changeHome = () => {
    if (about === true) {
      aboutRef.current.classList.add("reverse-to-left");
    } else if (skills === true) {
      skillsRef.current.classList.add("reverse-to-left");
    } else if (portofolio === true) {
      portRef.current.classList.add("reverse-to-left");
    } else if (contact === true) {
      contactRef.current.classList.add("reverse-to-left");
    }
    setTimeout(() => {
      setHome(true);
      setAbout(false);
      setSkills(false);
      setPortofolio(false);
      setContact(false);
    }, 450);
  };

  const changeAbout = () => {
    if (home === true) {
      homeRef.current.classList.add("reverse-to-right");
    } else if (skills === true) {
      skillsRef.current.classList.add("reverse-to-left");
    } else if (portofolio === true) {
      portRef.current.classList.add("reverse-to-left");
    } else if (contact === true) {
      contactRef.current.classList.add("reverse-to-left");
    }
    setTimeout(() => {
      setAbout(true);
      setHome(false);
      setSkills(false);
      setPortofolio(false);
      setContact(false);
    }, 450);
  };

  const changeSkills = () => {
    if (home === true) {
      homeRef.current.classList.add("reverse-to-right");
    } else if (about === true) {
      aboutRef.current.classList.add("reverse-to-right");
    } else if (portofolio === true) {
      portRef.current.classList.add("reverse-to-left");
    } else if (contact === true) {
      contactRef.current.classList.add("reverse-to-left");
    }
    setTimeout(() => {
      setSkills(true);
      setHome(false);
      setAbout(false);
      setPortofolio(false);
      setContact(false);
    }, 450);
  };

  const changePortofolio = () => {
    if (home === true) {
      homeRef.current.classList.add("reverse-to-right");
    } else if (about === true) {
      aboutRef.current.classList.add("reverse-to-right");
    } else if (skills === true) {
      skillsRef.current.classList.add("reverse-to-right");
    } else if (contact === true) {
      contactRef.current.classList.add("reverse-to-left");
    }
    setTimeout(() => {
      setPortofolio(true);
      setSkills(false);
      setHome(false);
      setAbout(false);
      setContact(false);
    }, 450);
  };

  const changeContact = () => {
    if (home === true) {
      homeRef.current.classList.add("reverse-to-right");
    } else if (about === true) {
      aboutRef.current.classList.add("reverse-to-right");
    } else if (skills === true) {
      skillsRef.current.classList.add("reverse-to-right");
    } else if (portofolio === true) {
      portRef.current.classList.add("reverse-to-right");
    }
    setTimeout(() => {
      setContact(true);
      setPortofolio(false);
      setSkills(false);
      setHome(false);
      setAbout(false);
    }, 450);
  };

  return (
    <div className="container">
      <Nav
        home={changeHome}
        about={changeAbout}
        skills={changeSkills}
        portofolio={changePortofolio}
        contact={changeContact}
      />
      {home && <Home parent={homeRef} />}
      {about && <About parent={aboutRef} />}
      {skills && <Skills parent={skillsRef} />}
      {portofolio && <Portofolio parent={portRef} />}
      {contact && <Contact parent={contactRef} />}
    </div>
  );
}

export default App;
