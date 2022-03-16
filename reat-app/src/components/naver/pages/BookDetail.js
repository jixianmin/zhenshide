import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookDetail } from "../../../apjs/naver";
import styled from "styled-components";

const BookDetail = () => {
  const [book, setBook] = useState({});
  const params = useParams();
  const { isbn } = params;

  useEffect(() => {
    searchBook();
  }, []);

  const searchBook = async () => {
    const result = await getBookDetail({ d_isbn: isbn });
    setBook(result.items[0]);
  };

  return (
    <Wrapper>
      <Img src={book.image} />
      <Title>{book.title}</Title>
      <Description></Description>
    </Wrapper>
  );
};

const Img = styled.img`
  width: 50%;
  display: block;
  height: 50%;
`;
const Wrapper = styled.div`
  width: 100%;
  background-color: #b464eb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
`;
const Title = styled.h2``;
const Description = styled.h2``;

export default BookDetail;
