import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import HomePage from '../../pages/HomePage/HomePage';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  return (
   <> {!showAuth ? 
      <>
      <HomePage showAuth={showAuth} setShowAuth={setShowAuth} isAuth={true} />
       </>
       :
    <main className='AuthPage-container'>
    <>
    <h1 className='AuthPage-login'>Log In Below </h1>
    { showSignUp ?
      <SignUpForm setUser={setUser} />
      :
      <LoginForm setUser={setUser} />
    } 
    </>
    <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
    </main>
  }</>
  );
}