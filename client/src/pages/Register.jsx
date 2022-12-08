import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const { fullName, username, email, password } = formData;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };
  return (
    <div className="flex  justify-center items-center h-screen">
      <form className=" flex flex-col p-4  items-center w-96 border-2 border-gray-200 rounded ">
        <h1 className="text-2xl font-bold ">Sign UP</h1>
        <div className="w-full mt-2.5  ">
          <label className="   font-semibold px-1">Full Name</label>

          <input
            name="fullName"
            value={fullName}
            onChange={handleChange}
            required
            type="text"
            className="w-full mt-2  pl-4  py-1.5 rounded border-2 outline-none focus:border-indigo-500"
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
            className="w-full mt-2  pl-4  py-1.5 rounded border-2 outline-none focus:border-indigo-500"
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
            className="w-full mt-2  pl-4  py-1.5 rounded border-2 outline-none focus:border-indigo-500"
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
            className="w-full mt-2  pl-4  py-1.5 rounded border-2 outline-none focus:border-indigo-500"
            placeholder="**********"
          />
        </div>
        <div className="w-full  mt-2 ">
          <button
            type="submit"
            className=" w-full  text-lg mx-auto bg-indigo-500 text-white rounded  py-2 m-3 "
          >
            Create New Account
          </button>
        </div>
        <div className="text-md">
          <span className="  ">Already have an account? </span>
          <Link
            className=" text-indigo-500 hover:underline font-semibold"
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
