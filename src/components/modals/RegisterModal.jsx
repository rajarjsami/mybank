import React from 'react';

export default function RegisterModal({ onClose }) {
  return (
   <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="register bg-white p-6 h-[500px] rounded-md relative w-full max-w-md shadow-lg">
        <button className="absolute top-3 right-4 text-xl text-white" onClick={onClose}>×</button>
        <div className='h-24 w-24 bg-red-500 rounded-full ml-36'>
            <img src="" />
        </div>
        <form className="space-y-4 ">
            <div className='w-[70%] ml-[50px]'>
            <label className='text-white underline float-left mb-3'>Name</label>
          <input type="name" placeholder="Enter Name" className="w-full border px-4 py-2 rounded-md outline-none" />
            </div>

            <div className='w-[70%] ml-[50px]'>
            <label className='text-white underline float-left mb-3'>Email</label>
          <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded-md outline-none" />
            </div>

           <div className='w-[70%] ml-[50px]'>
            <label className='text-white underline float-left mb-3'>Password</label>
          <input type="password" placeholder="Password" className="w-full border px-4 py-2 rounded-md outline-none" />
           </div>

        
         
          <button className="w-[40%] bg-black text-white py-2 ml-[110px] rounded-md">Create a account</button>

          
           <div className='w-full'>
            <span className='text-white cursor-pointer text-[14px] underline ml-[125px]'>Login Your Account</span>
           </div>

        </form>
      </div>
    </div>
  );
}
