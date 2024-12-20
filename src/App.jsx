import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Articles from "./components/Articles/Articles";
import IndividualArticle from "./components/IndividualArticle/IndividualArticle";
import { Route, Routes } from "react-router-dom";
import Topics from "./components/Topics/Topics";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Articles />} exact /> */}
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<IndividualArticle />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/user-login" element={<LoginPage />}></Route>
      </Routes>
      <br></br>

      <Footer />
    </Container>
  );
}

export default App;
