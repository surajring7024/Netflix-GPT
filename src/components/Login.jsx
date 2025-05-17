import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleSignup = () => {
    setIsSignUpForm(!isSignUpForm);
  };
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/IN-en-20250512-TRIFECTA-perspective_688b8c03-78cb-46a6-ac1c-1035536f871a_medium.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <Header />

      {/* Login Form with transparency */}
      <div className="absolute w-full h-full flex items-center justify-center z-10">
        <form className="bg-black/50 backdrop-blur-xs p-10 rounded-lg w-96 max-w-full text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-8">
            {isSignUpForm ? "Sign In" : "Sign Up"}
          </h2>
          {!isSignUpForm && (
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 mb-6 text-black bg-white bg-opacity-70 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-6 text-black bg-white bg-opacity-70 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-8 text-black bg-white bg-opacity-70 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <button className="w-full bg-red-600 hover:bg-red-700 transition duration-300 p-3 rounded font-semibold">
            {isSignUpForm ? "Sign In" : "Sign Up"}
          </button>

          {isSignUpForm && (
            <div className="flex justify-between items-center text-sm text-gray-300 mt-4">
              <label>
                <input type="checkbox" className="mr-1" /> Remember me
              </label>
              <a href="#" className="hover:underline">
                Need help?
              </a>
            </div>
          )}
          <div onClick={toggleSignup}>
            <p className="mt-16 text-sm text-gray-300 hover:underline">
              {isSignUpForm
                ? " New to Netflix? Sign up now"
                : "Already Registered? Sign In"}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
