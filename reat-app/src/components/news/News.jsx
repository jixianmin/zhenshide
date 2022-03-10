import NewsList from "./NewsList";
import Categories from "./Categories";
import { useState } from "react";
import { useParams } from "react-router-dom";

const News = () => {
  const params = useParams();
  console.log(params);
  const category = params.category || "all";
  //  const [category, setCategory] = useState("all");
  //  const onSelect = (category) => setCategory(category);

  return (
    <>
      <Categories category={category} /*onSelect={onSelect}*/ />
      <NewsList category={category} />
    </>
  );
};

export default News;
