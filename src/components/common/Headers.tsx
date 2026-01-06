import logo from "@/assets/logotech.png";
import { NavLink } from "@/constant";
import { handleScroll } from "@/helper/navigate";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";

function Headers() {
  const [IsActive, setIsActive] = useState(false);

  return (
    <div className="h-30 w-screen flex justify-center items-end  ">
      {/* nav desktop */}
      <div
        className={`${
          IsActive && "h-40 rounded-xl top-5"
        } h-15 md:h-20 w-4/5 xl:w-3/5  backdrop-blur-3xl border-2 border-gray-300 rounded-full bg-[rgba(255,255,255,0.6)] flex flex-col items-center justify-center px-4 md:px-0 pb-2 fixed z-80 transition-all duration-200 `}
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex w-1/4 justify-center items-center">
            <img className="w-30" src={logo} alt="" />
          </div>
          <div className="w-1/2 hidden md:flex justify-center gap-4 font-semibold items-center">
            {NavLink.map((link, i) => (
              <button
                key={link.name}
                onClick={() => handleScroll(i + 1)}
                className="text-gray-800 hover:text-gray-500 mx-4"
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className=" flex justify-end items-center w-1/2 md:hidden">
            <button
              className="hover:text-gray-200"
              onClick={() => setIsActive(!IsActive)}
            >
              {IsActive ? <X className="w-10" /> : <Menu className="w-10" />}
            </button>
          </div>
          <div className="flex lg:w-1/4 justify-center items-center">
            <button className="flex justify-center items-center gap-2 rounded-full px-4 py-3 bg-green-800 hover:bg-green-700 transition-colors">
              <MessageCircle size={18} color="white" />
              <p className="font-semibold hidden lg:flex text-white">
                Contactez-Nous
              </p>
            </button>
          </div>
        </div>
        {IsActive && (
          <div
            className={`w-full flex flex-col justify-center gap-1 font-semibold text-sm items-center  `}
          >
            {NavLink.map((link, i) => (
              <button
                key={link.name}
                onClick={() => handleScroll(i + 1)}
                className="text-gray-800 hover:text-gray-500 mx-4 text-center border-b-2 border-gray-400 w-full"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Headers;
