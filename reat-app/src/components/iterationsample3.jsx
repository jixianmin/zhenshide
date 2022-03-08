import React, { useState } from "react";

const Sample = () => {
  const [message, setMessage] = useState("");
  const [news, setNews] = useState([]);

  const onClick = () => {
    const newNews = [...news, message];
    setNews(newNews);
    setMessage("");
  };
  const onChange = (e) => {
    setMessage(e.target.value);
  };
  //   const newsDelet = () => {
  //     const message = newNews.filter((news) => newNews.message);
  //   };

  return (
    <>
      <input onChange={onChange} news={news} value={message} />
      <button onClick={onClick}>추가</button>
      <ul>
        {news.map((e) => (
          <li /*onDoubleClick={() => newsDelete()}*/>{e}</li>
        ))}
        ;
      </ul>
    </>
  );
};

export default Sample;
/*return (
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
  );*/
