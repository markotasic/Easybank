import { NavLink } from 'react-router-dom';

import Button from '../Button/Button';
import { LogoIcon } from '../../icons/icons';

const Header = () => {
  return (
    <header className='header'>
      <ul className='header-content'>
        <li>
          <LogoIcon />
        </li>
        <li className='header-links'>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/'>About</NavLink>
            </li>
            <li>
              <NavLink to='/'>Contact</NavLink>
            </li>
            <li>
              <NavLink to='/'>Blog</NavLink>
            </li>
            <li>
              <NavLink to='/'>Careers</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <Button>Request Invite</Button>
        </li>
      </ul>
    </header>
  );
};
export default Header;
