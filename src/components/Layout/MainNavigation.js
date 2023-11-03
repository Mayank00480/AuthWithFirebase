import { Link ,useNavigate} from 'react-router-dom';

import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import StoreContext from '../../store/StoreContext';
const MainNavigation = () => {
  const nav = useNavigate();
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
         {localStorage.getItem("token") == undefined && <Link to='/auth'>Login</Link>}   
          </li>
          <li>
          {localStorage.getItem("token") != undefined && <Link to='/profile'>Profile</Link>}
          </li>
          <li>
          {localStorage.getItem("token") != undefined && <button onClick={() =>{ 
            localStorage.removeItem("token");
            contxt.removeToken()
            nav("/")
                         
          }}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
