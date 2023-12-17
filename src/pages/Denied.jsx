import React from "react";
import { useNavigate } from "react-router-dom";

const Denied = () => {
  const navigate = useNavigate();
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-black text-white px-2 text-sm rounded rotate-12 absolute">
        Access denied
      </div>
      <button className="mt-5">
        <a className="relative inline-block font-medium text-[#FF6A3D] group active:text-yellow-500 focus:outline-none">
          <span
            onClick={() => {
              navigate(-1);
            }}
            className="relative block px-8 py-3 border border-current bg-[#1A2238] "
          >
            Go back
          </span>
        </a>
      </button>
    </main>
  );
};

export default Denied;
