import React from "react";
import logo from "../logo/mybank.png";

export default function RegisterModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
      <div className="register bg-white p-6 rounded-md relative w-full max-w-md shadow-lg">
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-2xl text-white"
          onClick={onClose}
        >
          ×
        </button>

        {/* Profile Circle / Logo */}
        <div className="h-24 w-24 border-2  rounded-full mx-auto overflow-hidden mb-4">
          <img
            src={logo}
            alt="logo"
            className="h-full w-full object-cover rounded-full"
          />
        </div>

        {/* Form Start */}
        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-white font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full border px-4 py-2 rounded-md outline-none"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-white font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border px-4 py-2 rounded-md outline-none"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-white font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full border px-4 py-2 rounded-md outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            Create an Account
          </button>

          {/* Link to Login */}
          <div className="text-center mt-2">
            <span className="text-sm text-white underline cursor-pointer">
              Login to Your Account
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
