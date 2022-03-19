// import "./App.css";
import React /*useState*/ from "react";
import News from "./components/news/News";
import TodoList from "./components/TodoList";
import Bootstrap from "./components/Bootstrap/Bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NaverMain from "./components/naver/pages/Main";
import NaverMovie from "./components/naver/pages/Movie";
import NaverBook from "./components/naver/pages/Book";
import NaverBookDetail from "./components/naver/pages/BookDetail";
import Naver from "./components/naver/organisms/Naver";
import Main from "./components/Main";

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
      {/* <TodoList>Todo App을 만들자!</TodoList> */}
      {/* <Axios></Axios> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:category" element={<News />} />
          <Route path="/bootstrap" element={<Bootstrap />} />
          <Route path="/naver" element={<Naver />}>
            <Route path="/naver" element={<NaverMain />} />
            <Route path="movie" element={<NaverMovie />} />
            <Route path="book" element={<NaverBook />} />
            <Route path="book/:isbn" element={<NaverBookDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
