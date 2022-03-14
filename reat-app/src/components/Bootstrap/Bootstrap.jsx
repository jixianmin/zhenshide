import Accordion from "./Accordion2";
import { accordionData, carouselData } from "../datas/bootstrap";
import Dropdown from "./Dropdown";
import Carousel from "./Carousel";
import Carousel2 from "./Carousel2";
import ModalFirst from "./Modal";
import { useState } from "react";
import styled from "styled-components";

const Bootstrap = () => {
  const [showModalFirst, setShowModalFirst] = useState(false);
  const [name, setName] = useState("홍길동");

  const onClose = () => {
    setShowModalFirst(false);
  };

  const onChange = (text) => setName(text);

  return (
    <>
      <h1>부트스트랩</h1>
      <br />
      <Accordion data={accordionData} />
      <Dropdown />
      <h2>
        이름:{name}
        <Button onClick={() => setShowModalFirst(true)}>이름바꾸기</Button>
      </h2>
      <h2>
        닉네임 : <Button>닉네임바꾸기</Button>
      </h2>
      <Carousel data={carouselData} />
      <Carousel2 data={carouselData} />

      <Button onClick={() => setShowModalFirst(true)}>ModalFirst</Button>
      {showModalFirst && <ModalFirst name={name} onClose={onClose} />}
    </>
  );
};

const Button = styled.button`
  width: 100px;
  height: 42px;
  background-color: grey;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: center;
  margin: 10px;
`;

export default Bootstrap;
