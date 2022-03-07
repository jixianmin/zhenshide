import React, { useState } from "react";

const Sample = () => {
  const [news, setNews] = useState([]);
  const [message, setMessage] = useState("");

  const onClick = () => {
    const newNews = [...news, message];
    setNews(newNews);
    setMessage("");
  };

  const onChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      <input onChange={onChange} value={message} />
      <button onClick={onClick}>추가</button>
      <ul>
        {news.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </>
  );
};

export default Sample;
