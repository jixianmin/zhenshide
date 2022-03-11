import styled, { css } from "styled-components";
import React, { useState } from "react";

const Accordion = ({ data }) => {
  const _data = data.map((e) => ({ ...e, active: false }));
  const [newData, setNewData] = useState(_data);

  const handleClick = (id) => {
    const _newData = newData.map((e) => {
      if (id === e.id) {
        e.active = !e.active;
      }
      return e;
    });
    setNewData(_newData);
  };
  return (
    <List>
      {newData.map(({ id, title, content, active }) => (
        <Item key={id} active={active}>
          <Header onClick={() => handleClick(id)}>
            {title}
            <BtnArrow />
          </Header>
          <Body>{content}</Body>
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  border: 1px solid #ececec;
  border-radius: 4px;
  max-width: 800px;
  margin: 20px auto;
  padding: 0;
`;
const Item = styled.li`
  margin: 0;
  ${({ active }) =>
    active &&
    css`
      ${Header} {
        color: red;
        background-color: pink;
      }
      ${BtnArrow} {
        transform: rotate(-180deg);
      }
      ${Body} {
        display: block;
      } ;
    `}
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  height: 52px;
  border: 1px solid #ececec;
  padding: 0px 20px;
  justify-content: space-between;
  cursor: pointer;
`;
const BtnArrow = styled.button`
  transition: transform 0.5s;
  width: 20px;
  height: 20px;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
  background-color: transparent;
  border: none;
`;
const Body = styled.div`
  padding: 16px 20px;
  display: none;
`;
// color: #0c63e4 변환시 색상 파랑 아래 연한 파랑
// background-color: #e7f1ff
export default Accordion;
