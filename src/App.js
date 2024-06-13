import './App.css';
import { useState } from 'react';
import Signup from './pages/SignUp.js';
import LogIN from './pages/LogIn.js';
import Home from './pages/Home.js';

function App() {
  const [Page, setPage] = useState('Sign Up');

  const switchToSignup = () => setPage('Sign Up');
  const switchToLogin = () => setPage('Log In');
  const switchToHome = () => setPage('Home');
  return (
    <div className='App flex justify-center align-middle w-lvw h-lvh'>
      {Page === 'Sign Up' && <Signup switchToLogin={switchToLogin} />}
      {Page === 'Log In' && <LogIN switchToSignup={switchToSignup} switchToHome={switchToHome} />}
      {Page === 'Home' && <Home/>}
    </div>
  );
}

export default App;