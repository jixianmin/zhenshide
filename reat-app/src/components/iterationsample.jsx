import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [text, setText] = useState("");
  const [nextId, setNextId] = useState(5);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    const newNames = [...names, { id: nextId, text: text }];
    setNames(newNames);
    setText("");
    setNextId(nextId + 1);
  };

  const handleDelete = (id) => {
    //console.log(id);
    const newNames = names.filter((name) => name.id !== id);
    setNames(newNames);
  };

  return (
    <div>
      <input onChange={handleChange} value={text} />
      <button onClick={handleClick}>추가</button>
      <ul>
        {names.map(({ id, text }) => (
          <li key={id} onDoubleClick={() => handleDelete(id)}>
            {id}: {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IterationSample;
