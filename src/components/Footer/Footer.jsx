import { Link } from 'react-router-dom';
import git  from '../../assets/images/git.png';
import linkedIn  from '../../assets/images/linkedIn.png';
import './Footer.css';

export default function Footer() {
    return (
        <div className="Footer-container" id="footer">
            <a href="https://github.com/RareTC" target="_blank">
                <img src={git} className='git' />
            </a>
            <a href="https://www.linkedin.com/in/-trevorcampbell" target="_blank"> 
                <img src={linkedIn} className='linkedIn' />
            </a>
      </div>
    );
}