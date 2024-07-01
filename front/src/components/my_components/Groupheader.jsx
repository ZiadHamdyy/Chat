import usericon from "../../picture/user (2).png";
import { useContext } from "react";
import { ChatDropdownMenuDemo } from "../ui/ChatDropdownMenu";
import { GroupContext } from "../../../src/context/GroupContext.jsx";
import { GroupDropdownMenuDemo } from "../ui/GroupDropdownMenu";
export function GroupHeader({onClickGroupHeader, onCloseGroup, onDeleteMessages}) {
    const { currentGroup, admin } = useContext(GroupContext)
    console.log("currentGroup", currentGroup);
    if (!currentGroup) {
      return (
        <div className="flex h-20 p-2 shadow-md justify-start items-center relative">
          <div className="bg-gray-200 rounded-full	h-12 w-12">
          </div>
        </div>
      )
  }
  return (
    <div className="flex h-20 p-2 shadow-md justify-start items-center relative">
      <div className="bg-gray-200 w-9/12 flex justify-start items-center h-full" onClick={onClickGroupHeader}>
          <div className="bg-gray-200 rounded-full	h-12 w-12">
            <img className={currentGroup?.profileImage ? "rounded-full h-12 w-14 object-cover":"w-12"} src={currentGroup?.profileImage|| usericon} alt="" />
          </div>
          <div className="ml-4 text-xl font-semibold">{currentGroup?.name}</div>
      </div>
          <div className="absolute top-5 right-5">
              <GroupDropdownMenuDemo onCloseGroup={onCloseGroup} onDeleteMessages={onDeleteMessages}/>
            </div>
        </div>
  );
}
