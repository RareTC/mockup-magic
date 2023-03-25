import logo from '../../assets/images/mmLogo.png';
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
      <Link to="">Home</Link>
      &nbsp; | &nbsp;
      <Link to="">Saved Palettes</Link>
      &nbsp;&nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}