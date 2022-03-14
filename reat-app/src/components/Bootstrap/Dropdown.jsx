import styled from "styled-components";
import React, { useEffect, useState, useRef } from "react";

const Dropdown = () => {
  const [isShow, setShow] = useState(true);
  const buttonE1 = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      console.log(e.target, buttonE1.current);
      if (e.target !== buttonE1.current) setShow(false);
    };
    document.body.addEventListener("click", onClick);

    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <Wrapper>
      <Button ref={buttonE1} onClick={() => setShow(!isShow)}>
        Dropdown Button
      </Button>
      {isShow && (
        <List>
          <Item>Action</Item>
          <Item>Another Action</Item>
          <Item>Something else</Item>
        </List>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;
const Button = styled.button`
  width: 170.25px;
  height: 38px;
  color: #ffffff;
  background-color: #0a58ca;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin: 10px 10px 5px 40px;
  font-size: 16px;
  :after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }
`;
const List = styled.ul`
  position: absolute;
  background-color: #ffffff;
  padding: 8px 0px;
  border: 1px #dee2e6 solid;
  width: 160px;
  height: 114px;
  left: 40px;
  top: 35px;
  list-style: none;
  border-radius: 5px;
`;
const Item = styled.li`
  width: 158px;
  height: 32px;
  color: #212529;
  padding: 4px 16px;
  font-size: 16px;
`;

export default Dropdown;
