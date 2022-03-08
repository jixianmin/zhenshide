import "./App.css";
import React /*useState*/ from "react";
import TodoList from "./components/TodoList";

function App() {
  /*const [isShow, setIsShow] = useState(false);*/

  return (
    <>
      {/* <button
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
      {isShow && <TodoList />} */}
      <TodoList>Todo App을 만들자!</TodoList>
    </>
  );
}

export default App;
