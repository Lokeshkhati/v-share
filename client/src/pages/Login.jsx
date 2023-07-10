import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as api from "../api";
import { useAuth } from "../contexts/auth-context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken, setCurrentUser } = useAuth();
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    try {
      const formData = { email, password };
      const { data } = await api.login(formData);
      const { user, token } = data;
      if (token) {
        navigate("/", { replace: true });
      }
      const { fullName, username } = user;
      setToken(token);
      setCurrentUser({ fullName, username });
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div className="flex  justify-center items-center h-screen">
      <form
        onSubmit={login}
        className=" flex flex-col p-4   w-96 border-2 rounded border-gray-200 "
      >
        <h1 className=" text-2xl font-bold text-center ">LogIn</h1>

        <div className="text-md mt-2 text-center">
          <span className="  ">Don't have an account? </span>
          <Link
            className=" text-[#FF3B30] hover:underline font-semibold"
            to="/register"
          >
            Register
          </Link>
        </div>
        <div className="w-full mt-2.5  ">
          <label className="   font-semibold px-1">Email</label>

          <input
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            type="email"
            className="w-full mt-2  pl-4  py-1.5 rounded border-2 outline-none focus:border-[#FF3B30]"
            placeholder="johndoe@example.com"
          />
        </div>

        <div className="w-full  mt-2.5 ">
          <label className="  font-semibold  ">Password</label>

          <input
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            required
            className="w-full mt-2  pl-4 py-1.5 rounded border-2  outline-none  focus:border-[#FF3B30]"
            placeholder="************"
          />
        </div>

        <div className="w-full  mt-2 ">
          <button
            type="submit"
            className=" w-full  mx-auto bg-[#FF3B30]  text-white rounded-sm  py-2 m-3 font-semibold"
          >
            LOGIN
          </button>
        </div>
      </form>
      {/* <iframe src="https://stackblitz.com/edit/stackblitz-starters-k4rjt4?embed=1&file=src%2FApp.tsx"
        style={{ width: "100%", height: "100%", border: '0', borderRadius: "4px", overflow: "hidden" }}
        title="testing"

      ></iframe> */}
    </div>
  );
};
export default Login;
