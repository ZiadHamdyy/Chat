import { InputWithLabel } from "../components/ui/InputWithLabel.jsx";
import { Button } from "../components/ui/button.jsx";
import appicon from '../picture/meetme.png';

export default function LogIN({ switchToSignup, switchToHome }){
    return (
      <>
            <div className="bg-gray-300 w-4/12 flex justify-center items-center flex-col flex-wrap p-8">
            <div className="bg-inherit w-20 h-20">
            <img className="w-20" src={appicon} alt="" />
            </div>
            <div className="text-gray-800 text-3xl font-bold	mt-7 mb-32">Log In</div>
            <div className="w-full h-2/6 flex flex-col flex-wrap justify-evenly">
              <Button onClick={switchToSignup}>Sign Up</Button>
              <Button>Google</Button>
            </div>
          </div>
  
          <div className="bg-gray-200 w-8/12 flex flex-col flex-wrap justify-center items-center px-8 pb-8">
              <div className="w-full h-2/6 flex flex-col flex-wrap justify-around items-center">
                  <InputWithLabel textname="email"/>
                  <InputWithLabel textname="password"/>
              </div>
  
                <Button className="w-6/12 mt-10" onClick={switchToHome}>Log In</Button>
  
            </div>
      </>
    );
  }