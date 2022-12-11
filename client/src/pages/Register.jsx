import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as api from "../api";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const { fullName, username, email, password } = formData;

  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const register = async (event) => {
    event.preventDefault();
    try {
      await api.register(formData);
      navigate("/login", { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex  justify-center items-center h-screen">
      <form
        onSubmit={register}
        className=" flex flex-col p-4  items-center w-96 border-2 border-gray-200 rounded "
      >
        <h1 className="text-2xl font-bold ">Sign UP</h1>
        <div className="w-full mt-2.5  ">
          <label className="   font-semibold px-1">Full Name</label>

          <input
            name="fullName"
            value={fullName}
            onChange={handleChange}
            required
            type="text"
            className="w-full mt-2  pl-4  py-1.5 rounded border-2 outline-none focus:border-[#FF3B30]"
            placeholder="John Doe"
          />
        </div>{" "}
        <div className="w-full mt-2.5  ">
          <label className="   font-semibold px-1">Username</label>

          <input
            name="username"
            value={username}
            onChange={handleChange}
            required
            type="text"
            className="w-full mt-2  pl-4  py-1.5 rounded border-2 outline-none focus:border-[#FF3B30]"
            placeholder="johndoe"
          />
        </div>
        <div className="w-full mt-2.5  ">
          <label className="   font-semibold px-1">Email</label>

          <input
            name="email"
            value={email}
            onChange={handleChange}
            required
            type="email"
            className="w-full mt-2  pl-4  py-1.5 rounded border-2 outline-none focus:border-[#FF3B30]"
            placeholder="johndoe@example.com"
          />
        </div>
        <div className="w-full mt-2.5  ">
          <label className="   font-semibold px-1">Password</label>

          <input
            name="password"
            value={password}
            onChange={handleChange}
            required
            type="password"
            className="w-full mt-2  pl-4  py-1.5 rounded border-2 outline-none focus:border-[#FF3B30]"
            placeholder="**********"
          />
        </div>
        <div className="w-full  mt-2 ">
          <button
            type="submit"
            className=" w-full  text-lg mx-auto bg-[#FF3B30] text-white rounded-sm  py-2 m-3 "
          >
            Create New Account
          </button>
        </div>
        <div className="text-md">
          <span className="  ">Already have an account? </span>
          <Link
            className=" text-[#FF3B30] hover:underline font-semibold"
            to="/login"
          >
            LogIn
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Register;
