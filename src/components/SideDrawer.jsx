import { Calendar, CircleX, Clock3, FileText, NotepadText } from "lucide-react";
import { RiEditCircleLine } from "react-icons/ri";
import { IoVideocam } from "react-icons/io5";

function SideDrawer({isOpen, setIsOpen}) {

  return (
    <div className="relative">
    {/* Sidebar Drawer */}
    <div
      className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800 shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-base font-semibold text-gray-500 dark:text-gray-400 flex items-center">
          Task Details
        </h5>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 cursor-pointer bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center"
        >
          <CircleX size={22} />
        </button>
      </div>

      {/* Form Fields */}
      <form className="space-y-4">
        <div>
          <div className="flex gap-1 items-center mb-3">
              <RiEditCircleLine size={22} className="text-gray-400" />
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">Task Title</label>
          </div>
          <input type="text" className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white" />
        </div>
        <div>
        <div className="flex gap-1 items-center mb-3">
          <FileText size={22} className="text-gray-400" />
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">Description</label>
        </div>
          <textarea className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white"></textarea>
        </div>
        <div className="flex items-center gap-2">
        <div>
        <div className="flex gap-1 items-center mb-3">
          <Calendar size={21} className="text-gray-400"  />
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">Date</label>
        </div>
          <input type="text" className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white" />
        </div>
        <div>
        <div className="flex gap-1 items-center mb-3">
          <Clock3 size={21} className="text-gray-400"  />
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">Time</label>
        </div>
          <input type="text" className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white" />
        </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">Person</label>
          <input type="text" className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white" />
        </div>
        <div>
        <div className="flex gap-1 items-center mb-3">
           <IoVideocam size={25} className="text-white bg-blue-500 rounded p-1" />
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">Meeting Link</label>
        </div>
          <input type="text" className="mt-1 block w-full p-2 border-none outline-none bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-white" />
        </div>
        <div>
        <div className="flex gap-1 items-center mb-3">
          <NotepadText size={21} className="text-gray-400"  />
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">Extra Notes</label>
        </div>
          <textarea className="mt-1 block w-full p-2 border outline-none rounded-lg border-gray-300 dark:bg-gray-700 dark:text-white"></textarea>
        </div>
        <div className="flex items-center justify-end gap-2">
            <button onClick={() => setIsOpen(false)} type="button" class="text-gray-900 cursor-pointer bg-white border border-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button>
            <button onClick={() => setIsOpen(false)} type="button" class="text-white cursor-pointer flex gap-2 items-center bg-[rgb(21,163,149)] focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"> <FileText size={18} /> Save Task</button>
        </div>
      </form>
    </div>
  </div>
  );
}

export default SideDrawer