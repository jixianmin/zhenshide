import styled from "styled-components";
import { useEffect, useState } from "react";
import BookList from "../organisms/BookList";
import { getBookList } from "../../../apjs/naver";
import Pagination from "../organisms/Pagination";
import qs from "qs";
import { useNavigate, useLocation } from "react-router-dom";

const Book = () => {
  const [text, setText] = useState("");
  const [bookList, setBookList] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const { search } = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { items } = await getBookList({ query: text });
    setBookList(items);
  };

  useEffect(() => {
    const { query } = qs.parse(search.slice(1));
    if (query) {
      setQuery(query);
      setText(query);
    } else {
      reset();
    }
  }, [search]);

  const reset = () => {
    setText("");
    setQuery("");
    setPage(1);
    setTotal(0);
    setBookList([]);
  };
  useEffect(() => {
    searchBook();
  }, [page, query]);

  const searchBook = async () => {
    if (query === "") return;
    const start = page * 10 - 9;
    const { items, total } = await getBookList({ query: start });
    setBookList(items);
    setTotal(total);

    const search = qs.stringify({ query: query, page: page });

    navigator({ search });
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
      <BookList data={bookList} />
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
const InputText = styled.input``;
const BtnSubmit = styled.button``;

export default Book;
