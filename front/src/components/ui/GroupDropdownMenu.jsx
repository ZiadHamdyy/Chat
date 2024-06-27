import {
    Delete,
    DeleteIcon,
  } from "lucide-react"
  
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "../../components/ui/dropdown-menu"
  import menuicon from "../../picture/more.png";
  export function GroupDropdownMenuDemo() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <img className="w-10 bg-gray-200 hover:bg-gray-100 rounded-full cursor-pointer" src={menuicon} alt="" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <DeleteIcon className="mr-2 h-4 w-4" />
              <span>Close Group</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Delete className="mr-2 h-4 w-4"/>
              <span>Delete Group Messages</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  