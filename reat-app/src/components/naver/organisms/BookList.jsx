import styled from "styled-components";
import { Link } from "react-router-dom";

const BookList = ({ data }) => {
  return (
    <List>
      {data.map(({ isbn, image, title }) => (
        <Link to={`/naver/book/${isbn.split(" ")[1]}`}>
          <Item>
            <Thumbnail src={image} />
            <Title dangerouslySetInnerHTML={{ __html: title }} />
          </Item>
        </Link>
      ))}
    </List>
  );
};

const Thumbnail = styled.img`
  width: 170px;
  height: 270px;
`;
const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 15px;
`;
const Item = styled.div``;
const Title = styled.div``;

export default BookList;
