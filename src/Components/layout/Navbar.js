import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
    return ( 
        <header className="header">
      <div className="logo">React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/MovieApi'>Movie Finder</Link>
          </li>
          <li>
            <Link to='/favorites'>My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
     );
}
 
export default Navbar;