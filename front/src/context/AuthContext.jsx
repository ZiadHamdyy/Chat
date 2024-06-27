import {createContext, useCallback, useEffect, useState } from "react";
import { getRequest, postRequest, url } from "../utils/services";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const [registerError, setRegisterError] = useState(null)
    const [registerLoading, setRegisterLoading] = useState(false)
    const [registerInfo, setRegisterInfo] = useState({
        name: "",
        email: "",
        password: "",
        profileImage: ""
    })
    const [loginError, setLoginError] = useState(null)
    const [loginLoading, setLoginLoading] = useState(false)
    const [logInInfo, setLogInInfo] = useState({
        email: "",
        password: ""
    })

    // const [userInfo, setUserInfo] = useState(null)
    useEffect(() => {
        const user = localStorage.getItem("User")
        setUser(JSON.parse(user))
    },[])

    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info)
    }, [])

    const registerUser = useCallback(async () => {
        setRegisterLoading(true)
        setRegisterError(null)
        const response = await postRequest(`${url}/users/register`, JSON.stringify(registerInfo))
        setRegisterLoading(false)
        if (response.error){
            return setRegisterError(response)
        }
        localStorage.setItem("User", JSON.stringify(registerInfo))
        setUser(response)
        setRegisterError(null)
    }, [registerInfo])

    const loginUser = useCallback(async () =>{
        setLoginLoading(true)
        const response = await postRequest(`${url}/users/signin`, JSON.stringify(logInInfo))
        setLoginLoading(false)

        if (response.error){
            return setLoginError(response)
        }
        localStorage.setItem("User", JSON.stringify(response))
        setUser(response)
        setLoginError(null)
        
    }, [logInInfo])

    const updateLoginInfo = useCallback((info) => {
        setLogInInfo(info)
    }, [])

    const logoutUser = useCallback(() =>{
        localStorage.removeItem("User")
        setUser(null)
    }, [])

    /* const getUserInfo = useCallback(async (userId) => {
        const response = await getRequest(`${url}/users/find/${userId}`)

        setUserInfo(response)
    }, [user]) */
    return (
        <AuthContext.Provider value={{user, registerError, setRegisterError, registerLoading, registerInfo, updateRegisterInfo, registerUser, loginError, setLoginError, loginLoading, logInInfo, loginUser, updateLoginInfo, logoutUser/* , getUserInfo, userInfo */}}>
        {children}
        </AuthContext.Provider>
    )
}