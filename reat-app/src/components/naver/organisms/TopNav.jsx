import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
const linkList = [
  { link: "/naver", name: "메인" },
  { link: "/naver/movie", name: "영화" },
  { link: "/naver/book", name: "책" },
];

const TopNav = () => {
  const { pathname } = useLocation();

  if (pathname === "/naver") return <></>;

  return (
    <Container>
      <Nav>
        {linkList.map(({ link, name }) => (
          <Link to={link} key={link}>
            <Button>{name}</Button>
          </Link>
        ))}
      </Nav>
    </Container>
  );
};

const Container = styled.header`
  height: 60px;
  border-bottom: 1px solid #efefef;
  margin: 0;
`;
const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  border: none;
  color: white;
  background-color: skyblue;
`;

export default TopNav;
