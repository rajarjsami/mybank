import React from 'react';
import logo from '../logo/mybank.png';


export default function LoginModal({ onClose }) {
  return (
   <div className="fixed text-white inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
  <div className="text-white login p-6 rounded-md relative w-full max-w-md shadow-lg">
    {/* Close Button */}
    <button className="absolute top-3 right-4 text-2xl text-white" onClick={onClose}>
      ×
    </button>

    {/* Logo or Image */}
    <div className="h-24 w-24 border-2 rounded-full mx-auto mb-4">
      <img src={logo} alt="logo" className="h-full w-full object-cover rounded-full" />
    </div>

    {/* Form */}
    <form className="space-y-4">
      <div className="w-full">
        <label className="text-white font-semibold mb-1 block">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-2 rounded-md outline-none"
        />
      </div>

      <div className="w-full">
        <label className="text-white font-semibold mb-1 block">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full border px-4 py-2 rounded-md outline-none"
        />
      </div>

      <div className="w-full text-right">
        <span className="text-sm text-white underline cursor-pointer">Forgot Password?</span>
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded-md border border-white hover:bg-gray-900"
      >
        Sign In
      </button>

      <div className="w-full text-center">
        <span className="text-sm text-white underline cursor-pointer">Don't have an account?</span>
      </div>
    </form>
  </div>
</div>

  );
}
