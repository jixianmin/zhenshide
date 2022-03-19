import styled from "styled-components";

const Pagination = ({ onPageChange, total, nowPage }) => {
  const lastPage = Math.ceil(total / 10);
  const startPage = Math.ceil(nowPage / 10) * 10 - 9;
  const endPage = startPage + 9 > lastPage ? lastPage : startPage + 9;
  const pageList = [];

  for (let i = startPage; i <= endPage; i++) {
    pageList.push(i);
  }

  return (
    <List>
      {nowPage > 1 && (
        <Page onClick={() => onPageChange(nowPage - 1)}>이전</Page>
      )}
      {pageList.map((page) => (
        <Page
          active={page === nowPage}
          key={page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Page>
      ))}
      {nowPage < lastPage && (
        <Page onClick={() => onPageChange(nowPage + 1)}>다음</Page>
      )}
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
`;
const Page = styled.button`
  background: ${({ active }) => active && "#000"};
  color: ${({ active }) => active && "#ffff"};
`;

export default Pagination;
