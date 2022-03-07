import "./App.css";
import Info from "./components/info";
import React, { useState } from "react";

function App() {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsShow(true);
        }}
      >
        나오기
      </button>
      <button
        onClick={() => {
          setIsShow(false);
        }}
      >
        숨기기
      </button>
      {isShow && <Info />}
    </>
  );
}

export default App;
