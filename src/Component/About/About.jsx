import "./About.css";
import { useState, useRef } from "react";

function PicList(prop) {
  const {
    classes,
    text,
    image = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  } = prop;
  const [show, setShow] = useState(false);
  const pic = useRef(null);
  return (
    <div className={classes}>
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="pic"
        onMouseEnter={() => {
          setShow(true);
        }}
        onMouseLeave={() => {
          if (pic !== null) {
            pic.current.firstChild.classList.add("change");
          }
          setTimeout(() => {
            if (pic !== null) {
              pic.current.firstChild.classList.remove("change");
            }
            setShow(false);
          }, 900);
        }}
      />
      <div className="p-pic" ref={pic}>
        {show && <div className="p-pic-content">{text}</div>}
      </div>
    </div>
  );
}

function About(prop) {
  return (
    <main
      className={`about ${
        prop.aboutIndicator !== 1 ? "scroll-to-right" : "scroll-to-left"
      }`}
      ref={prop.parent}
    >
      <section className="about-content">
        <div className="about-img">
          <PicList
            classes="left-pic-list"
            text="Pontianak"
            image="./ponti.jpg"
          />
          <PicList
            classes="right-pic-list"
            text="8 Sept 2001"
            image="./birth.jpg"
          />
          <PicList
            classes="left-pic-list"
            text="Universitas Universal"
            image="./uvers.jpg"
          />
        </div>

        <div className="my-about">
          <div>
            <h1>About Me</h1>
            <p>
              I am a student from Universitas Universal Batam majoring in
              Informatics Engineering and I am interested in frontend
              development. I started learning frontend development basics in the
              second semester of my university. In the sixth semester, I was
              given an opportunity by Kampus Merdeka to learn frontend
              development at Ruangguru. I have previously worked at PT Glori
              Global Sukses as a Tracking Administrator. Currently, I am looking
              for a frontend developer internship to further improve my skills.
            </p>
          </div>
          <button type="button" className="cv">
            My Curriculum Vitae
          </button>
        </div>
      </section>
    </main>
  );
}

export default About;
