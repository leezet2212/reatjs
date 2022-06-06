import React, { useState } from "react";
import TodoList from "./screen/todo-list";
import Content from "./screen/content";
import Responsive from "./screen/responsive";
// import TheBand from "./screen/layout/the-band";
import "./App.css";

const gifts = ["CPU i9", "RAM 32G RGB", "RGB Keyboard", "I7 Core"];
const courses = [
  {
    id: 1,
    language: "HTML,CSS",
  },
  {
    id: 2,
    language: "JAVASCRIPT",
  },
  {
    id: 3,
    language: "VUE",
  },
  {
    id: 4,
    language: "REACT",
  },
];
function App() {
  const [gift, setGift] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState([]);
  const [show, setShow] = useState(false);
  const handleGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  };
  const handleRegister1 = () => {
    console.log({
      name,
      email,
    });
  };
  const handleChecked = (id) => {
    setChecked((pre) => {
      const isChecked = checked.includes(id);
      console.log(isChecked);
      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...pre, id];
      }
    });
  };
  const handleRegisterCheck = () => {
    console.log({ ids: checked });
  };
  return (
    <>
      {/* <TheBand></TheBand> */}
      <Responsive ></Responsive>
      <br />
      <h1 className="mobile">Mobile</h1>
      <h1 className="tablet">Tablet</h1>
      <h1 className="pc">PC</h1>
      <div style={{ padding: 32 }}>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          Toggle
        </button>
        {show && <Content />}
        <TodoList />
      </div>
      <div style={{ padding: 32 }}>
        <h1>{gift || "Chưa có phần thưởng"}</h1>
        <button onClick={handleGift}>Lấy Thưởng</button>
      </div>
      <div style={{ padding: 32 }}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleRegister1}>Change</button>
      </div>
      <div style={{ padding: 32 }}>
        {courses.map((course) => (
          <div key={course.id}>
            <input
              type="checkbox"
              checked={checked.includes(course.id)}
              onChange={() => handleChecked(course.id)}
            />
            {course.language}
          </div>
        ))}
        <button onClick={handleRegisterCheck}>Register</button>
      </div>
    </>
  );
}

export default App;
