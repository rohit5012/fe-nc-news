import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Articles from "./components/Articles/Articles";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/articles" element={<Articles />} />
      </Routes>
      <br></br>

      <Footer />
    </>
  );
}

export default App;
