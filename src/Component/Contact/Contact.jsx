import "./Contact.css";
import juju from "./juan.jpg";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";

function Contact(prop) {
  return (
    <section className="contact-container scroll-to-left" ref={prop.parent}>
      <main className="contact">
        <div className="contact-image-container">
          <img src={juju} alt="mukaku" />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="wave"
        >
          <path
            fill="#133c55"
            fillOpacity="1"
            d="M0,128L30,112C60,96,120,64,180,69.3C240,75,300,117,360,149.3C420,181,480,203,540,181.3C600,160,660,96,720,101.3C780,107,840,181,900,181.3C960,181,1020,107,1080,101.3C1140,96,1200,160,1260,170.7C1320,181,1380,139,1410,117.3L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
        <div className="contact-content">
          <h1>Juan Frederick</h1>
          <h3>Frontend Developer Wannabe!</h3>
          <p>Universitas Universal Student</p>

          <ul className="social">
            <li>
              <a
                href="https://www.linkedin.com/in/juan-frederick-6ab01921b/"
                target="blank"
              >
                <AiOutlineLinkedin size={30} />
              </a>
            </li>
            <li>
              <a href="https://github.com/juanfrederick" target="blank">
                <AiOutlineGithub size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/juanfrederick_/"
                target="blank"
              >
                <AiOutlineInstagram size={30} />
              </a>
            </li>
            <li>
              <a href="https://wa.me/089669588039" target="blank">
                <AiOutlineWhatsApp size={30} />
              </a>
            </li>
            <li>
              <a href="mailto:juan.frederick58@gmail.com">
                <AiOutlineMail size={30} />
              </a>
            </li>
          </ul>
        </div>
      </main>
    </section>
  );
}

export default Contact;
