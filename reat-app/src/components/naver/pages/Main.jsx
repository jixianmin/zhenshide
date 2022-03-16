import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <Wrapper>
      <PageTitle>Movie & Book</PageTitle>
      <Img src="http://ojsfile.ohmynews.com/STD_IMG_FILE/2015/0422/IE001822443_STD.jpg" />
      <Link to="/naver/movie">
        <BtnLink>영화 검색</BtnLink>
      </Link>
      <Img src="https://img.huffingtonpost.com/asset/5d8142303b0000039fd64de0.jpeg?ops=scalefit_630_noupscale" />
      <Link to="/naver/book">
        <BtnLink>책 검색</BtnLink>
      </Link>
    </Wrapper>
  );
};

const Img = styled.img`
  width: 80px;
  height: 30px;
`;

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
// const Link = styled.link`
//   text-decoration-line: none;
// `;
const BtnLink = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 80vw;
  height: 50px;
  margin: 20px;
  background-color: skyblue;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;

export default Main;
