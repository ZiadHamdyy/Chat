import React, { useContext } from 'react';
import { InputFile } from '../components/ui/File.jsx';
import usericon from '../picture/user (2).png';
import { InputWithLabel } from '../components/ui/InputWithLabel.jsx';
import { Button } from '../components/ui/button.jsx';
import { AuthContext } from '../context/AuthContext.jsx';

export default function Profile(){
  const { registerInfo, updateRegisterInfo, registerUser, registerLoading, user } = useContext(AuthContext)

/*   const byteCharacters = atob(user.profileImage);
const byteNumbers = new Array(byteCharacters.length);
for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
}
const byteArray = new Uint8Array(byteNumbers);
const blob = new Blob([byteArray], { type: 'image/png' });

// Create a URL for the Blob
const url = URL.createObjectURL(blob);

// Create an Image element
const img = new Image();

// Set the source of the Image element to the created URL
img.src = url;
let p
if(img.src){
  p= url;
}else{p = usericon} */
  return (
    <>
      <div className="bg-gray-200 w-full flex flex-col flex-wrap justify-center items-center px-8 pb-8">
            <div className="w-80 h-64 flex justify-center items-center flex-col">
              <div className="bg-gray-200 rounded-full	h-36 w-36">
                <img className="w-34 rounded-full" src={usericon} alt="" />
              </div>
              <div><InputFile/></div> 
            </div>
              <div className="w-full h-2/6 flex flex-col flex-wrap justify-between items-center">
                  <InputWithLabel labeltext={user.name} textname="Change name" onChange={(e) => updateRegisterInfo( {...registerInfo, name: e.target.value})}/>
                  <InputWithLabel labeltext={user.email} textname="Change email" onChange={(e) => updateRegisterInfo( {...registerInfo, email: e.target.value})}/>
                  <InputWithLabel labeltext="Can't show your password for safety" textname="Change Password" onChange={(e) => updateRegisterInfo( {...registerInfo, password: e.target.value})}/>
              </div>
  
                <Button className="w-6/12 mt-10" onClick={/* switchToLogin */registerUser}>{registerLoading ? "Loading" : "Confirm Changes"}</Button>
                
            </div>
    </>
  );
}
