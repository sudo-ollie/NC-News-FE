import "../Styling/ArticleCard.css";
import Header from "../Components/Header";
import ArticleMap from "../Components/ArticleMap";
import NavBar from "../Components/NavBar";

export default function ArticlesCards({ articles }) {
  return (
    <>
      <NavBar />
      <Header headerText={"Displaying All Articles"} />
      <ArticleMap articles={articles} />
    </>
  );
}
