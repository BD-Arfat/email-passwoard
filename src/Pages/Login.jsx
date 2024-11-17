import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import auth from "../Firebase/firebase.init";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        toast.success("Login successfully done");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
        toast.error(errorMessage);
      });
  };

  return (
    <div className="my-20">
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login
          </h2>
          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-lg transition duration-200"
              >
                Login Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
