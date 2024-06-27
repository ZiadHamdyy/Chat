import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "./table";
import usericon from "../../picture/user (2).png";
import { Button } from "./button";
import { Input } from "./input";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChatContext } from "../../context/ChatContext.jsx";
import { GroupContext } from "../../../src/context/GroupContext.jsx";
// import { AuthContext } from "../../context/AuthContext.jsx";

export function GroupsTable() {
  const { allUsers/* , createChat  */} = useContext(ChatContext);
  const {createGroup } = useContext(GroupContext)
  const navigate = useNavigate();
  const [filteredMembers, setFilterdMembers] = useState([]);
  const [input, setInput] = useState("");
  const [inputGroup, setInputGroup] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  // const { user } = useContext(AuthContext);


  useEffect(() => {
    if (input.trim() === "") {
      setFilterdMembers(allUsers);
    } else {
      const filtered = allUsers.filter((member) =>
        member.name.toLowerCase().startsWith(input.toLowerCase())
      );
      setFilterdMembers(filtered);
    }
  }, [input, allUsers]);

  function handleGroupOnChange(member) {
    console.log(member);
    const found = selectedUsers.some((user) => user._id === member._id);
    if (found) {
      setSelectedUsers((prev) => prev.filter((userId) => userId._id !== member._id));
    } else {
      setSelectedUsers((prev) => [...prev, {_id:member._id, name:member.name}]);
    }
  }
  const switchToHome = () => navigate("/");

  console.log("selectedUsers",selectedUsers);
  const handleCreateChat = () => {
    createGroup(inputGroup, selectedUsers)
    switchToHome();
  };
  return (
    <>
      <div className="m-auto w-4/6 h-5/6 bg-gray-300 rounded-md p-6 flex flex-col">
        <div className="flex justify-start items-center">
          <Input
            placeholder="Enter group name"
            value={inputGroup}
            onChange={(e) => setInputGroup(e.target.value)}
            className="max-w-fit px-4 m-4"
          />
          <Button
            className="rounded-full text-primary-foreground"
            variant="secondary"
            onClick={handleCreateChat}
          >
            Create Group
          </Button>
        </div>
        <Input
          placeholder="Search for Users"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="max-w-fit px-4 m-4"
        />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Image</TableHead>
              <TableHead>Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMembers.map((member) => (
              <Member
                key={member._id}
                member={member}
                switchToHome={switchToHome}
                onClick={() => handleGroupOnChange(member)}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

function Member({ member, onClick }) {
  const [selected, setSelected] = useState(false)

  return (
    <TableRow
      onClick={() => {
        onClick()
        setSelected(!selected)
      }}
      className={selected ?"bg-slate-200 hover:bg-slate-100" : ''}
    >
      <TableCell>
        <img
          alt="Avatar"
          className="rounded-full object-cover"
          height="40"
          src={usericon}
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width="40"
        />
      </TableCell>
      <TableCell className="font-semibold">{member.name}</TableCell>
      <TableCell className="font-semibold"></TableCell>
    </TableRow>
  );
}
