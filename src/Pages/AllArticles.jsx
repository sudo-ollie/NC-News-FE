import "../Styling/ArticleCard.css";
import Header from "../Components/Header";
import ArticleMap from "../Components/ArticleMap";
import { useEffect, useState } from "react";

export default function ArticlesCards({ articles }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });
  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Header headerText={"Displaying All Articles"} />
          <ArticleMap articles={articles} loading={loading} />
        </>
      )}
    </>
  );
}
