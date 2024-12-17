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
        <Route path="/" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
