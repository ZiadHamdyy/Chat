import usericon from '../picture/user.png';
import appicon from '../picture/meetme.png';
import { Button } from '../components/ui/button.jsx';
import { InputFile } from '../components/ui/File.jsx';
import { InputWithLabel } from '../components/ui/InputWithLabel.jsx';

export default function Signup({ switchToLogin }){
    return (
        <>
          <div className="bg-gray-300 w-4/12 flex justify-center items-center flex-col flex-wrap p-8">
            <div className="bg-inherit w-20 h-20">
            <img className="w-20" src={appicon} alt="" />
            </div>
            <div className="text-gray-800 text-3xl font-bold	mt-7 mb-32">Sign Up</div>
            <div className="w-full h-2/6 flex flex-col flex-wrap justify-evenly">
              <Button onClick={switchToLogin}>Log In</Button>
              <Button>Google</Button>
            </div>
          </div>
  
          <div className="bg-gray-200 w-8/12 flex flex-col flex-wrap justify-center items-center px-8 pb-8">
            <div className="w-80 h-64 flex justify-center items-center flex-col">
              <div className="bg-gray-200 rounded-full	h-36 w-36">
                <img className="w-34" src={usericon} alt="" />
              </div>
              <div><InputFile/></div> 
            </div>
              <div className="w-full h-2/6 flex flex-col flex-wrap justify-between items-center">
                  <InputWithLabel textname="name"/>
                  <InputWithLabel textname="email"/>
                  <InputWithLabel textname="password"/>
              </div>
  
                <Button className="w-6/12 mt-10" onClick={switchToLogin}>Sign Up</Button>
  
            </div>
        </>
    )
  }