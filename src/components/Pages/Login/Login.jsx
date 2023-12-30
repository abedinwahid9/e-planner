/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import Common from "./Common";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const authLoginUser = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);

  const { user, signInUser, forgetPassword, googleLogin } = authLoginUser;
  const navigate = useNavigate();

  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        if (!email) {
          return toast("Wow so easy!");
        }
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        // console.error(error);
        setErrorMessage("Incorrect password. Please try again.");
      });
  };

  const handleforgetPassword = () => {
    forgetPassword(user.email);
  };

  const handlegoogleLogin = () => {
    googleLogin(provider)
      .then((result) => {
        console.log("success");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Common>
      <div className="mx-auto py-32 bg-white p-8 rounded shadow-2xl w-3/5">
        <ToastContainer />
        <h2 className="text-5xl font-bold mb-6 text-center text-primaryFirstColor">
          Login
        </h2>
        <form className="space-y-6" onSubmit={handleLoginForm}>
          <div className="mb-4 ">
            <input
              placeholder="Enter your email"
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border-b-2 border-primaryFirstColor focus:outline-none bg-transparent"
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Enter your password"
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 border-b-2 border-primaryFirstColor focus:outline-none bg-transparent"
            />
          </div>
          {errorMessage && (
            <p className="text-[#ff3030] text-sm font-bold">{errorMessage}</p>
          )}
          <div className="flex justify-between mb-4">
            <div>
              <a
                onClick={handleforgetPassword}
                href="#"
                className="text-primarySecondColor hover:underline"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="bg-primaryFirstColor text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-600 transition duration-300 w-full"
          >
            Login
          </button>
        </form>
        <h2 className=" text-center mt-3 text-lg">
          create an new account!{"   "}
          <Link className="underline text-primarySecondColor" to="/register">
            Register
          </Link>
        </h2>

        <div className="mt-5 flex justify-center">
          <div onClick={handlegoogleLogin}>
            <FcGoogle className="text-6xl" />
          </div>
        </div>
      </div>
    </Common>
  );
};

export default Login;
