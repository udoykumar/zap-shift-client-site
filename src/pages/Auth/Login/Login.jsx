import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import RootLayouts from "../../../Layouts/RootLayouts";
const Login = () => {
  const { singInUser, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
    singInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (user) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div>
      <div className="flex flex-col justify-center w-full max-w-[500px] rounded-xl px-6 py-8 border border-slate-700 bg-primary text-secondary text-lg">
        <h2 className="text-3xl font-semibold">Welcome to Zap Shift</h2>
        <p className=" mt-1">Please Login</p>
        <form onSubmit={handleSubmit(handleLogin)} className="mt-8">
          {/* email field  */}
          <label htmlFor="email" className="block mb-1 font-medium ">
            Email address
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
            className="w-full p-2 mb-3 bg-secondary text-primary border border-slate-700 rounded-md focus:outline-none focus:ring-1 transition focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.email?.type === "required" && (
            <p className="text-lg text-red-400">Email is required</p>
          )}

          {/* password field */}

          <label htmlFor="password" className="block mb-1 font-medium ">
            Password
          </label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            })}
            placeholder="Password"
            className="w-full p-2 mb-2 bg-secondary text-primary  border border-slate-700 rounded-md focus:outline-none focus:ring-1 transition focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.password?.type === "required" && (
            <p className="text-lg text-red-400">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-lg text-red-400">
              Password must be 6 character or longer
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-lg text-red-400">
              {" "}
              password must have at least one uppercase at least one lowercase,
              at least one number and at least oe special characters
            </p>
          )}
          <div className="text-right my-3 cursor-pointer">
            <p className="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </p>
          </div>
          <button
            type="submit"
            className="relative inline-flex items-center justify-center px-8 py-2.5 hover:text-white overflow-hidden  btn  rounded-full group border-gray-300 w-full"
          >
            <span className="absolute w-0 h-10 transition-all duration-500 ease-out bg-secondary  rounded-full group-hover:w-full group-hover:h-full"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30  "></span>
            <span className="relative  font-semibold">Sing In</span>
          </button>
        </form>
        <p className="mt-4">
          New to Zap Shift{" "}
          <Link
            to="/register"
            state={location.state}
            className="text-secondary underline font-bold cursor-pointer"
          >
            Register
          </Link>{" "}
        </p>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
