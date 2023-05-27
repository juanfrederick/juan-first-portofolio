import "./Home.css";
import myPhoto from "./Juan.png";
import juanHead from "./Juan-head.png";

function Home(prop) {
  return (
    <section className="home scroll-to-right" ref={prop.parent}>
      <div className="text">
        <h1>Hello</h1>
        <h1 className="name">I'm Juan Frederick,</h1>
        <h3>Student at Universitas Universal</h3>
        <button type="button" className="contact-me">
          Contact Me!
        </button>
      </div>

      <div className="photo-cont">
        <img src={myPhoto} alt="gambar" />
        <img src={juanHead} alt="gambar" className="juan-head" />
      </div>
    </section>
  );
}

export default Home;
