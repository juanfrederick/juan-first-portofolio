import { useRef } from "react";
import "./Nav.css";

function Nav(prop) {
  const { home, about, skills, portofolio, contact } = prop;
  const button = useRef(null);
  const side = useRef(null);

  const animate = () => {
    button.current.children[0].classList.toggle("child-top");
    button.current.children[1].classList.toggle("child-mid");
    button.current.children[2].classList.toggle("child-bot");
    side.current.classList.toggle("side-none");
  };

  return (
    <div className="nav-bar">
      <h4>Juan Frederick</h4>
      <ul className="nav-ul">
        <li onClick={home}>Home</li>
        <li onClick={about}>About</li>
        <li onClick={skills}>Skills</li>
        <li onClick={portofolio}>Portofolio</li>
        <li onClick={contact}>Contact</li>
      </ul>

      <div className="ham" ref={button} onClick={animate}>
        <div className="ham-child"></div>
        <div className="ham-child"></div>
        <div className="ham-child"></div>
      </div>

      <div className="side side-none" ref={side}>
        <ul>
          <li onClick={home}>Home</li>
          <li onClick={about}>About</li>
          <li onClick={skills}>Skills</li>
          <li onClick={portofolio}>Portofolio</li>
          <li onClick={contact}>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
