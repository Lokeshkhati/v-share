import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as api from "../api"

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState({
    fullName: "",
    username: "",
    followers: [],
    following: [],
  })

  const { fullName, followers, following } = currentUser
  const [allUsers, setAllUsers] = useState([])
  const [token, setToken] = useState('')
  const [userProfile, setUserProfile] = useState({})


  const getAllUsers = async () => {
    const { data } = await api.getAllUsers()
    setAllUsers(data.users)
  }

  const getMyProfile = async () => {
    const { data } = await api.getMyProfile()
    const { user } = data
    const { fullName, username, followers, following } = user
    setCurrentUser({ fullName, username, followers, following })
  }

  useEffect(() => {
    getMyProfile()
  }, [])

  useEffect(() => {
    getAllUsers()
  }, [])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('user'))
    setCurrentUser(saved)
  }, [])
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser))
  }, [fullName, followers, following])
  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        currentUser,
        setCurrentUser,
        allUsers,
        userProfile,
        setUserProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };