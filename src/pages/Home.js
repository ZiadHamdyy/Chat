import { useState } from "react";
import { SkeletonDemo } from "../components/ui/Chatskeleton.jsx";
import { Input } from "../components/ui/input.jsx";
import appicon from "../picture/meetme.png";
import usericon from "../picture/user.png";
import { Button } from "../components/ui/button.jsx";

let arrmsg = [
  {
    sname: "Ziad",
    message:
      "HiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHiHi",
    time: "3:45 pm",
  },
  {
    sname: "Ahmed",
    message:
      "hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello",
    time: "5:32 pm",
  },
  { sname: "Ziad", message: "welcome", time: "6:24 pm" },
  { sname: "Ahmed", message: "F", time: "7:44 am" },
  { sname: "Ziad", message: "", time: "8:14 pm" },
];

let Amsg = [
  { sname: "Ziad", message: "Ziad", time: "6:24 pm" },
  { sname: "Ahmed", message: "Ahmed", time: "7:44 pm" },
  { sname: "Ziad", message: "", time: "8:14 pm" },
];
let Smsg = [
  { sname: "Ziad", message: "Ziad", time: "6:24 pm" },
  { sname: "Ahmed", message: "Sameh", time: "7:44 pm" },
  { sname: "Ziad", message: "", time: "8:14 pm" },
];
let Mmsg = [
  { sname: "Ziad", message: "Ziad", time: "6:24 pm" },
  { sname: "Ahmed", message: "Mohamed", time: "7:44 pm" },
  { sname: "Ziad", message: "", time: "8:14 pm" },
];

let arrchat = [
  { name: "Ahmed", messages: Amsg },
  { name: "Sameh", messages: Smsg },
  { name: "Mohamed", messages: Mmsg },
];

let arrgroups = [
  { name: "Group Ahmed" },
  { name: "Group Sameh" },
  { name: "Group Mohamed" },
];

/* function GetSingleChat(){
    return (
        <>
        </>
    )
} */

function GetChats() {
  return (
    <>
      {arrchat.map((chat, index) => (
        <div
          key={index}
          className=" w-6/6 h-20 flex items-center  shadow-md hover:bg-gray-400"
        >
          <div className="rounded-full	h-12 w-12  ml-2 bg-gray-300">
            <img className="w-12" src={usericon} alt="" />
          </div>
          <div className="m-4 text-xl font-semibold">{chat.name}</div>
        </div>
      ))}
    </>
  );
}

function GetGroups() {
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
}

function GetMessages() {
  return (
    <>
      {arrmsg.map((msg, index) =>
        msg.sname === "Ziad" ? (
          <div
            key={index}
            className="bg-gray-200  mx-6 my-2 text-gray-300 flex h-auto w-5/5"
          >
            <div className="bg-gray-200 rounded-full h-8 w-8 mt-2">
              <img className="w-8" src={usericon} alt="" />
            </div>
            <div className="bg-gray-900 rounded-xl mb-2 ml-2 shadow-sm max-w-lg h-auto">
              <div className="px-2 py-1 text-sky-400">{msg.sname}</div>
              <div className="px-2 overflow-hidden overflow-ellipsis whitespace-no-wrap break-words">
                {msg.message}
              </div>
              <div className="px-2 py-1 font-thin text-xs">{msg.time}</div>
            </div>
          </div>
        ) : (
          <div
            key={index}
            className="bg-gray-200 mx-6 my-2 text-gray-300 inline-flex justify-end h-auto w-5/5"
          >
            <div className="bg-gray-900 rounded-xl mb-2 mr-2 shadow-sm max-w-lg h-auto">
              <div className="px-2 py-1 text-sky-400">{msg.sname}</div>
              <div className="px-2 overflow-hidden overflow-ellipsis whitespace-no-wrap break-words">
                {msg.message}
              </div>
              <div className="px-2 py-1 font-thin text-xs flex justify-end">
                {msg.time}
              </div>
            </div>
            <div className="bg-gray-200 rounded-full h-8 w-8 mt-2">
              <img className="w-8" src={usericon} alt="" />
            </div>
          </div>
        )
      )}
    </>
  );
}
export default function Home() {
  const [GroupChat, setGroupChat] = useState("group");
  return (
    <>
      <div className="bg-gray-300 w-4/12">
        <div className="flex h-20 p-2 shadow-md">
          <div className="bg-inherit">
            <img className="w-14" src={appicon} alt="" />
          </div>
          <div className="w-5/6 h-16 flex justify-evenly items-end">
            <Button
              className="rounded-full bg-primary text-primary-foreground shadow hover:bg-primary/90"
              variant="secondary"
              onClick={() => setGroupChat("chat")}
            >
              Chats
            </Button>
            <Button
              className="rounded-full bg-primary text-primary-foreground shadow hover:bg-primary/90"
              variant="secondary"
              onClick={() => setGroupChat("group")}
            >
              Groups
            </Button>
          </div>
        </div>
        {GroupChat === "chat" && <GetChats />}
        {GroupChat === "group" && <GetGroups />}
        <div className="py-3 shadow-md">
          <SkeletonDemo />
        </div>
        <div className="py-3 shadow-md">
          <SkeletonDemo />
        </div>
        <div className="py-3 shadow-md">
          <SkeletonDemo />
        </div>
        <div className="py-3 shadow-md">
          <SkeletonDemo />
        </div>
      </div>
      <div className="bg-gray-200 w-11/12 h-lvh flex flex-col justify-between">
        <div className="flex h-20 p-2 shadow-md justify-start items-center">
          <div className="bg-gray-200 rounded-full	h-12 w-12">
            <img className="w-12" src={usericon} alt="" />
          </div>
          <div className="ml-4 text-xl font-semibold">Ziad</div>
        </div>
        <div className="bg-gray-200 w-full h-[520px] shadow-md flex flex-col overflow-auto">
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
          <GetMessages />
        </div>

        <div className="bg-gray-200 w-full h-20 flex justify-center items-center shadow-">
          <Input
            className="w-5/6 mr-6 h-11 text-lg text-sky-950"
            placeholder="Type a message"
          />
          <Button
            className="rounded-full bg-primary text-primary-foreground shadow hover:bg-primary/90"
            variant="secondary"
          >
            Send
          </Button>
        </div>
      </div>
    </>
  );
}
