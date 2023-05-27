import { BsBook, BsTools, BsKeyboard } from "react-icons/bs";
import "./Skills.css";

function MySkill(prop) {
  const { emot, title, desc, children } = prop;
  return (
    <div className="skill-component">
      <h1 className="emoticon">{emot}</h1>
      <div className="text-skill">
        <h3>{title}</h3>
        <p>{desc}</p>
        {children}
      </div>
    </div>
  );
}

function Skills(prop) {
  return (
    <main className="skills" ref={prop.parent}>
      <div className="skills-container">
        <h1 className="skills-title">My Skills</h1>
        <section className="skills-list">
          <MySkill emot={<BsBook size={70} />} title="Natural Language">
            <ul>
              <li>Bahasa Indonesia</li>
              <li>English</li>
              <li>Mandarin</li>
            </ul>
          </MySkill>
          <MySkill emot={<BsKeyboard size={70} />} title="Programming Language">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>C++</li>
            </ul>
          </MySkill>
          <MySkill emot={<BsTools size={70} />} title="Tools">
            <ul>
              <li>Git</li>
              <li>Github</li>
              <li>React JS</li>
              <li>Tailwind CSS</li>
            </ul>
          </MySkill>
        </section>
      </div>
    </main>
  );
}

export default Skills;
