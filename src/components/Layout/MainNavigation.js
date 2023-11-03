import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import StoreContext from '../../store/StoreContext';
const MainNavigation = () => {
  const contxt = useContext(StoreContext);
  console.log(contxt)
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
         {contxt.token == null && <Link to='/auth'>Login</Link>}   
          </li>
          <li>
          {contxt.token != null && <Link to='/profile'>Profile</Link>}
          </li>
          <li>
          {contxt.token != null && <button onClick={() => contxt.removeToken()}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
