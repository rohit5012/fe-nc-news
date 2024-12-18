import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Articles from "./components/Articles/Articles";
import IndividualArticle from "./components/IndividualArticle/IndividualArticle";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" exact />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<IndividualArticle />} />
      </Routes>
      <br></br>

      <Footer />
    </Container>
  );
}

export default App;
