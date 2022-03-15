import styled from "styled-components";
import { useState } from "react";
import MovieList from "../organisms/MovieList";
import axios from "axios";
import { getMovieList } from "../../../apjs/naver";

const Movie = () => {
  const [text, setText] = useState("");
  const [movieList, setMovieList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { items } = await getMovieList({ query: text });
    setMovieList(items);
  };

  return (
    <Wrapper>
      <PageTitle>Movie</PageTitle>
      <Form onSubmit={handleSubmit}>
        <InputText
          placeholder="search"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <MovieList data={movieList} />
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
export default Movie;
