import { useState } from "react";
import {Link} from "react-router-dom"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex  justify-center items-center h-screen">
      <form className=" flex flex-col p-4   w-96 border-2 rounded border-gray-200 ">
        <h1 className=" text-2xl font-bold text-center ">LogIn</h1>

        <div className="text-md mt-2 text-center">
          <span className="  ">Don't have an account? </span>
          <Link
            className=" text-indigo-500 hover:underline font-semibold"
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
            className="w-full mt-2  pl-4  py-1.5 rounded border-2 outline-none focus:border-indigo-500"
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
            className="w-full mt-2  pl-4 py-1.5 rounded border-2  outline-none  focus:border-indigo-500"
            placeholder="************"
          />
        </div>

        <div className="w-full  mt-2 ">
          <button className=" w-full  mx-auto bg-indigo-500 hover:bg-indigo-600 text-white rounded  py-2 m-3 font-semibold">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
