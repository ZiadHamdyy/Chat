import './App.css';
import { useContext } from 'react';
import Signup from './pages/SignUp.jsx';
import LogIN from './pages/LogIn.jsx';
import Profile from './pages/Profile.jsx';
import Home from './pages/Home.jsx';
import { AuthContext } from './context/AuthContext.jsx';

import { Route, Routes, Navigate } from 'react-router-dom';
import { ChatContextProvider } from './context/ChatContext.jsx';
import Users from './pages/Users.jsx';
import Groups from './pages/Groups.jsx';
import { GroupContextProvider } from './context/GroupContext.jsx';
function App() {
  const {user} = useContext(AuthContext)
  // const [Page, setPage] = useState('Sign Up');

  // const switchToSignup = () => Navigate('/signup')
  // const switchToLogin = () => Navigate('/login');
  // const switchToHome = () => setPage('Home');
  return (
    <>
    <ChatContextProvider user={user}>
    <GroupContextProvider user={user}>
    <div className='App flex w-lvw h-lvh'>
        <Routes>
        <Route path='/' element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path='/signup' element={user ? <Navigate to="/" /> : <Signup />} />
          <Route path='/login' element={user ? <Navigate to="/" /> : <LogIN />} />
          <Route path='/profile' element={user ? <Profile /> : <Navigate to="/"/>} />
          <Route path='/Users' element={user ? <Users /> : <Navigate to="/"/>} />
          <Route path='/Groups' element={user ? <Groups /> : <Navigate to="/"/>} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
    </div>
    </GroupContextProvider>
    </ChatContextProvider>
    </>
    
    // <div className='App flex justify-center align-middle w-lvw h-lvh'>
    //   <Routes>
    //     <Route path='/' element={<Home/>}/>
    //     <Route path='/signup' element={<Signup/>}/>
    //     <Route path='/login' element={<LogIN/>}/>
    //     <Route path='*' element={<Navigate to="/"/>}/>
    //   </Routes>
    //   {/* {Page === 'Sign Up' && <Signup switchToLogin={switchToLogin} />}
    //   {Page === 'Log In' && <LogIN switchToSignup={switchToSignup} switchToHome={switchToHome} />}
    //   {user ? <Home/> : <Signup switchToLogin={switchToLogin} />} */}
    // </div>
  );
}

export default App;