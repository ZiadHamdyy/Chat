import {createContext,  useCallback,  useEffect, useState } from "react";
import { deleteRequest, getRequest, postRequest, putRequest, url } from "../utils/services";

export const GroupContext = createContext()

export const GroupContextProvider = ({children, user}) => {
    const [userGroups, setUserGroups] = useState([])
    const [ userGroupsError, setUserGroupsError] = useState(null)
    const [ userGroupsLoading, setUserGroupsLoading] = useState(false)

    const [ currentGroup, setCurrentGroup ] = useState(null)

    const [groupmessages, setGroupMessages] = useState(null)
    const [groupmessagesLoading, setGroupMessagesLoading] = useState(false)
    const [groupmessagesError, setGroupMessagesError] = useState(null)
    // eslint-disable-next-line
    const [createNewMessage, setCreateNewGroupMessage] = useState(null)
    // eslint-disable-next-line
    const [newMessageError, setNewGroupMessageError] = useState(null)
    const [members, setMembers] = useState([])
    const [currentMember, setCurrentMember] = useState([])
    const [membersError, setMembersError] = useState([])
    const [membersLoading, setMembersLoading] = useState([])
    const [editGroupMessageError, setEditGroupMessageError] = useState(null);
    const [deleteGroupMessageError, setDeleteGroupMessageError] = useState(null);
    useEffect(() => {
        const getUserGroups = async () =>{
            if(user?._id){
                setUserGroupsLoading(true)
                setUserGroupsError(null)
                const response = await getRequest(`${url}/groups/getusergroups/${user?._id}`)
                setUserGroupsLoading(false)
                if(response.error){
                    return setUserGroupsError(response)
                }
                setUserGroups(response)
            }
        }
        getUserGroups()
    },[user])

    const createGroup = useCallback(async (name, members) => {
        const response = await postRequest(`${url}/groups/creategroup/${user?._id}`, JSON.stringify({name, members}))
        if(response.error){
            return console.log(response)
        }
        setUserGroups((prev) => [...prev, response])
    },[user?._id])

    useEffect(() => {
        const getGroupMessages = async () =>{
            setGroupMessagesLoading(true)
            setGroupMessagesError(null)
                const response = await getRequest(`${url}/messages/${currentGroup?._id}`)
                setGroupMessagesLoading(false)
                if(response.error){
                    return setGroupMessagesError(response)
                }
                setGroupMessages(response)
        }
        getGroupMessages()
    },[currentGroup])

    const newgroupMessage = useCallback(async (text, senderId, senderName, chatId, setTextMessage) => {
        if(!text){
            return console.log("Message cannot be empty");
        }
        const response = await postRequest(`${url}/messages/createmessage`, JSON.stringify({text, senderId, senderName, chatId}))
        if(response.error){
            return setNewGroupMessageError(response)
        }
        setCreateNewGroupMessage(response)
        setGroupMessages((prev) => [...prev, response])
        setTextMessage("")

    },[])
    useEffect(() => {
        const getGroupMembers = async () =>{
            if(currentGroup?._id){
                console.log(currentGroup?._id);
                setMembersLoading(true)
                setMembersError(null)
                const response = await getRequest(`${url}/groups/getgroupmembers/${currentGroup?._id}`)
                setMembersLoading(false)
                if(response.error){
                    return setMembersError(response)
                }
                setMembers(response)
            }
        }
            getGroupMembers()
    },[currentGroup])

    const deleteGroupMessage = useCallback(async (messageId) => {
        if (messageId) {
            const response = await deleteRequest(`${url}/messages/deletemessage/${messageId}`);
            if (response.error) {
                setDeleteGroupMessageError(response);
                console.log("Error deleting message");
            } else {
                setGroupMessages((prev) => prev.filter(message => message._id !== messageId)); // Remove the deleted message from state
            }
        }
    }, []);
    const editGroupMessage = useCallback(async (messageId, newText) => {
        if (messageId && newText) {
            const response = await putRequest(`${url}/messages/editmessage/${messageId}`, JSON.stringify({ text: newText }))
            if (response.error) {
                setEditGroupMessageError(response)
                console.log("Error editing message")
            } else {
                setGroupMessages((prev) => prev.map(message => message._id === messageId ? { ...message, text: newText } : message))
            }
        }
    }, [])

    return (
    <GroupContext.Provider value={{deleteGroupMessage, editGroupMessage, currentMember, setCurrentMember, members, newgroupMessage, groupmessages, setGroupMessages, groupmessagesLoading, groupmessagesError, createGroup, userGroups, userGroupsError, userGroupsLoading, currentGroup, setCurrentGroup}}>
        {children}
    </GroupContext.Provider>
    )
}