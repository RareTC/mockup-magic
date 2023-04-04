import logo from '../../assets/images/mmLogo.png';
import palette from '../../assets/images/palette.png'
import logout from '../../assets/images/logout.png'
import login from '../../assets/images/login.png'
import home from '../../assets/images/home.png'
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
      <Link to="/">
        <img className="logo" src={logo} alt="Rabbit In Magician Hat Logo" />
      </Link>
          { user ? 
         <h3 className='NavBar-userinfo'>
             Welcome, {user.name} 
        </h3>
        : ''
          }
      <div className="userFeatureNav">
        <ul className="link-ul">
          <li>
            <Link to="/">
              <button>
                <img className="NavBar-icons" src={home} alt="Palette Sample Icon" />
                &nbsp;Home
              </button>
            </Link>
          </li>
          <li>
            <Link to="/mockup">
              <button>
                <img className="NavBar-icons" src={palette} alt="Palette Sample Icon" />
                &nbsp; Mockups
              </button>
            </Link>
          </li>
          <li className="user-ul">
            <Link to="/authpage" onClick={handleLogOut}>
            { user ?
              <button>
                <img className="NavBar-icons" src={logout} alt="Palette Sample Icon" />
                &nbsp; Log Out
              </button>
              :
              // <button>
              //   <img className="NavBar-icons" src={login} alt="Palette Sample Icon" />
              //   &nbsp; Log In
              // </button>
              ''
                }
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}