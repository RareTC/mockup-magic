import logo from '../../assets/images/mmLogo.png';
import "./NavBar.css";
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar">
        <img className="logo" src={logo} alt="Rabbit In Magician Hat Logo" />
      <div className="userFeatureNav">
        <ul className="link-ul">
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/mockup">Mockups</Link>
          </li>
          <li>
            <Link to="/saved">Saved Palettes</Link>
          </li>
        </ul>
        <ul className="userinfo">
            <li className="user-ul">Welcome, {user.name}</li>
            <li className="user-ul"><Link to="" onClick={handleLogOut}>Log Out</Link></li>
        </ul>
      </div>
    </nav>
  );
}