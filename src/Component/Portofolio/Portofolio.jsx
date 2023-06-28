import "./Portofolio.css";
import { useEffect, useState } from "react";
import { MdClose, MdArrowDropDown } from "react-icons/md";
import { data } from "../../data";

function Card({ title, image, text, link }) {
  const [card, setCard] = useState(false);
  const [close, setClose] = useState(false);
  const [drop, setDrop] = useState(true);

  return (
    <section className="card">
      <div className="visible-card">
        <img src={image} alt={title} className="card-image" />
        <p className="card-title">{title}</p>
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
          <p>{text}</p>
          <p>
            Github link :{" "}
            <a href={link} target="blank">
              {link}
            </a>
          </p>
        </div>
      )}
    </section>
  );
}

function ButtonContainer({
  page,
  totalPage,
  setPage,
  setSmallIndicator,
  setBigIndicator,
  smallIndicator,
  bigIndicator,
}) {
  return (
    <div className="button-container">
      {page === 1 ? undefined : (
        <button
          onClick={() => {
            setPage((page -= 1));
            setSmallIndicator((smallIndicator -= 3));
            setBigIndicator((bigIndicator -= 3));
          }}
        >
          prev
        </button>
      )}
      {page === totalPage ? undefined : (
        <button
          onClick={() => {
            setPage((page += 1));
            setSmallIndicator((smallIndicator += 3));
            setBigIndicator((bigIndicator += 3));
          }}
        >
          next
        </button>
      )}
    </div>
  );
}

function Portofolio(prop) {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [smallIndicator, setSmallIndicator] = useState(0);
  const [bigIndicator, setBigIndicator] = useState(2);

  useEffect(() => {
    setTotalPage(Math.ceil(data.length / 3));
  }, []);

  return (
    <section className="portofolio-container" ref={prop.parent}>
      <main className="portofolio">
        <h1 className="portofolio-title">Portofolio</h1>
        <section className="card-container">
          {data.map((val, index) => {
            if (index >= smallIndicator && index <= bigIndicator) {
              return <Card {...val} key={val.title} />;
            }
          })}
        </section>
        <ButtonContainer
          page={page}
          totalPage={totalPage}
          setPage={setPage}
          smallIndicator={smallIndicator}
          setSmallIndicator={setSmallIndicator}
          bigIndicator={bigIndicator}
          setBigIndicator={setBigIndicator}
        />
      </main>
    </section>
  );
}

export default Portofolio;
