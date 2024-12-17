import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>NC News App</h1>
      <nav>
        <Link to="/" className="header_link">
          Home
        </Link>
        <br></br>
        <Link to="/articles" className="header_link">
          Articles
        </Link>
      </nav>
    </header>
  );
};

export default Header;