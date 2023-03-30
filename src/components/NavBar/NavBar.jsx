import logo from '../../assets/images/mmLogo.png';
import palette from '../../assets/images/palette.png'
import logout from '../../assets/images/logout.png'
import home from '../../assets/images/home.png'
import save from '../../assets/images/save.png'
import "./NavBar.css";
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar" id='navbar'>
        <img className="logo" src={logo} alt="Rabbit In Magician Hat Logo" />
      <div className="userFeatureNav">
        {/* <ul className="userinfo">
            <li className="user-ul">Welcome, {user.name}</li>
        </ul> */}
        <ul className="link-ul">
          <li>
            <button>
            <img className="NavBar-icons" src={home} alt="Palette Sample Icon" />
              <Link to="">Home</Link>
            </button>
          </li>
          <li>
            <button>
              <img className="NavBar-icons" src={palette} alt="Palette Sample Icon" />
              <Link to="/mockup">Mockups</Link>
            </button>
          </li>
          <li>
            <button>
            <img className="NavBar-icons" src={save} alt="Palette Sample Icon" />
              <Link to="/saved">Saved Palettes</Link>
            </button>
          </li>
          <li className="user-ul">
            <button>
            <img className="NavBar-icons" src={logout} alt="Palette Sample Icon" />
              <Link to="" onClick={handleLogOut}>Log Out</Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}