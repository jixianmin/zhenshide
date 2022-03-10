import React, { useRef, useState } from "react";
import styled from "styled-components";

const TodoList = () => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const nextId = useRef(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoList = [...todoList, { id: nextId.current, text: text }];
    setTodoList(newTodoList);
    setText("");
    nextId.current = nextId.current + 1; //nextId.current++
  };
  const onChange = (e) => {
    setText(e.target.value);
  };
  const handleDelete = (id) => {
    const newTodoList = todoList.filter((text) => text.id !== id);
    setTodoList(newTodoList);
  };

  const handleEdit = (id) => {
    const newText = prompt("입력하세요");
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.text = newText;
        return { id: todo.id, text: newText };
        //return{...todo,text:newText };
        //return todo.id === id ? {...todo,text: newText } : todo;
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  return (
    <Container>
      <Title>일정 관리</Title>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <InputText
            placeholder="할 일을 입력하세요"
            onChange={onChange}
            value={text}
          />
          <BtnSubmit handleSubmit={handleSubmit}>+</BtnSubmit>
        </InputWrapper>
      </form>
      <List>
        {todoList.map(({ id, text }) => (
          <Item isDone={true}>
            <label>
              <Checkbox type="checkbox" />
              <Content>{text}</Content>
            </label>
            <BtnWrapper>
              <BtnEdit onClick={() => handleEdit(id)}>수정</BtnEdit>
              <BtnDelete onClick={() => handleDelete(id)}>삭제</BtnDelete>
            </BtnWrapper>
          </Item>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin: 50px auto 0 auto;
  width: 354px;
  height: 500px;
  flex-direction: column;
  background-color: #c5c2c2;
  align-items: center;
  box-shadow: 0px 0px 20px #000;
`;
const Title = styled.div`
  font-size: 23px;
  font-weight: bold;
  color: white;
  background-color: #227ef6;
  width: 354px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InputWrapper = styled.div`
  width: 354px;
  height: 30px;
  display: flex;
`;
const InputText = styled.input`
  width: 300px;
  height: 25px;
  background-color: #011836;
  color: grey;
  margin: 0;
`;
const BtnSubmit = styled.button`
  margin: 0;
  width: 46px;
  height: 31px;
  border: 0;
  color: white;
  background-color: grey;
  font-size: 20px;
  cursor: pointer;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: white;
  justify-content: space-between;
  width: 354px;
  height: 40px;
  font-weight: bold;
  & + & {
    border-top: 1px solid #ddd;
  }
`;
const Checkbox = styled.input`
  margin-left: 14px;
  margin-right: 8px;
  cursor: pointer;
`;
const Content = styled.span``;
const BtnWrapper = styled.div``;
const BtnEdit = styled.button`
  background-color: #00ff40;
  color: white;
  border-radius: 30px;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
const BtnDelete = styled.button`
  background-color: red;
  color: white;
  border-radius: 30px;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export default TodoList;
