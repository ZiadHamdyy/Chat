import { useContext, useState } from "react";
import React from "react";

import appicon from "../picture/meetme.png";
import { Button } from "../components/ui/button.jsx";
import { DropdownMenuDemo } from "../components/ui/Dropdown Menu.jsx";

import { Toaster } from "sonner";
import { GetChats } from "../components/my_components/Chats.jsx";
import { GetMessages } from "../components/my_components/Messages.jsx";
import { ChatHeader } from "../components/my_components/Chatheader.jsx";
import { TextArea } from "../components/my_components/TextArea.jsx";
import { EditMessage } from "../components/my_components/EditMessage.jsx";
import { DeleteMessage } from "../components/my_components/DeleteMessage.jsx";
import { DeleteAllMessages } from "../components/my_components/DeleteAllMessages.jsx";
import { ColseChat } from "../components/my_components/CloseChat.jsx";
import { ChatContext } from "../context/ChatContext";
import { GetGroups } from "../components/my_components/Groups.jsx";
import { GroupHeader } from "../components/my_components/Groupheader.jsx";
import { GroupContext } from "../context/GroupContext";
import { GroupTextArea } from "../components/my_components/GroupTextArea";
import { GetGroupMessages } from "../components/my_components/GroupMessages";
import { GroupMenu } from "../components/my_components/GroupMenu";
/* function GetGroups() {
  return (
    <>
      {arrgroups.map((groupe, index) => (
        <div
          key={index}
          className=" w-6/6 h-20 flex items-center  shadow-md hover:bg-gray-400"
        >
          <div className="rounded-full	h-12 w-12  ml-2 bg-gray-300">
            <img className="w-12" src={usericon} alt="" />
          </div>
          <div className="m-4 text-xl font-semibold">{groupe.name}</div>
        </div>
      ))}
    </>
  );
} */

export default function Home() {
  const [GroupChat, setGroupChat] = useState("chat");
  const [showEditMessage, setShowEditMessage] = useState(false);
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  const [showDeleteAllMessages, setShowDeleteAllMessages] = useState(false);
  const [showColseChat, setshowColseChat] = useState(false);
  const [showGroupMenu, setShowGroupMenu] = useState(false)
  const { setCurrentChat } = useContext(ChatContext);
  const { setCurrentGroup } = useContext(GroupContext)
  /* useEffect(() => {
    if (chatClosed) {
        setCurrentChat(null);
        setChatClosed(false);
    }
}, [chatClosed, setCurrentChat, setChatClosed]); */

  return (
    <>
      <Toaster />
      <div className="bg-gray-300 w-4/12">
        <div className="flex justify-between p-2 items-center h-20 shadow-md">
          <div className="">
            <img className="w-14" src={appicon} alt="" />
          </div>
          <div className="w-5/6 h-16 flex justify-evenly items-center relative">
            <Button
              className={GroupChat === "chat" ? "rounded-full text-primary-foreground bg-sky-600" : "rounded-full text-primary-foreground"}
              variant="secondary"
              onClick={() => {setGroupChat("chat");setCurrentGroup(null)}}
            >
              Chats
            </Button>
            <Button
              className={GroupChat === "group" ? "rounded-full text-primary-foreground bg-sky-600" : "rounded-full text-primary-foreground"}
              variant="secondary"
              onClick={() => {setGroupChat("group");setCurrentChat(null)}}
            >
              Groups
            </Button>
            <div className="w-10 h-full">
              <div className="absolute top-0 right-0">
                <DropdownMenuDemo />
              </div>
            </div>
          </div>
        </div>
        {GroupChat === "group" && <GetGroups />}
        {GroupChat === "chat" && <GetChats />}
      </div>
      <div className="bg-gray-200 w-full h-lvh flex flex-col justify-between">
      {GroupChat === "chat" && <ChatHeader onDeleteAllClick={() => setShowDeleteAllMessages(true)} onCloseChat={() => setshowColseChat(true)}/>}
      {GroupChat === "group" && <GroupHeader onClickGroupHeader={() => setShowGroupMenu(true)}/>}
        <div className="relative bg-gray-200 w-full h-[523px] drop-shadow-md flex flex-col overflow-auto">
          {/* <div className="bg-gray-200  h-12 m-8 text-gray-300 inline-flex items-center justify-end">
                <div className="bg-gray-900 rounded-xl mb-2 mr-2 shadow-sm max-w-lg">
                  <div className='p-2'>12:00</div>
                  <div className='p-2'>message is here</div>
                </div>
                <div className="bg-gray-200 rounded-full	h-8 w-8 mt-6">
                  <img className="w-8" src={usericon} alt="" />
                </div>
              </div>
              <div className="bg-gray-200  h-12 m-8 text-gray-300 inline-flex items-center">
                <div className="bg-gray-200 rounded-full	h-8 w-8 mt-6">
                  <img className="w-8" src={usericon} alt="" />
                </div>
                <div className="bg-gray-900 rounded-xl mb-2 ml-2 shadow-sm max-w-lg">
                  <div className='p-2'>12:00</div>
                  <div className='p-2'>message is here</div>
                </div>
              </div> */}
          {GroupChat === "chat" && <GetMessages onEditClick={() => setShowEditMessage(true)} onDeleteClick={() => setShowDeleteMessage(true)}/>}
          {GroupChat === "group" && <GetGroupMessages onEditClick={() => setShowEditMessage(true)} onDeleteClick={() => setShowDeleteMessage(true)}/>}
        </div>
        {GroupChat === "chat" && <TextArea />}
        {GroupChat === "group" && <GroupTextArea />}
      </div>
      {showEditMessage && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center animation-fadeIn">
          <div className="animation-slideIn">
            <EditMessage onClose={() => setShowEditMessage(false)} />
          </div>
        </div>
      )}
      {showDeleteMessage && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center animation-fadeIn">
          <div className="animation-slideIn">
            <DeleteMessage onClose={() => setShowDeleteMessage(false)} />
          </div>
        </div>
      )}
      {showDeleteAllMessages && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center animation-fadeIn">
          <div className="animation-slideIn">
            <DeleteAllMessages onClose={() => setShowDeleteAllMessages(false)} />
          </div>
        </div>
      )}
      {showColseChat && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center animation-fadeIn">
          <div className="animation-slideIn">
            <ColseChat onClose={() => {setshowColseChat(false);setCurrentChat(null);setCurrentChat(null)}} />
          </div>
        </div>
      )}
      {showGroupMenu &&(
        <div className="w-6/12 h-full inset-0 bg-black bg-opacity-50 animation-fadeIn">
          <div className="animation-slideIn h-full">
          <GroupMenu onClose={() => setShowGroupMenu(false)}/>
          </div>
        </div>
      )}
    </>
  );
}
