import styled from "styled-components";
import { useEffect, useState } from "react";
import MovieList from "../organisms/MovieList";
import { getMovieList } from "../../../apjs/naver";
import { countryList, genreList } from "../../datas/naver";
import Pagination from "../organisms/Pagination";

const Movie = () => {
  const [page, setPage] = useState(1);
  const [text, setText] = useState("");
  const [country, setCountry] = useState("All");
  const [movieList, setMovieList] = useState([]);
  const [genre, setGenre] = useState("All");
  const [total, setTotal] = useState(0);
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    searchMovie();
  };

  useEffect(() => {
    searchMovie();
  }, [country, genre, page, query]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const searchMovie = async () => {
    if (!text) return;

    //const params = { query: text, country, genre };
    //if (country === "All") delete params.country;

    //const page = 1;
    //const start = 1;
    const start = page * 10 - 9;
    const params = { query: text, start };
    if (country !== "All") params.country = country;
    if (genre !== "All") params.genre = genre;

    const { items, total } = await getMovieList(params);
    setMovieList(items);
    setTotal(total);
  };

  return (
    <Wrapper>
      <PageTitle>Movie</PageTitle>
      <Form onSubmit={handleSubmit}>
        <select onChange={(e) => setCountry(e.target.value)} value={country}>
          <option value="All">전체</option>
          {countryList.map(({ code, name }) => (
            <option value={code} key={code}>
              {name}
            </option>
          ))}
        </select>
        <select onChange={(e) => setGenre(e.target.value)} value={country}>
          <option value="All">전체</option>
          {genreList.map(({ code, name }) => (
            <option value={code} key={code}>
              {name}
            </option>
          ))}
        </select>
        <InputText
          placeholder="search"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <MovieList data={movieList} />
      <Pagination
        nowPage={page}
        onPageChange={(page) => setPage(page)}
        total={total}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PageTitle = styled.h1`
  margin: 0;
  text-align: center;
  color: white;
  padding: 10px;
`;
const Form = styled.form``;
const InputText = styled.input`
  margin: 0 10px;
`;
const BtnSubmit = styled.button``;
export default Movie;
