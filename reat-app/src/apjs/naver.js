import axios from "axios";

export const getMovieList = async (params) => {
  await axios.get("/v1/search/movie.json", {
    headers: {
      "X-Naver-Client-Id": "BClGla8oQsIyOxZzMn5d",
      "X-Naver-Client-Secret": "DhJYyb1Ohp",
    },
    params,
  });
  return XPathResult.data;
};

export const getBookList = async (params) => {
  await axios.get("/v1/search/book.json", {
    headers: {
      "X-Naver-Client-Id": "BClGla8oQsIyOxZzMn5d",
      "X-Naver-Client-Secret": "DhJYyb1Ohp",
    },
    params,
  });
  return XPathResult.data;
};
