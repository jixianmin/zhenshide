import axios from "axios";

export const getMovieList = async (params) => {
  const { data } = await axios.get("/v1/search/movie.json", {
    headers: {
      "X-Naver-Client-Id": "BClGla8oQsIyOxZzMn5d",
      "X-Naver-Client-Secret": "DhJYyb1Ohp",
    },
    params,
  });
  return data;
};

export const getBookList = async (params) => {
  const { data } = await axios.get("/v1/search/book.json", {
    headers: {
      "X-Naver-Client-Id": "BClGla8oQsIyOxZzMn5d",
      "X-Naver-Client-Secret": "DhJYyb1Ohp",
    },
    params,
  });
  return data;
};

export const getBookDetail = async (params) => {
  const { data } = await axios.get("/v1/search/book_adv.json", {
    headers: {
      "X-Naver-Client-Id": "BClGla8oQsIyOxZzMn5d",
      "X-Naver-Client-Secret": "DhJYyb1Ohp",
    },
    params,
  });
  return data;
};
