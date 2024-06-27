import {
    TableHead,
    TableRow,
    TableHeader,
    TableCell,
    TableBody,
    Table,
  } from "./table";
  import usericon from "../../picture/user (2).png";
  import { Input } from "./input";
  import { useContext, useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { ChatContext } from "../../context/ChatContext.jsx";
  import { GroupContext } from "../../../src/context/GroupContext.jsx";
import { AuthContext } from "../../../src/context/AuthContext";
  // import { AuthContext } from "../../context/AuthContext.jsx";
  
  export function MembersTable() {
    const { members, currentMember, setCurrentMember, currentGroup} = useContext(GroupContext)
    const navigate = useNavigate();
    const [filteredMembers, setFilterdMembers] = useState([]);
    const [input, setInput] = useState("");
    // const {getUserInfo, userInfo} = useContext(AuthContext)
    console.log(currentGroup);
    useEffect(() => {
      if (input.trim() === "") {
        setFilterdMembers(members);
      } else {
        const filtered = members.filter((member) =>
          member.name.toLowerCase().startsWith(input.toLowerCase())
        );
        setFilterdMembers(filtered);
      }
    }, [input, members]);
  
    const switchToHome = () => navigate("/");
  
    return (
      <>
        <div className="m-auto w-full h-5/6 bg-gray-200 rounded-md flex flex-col">
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
                  key={member}
                  member={member}
                  switchToHome={switchToHome}
                />
              ))}
            </TableBody>
          </Table>
        </div>
      </>
    );
  }

  function Member({ member }) {
    const { currentMember, setCurrentMember} = useContext(GroupContext)
    const {getUserInfo, userInfo} = useContext(AuthContext)
    console.log("member",member);
    return (
      <TableRow onClick={() => setCurrentMember(member)}>
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
  