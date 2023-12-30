/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import Common from "./Common";

import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const authInfo = useContext(AuthContext);
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");

  const { createUser, loading } = authInfo;

  const isPasswordValid = (password) => {
    if (password.length < 6) return false;
    if (!/[A-Z]/.test(password)) return false;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;
    return true;
  };

  const handleRegisterForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!isPasswordValid(password)) {
      setPasswordError(
        "Password must be at least 6 characters long and contain at least one capital letter with no special characters."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
        })
          .then(() => {
            console.log("Display name updated successfully");
          })
          .catch((error) => {
            // Handle errors
            console.error("Error updating display name", error);
          });
        navigate("/");
        loading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Common>
        <div className="mx-auto py-32 bg-white p-8 rounded shadow-2xl w-3/5">
          <h2 className="text-5xl font-bold mb-6 text-center text-primaryFirstColor">
            Register
          </h2>
          <form className="space-y-6" onSubmit={handleRegisterForm}>
            <div className="mb-4 ">
              <input
                placeholder="Enter your name"
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border-b-2 border-primaryFirstColor focus:outline-none bg-transparent"
              />
            </div>
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
            {isPasswordValid && (
              <div className="text-[#ff2f2f]">{passwordError}</div>
            )}

            <button
              type="submit"
              className="bg-primaryFirstColor text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-600 transition duration-300 w-full"
            >
              Register
            </button>
          </form>
          <h2 className=" text-center mt-3 text-lg">
            Already have an account!{"   "}
            <Link className="underline text-primarySecondColor" to="/login">
              Login
            </Link>
          </h2>
        </div>
      </Common>
    </div>
  );
};

export default Register;
