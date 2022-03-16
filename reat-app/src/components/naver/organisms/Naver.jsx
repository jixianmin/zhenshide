import styled from "styled-components";
import TopNav from "./TopNav";
import { Outlet } from "react-router-dom";

const Naver = () => {
  return (
    <Wrapper>
      <TopNav />
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #b464eb;
  min-height: 100vh;
`;

export default Naver;
