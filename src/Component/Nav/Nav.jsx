import { useRef } from "react";
import "./Nav.css";

function Nav(prop) {
  const {
    home,
    about,
    skills,
    portofolio,
    contact,
    setAboutIndicator,
    setSkillsIndicator,
    setPortofolioIndicator,
  } = prop;
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
        <li
          onClick={() => {
            home();
            setTimeout(() => {
              setAboutIndicator(1);
              setSkillsIndicator(1);
              setPortofolioIndicator(1);
            }, 450);
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            about();
            setTimeout(() => {
              setSkillsIndicator(1);
              setPortofolioIndicator(1);
            }, 450);
          }}
        >
          About
        </li>
        <li
          onClick={() => {
            skills();
            setTimeout(() => {
              setAboutIndicator(2);
              setPortofolioIndicator(1);
            }, 450);
          }}
        >
          Skills
        </li>
        <li
          onClick={() => {
            portofolio();
            setTimeout(() => {
              setAboutIndicator(2);
              setSkillsIndicator(2);
            }, 450);
          }}
        >
          Portofolio
        </li>
        <li
          onClick={() => {
            contact();
            setTimeout(() => {
              setAboutIndicator(2);
              setSkillsIndicator(2);
              setPortofolioIndicator(2);
            }, 450);
          }}
        >
          Contact
        </li>
      </ul>

      <div className="ham" ref={button} onClick={animate}>
        <div className="ham-child"></div>
        <div className="ham-child"></div>
        <div className="ham-child"></div>
      </div>

      <div className="side side-none" ref={side}>
        <ul>
          <li
            onClick={() => {
              home();
              setTimeout(() => {
                setAboutIndicator(1);
                setSkillsIndicator(1);
                setPortofolioIndicator(1);
              }, 450);
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              about();
              setTimeout(() => {
                setSkillsIndicator(1);
                setPortofolioIndicator(1);
              }, 450);
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              portofolio();
              setTimeout(() => {
                setAboutIndicator(2);
                setSkillsIndicator(2);
              }, 450);
            }}
          >
            Skills
          </li>
          <li
            onClick={() => {
              portofolio();
              setTimeout(() => {
                setAboutIndicator(2);
                setSkillsIndicator(2);
              }, 450);
            }}
          >
            Portofolio
          </li>
          <li
            onClick={() => {
              contact();
              setTimeout(() => {
                setAboutIndicator(2);
                setSkillsIndicator(2);
                setPortofolioIndicator(2);
              }, 450);
            }}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
