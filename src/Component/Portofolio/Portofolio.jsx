import "./Portofolio.css";
import { useState } from "react";
import { MdClose, MdArrowDropDown } from "react-icons/md";

function Card() {
  const [card, setCard] = useState(false);
  const [close, setClose] = useState(false);
  const [drop, setDrop] = useState(true);

  return (
    <section className="card">
      <div className="visible-card">
        <img
          src="https://plus.unsplash.com/premium_photo-1683408267588-ebc95a4cf9a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
          className="card-image"
        />
        <p className="card-title">Hello</p>
        {drop && (
          <MdArrowDropDown
            size={30}
            className="dropdown"
            onClick={() => {
              setCard(true);
              setClose(true);
              setDrop(false);
            }}
          />
        )}
        {close && (
          <MdClose
            className="close"
            size={30}
            onClick={() => {
              setCard(false);
              setClose(false);
              setDrop(true);
            }}
          />
        )}
      </div>
      {card && (
        <div className="invi-card">
          <p>
            Ini website pertama yang saya buat, tidak terlalu bagus hanya ingin
            menunjukan betapa bangga ketika saya dapat membuat website
          </p>
          <p>
            Github link :{" "}
            <a
              href="https://github.com/juanfrederick/UTS_Html_Css"
              target="blank"
            >
              https://github.com/juanfrederick/UTS_Html_Css
            </a>
          </p>
        </div>
      )}
    </section>
  );
}

function Portofolio(prop) {
  return (
    <section className="portofolio-container" ref={prop.parent}>
      <main className="portofolio">
        <h1 className="portofolio-title">Portofolio</h1>
        <section className="card-container">
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </section>
  );
}

export default Portofolio;
