import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Articles from "./components/Articles/Articles";
import IndividualArticle from "./components/IndividualArticle/IndividualArticle";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<IndividualArticle />} />
      </Routes>
      <br></br>

      <Footer />
    </>
  );
}

export default App;
