import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        {/* static navigation */}
        <li>
          <Link to="/home">Home</Link>{" "}
        </li>
        <li>
          <Link to="/aboutus">About us</Link>
        </li>
        <li>
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
