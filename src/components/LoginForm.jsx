import React, { useState } from "react";
function clickHandler(){
  console.log("you are log in")
}


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        {/* Logo Section */}
        <div className="text-gray-700 text-xl font-bold cursor-pointer px-40  ">
            Splitwise
        </div>
        {/* Navigation Links */}
        <div className="flex items-center flex-row px-40 gap-x-6 ">
          <a href="#" className="text-teal-500 text-sm ">
            Log in
          </a>
          <button className="bg-teal-500 text-white text-sm px-4 py-2 rounded-md shadow-md hover:bg-teal-600">
            Sign up
          </button>
        </div>
      </nav>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        {/* Outer container to center the form */}
        <div className="w-full max-w-md p-10 bg-white shadow-lg rounded-xl ml-3">
          {/* Heading section */}
          <div>
            <h1 className="text-2xl mb-6">Log in</h1>
          </div>
          {/* Login form */}
          <form>
            {/* Email input field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                className="w-full p-2 mt-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                required // Ensures the field is required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password input field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 mt-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                required // Ensures the field is required
                minLength={6} // Enforces a minimum password length
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* reCAPTCHA placeholder */}
            <div className="mb-4 mr-20 border border-gray-400 rounded-md">
              <div className="bg-gray-200 p-5 rounded-md  flex  ">
                <label className="flex space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    
                    className="form-checkbox h-6 w-6 text-blue-600 border-black-400 rounded"
                    required
                  />
                  <span className="text-black-600">I'm not a robot</span>
                </label>
              </div>
            </div>

            {/* Submit button, disabled when inputs are empty */}
            <button
              type="submit"
              disabled={!email || !password}
              className="w-full py-2 text-white bg-teal-500 rounded-md shadow-md hover:bg-teal-600 disabled:bg-gray-400"
            onClick={clickHandler}>
              Log in
            </button>
          </form>

          {/* Forgot password link */}
          <div className="mt-4 text-center mb-5">
            <a href="#" className="text-teal-600 hover:">
              Forgot your password?
            </a>
          </div>

          <div className="flex items-center justify-center my-4 mx-20">
            <div className="flex-1 border-t border-gray-300 "></div>
            <span className="px-4 text-gray-500 text-sm">or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          {/* Submit button, disabled when inputs are empty */}
          
          <button
            type="submit"
            className="w-full py-2 text-black border-black-800 border-b-4 rounded-md hover:bg-gray-200 border border-black-800   mb-4"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;