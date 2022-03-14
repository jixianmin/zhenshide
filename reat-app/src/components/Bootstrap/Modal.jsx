import styled from "styled-components";
import { useState } from "react";

const ModalFirst = ({ onClose, onChange, name }) => {
  const [text, setText] = useState(name);

  //const onChange = (text) => setName(text);
  const handleSave = () => {
    onChange(text);
    onClose();
  };

  return (
    <>
      <Backdrop onClick={onClose} />
      <Container>
        <DivHeader>이름바꾸기</DivHeader>
        <DivBody>
          <input onChange={(e) => setText(e.target.value)} value={text} />
        </DivBody>
        <DivFooter>
          <SaveChanges onClick={() => handleSave(true)}>
            Save changes
          </SaveChanges>
          <Close onClick={onClose}>Close</Close>
        </DivFooter>
      </Container>
    </>
  );
};

const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
const Container = styled.div`
  background: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  border-radius: 5px;
  border: 1px solid #dee2e6;
`;
const DivHeader = styled.div`
  color: #212529;
  font-size: calc(1.275rem + 0.3vw);
  font-weight: 500;
  width: 352.09px;
  height: 65.63px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  box-sizing: border-box;
  border: 1px solid #dee2e6;
`;
const DivBody = styled.div`
  color: #212529;
  width: 352.09px;
  height: 72px;
  padding-top: 15px;
  padding-left: 20px;
  box-sizing: border-box;
  border: 1px solid #dee2e6;
  font-size: 17px;
`;
const DivFooter = styled.div`
  width: 352.09px;
  height: 71px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  border: 1px solid #dee2e6;
`;
const Close = styled.div`
  width: 65.17px;
  height: 38px;
  box-sizing: border-box;
  color: #ffffff;
  background: #6c757d;
  margin: 4px;
  padding: 6px 12px;
  text-align: center;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
`;
const SaveChanges = styled.div`
  width: 124.41px;
  height: 38px;
  box-sizing: border-box;
  color: #ffffff;
  background: #0d6efd;
  margin: 0px 15px 0px 4px;
  padding: 6px 12px;
  text-align: center;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
`;

export default ModalFirst;
