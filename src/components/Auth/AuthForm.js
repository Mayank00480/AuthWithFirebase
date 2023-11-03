import { useState, useRef, useContext } from 'react';

import classes from './AuthForm.module.css';
import StoreContext from '../../store/StoreContext';
const AuthForm = () => {
  const cntxt = useContext(StoreContext);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading , setIsLoading] = useState(false);
  const emailInput = useRef();
  const passwordInput = useRef();
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (e) =>{
    e.preventDefault();
      const emailInputHandler = emailInput.current.value;
      const passwordInputHandler = passwordInput.current.value;
      const myObj = {
        email : emailInputHandler,
        password : passwordInputHandler
       
      }
   //   console.log(myObj)
    let url; 
      if(isLogin){
url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCkhai6yGQVBzj73WIbzXoUIYZOJDTvX1Q'
      }
      else{
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCkhai6yGQVBzj73WIbzXoUIYZOJDTvX1Q'
      }
        setIsLoading(true);
        fetch(url,{
          method : 'POST',
          body : JSON.stringify(myObj)
      })
      .then((response) =>{
        setIsLoading(false);
        if(response.ok){
          console.log('success');
          return response.json().then(data =>{
            cntxt.addToken(data.idToken);
          })
        }
        else{
          return response.json().then(data => {
           let ErrorMessage = 'Authentication Failed'
            if( data && data.error && data.error.message){
              ErrorMessage = data.error.message
            }     
          alert(ErrorMessage);
          })
        }
      })
    
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref = {emailInput}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref = {passwordInput}
          />
        </div>
        <div className={classes.actions}>
       { isLoading? <p>Loading...</p> :<button type = "submit">{ isLogin? 'Login' : 'Signup' 
}</button>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
