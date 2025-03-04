import React from "react";
import { FaSearch, FaPhone, FaCommentDots, FaBriefcase, FaMapMarkerAlt, FaIndustry, FaUsers, FaDollarSign, FaGlobe, FaCogs, FaMoneyCheckAlt, FaUser, FaBuilding, FaHandSparkles } from "react-icons/fa";
import backgroundImage from "../assets/AILead_Scouts.jpeg";

export default function LeadSearch() {
  return (
    <div className="flex min-h-screen w-full h-full flex-col md:flex-row gap-5 md:gap-0 pl-[10px] md:pl-[25px]">
      {/* Sidebar */}
      <div className="w-full h-full md:w-[400px] bg-white border border-gray-200 rounded-2xl flex flex-col">
        <div className="p-4 border-b border-gray-200 w-full">
          <h2 className=" text-l md:text-xl font-bold mb-[40px]">Search Manually</h2>
          <div className="flex items-center justify-between">
            <FaMapMarkerAlt />
            <span className="text-md md:text-lg text-gray-500">Skip already owned</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
        <nav className=" p-2 space-y-4">
          {[{ icon: FaBriefcase, label: "Job titles" }, { icon: FaMapMarkerAlt, label: "Location" }, { icon: FaIndustry, label: "Industry & Keywords" }, { icon: FaUsers, label: "Employees" }, { icon: FaDollarSign, label: "Revenue" }, { icon: FaGlobe, label: "Lookalike domain" }, { icon: FaCogs, label: "Technologies" }, { icon: FaMoneyCheckAlt, label: "Funding type" }, { icon: FaUser, label: "Name" }, { icon: FaBuilding, label: "Company" }].map((item, index) => (
            <div key={index} className="w-full p-2 rounded text-md md:text-lg text-gray-400 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
              <item.icon />
              <span className='pl-[15px]'>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div
        className="flex justify-center items-center w-full bg-black relative bg-cover bg-center rounded-2xl md:mx-4 md:p-10 "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-opacity-60 rounded-2xl shadow-lg w-full max-w-[400px] md:w-[750px] text-center p-4 md:p-10">
          <h2 className="text-white text-xl md:text-3xl mb-[15px] md:mb-[75px] pb-[15px] md:pb-[30px] mt-[0px]">
            Discover high-value leads with ease
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mb-6 w-full max-w-[350px] md:w-[650px] mx-auto">
            {["Sales persons", "Marketing Directors from Sweden", "Chief Executive Officers from Switzerland", "IT managers", "Small business owners in Los Angeles"].map((item, index) => (
              <button key={index} className="px-4 py-3 text-sm bg-gray-500/30 text-white rounded-full shadow my-[10px] mx-[6px]">
                {item}
              </button>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center bg-white rounded-full shadow-md overflow-hidden justify-between w-full max-w-xl mx-auto border border-gray-200">
            <div className="text-gray-500 ml-4 md:block hidden">
              <FaSearch size={20} />
            </div>
            <input
              type="text"
              placeholder="E.g Engineers in New York in software ..."
              className="px-3 py-3 pl-4 md:pl-3 text-gray-700 focus:outline-none text-sm"
            />
            <div className="md:mr-2">
              <button className="bg-gradient-to-r from-amber-500 to-emerald-600 px-4 py-2 text-white font-semibold text-sm md:text-md rounded-full flex items-center w-full">
                <FaHandSparkles size={16} className="mr-1 md:block hidden" />
                <span>AI Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
