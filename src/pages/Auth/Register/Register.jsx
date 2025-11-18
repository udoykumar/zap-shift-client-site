import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router";
const Register = () => {
  const { registerUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSubmitRegister = (data) => {
    const profileImage = data.photo[0];

    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);

        // 1. store the image in form data
        const formData = new FormData();
        formData.append("image", profileImage);
        // 2. send the photo to store and get the url
        const image_API_URL = `https://api.imgbb.com/1/upload?&key=${
          import.meta.env.VITE_image_host
        }`;

        axios.post(image_API_URL, formData).then((res) => {
          console.log("image upload", res.data.data.url);
          //3. update user photo to firebase
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          // send firebase
          updateUserProfile(userProfile)
            .then(() => {
              console.log("user profile updated");
              navigate(location?.state || "/");
            })
            .then((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="flex flex-col justify-center w-full max-w-[500px] rounded-xl px-6 py-8 border border-slate-700 bg-primary text-secondary text-lg">
        <h2 className="text-3xl font-semibold">Welcome to Zap Shift</h2>
        <p className=" mt-1">Please Register</p>
        <form className="mt-8" onSubmit={handleSubmit(handleSubmitRegister)}>
          {/* Name field  */}
          <label className="block mb-1 font-medium ">Name</label>
          <input
            type="name"
            {...register("name", { required: true })}
            placeholder="Enter Your Name"
            className="w-full p-2 mb-3 bg-secondary  text-primary border border-slate-700 rounded-md focus:outline-none focus:ring-1 transition focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.name?.type === "required" && (
            <p className="text-lg text-red-400">Name is required </p>
          )}
          {/* photo/image field  */}
          <label className="block mb-1 font-medium ">Photo</label>
          <input
            type="file"
            {...register("photo", { required: true })}
            placeholder="Chose your photo"
            className="file-input w-full p-2 mb-3 bg-secondary text-primary border border-slate-700 rounded-md focus:outline-none focus:ring-1 transition focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.photo?.type === "required" && (
            <p className="text-lg text-red-400">Photo is required </p>
          )}
          {/* email  */}
          <label className="block mb-1 font-medium ">Email address</label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
            className="w-full p-2 mb-3 bg-secondary text-primary border border-slate-700 rounded-md focus:outline-none focus:ring-1 transition focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.email?.type === "required" && (
            <p className="text-lg text-red-400">Email is required </p>
          )}
          {/* password  */}
          <label className="block mb-1 font-medium ">Password</label>
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
          {errors.password?.type === "minLength" && (
            <p className="text-lg text-red-400">
              {" "}
              Password must be 6 character
            </p>
          )}
          {errors.password?.type === "required" && (
            <p className="text-lg text-red-400"> Password is required</p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-lg text-red-400">
              password must have at least one uppercase at least one lowercase,
              at least one number and at least oe special characters
            </p>
          )}

          <button
            type="submit"
            className="relative inline-flex items-center justify-center px-8 py-2.5 hover:text-white overflow-hidden  btn  rounded-full group border-gray-300 w-full mt-3"
          >
            <span className="absolute w-0 h-10 transition-all duration-500 ease-out bg-secondary  rounded-full group-hover:w-full group-hover:h-full"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30  "></span>
            <span className="relative  font-semibold">Sing In</span>
          </button>
        </form>

        <SocialLogin />
        <p>
          Already have a account{" "}
          <Link
            to="/login"
            state={location.state}
            className="text-secondary underline font-bold cursor-pointer"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
