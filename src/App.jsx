import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Articles from "./components/Articles/Articles";
import IndividualArticle from "./components/IndividualArticle/IndividualArticle";
import Topics from "./components/Topics/Topics";
import LoginPage from "./components/LoginPage/LoginPage";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<IndividualArticle />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/user-login" element={<LoginPage />}></Route>
      </Routes>
      <br></br>

      <Footer />
    </>
  );
}

export default App;
