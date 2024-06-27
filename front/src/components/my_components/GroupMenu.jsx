import falseicon from "../../picture/cross (1).png";
import { MembersTable } from "../ui/MembersTable";

export function GroupMenu({onClose}){
    return (
        <div className="bg-gray-300 h-full right-0 p-3">
            <div className="w-9 hover:bg-gray-200 hover:cursor-pointer rounded-full" onClick={onClose}>
                <img src={falseicon} alt="" className="p-1"/>
            </div>
            <div className="mt-6">
                <MembersTable/>
                </div>
        </div>
    )
}