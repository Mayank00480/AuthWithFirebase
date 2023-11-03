import classes from './ProfileForm.module.css';
import React,{useContext,useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import StoreContext from '../../store/StoreContext';
const ProfileForm = () => {
  const context = useContext(StoreContext);
  const navigate = useNavigate();
  const passwordData = useRef();
  const changePasswordHandler = (e) =>{
    e.preventDefault()
    console.log(passwordData.current.value);
         if(passwordData.current.value.trim().length >= 6){
              fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCkhai6yGQVBzj73WIbzXoUIYZOJDTvX1Q',{
                method : 'POST',
                body : JSON.stringify({
                  idToken : context.token,
                  password : passwordData.current.value
                })
              })
              .then(response =>  {
                console.log('success');
                navigate('/auth');
                context.removeToken();
              })
         }
  }
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref = {passwordData}/>
      </div>
      <div className={classes.action}>
        <button onClick = {changePasswordHandler}> Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
