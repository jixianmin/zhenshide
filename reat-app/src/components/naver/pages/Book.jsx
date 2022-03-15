import styled from "styled-components";
import { useState } from "react";
import MovieList from "../organisms/MovieList";
import axios from "axios";
import { getBookList } from "../../../apjs/naver";

const Book = () => {
  const [text, setText] = useState("");
  const [bookList, setBookList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { items } = await getBookList({ query: text });
    setBookList(items);
  };

  return (
    <Wrapper>
      <PageTitle>Book</PageTitle>
      <Form onSubmit={handleSubmit}>
        <InputText
          placeholder="search"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <MovieList data={bookList} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: #b464eb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const PageTitle = styled.h1`
  margin: 0;
  text-align: center;
  color: white;
  padding: 10px;
`;
const Form = styled.form``;
const InputText = styled.input``;
const BtnSubmit = styled.button``;

export default Book;
