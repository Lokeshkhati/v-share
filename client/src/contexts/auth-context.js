import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as api from "../api"
import { usePosts } from "./posts-context";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
  });
  const { dispatch } = usePosts()

  const [token, setToken] = useState('')

  const getMyProfile = async () => {
    const { data } = await api.getMyProfile()
    const { user, token } = data
    const { fullName, username, posts } = user
    // setToken(token);
    setUser({ fullName, username })
    // dispatch({ type: "SET_USER_POSTS", payload: { posts } })
  }

  useEffect(() => {
    getMyProfile()
  }, [token])

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };